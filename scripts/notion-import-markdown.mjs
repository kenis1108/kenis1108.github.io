#!/usr/bin/env node

import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const DEFAULT_NOTION_VERSION = "2026-03-11";
const DEFAULT_DATABASE_TITLE = "Markdown Articles";
const API_BASE = "https://api.notion.com/v1";

const cliOptions = parseCliArgs(process.argv.slice(2));
const dryRun = Boolean(cliOptions["dry-run"]);
const forceNewDatabase = Boolean(cliOptions["force-new-database"]);
const skipContent = Boolean(cliOptions["skip-content"]);

await loadDotEnv(path.resolve(process.cwd(), ".env"));

const config = {
  token: process.env.NOTION_TOKEN || process.env.NOTION_API_KEY,
  parentPageId: cleanNotionId(
    cliOptions["parent-page-id"] || process.env.NOTION_PARENT_PAGE_ID,
  ),
  sourceDir: path.resolve(
    process.cwd(),
    cliOptions["source-dir"] || process.env.NOTION_MD_SOURCE_DIR || "",
  ),
  databaseTitle:
    cliOptions["database-title"] ||
    process.env.NOTION_DATABASE_TITLE ||
    DEFAULT_DATABASE_TITLE,
  notionVersion: process.env.NOTION_VERSION || DEFAULT_NOTION_VERSION,
  stateFile: path.resolve(
    process.cwd(),
    cliOptions["state-file"] ||
      process.env.NOTION_IMPORT_STATE_FILE ||
      defaultStateFileForSource(
        cliOptions["source-dir"] || process.env.NOTION_MD_SOURCE_DIR,
      ),
  ),
};

if (!cliOptions["source-dir"] && !process.env.NOTION_MD_SOURCE_DIR) {
  fail("Missing Markdown source directory. Pass --source-dir <dir> or set NOTION_MD_SOURCE_DIR.");
}

if (!dryRun) {
  if (!config.token) {
    fail("Missing NOTION_TOKEN. Put it in .env or export it before running.");
  }
}

const markdownFiles = await listMarkdownFiles(config.sourceDir);
if (markdownFiles.length === 0) {
  fail(`No Markdown files found in ${config.sourceDir}`);
}

const articles = await Promise.all(
  markdownFiles.map(async (filePath) => {
    const raw = await readFile(filePath, "utf8");
    const parsed = parseMarkdownDocument(raw);
    const fileStats = await stat(filePath);
    const basename = path.basename(filePath, ".md");
    const title = normalizePropertyText(parsed.frontMatter.title) || basename;

    return {
      filePath,
      basename,
      title,
      frontMatter: parsed.frontMatter,
      content: parsed.content.trimStart(),
      sizeBytes: fileStats.size,
    };
  }),
);

if (dryRun) {
  printDryRun(articles, config);
  process.exit(0);
}

let state = forceNewDatabase ? createEmptyState() : await readState(config.stateFile);

if (!state.databaseId || !state.dataSourceId) {
  const database = await createDatabase(config);
  state.databaseId = database.id;
  state.dataSourceId = firstDataSourceId(database);
  state.createdAt = state.createdAt || new Date().toISOString();
  state.databaseTitle = config.databaseTitle;
  state.items = state.items || {};

  if (!state.dataSourceId) {
    fail("The database was created, but Notion did not return a data source id.");
  }

  await writeState(config.stateFile, state);
  console.log(`Created database: ${state.databaseId}`);
  console.log(`Using data source: ${state.dataSourceId}`);
} else {
  console.log(`Resuming database: ${state.databaseId}`);
  console.log(`Using data source: ${state.dataSourceId}`);
}

for (const [index, article] of articles.entries()) {
  const stateKey = path.relative(process.cwd(), article.filePath);
  const existing = state.items[stateKey];

  if (existing?.status === "done") {
    console.log(`[${index + 1}/${articles.length}] Skip ${article.basename}`);
    continue;
  }

  console.log(`[${index + 1}/${articles.length}] Import ${article.basename}`);

  let pageId = existing?.pageId;
  if (!pageId) {
    const page = await createPageInDataSource(config, state.dataSourceId, article);
    pageId = page.id;
    state.items[stateKey] = {
      title: article.title,
      pageId,
      status: skipContent ? "done" : "page-created",
      importedAt: new Date().toISOString(),
    };
    await writeState(config.stateFile, state);
  }

  if (!skipContent) {
    await updatePageMarkdown(config, pageId, article.content);
    state.items[stateKey].status = "done";
    state.items[stateKey].contentImportedAt = new Date().toISOString();
    await writeState(config.stateFile, state);
  }

  await sleep(450);
}

console.log("");
console.log("Import complete.");
console.log(`Database id: ${state.databaseId}`);
console.log(`State file: ${path.relative(process.cwd(), config.stateFile)}`);

async function loadDotEnv(filePath) {
  let body;
  try {
    body = await readFile(filePath, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") return;
    throw error;
  }

  for (const line of body.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    const rawValue = trimmed.slice(separatorIndex + 1).trim();
    if (!key || process.env[key] !== undefined) continue;

    process.env[key] = unquoteEnvValue(rawValue);
  }
}

function parseCliArgs(argv) {
  const options = {};

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (!arg.startsWith("--")) continue;

    const withoutPrefix = arg.slice(2);
    const equalsIndex = withoutPrefix.indexOf("=");

    if (equalsIndex !== -1) {
      const key = withoutPrefix.slice(0, equalsIndex);
      options[key] = withoutPrefix.slice(equalsIndex + 1);
      continue;
    }

    const next = argv[index + 1];
    if (next && !next.startsWith("--")) {
      options[withoutPrefix] = next;
      index += 1;
    } else {
      options[withoutPrefix] = true;
    }
  }

  return options;
}

function unquoteEnvValue(value) {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }

  return value;
}

function defaultStateFileForSource(sourceDir) {
  return `.notion-import-${slugifyPath(sourceDir)}-state.json`;
}

function slugifyPath(value) {
  return String(value)
    .replace(/\\/g, "/")
    .split("/")
    .filter(Boolean)
    .join("-")
    .replace(/[^A-Za-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "") || "markdown";
}

async function listMarkdownFiles(sourceDir) {
  const files = [];

  async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(entryPath);
      } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
        files.push(entryPath);
      }
    }
  }

  await walk(sourceDir);
  return files.sort((left, right) => left.localeCompare(right, "zh-Hans-CN"));
}

function parseMarkdownDocument(raw) {
  const normalized = raw.replace(/^\uFEFF/, "").replace(/\r\n/g, "\n");
  const match = normalized.match(/^---\n([\s\S]*?)\n---\n?/);

  if (!match) {
    return { frontMatter: {}, content: normalized };
  }

  return {
    frontMatter: parseFrontMatter(match[1]),
    content: normalized.slice(match[0].length),
  };
}

function parseFrontMatter(source) {
  const result = {};
  const lines = source.split("\n");
  let activeKey = null;

  for (const rawLine of lines) {
    if (!rawLine.trim()) {
      activeKey = null;
      continue;
    }

    const listItem = rawLine.match(/^\s*-\s*(.+)$/);
    if (listItem && activeKey) {
      const value = parseScalar(listItem[1]);
      const current = result[activeKey];
      result[activeKey] = Array.isArray(current) ? [...current, value] : [value];
      continue;
    }

    const pair = rawLine.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!pair) continue;

    activeKey = pair[1];
    const rawValue = pair[2];
    result[activeKey] = rawValue === "" ? [] : parseScalar(rawValue);
  }

  return result;
}

function parseScalar(value) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

async function createDatabase(config) {
  return notionRequest(config, "POST", "/databases", {
    parent: databaseParent(config),
    title: richText(config.databaseTitle),
    is_inline: Boolean(config.parentPageId),
    initial_data_source: {
      properties: {
        Name: { title: {} },
        Source: { rich_text: {} },
        Category: { multi_select: {} },
        Tags: { multi_select: {} },
        Slug: { rich_text: {} },
        OriginalDate: { date: {} },
        ImportedAt: { date: {} },
        Bytes: { number: {} },
      },
    },
  });
}

function databaseParent(config) {
  if (config.parentPageId) {
    return {
      type: "page_id",
      page_id: config.parentPageId,
    };
  }

  return {
    type: "workspace",
    workspace: true,
  };
}

async function createPageInDataSource(config, dataSourceId, article) {
  return notionRequest(config, "POST", "/pages", {
    parent: {
      type: "data_source_id",
      data_source_id: dataSourceId,
    },
    properties: buildPageProperties(article),
  });
}

async function updatePageMarkdown(config, pageId, markdown) {
  const content = markdown.trim()
    ? markdown
    : "_Imported from an empty Markdown file._";

  return notionRequest(config, "PATCH", `/pages/${pageId}/markdown`, {
    type: "replace_content",
    replace_content: {
      new_str: content,
    },
  });
}

function buildPageProperties(article) {
  const frontMatter = article.frontMatter;
  const dateValue = normalizeDate(frontMatter.date);

  const properties = {
    Name: {
      type: "title",
      title: richTextItems(article.title),
    },
    Source: {
      type: "rich_text",
      rich_text: richTextItems(path.relative(process.cwd(), article.filePath)),
    },
    ImportedAt: {
      type: "date",
      date: { start: new Date().toISOString() },
    },
    Bytes: {
      type: "number",
      number: article.sizeBytes,
    },
  };

  const categories = normalizeList(frontMatter.category);
  if (categories.length > 0) {
    properties.Category = {
      type: "multi_select",
      multi_select: toMultiSelect(categories),
    };
  }

  const tags = normalizeList(frontMatter.tags);
  if (tags.length > 0) {
    properties.Tags = {
      type: "multi_select",
      multi_select: toMultiSelect(tags),
    };
  }

  if (frontMatter.abbrlink) {
    properties.Slug = {
      type: "rich_text",
      rich_text: richTextItems(String(frontMatter.abbrlink)),
    };
  }

  if (dateValue) {
    properties.OriginalDate = {
      type: "date",
      date: { start: dateValue },
    };
  }

  return properties;
}

async function notionRequest(config, method, pathname, body) {
  const response = await fetch(`${API_BASE}${pathname}`, {
    method,
    headers: {
      Authorization: `Bearer ${config.token}`,
      "Content-Type": "application/json",
      "Notion-Version": config.notionVersion,
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  const text = await response.text();
  const payload = text ? safeJsonParse(text) : {};

  if (response.status === 429) {
    const retryAfterSeconds = Number(response.headers.get("retry-after") || 2);
    await sleep((retryAfterSeconds + 1) * 1000);
    return notionRequest(config, method, pathname, body);
  }

  if (!response.ok) {
    const message = payload?.message || text || response.statusText;
    if (
      response.status === 400 &&
      method === "POST" &&
      pathname === "/databases" &&
      !config.parentPageId &&
      message.includes("parent.page_id")
    ) {
      fail(
        "POST /databases failed (400): Your Notion token cannot create a workspace-level database. " +
          "Create a Notion page, share it with the integration, and set NOTION_PARENT_PAGE_ID " +
          "to that page URL or page id in .env.",
      );
    }
    fail(`${method} ${pathname} failed (${response.status}): ${message}`);
  }

  return payload;
}

async function readState(filePath) {
  try {
    const contents = await readFile(filePath, "utf8");
    return { ...createEmptyState(), ...JSON.parse(contents) };
  } catch (error) {
    if (error.code === "ENOENT") return createEmptyState();
    throw error;
  }
}

async function writeState(filePath, state) {
  await writeFile(filePath, `${JSON.stringify(state, null, 2)}\n`);
}

function createEmptyState() {
  return {
    databaseId: null,
    dataSourceId: null,
    createdAt: null,
    databaseTitle: null,
    items: {},
  };
}

function firstDataSourceId(database) {
  return database?.data_sources?.[0]?.id || database?.data_source?.id || null;
}

function richText(content) {
  return richTextItems(content);
}

function richTextItems(content) {
  const text = String(content ?? "").slice(0, 2000);
  if (!text) return [];

  return [
    {
      type: "text",
      text: { content: text },
    },
  ];
}

function normalizePropertyText(value) {
  if (Array.isArray(value)) return value.filter(Boolean).join(" / ");
  if (value === undefined || value === null) return "";
  return String(value).trim();
}

function normalizeList(value) {
  if (value === undefined || value === null || value === "") return [];
  const values = Array.isArray(value) ? value : [value];

  return values
    .flatMap((item) => {
      const normalized = String(item).trim();
      if (!normalized) return [];

      if (normalized.startsWith("[") && normalized.endsWith("]")) {
        return normalized
          .slice(1, -1)
          .split(",")
          .map((part) => part.trim());
      }

      return normalized.split(",");
    })
    .map((item) => item.replace(/^\[|\]$/g, "").trim())
    .filter(Boolean)
    .slice(0, 100);
}

function toMultiSelect(values) {
  return values.map((name) => ({ name: name.slice(0, 100) }));
}

function normalizeDate(value) {
  const text = normalizePropertyText(value);
  if (!text) return null;

  const match = text.match(/^(\d{4}-\d{2}-\d{2})(?:[ T](\d{2}:\d{2}:\d{2}))?/);
  if (!match) return null;

  if (!match[2]) return match[1];

  const parsed = new Date(`${match[1]}T${match[2]}+08:00`);
  return Number.isNaN(parsed.getTime()) ? match[1] : parsed.toISOString();
}

function cleanNotionId(value) {
  if (!value) return "";

  const matches = String(value).match(/[0-9a-fA-F]{32}|[0-9a-fA-F-]{36}/g);
  if (!matches) return String(value).trim();

  return matches[matches.length - 1].replace(/-/g, "");
}

function safeJsonParse(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function printDryRun(articles, config) {
  const totalBytes = articles.reduce((sum, article) => sum + article.sizeBytes, 0);

  console.log("Notion import dry run");
  console.log(`Source dir: ${path.relative(process.cwd(), config.sourceDir)}`);
  console.log(`Database title: ${config.databaseTitle}`);
  console.log(`Markdown files: ${articles.length}`);
  console.log(`Total bytes: ${totalBytes}`);
  console.log("");

  for (const article of articles) {
    const categories = normalizeList(article.frontMatter.category).join(", ") || "-";
    const tags = normalizeList(article.frontMatter.tags).join(", ") || "-";
    console.log(`- ${article.title} (${article.basename}.md, ${article.sizeBytes} bytes)`);
    console.log(`  category: ${categories}`);
    console.log(`  tags: ${tags}`);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

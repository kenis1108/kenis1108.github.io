#!/usr/bin/env node

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const DEFAULT_NOTION_VERSION = "2026-03-11";
const API_BASE = "https://api.notion.com/v1";

const cliOptions = parseCliArgs(process.argv.slice(2));
await loadDotEnv(path.resolve(process.cwd(), ".env"));

const pageInput = cliOptions._[0] || cliOptions.url || cliOptions["page-id"];
const pageId = cleanNotionId(pageInput);

if (!pageInput || !pageId) {
  fail("Usage: npm run notion:export-page -- <notion-page-url-or-id> [--out output.md]");
}

const config = {
  token: process.env.NOTION_TOKEN || process.env.NOTION_API_KEY,
  notionVersion: process.env.NOTION_VERSION || DEFAULT_NOTION_VERSION,
};

if (!config.token) {
  fail("Missing NOTION_TOKEN. Put it in .env or export it before running.");
}

const page = await notionRequest(config, "GET", `/pages/${formatNotionUuid(pageId)}`);
const title = getPageTitle(page) || "Untitled";
const blocks = await fetchBlockChildren(config, pageId);
const body = renderBlocks(blocks);
const markdown = [`# ${title}`, body].filter(Boolean).join("\n\n").trimEnd() + "\n";

if (cliOptions.out) {
  const outputPath = path.resolve(process.cwd(), cliOptions.out);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, markdown);
  console.log(`Exported ${title}`);
  console.log(`Output: ${path.relative(process.cwd(), outputPath)}`);
} else {
  process.stdout.write(markdown);
}

async function fetchBlockChildren(config, blockId) {
  const results = [];
  let cursor = null;

  do {
    const query = new URLSearchParams({ page_size: "100" });
    if (cursor) query.set("start_cursor", cursor);

    const payload = await notionRequest(
      config,
      "GET",
      `/blocks/${formatNotionUuid(blockId)}/children?${query}`,
    );

    for (const block of payload.results || []) {
      if (block.has_children) {
        block.children = await fetchBlockChildren(config, block.id);
        await sleep(120);
      }
      results.push(block);
    }

    cursor = payload.has_more ? payload.next_cursor : null;
  } while (cursor);

  return results;
}

function renderBlocks(blocks, depth = 0) {
  return blocks
    .map((block) => renderBlock(block, depth))
    .filter(Boolean)
    .join("\n\n");
}

function renderBlock(block, depth) {
  const type = block.type;
  const value = block[type] || {};
  const children = block.children?.length ? renderBlocks(block.children, depth + 1) : "";

  switch (type) {
    case "paragraph":
      return joinWithChildren(renderRichText(value.rich_text), children);

    case "heading_1":
      return joinWithChildren(`# ${renderRichText(value.rich_text)}`, children);

    case "heading_2":
      return joinWithChildren(`## ${renderRichText(value.rich_text)}`, children);

    case "heading_3":
      return joinWithChildren(`### ${renderRichText(value.rich_text)}`, children);

    case "bulleted_list_item":
      return renderListItem("-", value, block.children, depth);

    case "numbered_list_item":
      return renderListItem("1.", value, block.children, depth);

    case "to_do": {
      const marker = value.checked ? "[x]" : "[ ]";
      return renderListItem(`- ${marker}`, value, block.children, depth);
    }

    case "quote":
      return prefixLines(joinWithChildren(renderRichText(value.rich_text), children), "> ");

    case "callout": {
      const icon = renderIcon(value.icon);
      const text = [icon, renderRichText(value.rich_text)].filter(Boolean).join(" ");
      return prefixLines(joinWithChildren(text, children), "> ");
    }

    case "code": {
      const language = normalizeCodeLanguage(value.language);
      return `\`\`\`${language}\n${plainText(value.rich_text)}\n\`\`\``;
    }

    case "toggle": {
      const summary = renderRichText(value.rich_text) || "Details";
      return `<details>\n<summary>${summary}</summary>\n\n${children}\n\n</details>`;
    }

    case "divider":
      return "---";

    case "image":
      return renderFileBlock(value, "image");

    case "file":
    case "pdf":
    case "video":
      return renderFileBlock(value, type);

    case "bookmark":
    case "embed":
    case "link_preview":
      return renderUrlBlock(value, type);

    case "equation":
      return `$$\n${value.expression || ""}\n$$`;

    case "table":
      return renderTable(block);

    case "table_row":
      return "";

    case "child_page":
      return `- Child page: ${value.title || "Untitled"}`;

    case "child_database":
      return `- Child database: ${value.title || "Untitled"}`;

    case "column_list":
    case "column":
    case "synced_block":
    case "template":
    case "breadcrumb":
      return children;

    default:
      return children || `<!-- Unsupported Notion block type: ${type} -->`;
  }
}

function renderListItem(marker, value, childrenBlocks, depth) {
  const indent = "  ".repeat(depth);
  const text = renderRichText(value.rich_text);
  const firstLine = `${indent}${marker} ${text}`.trimEnd();

  if (!childrenBlocks?.length) return firstLine;

  const childText = childrenBlocks
    .map((child) => renderBlock(child, depth + 1))
    .filter(Boolean)
    .join("\n");

  return [firstLine, childText].filter(Boolean).join("\n");
}

function renderTable(block) {
  const rows = (block.children || [])
    .filter((child) => child.type === "table_row")
    .map((row) => {
      return (row.table_row?.cells || []).map((cell) => {
        return renderRichText(cell).replace(/\|/g, "\\|").replace(/\n/g, " ");
      });
    });

  if (rows.length === 0) return "";

  const width = Math.max(...rows.map((row) => row.length));
  const normalizedRows = rows.map((row) => {
    const copy = [...row];
    while (copy.length < width) copy.push("");
    return copy;
  });

  const header = normalizedRows[0];
  const delimiter = header.map(() => "---");
  const bodyRows = normalizedRows.slice(1);

  return [header, delimiter, ...bodyRows]
    .map((row) => `| ${row.join(" | ")} |`)
    .join("\n");
}

function renderFileBlock(value, type) {
  const url = value.external?.url || value.file?.url || "";
  const caption = renderRichText(value.caption) || type;

  if (!url) return `<!-- ${type} block has no readable URL -->`;
  if (type === "image") return `![${caption}](${url})`;

  return `[${caption}](${url})`;
}

function renderUrlBlock(value, type) {
  const url = value.url || "";
  const caption = renderRichText(value.caption) || url || type;

  if (!url) return `<!-- ${type} block has no readable URL -->`;
  return `[${caption}](${url})`;
}

function renderRichText(items = []) {
  return items.map(renderRichTextItem).join("");
}

function renderRichTextItem(item) {
  let text = item.plain_text || item.text?.content || "";
  if (!text) return "";

  const annotations = item.annotations || {};

  if (annotations.code) {
    text = `\`${text.replace(/`/g, "\\`")}\``;
  } else {
    if (annotations.bold) text = `**${text}**`;
    if (annotations.italic) text = `*${text}*`;
    if (annotations.strikethrough) text = `~~${text}~~`;
    if (annotations.underline) text = `<u>${text}</u>`;
  }

  const href = item.href || item.text?.link?.url;
  if (href && text !== href) return `[${text}](${href})`;

  return text;
}

function plainText(items = []) {
  return items.map((item) => item.plain_text || item.text?.content || "").join("");
}

function joinWithChildren(text, children) {
  return [text, children].filter(Boolean).join("\n\n");
}

function prefixLines(text, prefix) {
  return text
    .split("\n")
    .map((line) => (line ? `${prefix}${line}` : prefix.trimEnd()))
    .join("\n");
}

function renderIcon(icon) {
  if (!icon) return "";
  if (icon.type === "emoji") return icon.emoji || "";
  return "";
}

function normalizeCodeLanguage(language) {
  if (!language || language === "plain text") return "";
  return String(language).toLowerCase().replace(/\s+/g, "-");
}

function getPageTitle(page) {
  const properties = page?.properties || {};

  for (const property of Object.values(properties)) {
    if (property?.type === "title") {
      return plainText(property.title).trim();
    }
  }

  return "";
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
    if (response.status === 404) {
      fail(
        `${method} ${pathname} failed (404): ${message}\n` +
          "Make sure the page is shared with your Notion integration. " +
          "A public share link alone is not enough for the Notion API.",
      );
    }
    fail(`${method} ${pathname} failed (${response.status}): ${message}`);
  }

  return payload;
}

async function loadDotEnv(filePath) {
  try {
    const contents = await import("node:fs/promises").then((fs) => fs.readFile(filePath, "utf8"));
    for (const line of contents.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;

      const separatorIndex = trimmed.indexOf("=");
      if (separatorIndex === -1) continue;

      const key = trimmed.slice(0, separatorIndex).trim();
      let value = trimmed.slice(separatorIndex + 1).trim();
      value = value.replace(/^['"]|['"]$/g, "");

      if (key && process.env[key] === undefined) {
        process.env[key] = value;
      }
    }
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}

function parseCliArgs(args) {
  const options = { _: [] };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (!arg.startsWith("--")) {
      options._.push(arg);
      continue;
    }

    const withoutPrefix = arg.slice(2);
    const equalsIndex = withoutPrefix.indexOf("=");

    if (equalsIndex !== -1) {
      const key = withoutPrefix.slice(0, equalsIndex);
      options[key] = withoutPrefix.slice(equalsIndex + 1);
      continue;
    }

    const next = args[index + 1];
    if (next && !next.startsWith("--")) {
      options[withoutPrefix] = next;
      index += 1;
    } else {
      options[withoutPrefix] = true;
    }
  }

  return options;
}

function cleanNotionId(value) {
  if (!value) return "";

  const matches = String(value).match(/[0-9a-fA-F]{32}|[0-9a-fA-F-]{36}/g);
  if (!matches) return "";

  return matches[matches.length - 1].replace(/-/g, "").toLowerCase();
}

function formatNotionUuid(id) {
  const clean = cleanNotionId(id);
  if (clean.length !== 32) return id;
  return [
    clean.slice(0, 8),
    clean.slice(8, 12),
    clean.slice(12, 16),
    clean.slice(16, 20),
    clean.slice(20),
  ].join("-");
}

function safeJsonParse(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

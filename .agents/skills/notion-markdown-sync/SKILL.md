---
name: notion-markdown-sync
description: Import Markdown files into Notion databases and export Notion pages to Markdown using bundled Node.js scripts. Use when the user asks to move local Markdown into Notion, create a Notion database from Markdown articles, export Notion page URLs or page ids to Markdown files, troubleshoot Notion API page permissions, or install reusable Notion Markdown import/export scripts in a project.
---

# Notion Markdown Sync

## Overview

Use this skill for two workflows:

- Import local Markdown files into a Notion database.
- Export a Notion page URL or page id into a local Markdown file.

The skill bundles deterministic Node.js scripts in `scripts/` and usage docs in `references/`.

## Bundled Files

- `scripts/notion-import-markdown.mjs`: scan a Markdown directory, create or resume a Notion database, create pages, and upload Markdown content.
- `scripts/export-notion-page.mjs`: read a Notion page recursively through the Notion API and render common blocks as Markdown.
- `references/notion-import-markdown.md`: detailed import setup and command reference.
- `references/notion-export-page.md`: detailed export setup and command reference.

Read only the reference file needed for the user's workflow.

## Installation In A Project

When the user asks to add these tools to a repository:

1. Copy the relevant bundled script(s) into the target repo's `scripts/` directory.
2. Add npm scripts to `package.json`:

```json
{
  "scripts": {
    "notion:export-page": "node scripts/export-notion-page.mjs",
    "notion:import-md": "node scripts/notion-import-markdown.mjs",
    "notion:import-md:dry": "node scripts/notion-import-markdown.mjs --dry-run"
  }
}
```

3. Add the matching reference Markdown file(s) under the target repo's `scripts/` directory when the user wants local docs.
4. Do not commit or print real Notion tokens. Use `.env` locally.

## Environment

Both scripts read `.env` from the current working directory.

Common variables:

```sh
NOTION_TOKEN=secret_xxx
NOTION_VERSION=2026-03-11
```

Import variables:

```sh
NOTION_PARENT_PAGE_ID=https://www.notion.so/your-workspace/Parent-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_TITLE=Markdown Articles
NOTION_MD_SOURCE_DIR=old
NOTION_IMPORT_STATE_FILE=.notion-import-custom-state.json
```

The token may also be provided as `NOTION_API_KEY`.

## Export Workflow

Use when the user provides a Notion page URL/id and wants Markdown.

1. Ensure the Notion page is shared with the integration. A public Notion link alone is not enough for API access.
2. Run:

```sh
npm run notion:export-page -- "https://example.notion.site/Page-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" --out notion-export/page.md
```

3. If `--out` is omitted, the script prints Markdown to stdout.
4. If Notion returns 404 for a page that opens in the browser, tell the user to open the page, use `...` -> `Add connections`, and add the integration.
5. Warn that Notion-hosted file/image URLs are signed and may expire.

For detailed docs, read `references/notion-export-page.md`.

## Import Workflow

Use when the user wants local Markdown files imported into Notion.

1. Ensure the integration has Read/Insert/Update content permissions.
2. Prefer sharing a parent Notion page with the integration and using `NOTION_PARENT_PAGE_ID`.
3. Preview:

```sh
npm run notion:import-md:dry -- --source-dir old
```

4. Import:

```sh
npm run notion:import-md -- --source-dir old
```

5. Re-run the same command if interrupted. The state file prevents already imported files from being duplicated.
6. Use `--force-new-database` only when the user intentionally wants a fresh Notion database.

For detailed docs, read `references/notion-import-markdown.md`.

## Validation

After installing or modifying the scripts:

```sh
node --check scripts/export-notion-page.mjs
node --check scripts/notion-import-markdown.mjs
```

For import dry-runs, use:

```sh
npm run notion:import-md:dry -- --source-dir <dir>
```

For export smoke tests, export one page that is known to be shared with the integration.

## Troubleshooting

- `Missing NOTION_TOKEN`: create `.env` or export `NOTION_TOKEN`.
- `404 Could not find page`: share the page or parent page with the integration.
- `No Markdown files found`: check `--source-dir` or `NOTION_MD_SOURCE_DIR`.
- Network/DNS errors in sandboxed environments may require elevated network permissions.
- Local relative image paths in Markdown are not uploaded by the import script; use public URLs if Notion should render them.

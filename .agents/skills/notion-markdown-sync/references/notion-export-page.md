# Export a Notion Page to Markdown

This project includes a small exporter for converting a Notion page into a
local Markdown file. It reads the page title and recursively fetches page
blocks through the Notion API.

## 1. Create a Notion connection

1. Open https://www.notion.so/developers/connections.
2. Create an internal connection.
3. In the connection capabilities, enable:
   - Read content
4. Copy the internal integration secret.

If you already created a connection for the Markdown importer, you can reuse
the same token as long as it has read access.

## 2. Share the Notion page

Open the Notion page you want to export, click the `...` menu, choose
`Add connections`, and add your integration.

If the pages live under the same parent page, share the parent page with the
integration so child pages can be read too.

The exporter accepts either the full page URL or the raw page id.

> A public Notion share link is not enough for the Notion API. If the page is
> not shared with the integration, Notion may return a 404 error even when the
> page opens in your browser.

## 3. Configure local environment

Create `.env` in the project root:

```sh
NOTION_TOKEN=secret_xxx
```

Optional variable:

```sh
NOTION_VERSION=2026-03-11
```

## 4. Export one page

```sh
npm run notion:export-page -- https://www.notion.so/your-workspace/Page-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx --out notion-export/page.md
```

You can also pass a Notion site URL:

```sh
npm run notion:export-page -- "https://example.notion.site/My-Page-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx?source=copy_link" --out notion-export/my-page.md
```

If `--out` is omitted, the Markdown is printed to stdout:

```sh
npm run notion:export-page -- https://www.notion.so/your-workspace/Page-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## 5. Export several pages

Run the command once per page and choose a stable output filename:

```sh
npm run notion:export-page -- "https://example.notion.site/Page-One-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" --out notion-export/page-one.md
npm run notion:export-page -- "https://example.notion.site/Page-Two-yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy" --out notion-export/page-two.md
```

The output directory is created automatically when `--out` points to a nested
path.

## Notes

- The exporter preserves common blocks as Markdown: paragraphs, headings,
  lists, quotes, callouts, code blocks, images, files, bookmarks, equations,
  toggles, child pages, child databases, and simple tables.
- Notion-hosted file and image URLs are time-limited signed URLs. They are good
  for immediate processing, but should be replaced with stable assets before
  long-term publishing if needed.
- Database views, synced blocks, embeds, and unsupported blocks may be
  simplified or emitted as links/comments.
- The script only reads Notion content. It does not modify Notion pages.

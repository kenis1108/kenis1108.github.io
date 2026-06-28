# Import Markdown Files Into Notion

This project includes a small importer for moving every Markdown file in a
chosen local directory into a new Notion database. It scans the source directory
recursively.

## 1. Create a Notion connection

1. Open https://www.notion.so/developers/connections.
2. Create an internal connection.
3. In the connection capabilities, enable:
   - Read content
   - Insert content
   - Update content
4. Copy the internal integration secret.

## 2. Share a parent page

This step is optional. If you set a parent page, the new database is created
inside that page. If you omit it, the script asks Notion to create the database
at workspace level.

For the most reliable import with an internal connection, create or choose a
Notion page, share it with your connection, then copy the page URL.

The importer accepts the full URL or the raw page id.

## 3. Configure local environment

Create `.env` in the project root:

```sh
NOTION_TOKEN=secret_xxx
NOTION_DATABASE_TITLE=Markdown Articles
```

Optional variables:

```sh
NOTION_PARENT_PAGE_ID=https://www.notion.so/your-workspace/Your-Page-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_MD_SOURCE_DIR=old
NOTION_VERSION=2026-03-11
NOTION_IMPORT_STATE_FILE=.notion-import-custom-state.json
```

You can also pass the parent page for a single run:

```sh
npm run notion:import-md -- --source-dir old --parent-page-id https://www.notion.so/your-workspace/Your-Page-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## 4. Preview the import

```sh
npm run notion:import-md:dry -- --source-dir old
```

This only scans the files and prints what will be imported.

## 5. Run the import

```sh
npm run notion:import-md -- --source-dir old
```

The script creates one database in the configured parent page, or at workspace
level if no parent page is configured. It then creates one database page per
Markdown file and writes the Markdown body through Notion's Markdown content
API.

If the run stops halfway, run the same command again. The state file prevents
already imported files from being duplicated.

By default, the state file is derived from the source directory. For example,
`--source-dir old` uses `.notion-import-old-state.json`, and `--source-dir
notion` uses `.notion-import-notion-state.json`. This keeps different source
directories in separate Notion databases.

To intentionally create a fresh database, run:

```sh
npm run notion:import-md -- --source-dir old --force-new-database
```

You can also set the source directory once in `.env`:

```sh
NOTION_MD_SOURCE_DIR=old
```

Then run:

```sh
npm run notion:import-md
```

## Notes

- The script imports front matter fields into database properties when present:
  `title`, `category`, `tags`, `abbrlink`, and `date`.
- Unsupported blog shortcodes are kept as text in the page body.
- Remote image URLs remain as Markdown image links. Local relative images need
  to be uploaded somewhere public if you want Notion to render them.

import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'
import { get } from 'http'

/** 递归获取所有 markdown 文件 */
function getAllMarkdownFiles(dir: string): any[] {
  const files = fs.readdirSync(dir)
  let routes: any[] = []

  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      // 递归处理子目录
      routes = routes.concat(getAllMarkdownFiles(filePath))
    } else if (file.endsWith('.md') && file !== 'index.md') {
      // 获取相对于 docs 目录的路径
      const relativePath = path.relative(path.resolve(__dirname, '../docs/'), filePath)
      routes.push({
        text: file.replace('.md', ''),
        link: `/docs/${relativePath.replace('.md', '')}`
      })
    }
  })

  return routes
}

export default defineConfig({
  title: "Kenis Blog",
  description: "随笔",
  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha",
    },
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'Old Articles',
        items: getAllMarkdownFiles(path.resolve(__dirname, '../docs/old'))
      },
      {
        text: 'Notion',
        items: getAllMarkdownFiles(path.resolve(__dirname, '../docs/notion'))
      },
      {
        text: 'Shopify',
        items: getAllMarkdownFiles(path.resolve(__dirname, '../docs/shopify'))
      }
    ],

    sidebar: [
      {
        text: 'Old Articles',
        collapsed: true,
        items: getAllMarkdownFiles(path.resolve(__dirname, '../docs/old'))
      },
      {
        text: 'Notion',
        collapsed: true,
        items: getAllMarkdownFiles(path.resolve(__dirname, '../docs/notion'))
      },
      {
        text: 'Shopify',
        collapsed: true,
        items: getAllMarkdownFiles(path.resolve(__dirname, '../docs/shopify'))
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kenis1108' }
    ]
  }
})

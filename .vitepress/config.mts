import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

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

/** 动态生成侧边栏 */
function getSidebar() {
  const docsPath = path.resolve(__dirname, '../docs/')
  return getAllMarkdownFiles(docsPath)
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
      { text: 'Articles', link: '/articles' }
    ],

    sidebar: [
      {
        text: 'Articles',
        items: getSidebar() // 自动生成的侧边栏
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kenis1108' }
    ]
  }
})

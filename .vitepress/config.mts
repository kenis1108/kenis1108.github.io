import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

// 动态生成侧边栏
function getSidebar() {
  const docsPath = path.resolve(__dirname, '../docs/') // 文章目录路径
  const files = fs.readdirSync(docsPath) // 读取文章目录的文件和文件夹
  return files
    .filter((file) => file.endsWith('.md')) // 仅保留 Markdown 文件
    .filter((file) => file !== 'index.md') // 排除 index.md 文件
    .map((file) => ({
      text: file.replace('.md', ''), // 去掉文件扩展名作为标题
      link: `/docs/${file}` // 生成链接
    }))
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

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
      // 获取相对路径
      const relativePath = path.relative(path.resolve(__dirname, '../'), filePath)
      routes.push({
        text: file.replace('.md', ''),
        link: `/${relativePath.replace('.md', '')}`
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
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/'
    }
  },
  themeConfig: {
    logo: '/logo.png',
    search: { 
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'Old Articles',
        items: getAllMarkdownFiles(path.resolve(__dirname, '../old'))
      },
      {
        text: 'Notion',
        items: getAllMarkdownFiles(path.resolve(__dirname, '../notion'))
      },
      {
        text: 'Shopify',
        items: getAllMarkdownFiles(path.resolve(__dirname, '../shopify'))
      }
    ],

    sidebar: {
      '/old/': [{
        text: 'Old Articles',
        collapsed: true,
        items: getAllMarkdownFiles(path.resolve(__dirname, '../old'))
      }],
      '/notion/': [{
        text: 'Notion',
        collapsed: true,
        items: getAllMarkdownFiles(path.resolve(__dirname, '../notion'))
      }],
      '/shopify/': [{
        text: 'Shopify',
        collapsed: true,
        items: getAllMarkdownFiles(path.resolve(__dirname, '../shopify'))
      }]
    },
    outline: { 
      level: [2,4], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: '目录' // 文字显示
    },
    editLink: { 
      pattern: 'https://github.com/kenis1108/kenis1108.github.io/blob/vitepress/:path', // 改成自己的仓库
      text: '在GitHub编辑本页'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kenis1108' }
    ]
  }
})

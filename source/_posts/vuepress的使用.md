---
title: vuepress的使用
tags: JavaScript
category: 前端
abbrlink: f93195bc
date: 2021-07-13 15:29:33
cover:
hidden: true
---

# VuePress

## 介绍

## 安装
`npm i -g vuepress`

## 创建项目

```powershell
# 创建目录
mkdir vuepress_blog && cd vuepress-blog
# 初始化
yarn init
# 安装项目依赖
yarn add -D vuepress
```


## 新建md文档
```powershell
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

## 启动
`vuepress dev docs`


## 配置
创建`docs/.vuepress/config.js`
```js
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
}
```
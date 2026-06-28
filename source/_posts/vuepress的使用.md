---
title: vuepress的使用
tags: JavaScript
category: 前端
abbrlink: f93195bc
date: 2021-07-13 15:29:33


---

## 标题备选

1. Vue 实战基础：VuePress 的使用，关键知识点一次梳理
2. 手把手梳理 VuePress 的使用：从概念到项目使用
3. VuePress 的使用学不顺？先把这些基础点打通

## 摘要

这篇文章适合 Vue 技术栈学习者，围绕「VuePress 的使用」整理关键概念、使用步骤和项目实践要点，方便复习和实战对照。

## 正文

哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；**打好基础才能稳步进阶**，是我始终秉持的学习理念～

> 📢 我搭建了5000人程序猿专属学习交流群
群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源
关注我并回复 **加群** ，就能加入交流圈啦🚀
>

## 前言

**Vue 技术栈看起来上手快，但真正写项目时，基础概念一定要稳。**

组件通信、状态管理、工程配置这些知识点，单独看都不复杂，串到项目里就很容易混。

这篇围绕「VuePress 的使用」做一次结构化整理，适合大家复习时对照查看。

## 知识点整理

下面进入正文。建议大家边看边对照自己的项目结构，很多知识点放到组件里会更好理解。

如果你现在维护的是 Vue 项目，可以对照看一下组件通信和状态管理是否已经形成固定写法。

## VuePress

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

## 写在最后

好啦，今天的分享就到这里！

💬 互动时间：

你现在项目里更常用 Vue2 还是 Vue3？如果想看组件通信、Vuex/Pinia 或工程化配置的实战拆解，可以留言。

最后，感谢你看到这里👏

如果喜欢这篇内容，不妨顺手给小编安排一波👇
**点赞**👍｜**转发**📲｜**推荐**❤️｜**评论**📣

要是想第一时间蹲到新内容推送，记得给我点个**星标**⭐️

更多干货内容正在持续填坑中，咱们下期见👋

## 标签建议

JavaScript、前端、Vue、前端基础

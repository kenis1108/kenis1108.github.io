---
title: art-template前端模板引擎
tags: Javascript
category: 前端
abbrlink: 3762f4c
date: 2019-03-13 09:47:35
cover:
---

# 模板引擎

## 什么是模板引擎

### 作用

    + 帮助我们快速渲染页面
    + 三体分离(结构 样式 行为)
    + 一般都是第三方文件引入使用

### 常见的模板引擎

    + art-template 前后端都能用
    + underscroll 后端js不能用
    + e.js 后端js不能用
    + template 后端js不能用

## art-template模板引擎
    + 特点
      1. html 和 js 代码分离
      2. 有自己独立的语法，但也可以使用原生js 语法

    + 安装
      - 方法1、npm安装(require('art-template'))
        + 在要使用的项目文件夹下安装
 
        ``` bash
            npm install art-template
        ```



      - 方法2、浏览器实时编译(引入外部文件template-web.js)
        + 从github下载放在lib文件夹里面的template-web.js
 
        ``` html
            <link rel="stylesheet" href="template-web.js">
        ```  
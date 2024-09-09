---
title: 通过谷歌服务获取网站favicon
tags: 
- 谷歌服务
- favicon
category: 
- [小工具]
date: 2023-05-24 14:59:29

---
## 前言

起因是为了给Notion的文章添加icon

通过 **`域名+/favicon.ico` 找网站的icon这个办法**不一定能找到。

在浏览器开发者工具里的Network找也不一定找得到

## 使用谷歌的服务

### 第一种: G**oogle favicons**

将要获取icon的网站域名填入domain里面

格式: `https://www.google.com/s2/favicons?domain=<domain>&size=<size>`

eg: `https://www.google.com/s2/favicons?domain=https://www.baidu.com&size=64`

获取到图标后的链接里面也有`size参数`可以修改尺寸

### 第二种: Chrome favicon 是chrome浏览器自带的功能

格式: `chrome://favicon/<domain>`

eg: `chrome://favicon/https://www.baidu.com`

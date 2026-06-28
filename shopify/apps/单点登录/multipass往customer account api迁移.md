## 标题备选

1. Shopify 开发实战：Shopify Multipass 迁移到 Customer Account API 一篇讲清楚
2. 手把手梳理 Shopify：Shopify Multipass 迁移到 Customer Account API 的关键用法和避坑点
3. 做 Shopify 项目别只会改主题，这篇带你搞懂 Shopify Multipass 迁移到 Customer Account API

## 摘要

这篇文章适合 Shopify 主题和应用开发者，围绕「Shopify Multipass 迁移到 Customer Account API」梳理核心概念、配置路径和实战注意点，方便项目中快速对照。

## 正文

哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；**打好基础才能稳步进阶**，是我始终秉持的学习理念～

> 📢 我搭建了5000人程序猿专属学习交流群
群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源
关注我并回复 **加群** ，就能加入交流圈啦🚀
>

## 前言

**Shopify 项目最容易卡住的地方，往往不是“会不会写代码”，而是主题、应用和后台配置之间的关系没理顺。**

很多同学做 Shopify 开发时，会同时碰到 Liquid、主题目录、Checkout、Metafields、应用后台、性能优化这些概念。单独看不难，放到真实项目里就容易散。

这篇围绕「Shopify Multipass 迁移到 Customer Account API」把原始笔记整理成更适合阅读和复用的版本，适合做主题开发、应用开发或者接手 Shopify 项目时快速对照。

## Shopify 实战整理

下面进入 Shopify 相关内容整理。建议大家边看边对照自己的店铺、主题代码和应用后台，很多问题只有放到真实配置里才容易看清楚。

如果你正在做 Shopify 项目，可以重点留意主题代码、后台配置、应用能力和官方限制之间的边界，很多线上问题都出在这些交界处。

Shopify 正在下线旧版 Customer Accounts（Classic），Multipass 依赖于旧版账户体系，一旦下线，用户将无法通过你们自制的用户中心登录。

新方案：Customer Account API（OAuth 2.0 + PKCE）
Shopify 推出的新方案是 Customer Account API，采用标准的 OAuth 2.0 / OIDC 协议取代 Multipass。

新旧对比
项目	旧方案（Multipass）	新方案（Customer Account API）
协议	自定义 Token（AES + HMAC）	OAuth 2.0 + PKCE（标准 OIDC）
安全性	依赖共享密钥	每次请求独立认证，更安全
适用计划	Shopify Plus 专属	所有 Headless/Hydrogen 商店
SSO	支持	支持（单点登录体验更好）
登录方式	有密码	支持无密码登录
需要做的改造（概述）
Step 1：在 Shopify Admin → Settings → Customer Accounts 切换为新版账户

Step 2：安装 Headless Sales Channel，配置 Customer Account API，获取 client_id 和 endpoints（Authorization / Token / Logout URL）

Step 3：在自建用户中心实现 OAuth 2.0 Authorization Code + PKCE 流程：

用户点击登录
  → 跳转到 Shopify Authorization endpoint（带 client_id, scope, code_challenge 等参数）
  → 用户在 Shopify 完成登录
  → 回调到你们的 redirect_uri（带 authorization_code）
  → 用 code 换取 access_token（POST 到 Token endpoint）
  → 用 access_token 调用 Customer Account API 获取客户数据
参考文档：

[Customer Account API 入门](https://shopify.dev/docs/storefronts/headless/building-with-the-customer-account-api/getting-started)
[OAuth 2.0 认证完整教程](https://shopify.dev/docs/storefronts/headless/building-with-the-customer-account-api/authenticate-customers)
[Multipass 文档](https://shopify.dev/docs/api/multipass)

对你们项目的影响评估
你们目前有 /sections/ppsp-how-it-works.liquid 等主题文件——主要影响点是：

登录入口链接：目前如果有 Multipass Token 生成逻辑（通常在后端），需要替换为 OAuth 授权 URL
Customer Account Page (/account)：新版 Customer Accounts 的 URL 结构可能有变化
后端 Token 生成服务：Multipass 的后端代码需要替换为 OAuth 2.0 PKCE 流程

## 写在最后

好啦，今天的分享就到这里！

💬 互动时间：

你现在做 Shopify 更常遇到的是主题开发、Checkout 定制、应用接入，还是性能优化？如果你在「Shopify Multipass 迁移到 Customer Account API」上踩过坑，也可以把场景留言出来。

最后，感谢你看到这里👏

如果喜欢这篇内容，不妨顺手给小编安排一波👇
**点赞**👍｜**转发**📲｜**推荐**❤️｜**评论**📣

要是想第一时间蹲到新内容推送，记得给我点个**星标**⭐️

更多干货内容正在持续填坑中，咱们下期见👋

## 标签建议

Shopify、主题开发、独立站

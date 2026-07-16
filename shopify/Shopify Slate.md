## 标题备选

1. Shopify 开发实战：Shopify Slate 已弃用？迁移到 Shopify CLI 一篇讲清楚
2. 手把手梳理 Shopify：Shopify Slate 已弃用？迁移到 Shopify CLI 的关键用法和避坑点
3. 做 Shopify 项目别只会改主题，这篇带你搞懂 Shopify Slate 已弃用？迁移到 Shopify CLI

## 摘要

这篇文章适合 Shopify 主题和应用开发者，围绕「Shopify Slate 已弃用？迁移到 Shopify CLI」梳理核心概念、配置路径和实战注意点，方便项目中快速对照。

## 正文

哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；**打好基础才能稳步进阶**，是我始终秉持的学习理念～

> 📢 我搭建了5000人程序猿专属学习交流群，群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源，关注我并回复 **加群** ，就能加入交流圈啦🚀

## 前言

**Shopify 项目最容易卡住的地方，往往不是“会不会写代码”，而是主题、应用和后台配置之间的关系没理顺。**

很多同学做 Shopify 开发时，会同时碰到 Liquid、主题目录、Checkout、Metafields、应用后台、性能优化这些概念。单独看不难，放到真实项目里就容易散。

这篇围绕「Shopify Slate 已弃用？迁移到 Shopify CLI」把原始笔记整理成更适合阅读和复用的版本，适合做主题开发、应用开发或者接手 Shopify 项目时快速对照。

## Shopify 实战整理

下面进入 Shopify 相关内容整理。建议大家边看边对照自己的店铺、主题代码和应用后台，很多问题只有放到真实配置里才容易看清楚。

如果你正在做 Shopify 项目，可以重点留意主题代码、后台配置、应用能力和官方限制之间的边界，很多线上问题都出在这些交界处。

## 什么是 Shopify Slate？

**简短回答：**
**Shopify Slate** 是 Shopify 很早期推出的一套 **主题开发脚手架（toolkit / scaffold）与构建工具**，用于本地开发 Shopify 主题（支持 Sass、Webpack 打包、热更新等）。
它现在已经 **不再维护 / 已被弃用**，官方推荐使用的现代工具是 **[Shopify CLI for themes](https://shopify.dev/docs/storefronts/themes/tools/cli)**。

---

## 1. Slate 是干什么的？

在 Online Store 2.0 和 Shopify CLI 之前，开发者要做这些事：

- 本地开发主题（Sass 编译、ES6 转 ES5、打包 JS、压缩资源）
- 上传主题到店铺
- 预览修改

Slate 作为一个「主题开发工具集」，主要提供了：

1. **主题脚手架**
   - 提供一套「入门主题」结构，可以作为新项目的基础。
2. **构建管线（构建系统）**
   - 使用 Gulp / Webpack 等工具：
     - 编译 SCSS / Sass
     - 打包 / 压缩 JS
     - 处理静态资源
3. **与 Shopify 主题 API 集成**
   - 类似早期 Theme Kit：可以把本地改动上传到 Shopify 主题上去。

当时的典型工作流：

- `slate theme <something>` 初始化项目
- 本地开发（写 Sass、ES6 JS）
- Slate 负责打包输出到 `dist/`，再同步到店铺对应的主题

---

## 2. 为什么现在感觉很少听到 Slate？

原因：**Slate 已经被官方弃用 / 停止维护了**。

Shopify 后续推出并不断升级的工具链是：

- **Theme Kit（早期主力）**：命令行同步主题文件，但没有完整的构建功能。
- **[Shopify CLI for themes](https://shopify.dev/docs/storefronts/themes/tools/cli)**：
  - 支持「开发主题（development theme）」
  - 内置本地开发服务器
  - 热更新 Section 和 CSS
  - 一体化支持 Online Store 2.0 的主题开发
  - 与 GitHub 集成、Theme Check 等

官方现在的推荐路线基本都是：

> **Shopify CLI + 自己的前端构建工具（例如 Vite / Webpack / esbuild）**
> 而不再使用 Slate。

---

## 3. 现在做主题开发，用什么代替 Slate？

**官方推荐工具：**

1. **Shopify CLI for themes**
   文档链接：[Shopify CLI for themes](https://shopify.dev/docs/storefronts/themes/tools/cli)

   主要能力：
   - `shopify theme dev`：本地开发 + 热更新
   - `shopify theme push`：推送主题到店铺
   - `shopify theme pull`：从店铺拉回主题代码
   - 支持多环境 `shopify.theme.toml`（dev / staging / prod）
   - 集成 Theme Check（Lint Liquid / JSON 配置）

2. **自定义构建工具（取代 Slate 构建层）**

   Slate 以前帮你做的：
   - Sass 编译
   - ES6 打包
   - 压缩 / hash

   现在推荐自己用：
   - **Vite / Webpack / esbuild / Rollup** 等前端工具管理 `assets/` 目录的构建产物
   - 输出文件放入 `assets` 下，由 Shopify CLI 推送到店铺

   一个典型工作流示意（代替 Slate）：

      终端 1：跑前端构建（比如 Vite / Webpack watch）

      终端 2：跑 Shopify CLI 的 dev server

      当你改 JS/CSS 时：

   - 构建工具输出到 `assets/xxx.js` / `assets/xxx.css`
   - Shopify CLI 检测到文件变化 → 热更新 / 自动刷新浏览器

---

## 4. 如果你看到旧项目在用 Slate，怎么办？

很多老项目可能：

- 仓库里有 `slate.config.js`、`slate-tools` 等依赖。
- 使用的是 `src/` 源码目录 + `dist/` 输出目录结构。

**迁移思路：**

1. **保持目录结构，移除 Slate 相关依赖**
2. 新建自己的构建配置（例如 Vite / Webpack）：
   - 把 `src/` 里的 Sass/TS/ES6 编译到 `dist/` 或直接到 `assets/`
3. 使用 Shopify CLI 来：
   - 本地开发：`shopify theme dev`
   - 部署：`shopify theme push`

官方有 CLI 迁移相关文档（虽然不是专门针对 Slate，但理念一致）：
- [Migrate to Shopify CLI 3.x](https://shopify.dev/docs/storefronts/themes/tools/cli/migrate)

---

## 5. 总结

- **Shopify Slate** = 早期的 Shopify 主题开发 toolkit（脚手架 + 构建工具 + 上传同步）。
- 已经 **停止维护 / 弃用**。
- 现在官方推荐：
  - 使用 **[Shopify CLI for themes](https://shopify.dev/docs/storefronts/themes/tools/cli)** 作为主题开发的主要 CLI 工具。
  - 自己选用现代前端构建工具（Vite / Webpack / 等）替代 Slate 的构建功能。

---

如果你现在手上有一个「正在用 Slate 的老主题项目」，可以把目录结构（文件列表）贴一段出来，我可以帮你设计一份**从 Slate 迁移到 Shopify CLI + Vite/Webpack 的具体步骤与配置示例**。

## 写在最后

好啦，今天的分享就到这里！

💬 互动时间：

你现在做 Shopify 更常遇到的是主题开发、Checkout 定制、应用接入，还是性能优化？如果你在「Shopify Slate 已弃用？迁移到 Shopify CLI」上踩过坑，也可以把场景留言出来。

最后，感谢你看到这里👏

如果喜欢这篇内容，不妨顺手给小编安排一波👇
**点赞**👍｜**转发**📲｜**推荐**❤️｜**评论**📣

要是想第一时间蹲到新内容推送，记得给我点个**星标**⭐️

更多干货内容正在持续填坑中，咱们下期见👋

## 标签建议

Shopify、主题开发、独立站

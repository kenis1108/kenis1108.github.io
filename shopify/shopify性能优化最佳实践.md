> 首次进入仓库时间：2026-04-02
## 标题备选

1. Shopify 开发实战：Shopify 性能优化最佳实践 一篇讲清楚
2. 手把手梳理 Shopify：Shopify 性能优化最佳实践 的关键用法和避坑点
3. 做 Shopify 项目别只会改主题，这篇带你搞懂 Shopify 性能优化最佳实践

## 摘要

这篇文章适合 Shopify 主题和应用开发者，围绕「Shopify 性能优化最佳实践」梳理核心概念、配置路径和实战注意点，方便项目中快速对照。

## 正文

哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；**打好基础才能稳步进阶**，是我始终秉持的学习理念～

> 📢 我搭建了5000人程序猿专属学习交流群，群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源，关注我并回复 **加群** ，就能加入交流圈啦🚀

## 前言

**Shopify 项目最容易卡住的地方，往往不是“会不会写代码”，而是主题、应用和后台配置之间的关系没理顺。**

很多同学做 Shopify 开发时，会同时碰到 Liquid、主题目录、Checkout、Metafields、应用后台、性能优化这些概念。单独看不难，放到真实项目里就容易散。

这篇围绕「Shopify 性能优化最佳实践」把原始笔记整理成更适合阅读和复用的版本，适合做主题开发、应用开发或者接手 Shopify 项目时快速对照。

## Shopify 实战整理

下面进入 Shopify 相关内容整理。建议大家边看边对照自己的店铺、主题代码和应用后台，很多问题只有放到真实配置里才容易看清楚。

如果你正在做 Shopify 项目，可以重点留意主题代码、后台配置、应用能力和官方限制之间的边界，很多线上问题都出在这些交界处。

> **官方文档（建议先读）**
> - [Performance best practices for Shopify themes（主题性能）](https://shopify.dev/docs/storefronts/themes/best-practices/performance)
> - [About performance optimization（应用性能概览）](https://shopify.dev/docs/apps/build/performance)
> - [General best practices for app performance（应用性能通用建议）](https://shopify.dev/docs/apps/build/performance/general-best-practices)
> - [Storefront performance（应用对前台速度影响）](https://shopify.dev/docs/apps/build/performance/storefront)

---

## 目录

1. 为什么性能在 Shopify 中如此重要
2. Theme（主题）性能优化最佳实践
   - 2.1 JavaScript 优化
   - 2.2 CSS 与样式优化
   - 2.3 图片与媒体优化
   - 2.4 Liquid 模板与数据渲染优化
   - 2.5 资源加载策略（JS / CSS / Fonts）
3. App（应用）性能优化最佳实践
   - 3.1 通用 App 性能策略
   - 3.2 Storefront 相关 App（前台脚本 / Snippet）
   - 3.3 Admin 嵌入式 App 与 Web Vitals
4. 如何测试与监控性能
5. 实战优化 Checklist（Theme & App）

---

## 1. 为什么性能在 Shopify 中如此重要

### 核心原因

- 高性能店铺 → **更高转化率 / 更好 SEO / 更低跳出率**
- **Theme Store 审核要求**
  - Home / Product / Collection 页面
  - Lighthouse Performance **平均 ≥ 60**
- **App 审核 & Built for Shopify**
  - 安装 App 后 Lighthouse 性能分 **下降不得超过 10 分**

---

## 2. Theme（主题）性能优化最佳实践

---

### 2.1 JavaScript 优化

### 官方原则

- 优先 **HTML + CSS**
- JS 仅用于 **增强（Progressive Enhancement）**
- 基础功能（浏览 / 加购 / 结账入口）**不应强依赖 JS**
- **目标：压缩后 JS ≤ 16KB**

### 实践建议

1. 减少 JS 体积与依赖

- 避免引入大型框架（jQuery / React runtime）
- 能用原生 API 就不用第三方库
- 避免多个 snippet 重复包含相同逻辑

2. 使用 `defer` / `async`

```html
<!-- 需要顺序执行 -->
<script defer src="script.js"></script>

<!-- 不关心顺序 -->
<script async src="analytics.js"></script>
```

1. 避免全局命名空间污染

```js
(function () {
  const myVar = 1;

  function init() {
    // logic
  }

  init();
})();
```

4. 避免同步、长耗时操作

- 避免在 `DOMContentLoaded` / `window.onload` 中做重计算
- 避免同步 XHR
- 避免频繁读写 DOM（layout thrashing）
- 避免大量同步 `localStorage` 操作

---

### 2.2 CSS 与样式优化

1. 优先使用 CSS 实现交互

- 展开 / 收起 / Tab / Hover
- 使用 `:hover`、`:focus-within`、`details/summary`
- 减少 JS click + class toggle

2. 减少阻塞渲染

- 拆分 Critical CSS
- 非关键 CSS 延迟加载
- 避免引入整套 UI 库但只用很少组件

3. 使用现代布局

- Flex / Grid
- 不为极旧浏览器引入沉重 polyfill

---

### 2.3 图片与媒体优化

参考：[Optimize images（官方）](https://shopify.dev/docs/storefronts/themes/best-practices/performance#optimize-images)

1. 使用 `image_url` + `image_tag`

```liquid
{{ product.featured_image | image_url: width: 600 | image_tag }}
```

2. 指定尺寸 & 懒加载

- 设置 `width` / `height`
- 使用 `loading="lazy"`

3. 避免一次性加载大量图片

- Collection / 搜索页分页
- 避免首屏外图片立即加载

---

### 2.4 Liquid 模板与数据渲染优化

1. 避免复杂循环

```liquid
{% paginate collection.products by 24 %}
  {% for product in collection.products %}
    ...
  {% endfor %}
{% endpaginate %}
```

2. 减少 `render` 深度

- `render` 有调用开销
- 嵌套深度 > 4～5 层需重新评估结构

3. 避免在循环中做重计算

- 金额格式化
- 字符串拼接
- Metafield 深度访问

---

### 2.5 资源加载策略（JS / CSS / Fonts）

1. 合并与压缩资源

- 构建阶段合并 JS / CSS
- Shopify 会压缩，但源文件仍应精简

2. 控制第三方脚本

- 广告 / 埋点 / 聊天组件谨慎引入
- 必须使用 `async` / `defer`

3. 字体优化

```css
font-display: swap;
```

- 减少字体变体
- 避免 FOIT

---

## 3. App（应用）性能优化最佳实践

参考文档：

- [About performance optimization](https://shopify.dev/docs/apps/build/performance)
- [Storefront performance](https://shopify.dev/docs/apps/build/performance/storefront)
- [Built for Shopify requirements](https://shopify.dev/docs/apps/launch/built-for-shopify/requirements)

---

### 3.1 通用 App 性能策略

- 必须设置 viewport：

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

- 所有脚本使用 `defer` / `async`
- 减少依赖与 polyfill
- 后端 API 响应尽量快（避免串行调用）

---

### 3.2 Storefront 相关 App（前台脚本）

**Shopify 官方测试方式**

- 安装前 / 安装后 Lighthouse 对比
- 权重：
  - Home：17%
  - Product：40%
  - Collection：43%
- **性能下降 ≤ 10 分**

**最佳实践**

- 不全站注入 JS
- 使用 Section / App Block
- Intersection Observer 延迟初始化
- 避免重复加载前端框架

---

### 3.3 Admin 嵌入式 App 与 Web Vitals

**Built for Shopify 要求**

| 指标 | 要求 |
|----|----|
| LCP | ≤ 2.5s |
| CLS | ≤ 0.1 |
| INP | ≤ 200ms |

**建议**

- 使用最新 App Bridge
- 骨架屏 / 占位符
- 所有图片和卡片预留尺寸

---

## 4. 如何测试与监控性能

- Lighthouse / PageSpeed Insights
- Theme Store 性能测试
- CI：Lighthouse CI / WebPageTest
- 生产环境：Web Vitals / RUM

---

## 5. 实战优化 Checklist

### 5.1 Theme Checklist

- [ ] JS ≤ 16KB（gzip）
- [ ] 无阻塞脚本
- [ ] Lighthouse ≥ 60
- [ ] 图片规范 + lazy loading
- [ ] 合理 Liquid 结构
- [ ] 移动端真实测试

### 5.2 App Checklist

- [ ] 正确 viewport
- [ ] async / defer
- [ ] 无重复框架
- [ ] Lighthouse 下降 ≤ 10
- [ ] 后端 API p95 ≤ 500ms
- [ ] Web Vitals 达标

## 写在最后

好啦，今天的分享就到这里！

💬 互动时间：

你现在做 Shopify 更常遇到的是主题开发、Checkout 定制、应用接入，还是性能优化？如果你在「Shopify 性能优化最佳实践」上踩过坑，也可以把场景留言出来。

最后，感谢你看到这里👏

如果喜欢这篇内容，不妨顺手给小编安排一波👇
**点赞**👍｜**转发**📲｜**推荐**❤️｜**评论**📣

要是想第一时间蹲到新内容推送，记得给我点个**星标**⭐️

更多干货内容正在持续填坑中，咱们下期见👋

## 标签建议

Shopify、主题开发、独立站

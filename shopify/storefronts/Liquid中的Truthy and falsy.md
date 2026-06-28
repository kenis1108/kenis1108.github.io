## 标题备选

1. Shopify 开发实战：Liquid 中的 Truthy and Falsy 一篇讲清楚
2. 手把手梳理 Shopify：Liquid 中的 Truthy and Falsy 的关键用法和避坑点
3. 做 Shopify 项目别只会改主题，这篇带你搞懂 Liquid 中的 Truthy and Falsy

## 摘要

这篇文章适合 Shopify 主题和应用开发者，围绕「Liquid 中的 Truthy and Falsy」梳理核心概念、配置路径和实战注意点，方便项目中快速对照。

## 正文

哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；**打好基础才能稳步进阶**，是我始终秉持的学习理念～

> 📢 我搭建了5000人程序猿专属学习交流群
群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源
关注我并回复 **加群** ，就能加入交流圈啦🚀
>

## 前言

**Shopify 项目最容易卡住的地方，往往不是“会不会写代码”，而是主题、应用和后台配置之间的关系没理顺。**

很多同学做 Shopify 开发时，会同时碰到 Liquid、主题目录、Checkout、Metafields、应用后台、性能优化这些概念。单独看不难，放到真实项目里就容易散。

这篇围绕「Liquid 中的 Truthy and Falsy」把原始笔记整理成更适合阅读和复用的版本，适合做主题开发、应用开发或者接手 Shopify 项目时快速对照。

## Shopify 实战整理

下面进入 Shopify 相关内容整理。建议大家边看边对照自己的店铺、主题代码和应用后台，很多问题只有放到真实配置里才容易看清楚。

如果你正在做 Shopify 项目，可以重点留意主题代码、后台配置、应用能力和官方限制之间的边界，很多线上问题都出在这些交界处。

在 Liquid 中,真值(truthy)和假值(falsy)的规则如下:

假值 (False) - 只有这两个:

- false - 布尔值 false
- nil - 空值/不存在

真值 (True) - 除了上面两个,其他都是 true:

- true - 布尔值 true
- 0 - ⚠️ 数字 0 是 true(与 JavaScript 不同!)
- "" - ⚠️ 空字符串是 true(与 JavaScript 不同!)
- [] - ⚠️ 空数组是 true(与 JavaScript 不同!)
- 任何非零数字
- 任何非空字符串
- 任何对象

示例:
```
{% if false %}
  不会显示
{% endif %}
{% if nil %}
  不会显示
{% endif %}
{% if 0 %}
  会显示! ⚠️ 0 是 true
{% endif %}
{% if "" %}
  会显示! ⚠️ 空字符串是 true
{% endif %}
{% if "false" %}
  会显示! ⚠️ 字符串 "false" 是 true
{% endif %}
{% if product.title %}
  会显示(如果 product.title 存在)
{% endif %}
{% if product.description %}
  会显示(如果 description 存在,即使是空字符串)
{% endif %}
```

常见陷阱:

```
<!-- ❌ 检查空字符串 - 不正确 -->
{% if product.description %}
  <!-- 即使 description 是 "",也会执行 -->
{% endif %}
<!-- ✅ 正确检查空字符串 -->
{% if product.description != blank %}
  <!-- 只有非空才执行 -->
{% endif %}
<!-- ✅ 或使用 size -->
{% if product.description.size > 0 %}
  <!-- 只有非空才执行 -->
{% endif %}
```

特殊关键字:

- blank - 检查是否为 nil、false 或空(空字符串、空数组等)
- empty - 检查字符串或数组是否为空

```
{% if product.description == blank %}
  描述为空
{% endif %}
{% if collection.products == empty %}
  产品系列没有产品
{% endif %}
```

总结:

- Liquid 只有 false 和 nil 是假值
- 0、空字符串、空数组都是真值(与 JavaScript 不同!)
- 用 blank 或 empty 来检查"空"状态

## 写在最后

好啦，今天的分享就到这里！

💬 互动时间：

你现在做 Shopify 更常遇到的是主题开发、Checkout 定制、应用接入，还是性能优化？如果你在「Liquid 中的 Truthy and Falsy」上踩过坑，也可以把场景留言出来。

最后，感谢你看到这里👏

如果喜欢这篇内容，不妨顺手给小编安排一波👇
**点赞**👍｜**转发**📲｜**推荐**❤️｜**评论**📣

要是想第一时间蹲到新内容推送，记得给我点个**星标**⭐️

更多干货内容正在持续填坑中，咱们下期见👋

## 标签建议

Shopify、主题开发、独立站

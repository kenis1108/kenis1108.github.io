import{_ as s,c as n,o as p,ag as i}from"./chunks/framework.DPDPlp3K.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"shopify/storefronts/Liquid中的Truthy and falsy.md","filePath":"shopify/storefronts/Liquid中的Truthy and falsy.md"}'),l={name:"shopify/storefronts/Liquid中的Truthy and falsy.md"};function e(t,a,o,c,r,d){return p(),n("div",null,a[0]||(a[0]=[i(`<blockquote><p>首次进入仓库时间：2026-03-11</p></blockquote><h2 id="标题备选" tabindex="-1">标题备选 <a class="header-anchor" href="#标题备选" aria-label="Permalink to &quot;标题备选&quot;">​</a></h2><ol><li>Shopify 开发实战：Liquid 中的 Truthy and Falsy 一篇讲清楚</li><li>手把手梳理 Shopify：Liquid 中的 Truthy and Falsy 的关键用法和避坑点</li><li>做 Shopify 项目别只会改主题，这篇带你搞懂 Liquid 中的 Truthy and Falsy</li></ol><h2 id="摘要" tabindex="-1">摘要 <a class="header-anchor" href="#摘要" aria-label="Permalink to &quot;摘要&quot;">​</a></h2><p>这篇文章适合 Shopify 主题和应用开发者，围绕「Liquid 中的 Truthy and Falsy」梳理核心概念、配置路径和实战注意点，方便项目中快速对照。</p><h2 id="正文" tabindex="-1">正文 <a class="header-anchor" href="#正文" aria-label="Permalink to &quot;正文&quot;">​</a></h2><p>哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；<strong>打好基础才能稳步进阶</strong>，是我始终秉持的学习理念～</p><blockquote><p>📢 我搭建了5000人程序猿专属学习交流群，群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源，关注我并回复 <strong>加群</strong> ，就能加入交流圈啦🚀</p></blockquote><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p><strong>Shopify 项目最容易卡住的地方，往往不是“会不会写代码”，而是主题、应用和后台配置之间的关系没理顺。</strong></p><p>很多同学做 Shopify 开发时，会同时碰到 Liquid、主题目录、Checkout、Metafields、应用后台、性能优化这些概念。单独看不难，放到真实项目里就容易散。</p><p>这篇围绕「Liquid 中的 Truthy and Falsy」把原始笔记整理成更适合阅读和复用的版本，适合做主题开发、应用开发或者接手 Shopify 项目时快速对照。</p><h2 id="shopify-实战整理" tabindex="-1">Shopify 实战整理 <a class="header-anchor" href="#shopify-实战整理" aria-label="Permalink to &quot;Shopify 实战整理&quot;">​</a></h2><p>下面进入 Shopify 相关内容整理。建议大家边看边对照自己的店铺、主题代码和应用后台，很多问题只有放到真实配置里才容易看清楚。</p><p>如果你正在做 Shopify 项目，可以重点留意主题代码、后台配置、应用能力和官方限制之间的边界，很多线上问题都出在这些交界处。</p><p>在 Liquid 中,真值(truthy)和假值(falsy)的规则如下:</p><p>假值 (False) - 只有这两个:</p><ul><li>false - 布尔值 false</li><li>nil - 空值/不存在</li></ul><p>真值 (True) - 除了上面两个,其他都是 true:</p><ul><li>true - 布尔值 true</li><li>0 - ⚠️ 数字 0 是 true(与 JavaScript 不同!)</li><li>&quot;&quot; - ⚠️ 空字符串是 true(与 JavaScript 不同!)</li><li>[] - ⚠️ 空数组是 true(与 JavaScript 不同!)</li><li>任何非零数字</li><li>任何非空字符串</li><li>任何对象</li></ul><p>示例:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>{% if false %}</span></span>
<span class="line"><span>  不会显示</span></span>
<span class="line"><span>{% endif %}</span></span>
<span class="line"><span>{% if nil %}</span></span>
<span class="line"><span>  不会显示</span></span>
<span class="line"><span>{% endif %}</span></span>
<span class="line"><span>{% if 0 %}</span></span>
<span class="line"><span>  会显示! ⚠️ 0 是 true</span></span>
<span class="line"><span>{% endif %}</span></span>
<span class="line"><span>{% if &quot;&quot; %}</span></span>
<span class="line"><span>  会显示! ⚠️ 空字符串是 true</span></span>
<span class="line"><span>{% endif %}</span></span>
<span class="line"><span>{% if &quot;false&quot; %}</span></span>
<span class="line"><span>  会显示! ⚠️ 字符串 &quot;false&quot; 是 true</span></span>
<span class="line"><span>{% endif %}</span></span>
<span class="line"><span>{% if product.title %}</span></span>
<span class="line"><span>  会显示(如果 product.title 存在)</span></span>
<span class="line"><span>{% endif %}</span></span>
<span class="line"><span>{% if product.description %}</span></span>
<span class="line"><span>  会显示(如果 description 存在,即使是空字符串)</span></span>
<span class="line"><span>{% endif %}</span></span></code></pre></div><p>常见陷阱:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- ❌ 检查空字符串 - 不正确 --&gt;</span></span>
<span class="line"><span>{% if product.description %}</span></span>
<span class="line"><span>  &lt;!-- 即使 description 是 &quot;&quot;,也会执行 --&gt;</span></span>
<span class="line"><span>{% endif %}</span></span>
<span class="line"><span>&lt;!-- ✅ 正确检查空字符串 --&gt;</span></span>
<span class="line"><span>{% if product.description != blank %}</span></span>
<span class="line"><span>  &lt;!-- 只有非空才执行 --&gt;</span></span>
<span class="line"><span>{% endif %}</span></span>
<span class="line"><span>&lt;!-- ✅ 或使用 size --&gt;</span></span>
<span class="line"><span>{% if product.description.size &gt; 0 %}</span></span>
<span class="line"><span>  &lt;!-- 只有非空才执行 --&gt;</span></span>
<span class="line"><span>{% endif %}</span></span></code></pre></div><p>特殊关键字:</p><ul><li>blank - 检查是否为 nil、false 或空(空字符串、空数组等)</li><li>empty - 检查字符串或数组是否为空</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>{% if product.description == blank %}</span></span>
<span class="line"><span>  描述为空</span></span>
<span class="line"><span>{% endif %}</span></span>
<span class="line"><span>{% if collection.products == empty %}</span></span>
<span class="line"><span>  产品系列没有产品</span></span>
<span class="line"><span>{% endif %}</span></span></code></pre></div><p>总结:</p><ul><li>Liquid 只有 false 和 nil 是假值</li><li>0、空字符串、空数组都是真值(与 JavaScript 不同!)</li><li>用 blank 或 empty 来检查&quot;空&quot;状态</li></ul><h2 id="写在最后" tabindex="-1">写在最后 <a class="header-anchor" href="#写在最后" aria-label="Permalink to &quot;写在最后&quot;">​</a></h2><p>好啦，今天的分享就到这里！</p><p>💬 互动时间：</p><p>你现在做 Shopify 更常遇到的是主题开发、Checkout 定制、应用接入，还是性能优化？如果你在「Liquid 中的 Truthy and Falsy」上踩过坑，也可以把场景留言出来。</p><p>最后，感谢你看到这里👏</p><p>如果喜欢这篇内容，不妨顺手给小编安排一波👇 <strong>点赞</strong>👍｜<strong>转发</strong>📲｜<strong>推荐</strong>❤️｜<strong>评论</strong>📣</p><p>要是想第一时间蹲到新内容推送，记得给我点个<strong>星标</strong>⭐️</p><p>更多干货内容正在持续填坑中，咱们下期见👋</p><h2 id="标签建议" tabindex="-1">标签建议 <a class="header-anchor" href="#标签建议" aria-label="Permalink to &quot;标签建议&quot;">​</a></h2><p>Shopify、主题开发、独立站</p>`,39)]))}const f=s(l,[["render",e]]);export{h as __pageData,f as default};

import{_ as n,c as a,o as p,ag as l}from"./chunks/framework.DPDPlp3K.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"shopify/storefronts/Liquid中的Truthy and falsy.md","filePath":"shopify/storefronts/Liquid中的Truthy and falsy.md"}'),i={name:"shopify/storefronts/Liquid中的Truthy and falsy.md"};function e(t,s,c,o,d,u){return p(),a("div",null,s[0]||(s[0]=[l(`<p>在 Liquid 中,真值(truthy)和假值(falsy)的规则如下:</p><p>假值 (False) - 只有这两个:</p><ul><li>false - 布尔值 false</li><li>nil - 空值/不存在</li></ul><p>真值 (True) - 除了上面两个,其他都是 true:</p><ul><li>true - 布尔值 true</li><li>0 - ⚠️ 数字 0 是 true(与 JavaScript 不同!)</li><li>&quot;&quot; - ⚠️ 空字符串是 true(与 JavaScript 不同!)</li><li>[] - ⚠️ 空数组是 true(与 JavaScript 不同!)</li><li>任何非零数字</li><li>任何非空字符串</li><li>任何对象</li></ul><p>示例:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>{% if false %}</span></span>
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
<span class="line"><span>{% endif %}</span></span></code></pre></div><p>总结:</p><ul><li>Liquid 只有 false 和 nil 是假值</li><li>0、空字符串、空数组都是真值(与 JavaScript 不同!)</li><li>用 blank 或 empty 来检查&quot;空&quot;状态</li></ul>`,14)]))}const h=n(i,[["render",e]]);export{f as __pageData,h as default};

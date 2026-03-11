import{_ as s,c as n,o as p,ae as e}from"./chunks/framework.Dh1jimFm.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/shopify/storefronts/自定义Page.md","filePath":"docs/shopify/storefronts/自定义Page.md"}'),t={name:"docs/shopify/storefronts/自定义Page.md"};function o(l,a,c,i,d,r){return p(),n("div",null,a[0]||(a[0]=[e(`<h2 id="后台页面配置" tabindex="-1">后台页面配置: <a class="header-anchor" href="#后台页面配置" aria-label="Permalink to &quot;后台页面配置:&quot;">​</a></h2><ol><li><p>创建了一个页面 (在 在线商店 &gt; 页面)</p><ul><li>标题: EcoFlow Compare Models</li><li>Handle: ecoflow-compare-models</li><li>URL: /pages/ecoflow-compare-models</li></ul></li><li><p>使用了自定义模板</p><ul><li>模板文件应该是: templates/page.yg-product-compare.json 或 templates/page.yg-product-compare.liquid</li><li>这个模板引用了 sections/yg-product-compare.liquid</li></ul></li></ol><hr><h2 id="查找完整结构" tabindex="-1">查找完整结构: <a class="header-anchor" href="#查找完整结构" aria-label="Permalink to &quot;查找完整结构:&quot;">​</a></h2><h3 id="检查-1-查看-templates-文件夹" tabindex="-1">检查 1: 查看 templates 文件夹 <a class="header-anchor" href="#检查-1-查看-templates-文件夹" aria-label="Permalink to &quot;检查 1: 查看 templates 文件夹&quot;">​</a></h3><p>应该有这样的文件:</p><p><code>templates/page.yg-product-compare.json</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;sections&quot;: {</span></span>
<span class="line"><span>    &quot;main&quot;: {</span></span>
<span class="line"><span>      &quot;type&quot;: &quot;yg-product-compare&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;order&quot;: [&quot;main&quot;]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>或者</p><p><code>templates/page.yg-product-compare.liquid</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>{% section &#39;yg-product-compare&#39; %}</span></span></code></pre></div><h3 id="检查-2-section-文件" tabindex="-1">检查 2: Section 文件 <a class="header-anchor" href="#检查-2-section-文件" aria-label="Permalink to &quot;检查 2: Section 文件&quot;">​</a></h3><p><code>sections/yg-product-compare.liquid</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>&lt;div class=&quot;product-compare&quot;&gt;</span></span>
<span class="line"><span>  &lt;!-- 产品对比的具体内容 --&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>{% schema %}</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;产品对比&quot;,</span></span>
<span class="line"><span>  &quot;settings&quot;: [...]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>{% endschema %}</span></span></code></pre></div><hr><h2 id="完整流程" tabindex="-1">完整流程: <a class="header-anchor" href="#完整流程" aria-label="Permalink to &quot;完整流程:&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>URL: /pages/ecoflow-compare-models</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>后台页面 (handle: ecoflow-compare-models)</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>分配模板: page.yg-product-compare</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>templates/page.yg-product-compare.json (或 .liquid)</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>调用 section: yg-product-compare</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>sections/yg-product-compare.liquid (最终渲染的文件)</span></span></code></pre></div>`,17)]))}const h=s(t,[["render",o]]);export{m as __pageData,h as default};

import{_ as a,c as n,o as p,ae as t}from"./chunks/framework.Dh1jimFm.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/shopify/storefronts/Alpine.js.md","filePath":"docs/shopify/storefronts/Alpine.js.md"}'),l={name:"docs/shopify/storefronts/Alpine.js.md"};function e(i,s,c,o,r,d){return p(),n("div",null,s[0]||(s[0]=[t(`<p><a href="https://shopify.dev/docs/themes/os20" target="_blank" rel="noreferrer">Shopify Online Store 2.0</a> + <a href="https://alpinejs.dev/start-here" target="_blank" rel="noreferrer">Alpine.js</a> 是非常流行的组合,特别适合现代主题开发。</p><h2 id="为什么-alpine-js-适合-shopify-主题开发" tabindex="-1">为什么 Alpine.js 适合 Shopify 主题开发 <a class="header-anchor" href="#为什么-alpine-js-适合-shopify-主题开发" aria-label="Permalink to &quot;为什么 Alpine.js 适合 Shopify 主题开发&quot;">​</a></h2><ol><li><p>轻量级</p><ul><li>只有 ~15KB,不影响页面性能</li></ul></li><li><p>声明式语法</p><ul><li>类似 Vue.js,易学易用</li></ul></li><li><p>无需构建工具</p><ul><li>直接在 Liquid 中使用</li></ul></li><li><p>响应式</p><ul><li>完美处理购物车、变体选择等交互</li></ul></li><li><p>与 Liquid 配合好</p><ul><li>可以混合使用</li></ul></li></ol><h2 id="常见使用场景" tabindex="-1">常见使用场景 <a class="header-anchor" href="#常见使用场景" aria-label="Permalink to &quot;常见使用场景&quot;">​</a></h2><ol><li>产品变体选择</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>&lt;div x-data=&quot;{</span></span>
<span class="line"><span>  selectedVariant: {{ product.selected_or_first_available_variant | json }},</span></span>
<span class="line"><span>  price: {{ product.selected_or_first_available_variant.price }}</span></span>
<span class="line"><span>}&quot;&gt;</span></span>
<span class="line"><span>  &lt;select x-model=&quot;selectedVariant&quot; @change=&quot;price = $event.target.selectedOptions[0].dataset.price&quot;&gt;</span></span>
<span class="line"><span>    {% for variant in product.variants %}</span></span>
<span class="line"><span>      &lt;option value=&quot;{{ variant.id }}&quot; data-price=&quot;{{ variant.price }}&quot;&gt;</span></span>
<span class="line"><span>        {{ variant.title }}</span></span>
<span class="line"><span>      &lt;/option&gt;</span></span>
<span class="line"><span>    {% endfor %}</span></span>
<span class="line"><span>  &lt;/select&gt;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  &lt;p x-text=&quot;&#39;价格: ¥&#39; + (price / 100).toFixed(2)&quot;&gt;&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><ol start="2"><li>购物车功能</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>&lt;div x-data=&quot;cart()&quot; x-init=&quot;getCart()&quot;&gt;</span></span>
<span class="line"><span>  &lt;button @click=&quot;addToCart({{ product.selected_or_first_available_variant.id }})&quot;&gt;</span></span>
<span class="line"><span>    加入购物车</span></span>
<span class="line"><span>  &lt;/button&gt;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  &lt;div x-show=&quot;cartOpen&quot; @click.away=&quot;cartOpen = false&quot;&gt;</span></span>
<span class="line"><span>    &lt;template x-for=&quot;item in items&quot; :key=&quot;item.id&quot;&gt;</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;span x-text=&quot;item.title&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>        &lt;span x-text=&quot;item.quantity&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/template&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  function cart() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      items: [],</span></span>
<span class="line"><span>      cartOpen: false,</span></span>
<span class="line"><span>      async getCart() {</span></span>
<span class="line"><span>        const res = await fetch(&#39;/cart.js&#39;);</span></span>
<span class="line"><span>        const data = await res.json();</span></span>
<span class="line"><span>        this.items = data.items;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      async addToCart(variantId) {</span></span>
<span class="line"><span>        await fetch(&#39;/cart/add.js&#39;, {</span></span>
<span class="line"><span>          method: &#39;POST&#39;,</span></span>
<span class="line"><span>          headers: {&#39;Content-Type&#39;: &#39;application/json&#39;},</span></span>
<span class="line"><span>          body: JSON.stringify({id: variantId, quantity: 1})</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        await this.getCart();</span></span>
<span class="line"><span>        this.cartOpen = true;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><ol start="3"><li>产品快速查看</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>&lt;div x-data=&quot;{ quickView: false, product: null }&quot;&gt;</span></span>
<span class="line"><span>  {% for product in collection.products %}</span></span>
<span class="line"><span>    &lt;button @click=&quot;quickView = true; product = {{ product | json }}&quot;&gt;</span></span>
<span class="line"><span>      快速查看</span></span>
<span class="line"><span>    &lt;/button&gt;</span></span>
<span class="line"><span>  {% endfor %}</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  &lt;div x-show=&quot;quickView&quot; x-cloak&gt;</span></span>
<span class="line"><span>    &lt;template x-if=&quot;product&quot;&gt;</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;h2 x-text=&quot;product.title&quot;&gt;&lt;/h2&gt;</span></span>
<span class="line"><span>        &lt;p x-text=&quot;product.price&quot;&gt;&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/template&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><ol start="4"><li>筛选和排序</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>&lt;div x-data=&quot;{</span></span>
<span class="line"><span>  products: {{ collection.products | json }},</span></span>
<span class="line"><span>  sortBy: &#39;title&#39;,</span></span>
<span class="line"><span>  get sortedProducts() {</span></span>
<span class="line"><span>    return this.products.sort((a, b) =&gt; </span></span>
<span class="line"><span>      a[this.sortBy] &gt; b[this.sortBy] ? 1 : -1</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}&quot;&gt;</span></span>
<span class="line"><span>  &lt;select x-model=&quot;sortBy&quot;&gt;</span></span>
<span class="line"><span>    &lt;option value=&quot;title&quot;&gt;名称&lt;/option&gt;</span></span>
<span class="line"><span>    &lt;option value=&quot;price&quot;&gt;价格&lt;/option&gt;</span></span>
<span class="line"><span>  &lt;/select&gt;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  &lt;template x-for=&quot;product in sortedProducts&quot; :key=&quot;product.id&quot;&gt;</span></span>
<span class="line"><span>    &lt;div x-text=&quot;product.title&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><ol start="5"><li>手风琴/折叠面板</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>&lt;div x-data=&quot;{ open: false }&quot;&gt;</span></span>
<span class="line"><span>  &lt;button @click=&quot;open = !open&quot;&gt;</span></span>
<span class="line"><span>    产品详情</span></span>
<span class="line"><span>  &lt;/button&gt;</span></span>
<span class="line"><span>  &lt;div x-show=&quot;open&quot; x-collapse&gt;</span></span>
<span class="line"><span>    {{ product.description }}</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>引入 Alpine.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- 在 theme.liquid 的 &lt;/body&gt; 前 --&gt;</span></span>
<span class="line"><span>&lt;script defer src=&quot;https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js&quot;&gt;&lt;/script&gt;</span></span></code></pre></div><p>最佳实践:</p><ul><li>用 Liquid 做服务器端渲染(SEO 友好)</li><li>用 Alpine.js 处理客户端交互</li><li>结合 Shopify Ajax API 实现动态功能</li><li>使用 x-cloak 避免闪烁</li></ul><h2 id="浏览器插件" tabindex="-1">浏览器插件 <a class="header-anchor" href="#浏览器插件" aria-label="Permalink to &quot;浏览器插件&quot;">​</a></h2><p>用于检测、检查和编辑 Chrome 开发者工具中的 AlpineJs 数据和组件。 <a href="https://chromewebstore.google.com/detail/alpinejs-devtools/fopaemeedckajflibkpifppcankfmbhk" target="_blank" rel="noreferrer">https://chromewebstore.google.com/detail/alpinejs-devtools/fopaemeedckajflibkpifppcankfmbhk</a></p>`,20)]))}const h=a(l,[["render",e]]);export{g as __pageData,h as default};

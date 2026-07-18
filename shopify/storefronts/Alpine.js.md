> 首次进入仓库时间：2026-03-11
## 标题备选

1. Shopify 开发实战：Shopify 主题开发中的 Alpine.js 一篇讲清楚
2. 手把手梳理 Shopify：Shopify 主题开发中的 Alpine.js 的关键用法和避坑点
3. 做 Shopify 项目别只会改主题，这篇带你搞懂 Shopify 主题开发中的 Alpine.js

## 摘要

这篇文章适合 Shopify 主题和应用开发者，围绕「Shopify 主题开发中的 Alpine.js」梳理核心概念、配置路径和实战注意点，方便项目中快速对照。

## 正文

哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；**打好基础才能稳步进阶**，是我始终秉持的学习理念～

> 📢 我搭建了5000人程序猿专属学习交流群，群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源，关注我并回复 **加群** ，就能加入交流圈啦🚀

## 前言

**Shopify 项目最容易卡住的地方，往往不是“会不会写代码”，而是主题、应用和后台配置之间的关系没理顺。**

很多同学做 Shopify 开发时，会同时碰到 Liquid、主题目录、Checkout、Metafields、应用后台、性能优化这些概念。单独看不难，放到真实项目里就容易散。

这篇围绕「Shopify 主题开发中的 Alpine.js」把原始笔记整理成更适合阅读和复用的版本，适合做主题开发、应用开发或者接手 Shopify 项目时快速对照。

## Shopify 实战整理

下面进入 Shopify 相关内容整理。建议大家边看边对照自己的店铺、主题代码和应用后台，很多问题只有放到真实配置里才容易看清楚。

如果你正在做 Shopify 项目，可以重点留意主题代码、后台配置、应用能力和官方限制之间的边界，很多线上问题都出在这些交界处。

[Shopify Online Store 2.0](https://shopify.dev/docs/themes/os20) + [Alpine.js](https://alpinejs.dev/start-here) 是非常流行的组合,特别适合现代主题开发。

## 为什么 Alpine.js 适合 Shopify 主题开发

1. 轻量级
    - 只有 ~15KB,不影响页面性能

2. 声明式语法
    - 类似 Vue.js,易学易用

3. 无需构建工具
    - 直接在 Liquid 中使用

4. 响应式
    - 完美处理购物车、变体选择等交互

5. 与 Liquid 配合好
    - 可以混合使用

## 常见使用场景

1. 产品变体选择

```
<div x-data="{
  selectedVariant: {{ product.selected_or_first_available_variant | json }},
  price: {{ product.selected_or_first_available_variant.price }}
}">
  <select x-model="selectedVariant" @change="price = $event.target.selectedOptions[0].dataset.price">
    {% for variant in product.variants %}
      <option value="{{ variant.id }}" data-price="{{ variant.price }}">
        {{ variant.title }}
      </option>
    {% endfor %}
  </select>

  <p x-text="'价格: ¥' + (price / 100).toFixed(2)"></p>
</div>
```

2. 购物车功能

```
<div x-data="cart()" x-init="getCart()">
  <button @click="addToCart({{ product.selected_or_first_available_variant.id }})">
    加入购物车
  </button>

  <div x-show="cartOpen" @click.away="cartOpen = false">
    <template x-for="item in items" :key="item.id">
      <div>
        <span x-text="item.title"></span>
        <span x-text="item.quantity"></span>
      </div>
    </template>
  </div>
</div>
<script>
  function cart() {
    return {
      items: [],
      cartOpen: false,
      async getCart() {
        const res = await fetch('/cart.js');
        const data = await res.json();
        this.items = data.items;
      },
      async addToCart(variantId) {
        await fetch('/cart/add.js', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({id: variantId, quantity: 1})
        });
        await this.getCart();
        this.cartOpen = true;
      }
    }
  }
</script>
```

3. 产品快速查看

```
<div x-data="{ quickView: false, product: null }">
  {% for product in collection.products %}
    <button @click="quickView = true; product = {{ product | json }}">
      快速查看
    </button>
  {% endfor %}

  <div x-show="quickView" x-cloak>
    <template x-if="product">
      <div>
        <h2 x-text="product.title"></h2>
        <p x-text="product.price"></p>
      </div>
    </template>
  </div>
</div>
```

4. 筛选和排序

```
<div x-data="{
  products: {{ collection.products | json }},
  sortBy: 'title',
  get sortedProducts() {
    return this.products.sort((a, b) =>
      a[this.sortBy] > b[this.sortBy] ? 1 : -1
    );
  }
}">
  <select x-model="sortBy">
    <option value="title">名称</option>
    <option value="price">价格</option>
  </select>

  <template x-for="product in sortedProducts" :key="product.id">
    <div x-text="product.title"></div>
  </template>
</div>
```

5. 手风琴/折叠面板

```
<div x-data="{ open: false }">
  <button @click="open = !open">
    产品详情
  </button>
  <div x-show="open" x-collapse>
    {{ product.description }}
  </div>
</div>
```

引入 Alpine.js:

```
<!-- 在 theme.liquid 的 </body> 前 -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

最佳实践:

- 用 Liquid 做服务器端渲染(SEO 友好)
- 用 Alpine.js 处理客户端交互
- 结合 Shopify Ajax API 实现动态功能
- 使用 x-cloak 避免闪烁

## 浏览器插件

用于检测、检查和编辑 Chrome 开发者工具中的 AlpineJs 数据和组件。
https://chromewebstore.google.com/detail/alpinejs-devtools/fopaemeedckajflibkpifppcankfmbhk

## 写在最后

好啦，今天的分享就到这里！

💬 互动时间：

你现在做 Shopify 更常遇到的是主题开发、Checkout 定制、应用接入，还是性能优化？如果你在「Shopify 主题开发中的 Alpine.js」上踩过坑，也可以把场景留言出来。

最后，感谢你看到这里👏

如果喜欢这篇内容，不妨顺手给小编安排一波👇
**点赞**👍｜**转发**📲｜**推荐**❤️｜**评论**📣

要是想第一时间蹲到新内容推送，记得给我点个**星标**⭐️

更多干货内容正在持续填坑中，咱们下期见👋

## 标签建议

Shopify、主题开发、独立站

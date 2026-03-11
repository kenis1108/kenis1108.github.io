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

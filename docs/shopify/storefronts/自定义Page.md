## 后台页面配置:

1. 创建了一个页面 (在 在线商店 > 页面)
    - 标题: EcoFlow Compare Models
    - Handle: ecoflow-compare-models
    - URL: /pages/ecoflow-compare-models

2. 使用了自定义模板
    - 模板文件应该是: templates/page.yg-product-compare.json 或 templates/page.yg-product-compare.liquid
    - 这个模板引用了 sections/yg-product-compare.liquid

---

## 查找完整结构:

### 检查 1: 查看 templates 文件夹

应该有这样的文件:

`templates/page.yg-product-compare.json`

```
{
  "sections": {
    "main": {
      "type": "yg-product-compare"
    }
  },
  "order": ["main"]
}
```

或者

`templates/page.yg-product-compare.liquid`

```
{% section 'yg-product-compare' %}
```

### 检查 2: Section 文件

`sections/yg-product-compare.liquid`

```
<div class="product-compare">
  <!-- 产品对比的具体内容 -->
</div>
{% schema %}
{
  "name": "产品对比",
  "settings": [...]
}
{% endschema %}
```

---

## 完整流程:

```
URL: /pages/ecoflow-compare-models
  ↓
后台页面 (handle: ecoflow-compare-models)
  ↓
分配模板: page.yg-product-compare
  ↓
templates/page.yg-product-compare.json (或 .liquid)
  ↓
调用 section: yg-product-compare
  ↓
sections/yg-product-compare.liquid (最终渲染的文件)
```
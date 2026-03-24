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
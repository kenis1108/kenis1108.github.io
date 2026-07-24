# Shopify

## GA4

https://chromewebstore.google.com/detail/adswerve-datalayer-inspec/kmcbdogdandhihllalknlcjfpdjcleom


## SEO

https://chromewebstore.google.com/detail/detailed-seo-extension/pfjdepjjfjjahkjfpkcgfmfhmnakjfba

## 什么是电商漏斗

在 Shopify 语境里，漏斗（funnel） 指的是用户从进店到下单的转化路径，以及每一步有多少人留下来、多少人流失。

常见电商漏斗大致是：

1. Session / 进站 — 有人打开店铺
2. Product / 看商品 — 进入 PDP
3. Add to cart / 加购
4. Checkout / 进结账
5. Purchase / 完成支付

每一层人数通常会变少，画出来像漏斗，所以叫漏斗。看的是哪一步掉得最多（比如加购多、结账少），用来定位问题。

Shopify 后台里也会用这个概念，例如 Analytics 里的转化相关报表，以及 ShopifyQL 里的 search / recommendation conversion funnel（搜索漏斗、推荐漏斗等）。

## 对接Splitit payment分期支付

https://developers.splitit.com/mcp-servers/docs

## shopify webhook

https://smee.io/ -> Start a new channel -> 保持页面打开

Settings → Notifications → Webhooks → Create webhook
Event：Order creation
Format：JSON
URL：上面的 smee channel 地址

下一笔测试单完成后，smee 页面就会出现完整 payload

Draft order 的 customAttributes 付款后会出现在订单 webhook 的 note_attributes 里

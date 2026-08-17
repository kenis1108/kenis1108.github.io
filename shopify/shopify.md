# Shopify

## 响应式布局

https://chromewebstore.google.com/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb

## GA4

https://chromewebstore.google.com/detail/adswerve-datalayer-inspec/kmcbdogdandhihllalknlcjfpdjcleom

## Shopify Web Pixel

https://shopify.dev/docs/apps/build/marketing/pixels

分为 Custom Pixel and App Pixel 

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

## 对接PayPal先用后付

https://apps.shopify.com/paypal-payments-studio

## shopify webhook 测试

公共webhook https://smee.io/ -> Start a new channel -> 保持页面打开

Admin -> Settings → Notifications → Webhooks → Create webhook
Event：Order creation
Format：JSON
URL：上面的 smee channel 地址

下一笔测试单完成后，smee 页面就会出现完整 payload

Draft order 的 customAttributes 付款后会出现在订单 webhook 的 note_attributes 里

## 直播

https://apps.shopify.com/firework

https://docs.firework.com/firework-for-developers

https://docs.firework.com/firework-for-developers/web/telemetry-console

## 千易

居然是通过rest api获取订单信息，我以为是webhook呢

<img width="842" height="168" alt="img_v3_02143_9d2db045-d81e-4aee-afd7-2ef5c098726g" src="https://github.com/user-attachments/assets/0b4c274c-be54-4d14-b411-2be1c2d09a6b" />


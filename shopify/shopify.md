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

## 抽奖活动案例

https://claspo.io/template/branching-quiz-popup/

https://www.digioh.com/brand-example/evereden

## AVADA 是什么

AVADA 是面向 Shopify 商家的第三方应用服务商（Avada Group），提供 SEO、图片优化、页面加速等工具。店铺安装后，应用会向主题注入自己的代码，在后台即可配置，无需开发从零写加速逻辑。

页面加速方案: 先让页面内容和样式出来，再跑非必要的第三方脚本。 聊天、弹窗、评价、支付横幅等应用都会往页面塞 JS；这些脚本一上来就执行，会堵住主线程、拖慢首屏。AVADA 把这类脚本延后，等用户滚动、点击或点按时再执行。

问题: JS 延迟会改写 Shopify ScriptTag。实现上常把 type="text/javascript" 改成浏览器不执行的类型（如 lightJs），等交互后再改回并执行。好处是测速分数上去；代价是 Splitit 这类必须尽早出现的横幅可能一直不跑。正确做法是关掉 JS delay，或把 web-components.splitit.com、shop-server.splitit.com 设为立即加载，而不是删除 ScriptTag。



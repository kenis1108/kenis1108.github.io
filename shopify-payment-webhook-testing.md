# Shopify 支付相关 Webhook 测试教程

本文说明如何在开发/测试环境中订阅支付成功类 Webhook、用测试支付造单，并验证外部服务能收到订单数据（含自定义字段）。适合将 Shopify 订单同步到 OMS、权益系统、中台等场景。

---

## 1. 目标与推荐事件

| 目标 | 推荐 Topic | 说明 |
|------|------------|------|
| 付款成功后推送 | `orders/paid` | 订单进入已付款状态时触发，最贴「支付成功」 |
| 订单创建（未必已付） | `orders/create` | 含 COD 等未立即付款场景，勿单独当「已付款」 |
| 交易明细级 | `order_transactions/create` | 成功/失败/错误交易都会推，适合对账细节 |

**本教程以 `orders/paid` 为主。**

数据流：

```text
前台测试支付成功
  → Shopify 创建 Paid 订单
  → POST HTTPS 到你的接收地址（Webhook）
  → 验签 → 回 200 → 异步转发外部服务
```

参考：[About webhooks](https://shopify.dev/docs/apps/build/webhooks)

---

## 2. 前置条件

- 开发店（Development store）或可开启测试支付的店铺
- 公网可达的 HTTPS 接收端（生产/中台 URL，或联调时用隧道）
- 以下之一：
  - **自定义 App**（推荐生产）：Partner / Dev Dashboard + `shopify.app.toml`
  - **店铺 Admin Webhooks**（联调最快）：Settings → Notifications → Webhooks

本地临时抓包可用 [webhook.site](https://webhook.site) 或 Cloudflare Tunnel，**不要用于生产**。

---

## 3. 订阅 `orders/paid`

### 3.1 方式 A：自定义 App（推荐）

1. 安装 [Shopify CLI](https://shopify.dev/docs/api/shopify-cli)，执行 `shopify app init` 创建 App。
2. 在 `shopify.app.toml` 配置权限与订阅：

```toml
[access_scopes]
scopes = "read_orders"

[webhooks]
api_version = "2026-04"

[[webhooks.subscriptions]]
topics = ["orders/paid"]
uri = "/webhooks/orders-paid"
# 若直接打到中台，使用绝对地址：
# uri = "https://your-oms.example.com/shopify/orders-paid"
```

3. 部署接收服务为 HTTPS，设置 App 的 `application_url`。
4. 执行 `shopify app deploy` 发布订阅。
5. 在目标店铺安装该 App。

相对路径 `uri` = `application_url` + 路径。需要邮箱等受保护客户数据时，在 Partner / Dev Dashboard 申请 **Protected customer data**。

参考：[Create a webhook subscription](https://shopify.dev/docs/apps/build/webhooks/get-started)

### 3.2 方式 B：Admin 手动订阅（联调）

1. Shopify Admin → **Settings** → **Notifications**
2. 页面底部 **Webhooks** → **Create webhook**
3. Event 选择 **Order payment**（对应 `orders/paid`）
4. Format：JSON；URL：你的 HTTPS 地址 → Save

适合快速验证；多店/长期维护优先用 App 配置。

---

## 4. 接收端最小实现

要求：

1. 使用 **raw body** 校验 `X-Shopify-Hmac-Sha256`（App 的 Client secret）
2. 验签通过后 **尽快返回 HTTP 200**（慢或非 2xx 会触发重试）
3. 用 `X-Shopify-Webhook-Id` 做幂等
4. 异步再调外部 OMS / 权益接口

Node.js 示例：

```js
import crypto from "node:crypto";
import express from "express";

const app = express();

app.post(
  "/shopify/orders-paid",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const hmacHeader = req.get("X-Shopify-Hmac-Sha256") || "";
    const digest = crypto
      .createHmac("sha256", process.env.SHOPIFY_API_SECRET)
      .update(req.body)
      .digest("base64");

    const a = Buffer.from(digest);
    const b = Buffer.from(hmacHeader);
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
      return res.status(401).send("Unauthorized");
    }

    res.status(200).send("OK");

    const order = JSON.parse(req.body.toString("utf8"));
    const webhookId = req.get("X-Shopify-Webhook-Id");

    // TODO: 按 webhookId 幂等去重后，转发外部服务
    await fetch(process.env.OMS_URL + "/orders/paid", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        shopify_order_id: order.id,
        shopify_order_name: order.name,
        email: order.email,
        note_attributes: order.note_attributes,
        line_items: order.line_items,
        financial_status: order.financial_status,
        webhook_id: webhookId,
      }),
    });
  }
);

app.listen(process.env.PORT || 3000);
```

HMAC 说明：[Order webhooks](https://shopify.dev/docs/agents/orders/order-webhooks)

---

## 5. 如何模拟支付（制造真实 `orders/paid`）

要触发支付相关 Webhook，需要产生一笔 **Paid** 订单。开发店不能随意刷真卡，请用测试网关。

### 5.1 Bogus Gateway / Test payment gateway（开发店首选）

**启用：**

1. Admin → **Settings** → **Payments**
2. 停用其他真实支付方式（或仅保留测试网关）
3. 添加并启用 **Bogus Gateway**（界面也可能写作 Shopify 的 Test payment gateway）

**前台下单：**

1. 加购商品 → 进入 Checkout  
2. 填写邮箱、地址（可测自定义 attribute，见第 6 节）  
3. 支付区使用测试卡规则（Bogus 典型规则）：

| 期望结果 | 卡号填写 |
|----------|----------|
| 支付成功 | `1` |
| 支付失败 | `2` |
| 异常 | `3` |

姓名、有效期（未来日期）、CVV 可随意填写，提交支付。

成功后：

- Admin → **Orders** 能看到 Paid 订单  
- 你的 `orders/paid` 接收端应收到 POST  

官方说明：[Placing a test order](https://help.shopify.com/en/manual/checkout-settings/test-orders)  
开发店支付限制：[Changelog](https://shopify.dev/changelog/changes-to-order-and-payment-testing-on-all-development-stores)

### 5.2 Shopify Payments Test Mode（已开通 Shopify Payments 时）

**不要在生产店长时间开 Test mode**（真实客户可能也走测试通道）。

**启用：**

1. **Settings** → **Payments** → Shopify Payments → **Manage**  
2. 勾选 **Enable test mode** → Save  

**成功交易示例卡号**（详见 [Testing Shopify Payments](https://help.shopify.com/en/manual/payments/shopify-payments/testing-shopify-payments)）：

| 卡种 | 测试卡号 |
|------|----------|
| Visa | `4242424242424242` |
| Mastercard | `5555555555554444` |
| American Express | `378282246310005` |

- Name：至少两个单词  
- Expiry：任意未来日期  
- CVC：3 位（Amex 4 位）

失败场景示例：`4000000000000002`（generic declined）等，完整列表见官方文档。

测完务必 **关闭 Test mode**。

### 5.3 Admin 造单（不经过 Checkout）

Admin → **Orders** → Create order → 添加商品 → **Mark as paid**。

可触发部分订单类 Webhook，但**不会完整模拟 Checkout 填写与 cart attributes 路径**。联调「结账字段 + 自定义属性」时，仍应用第 5.1 / 5.2 走前台 Checkout。

---

## 6. 自定义字段如何出现在 Webhook

Checkout 页面上的自定义数据，只有**落存到订单**后，才会出现在 `orders/paid` payload 中。

| 写入方式 | 订单中的位置 | Webhook 取值 |
|----------|--------------|--------------|
| Cart attributes / `?attributes[sn]=` | `note_attributes` | `order.note_attributes` |
| Line item properties | 行属性 | `line_items[].properties` |
| Checkout UI Extension → metafields | Order / line metafields | REST 载荷常不全，需用 Order ID 再查 Admin GraphQL |
| 仅前端临时状态、未落库 | — | **收不到** |

延保 SN 示例（进 Checkout 前）：

```text
https://{shop}/cart/{variant_id}:1?attributes[sn]=ABC123456
```

下单成功后，在 Webhook JSON 中应能看到类似：

```json
"note_attributes": [
  { "name": "sn", "value": "ABC123456" }
]
```

订阅时**不要**随意配置 `include_fields` 裁剪字段，否则会丢自定义内容。若必须读 order metafields：先收 Webhook 拿 `id`，再 GraphQL 查询补齐后转发。

---

## 7. 端到端测试清单

按顺序执行：

1. [ ] 接收端已部署 HTTPS，日志可观察  
2. [ ] 已订阅 `orders/paid`（App deploy 或 Admin Webhooks）  
3. [ ] App 已安装到测试店（App 方式）  
4. [ ] 已启用 Bogus / Shopify Payments Test mode  
5. [ ] （可选）加购链接带上 `attributes[sn]=TEST-SN-001`  
6. [ ] 前台用测试卡完成一笔成功支付  
7. [ ] Admin → Orders 订单为 Paid，金额与测试 SKU 正确  
8. [ ] 接收端日志：HTTP 200、HMAC 通过、解析出 `id` / `name`  
9. [ ] `note_attributes` / `properties` 中可见自定义字段  
10. [ ] 外部 OMS/权益接口收到转发，且按 `webhook_id` 或 `order.id` 幂等  
11. [ ] Shopify Admin Webhooks 投递记录无失败重试堆积  
12. [ ] （Shopify Payments）关闭 Test mode；开发店可继续保留 Bogus  

---

## 8. 常见问题

### 收不到 Webhook

- URL 非 HTTPS、证书无效、防火墙拦截  
- 未安装 App / 订阅未 deploy  
- 返回非 2xx 或超时，被判定失败（查看 Admin 投递日志）  
- 订阅的是 `orders/create` 却用了未付款流程，没有进入 Paid  

### HMAC 一直失败

- 未使用 raw body（先 `JSON.parse` 再验签会错）  
- 用了错误的 secret（必须是该 App 的 Client secret）  
- 多 App / 多店混用 secret  

### 有订单但没有自定义字段

- 下单前未写入 cart attributes / line properties / metafields  
- Webhook 配置了字段过滤  
- 字段只在 Checkout UI 展示，未调用 Attribute / Metafield API 落库  

### 开发店无法用真实支付方式

属平台限制：请使用 Bogus / 支付渠道 Test mode。需要真卡链路时，需把店转到付费套餐并谨慎使用，事后退款可能产生手续费。

### 重复推送

Shopify 会重试失败投递；业务侧用 `X-Shopify-Webhook-Id` 或 `order.id` + 业务动作去重。

---

## 9. 推荐联调组合（小结）

| 环境 | 支付模拟 | 订阅方式 | 验证重点 |
|------|----------|----------|----------|
| Partner 开发店 | Bogus（卡号 `1`） | App `orders/paid` 或 Admin Webhook | HMAC、Order ID、自定义 attribute |
| 已开 Shopify Payments 的测试店 | Test mode + `4242…` | 同上 | 与真实支付栈接近；测完关 Test mode |
| 仅验证接收代码 | webhook.site 看 payload | Admin 临时 Webhook | 字段结构；不验业务落库 |

---

## 10. 相关链接

- [About webhooks](https://shopify.dev/docs/apps/build/webhooks)  
- [Create a webhook subscription](https://shopify.dev/docs/apps/build/webhooks/get-started)  
- [Placing a test order](https://help.shopify.com/en/manual/checkout-settings/test-orders)  
- [Testing Shopify Payments](https://help.shopify.com/en/manual/payments/shopify-payments/testing-shopify-payments)  
- [Order webhooks / HMAC](https://shopify.dev/docs/agents/orders/order-webhooks)  

---

## 修订记录

| 日期 | 说明 |
|------|------|
| 2026-07-15 | 初稿：支付 Webhook 订阅、测试支付、自定义字段与联调清单 |


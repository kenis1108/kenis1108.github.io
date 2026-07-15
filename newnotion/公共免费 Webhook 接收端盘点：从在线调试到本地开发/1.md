# 公共免费 Webhook 接收端盘点：从在线调试到本地开发

Webhook 已经成为系统间实时通信的事实标准，但在本地开发环境中测试 Webhook 接收逻辑却始终面临一个根本性挑战：**你的开发机器位于 NAT 之后，没有公网 IP，互联网上的服务无法直接将事件通知发送给你**。本文系统梳理目前可用的公共免费 Webhook 接收端方案，帮助你快速选择适合自己场景的工具。

---

## 一、在线接收服务：即开即用，无需部署

这类服务直接在浏览器中访问，就能获得一个临时的公网 URL。所有发往该地址的请求都会实时展示在网页上，非常适合快速查看 Webhook 的请求内容（Headers、Body 等）。

### 1. Webhook.site

**Webhook.site** 是目前最流行的免费 Webhook 调试工具，使用方式极为简单：打开网站，系统会自动生成一个唯一的测试 URL，复制即可使用。

- **核心功能**：实时捕获和展示所有传入的 HTTP 请求，包括请求头、请求体、请求方法等完整信息
- **免费限制**：免费用户最多存储 100 条请求记录
- **扩展能力**：提供 REST API，支持通过 API Key 认证进行更复杂的自动化操作，支持创建和管理 Webhook URL、检索请求数据、自定义 Actions 和 Subscriptions
- **适用场景**：快速验证第三方服务的 Webhook 配置是否正确，在将 Webhook 指向生产环境前检查 Payload 结构

### 2. Zhook.dev

**Zhook** 是一个值得关注的免费 Webhook 服务，它有一项独特的能力：**支持将 Webhook 转换为 MQTT 消息**，为 IoT 等场景提供了 HTTP 到 MQTT 的桥梁。

- **免费策略**：面向开发者完全免费，无需信用卡，获取 Client Key 即可使用
- **技术特点**：提供官方 JavaScript/TypeScript 客户端，通过 WebSocket 连接实现实时事件投递，支持自动重连和指数退避
- **适用场景**：需要将 Webhook 事件进一步路由到 MQTT 协议的场景，或需要在 Node.js 应用中集成 Webhook 接收能力的开发者

### 3. 其他在线服务

部分厂商文档中也会提及一些测试用 Webhook 接收服务，例如瞻博网络（Juniper Networks）在其官方文档中直接推荐使用公共免费 Webhook 接收器来测试 Webhook 配置。这些服务通常提供临时 URL，收到的数据会在浏览器关闭后清除。

---

## 二、本地调试代理工具：将 Webhook 转发到 localhost

在线服务适合查看 Webhook“发来了什么”，但如果你需要在本地代码中实际处理并响应 Webhook，就需要借助本地调试代理工具。这类工具提供一个公网 URL，收到请求后会通过**隧道**技术转发到你本地正在运行的服务上。

### 1. smee.io：轻量级 Webhook 转发代理

**smee.io** 是专门解决“如何让互联网服务将事件通知发送到本地开发机器”这一痛点的工具。它采用 **Server-Sent Events（SSE）** 技术在服务端和本地客户端之间维持持久连接，将公网收到的 Webhook 请求推送到本地。

**工作原理**：

1. 访问 smee.io 点击 “Start a new channel” 获得唯一 URL
2. 在本地安装 smee-client：`npm install --global smee-client`
3. 启动转发：`smee --url https://smee.io/YourChannelID --path /webhook --port 3000`

**实际应用案例**：
- **Port 文档**中推荐使用 smee.io 来调试 Webhook Self-Service Actions，将 Port 发送的 Webhook 请求转发到 localhost
- **Electron 的 Trop 项目**中，开发者在配置 GitHub App 时使用 smee.io 将 Webhook 代理到本地开发环境
- **Jenkins/ArgoCD 集成**：在企业防火墙后的 CI/CD 工具无法直接接收 GitHub 等外部 Webhook 时，smee.io 可以作为桥接代理

**注意**：smee.io 仅用于开发测试，不适合生产环境长期使用。

### 2. ngrok：通用内网穿透工具

**ngrok** 是功能最强大的通用隧道工具，不仅仅是 Webhook 调试，还能用来临时分享本地网站、SSH 服务等。它给你的本地服务器分配一个公网 HTTPS 端点，Webhook 提供商可以正常向该地址投递事件。

**核心优势**：
- **Traffic Inspector**：内置流量检查器，实时查看每个 Webhook 请求的 Headers、Body 和 Response，无需在应用中添加日志
- **请求重放**：可以直接在 Traffic Inspector 中重放失败的 Webhook 请求，无需等待提供商重试，大幅提升开发效率
- **Webhook 签名验证**：支持通过 Traffic Policy 在请求到达应用前验证 Webhook 签名（支持 GitHub、Stripe、Shopify、Slack、Twilio 等提供商），验证失败自动返回 403
- **快速开始**：`ngrok http 8080` 即可获得公网 URL

**安全提示**：免费版每月限制 500 次 Webhook 验证，如需更多需升级付费套餐。

### 3. 自建简单接收端 + ngrok

对于希望完全自控的开发者，也可以本地启动一个简单的 HTTP 服务器接收 Webhook，再配合 ngrok 暴露到公网。例如 `simple-webhook-tester` 这个开源项目提供了一个 FastAPI 服务器，收到请求后会记录所有 Headers 和 Body，便于调试。

---

## 三、方案对比与选择建议

| 方案 | 核心价值 | 适合场景 | 限制 |
| :--- | :--- | :--- | :--- |
| **Webhook.site** | 在线查看请求内容 | 快速验证 Webhook Payload 结构 | 免费仅存 100 条 |
| **Zhook** | Webhook → MQTT 转换 | IoT 场景、需要消息路由 | 较新服务 |
| **smee.io** | 轻量级转发到 localhost | 本地代码调试 Webhook 处理逻辑 | 仅开发测试用 |
| **ngrok** | 功能全面的内网穿透 | 需要 HTTPS、签名验证、请求重放 | 验证功能有次数限制 |

**选择指南**：
- **只是想看看 Webhook 发来了什么**：Webhook.site，开箱即用
- **需要在本地代码中打断点调试**：smee.io + 本地 Webhook Server
- **需要 HTTPS、签名验证、请求重放等高级功能**：ngrok
- **需要将 Webhook 事件路由到 MQTT 协议**：Zhook

---

## 四、安全提醒

使用公共 Webhook 接收端时需注意：
1. **仅用于开发测试**：所有公共服务均不推荐在生产环境长期依赖
2. **及时清理测试配置**：测试完成后，务必从第三方服务中删除测试 Webhook 配置，否则服务会持续推送请求，可能导致测试接收方将你的 IP 列入黑名单
3. **Webhook 签名验证**：生产环境中必须在代码中验证 Webhook 签名（如 GitHub 的 `X-Hub-Signature`），确保请求来源合法

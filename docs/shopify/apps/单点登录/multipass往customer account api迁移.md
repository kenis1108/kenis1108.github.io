Shopify 正在下线旧版 Customer Accounts（Classic），Multipass 依赖于旧版账户体系，一旦下线，用户将无法通过你们自制的用户中心登录。

新方案：Customer Account API（OAuth 2.0 + PKCE）
Shopify 推出的新方案是 Customer Account API，采用标准的 OAuth 2.0 / OIDC 协议取代 Multipass。

新旧对比
项目	旧方案（Multipass）	新方案（Customer Account API）
协议	自定义 Token（AES + HMAC）	OAuth 2.0 + PKCE（标准 OIDC）
安全性	依赖共享密钥	每次请求独立认证，更安全
适用计划	Shopify Plus 专属	所有 Headless/Hydrogen 商店
SSO	支持	支持（单点登录体验更好）
登录方式	有密码	支持无密码登录
需要做的改造（概述）
Step 1：在 Shopify Admin → Settings → Customer Accounts 切换为新版账户

Step 2：安装 Headless Sales Channel，配置 Customer Account API，获取 client_id 和 endpoints（Authorization / Token / Logout URL）

Step 3：在自建用户中心实现 OAuth 2.0 Authorization Code + PKCE 流程：

用户点击登录
  → 跳转到 Shopify Authorization endpoint（带 client_id, scope, code_challenge 等参数）
  → 用户在 Shopify 完成登录
  → 回调到你们的 redirect_uri（带 authorization_code）
  → 用 code 换取 access_token（POST 到 Token endpoint）
  → 用 access_token 调用 Customer Account API 获取客户数据
参考文档：

[Customer Account API 入门](https://shopify.dev/docs/storefronts/headless/building-with-the-customer-account-api/getting-started)
[OAuth 2.0 认证完整教程](https://shopify.dev/docs/storefronts/headless/building-with-the-customer-account-api/authenticate-customers)
[Multipass 文档](https://shopify.dev/docs/api/multipass)

对你们项目的影响评估
你们目前有 /sections/ppsp-how-it-works.liquid 等主题文件——主要影响点是：

登录入口链接：目前如果有 Multipass Token 生成逻辑（通常在后端），需要替换为 OAuth 授权 URL
Customer Account Page (/account)：新版 Customer Accounts 的 URL 结构可能有变化
后端 Token 生成服务：Multipass 的后端代码需要替换为 OAuth 2.0 PKCE 流程
下面是用 **Admin GraphQL** 查询店铺 customer accounts 版本的操作说明。

## 先纠正一下查询语句

你示例里的 `customerAccounts` 不是根查询字段。正确写法是查 `shop.customerAccountsV2`：

```graphql
query GetCustomerAccountsVersion {
  shop {
    customerAccountsV2 {
      customerAccountsVersion
      loginRequiredAtCheckout
      loginLinksVisibleOnStorefrontAndCheckout
      url
    }
  }
}
```

文档：
- [CustomerAccountsV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerAccountsV2)
- [CustomerAccountsVersion 枚举](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerAccountsVersion)

## 怎么执行这个查询

有三种常用方式，按方便程度排序：

### 方式一：Shopify GraphiQL App（最简单）

适合快速查一次，不需要本地开发环境。

1. 在 [Shopify App Store 安装 GraphiQL App](https://apps.shopify.com/graphiql-app)
2. 打开 App，选择要查询的店铺（如 `ca.ecoflow.com` 对应的 store）
3. 把上面的 query 粘贴进去，点 **Run**
4. 看返回结果

文档：[GraphiQL for the Admin API](https://shopify.dev/docs/api/usage/api-exploration/admin-graphiql-explorer)

### 方式二：Shopify CLI（如果你在开发 App）

适合已有 Shopify App 项目、且 App 已安装到目标店铺的情况。

```bash
# 在 app 项目根目录
cd /Users/ken.huang1/Documents/repo/ecoflow-checkout-app

shopify app execute --store your-store.myshopify.com --query '
{
  shop {
    customerAccountsV2 {
      customerAccountsVersion
    }
  }
}'
```

或在 `shopify app dev` 运行时按 **`g`** 打开本地 GraphiQL，以当前 App 的权限执行查询。

文档：[GraphQL Admin API in Shopify CLI](https://shopify.dev/docs/api/usage/api-exploration/admin-cli-app-execute)

### 方式三：curl + Admin API Access Token

适合已有 Custom App 或 Private App 的 access token：

```bash
curl -X POST \
  "https://YOUR-STORE.myshopify.com/admin/api/2026-01/graphql.json" \
  -H "Content-Type: application/json" \
  -H "X-Shopify-Access-Token: YOUR_ACCESS_TOKEN" \
  -d '{"query":"{ shop { customerAccountsV2 { customerAccountsVersion } } }"}'
```

把 `YOUR-STORE` 和 `YOUR_ACCESS_TOKEN` 换成实际值。

## 如何解读结果

```json
{
  "data": {
    "shop": {
      "customerAccountsV2": {
        "customerAccountsVersion": "CLASSIC"
      }
    }
  }
}
```

| 返回值 | 含义 |
|--------|------|
| `CLASSIC` | **Legacy customer accounts**（旧版客户账户） |
| `NEW_CUSTOMER_ACCOUNTS` | **New customer accounts**（新版客户账户） |

## 不用 GraphQL 的替代方式

在 Shopify Admin 后台也可以直接看：

**Settings → Customer accounts**

- 显示 "Customer accounts" 且可配置新版功能 → 通常是 New customer accounts
- 显示 "Classic customer accounts" 或旧版登录页 → Legacy

GraphQL 的优势是：可编程、可批量查多个店铺、适合在 App 里做自动判断。

---

如果你告诉我具体要查哪家店（比如 CA 站），以及你更倾向用 GraphiQL App 还是 CLI，我可以按你的环境写一条可直接复制的命令。

# Shopify Web Pixel

[https://shopify.dev/docs/api/web-pixels-api/standard-events](https://shopify.dev/docs/api/web-pixels-api/standard-events)

Pixel Helper 是什么

```text
Pixel Helper
  ____  _                 _  __
 / ___|| |__   ___  _ __ (_)/ _|_   _
 \___ \| '_ \ / _ \| '_ \| | |_| | | |
  ___) | | | | (_) | |_) | |  _| |_| |
 |____/|_| |_|\___/| .__/|_|_|  \__, |
  ____  _          |_| _   _    |___/
 |  _ \(_)_  _____| | | | | | ___| |_ __   ___ _ __
 | |_) | \ \/ / _ \ | | |_| |/ _ \ | '_ \ / _ \ '__|
 |  __/| |>  <  __/ | |  _  |  __/ | |_) |  __/ |
 |_|   |_/_/\_\___|_| |_| |_|\___|_| .__/ \___|_|
                                   |_|
```

Settings -> Customer events -> Add custom pixel

测试代码

```javascript
analytics.subscribe('product_added_to_cart', (event) => {
  const cartLine = event.data?.cartLine;
  const href = event.context?.document?.location?.href || '';

  console.log('[Pixel] product_added_to_cart', {
    event_name: event.name,
    timestamp: event.timestamp,
    clientId: event.clientId,
    page_url: href,
    is_checkout: /\/checkouts\//.test(href),
    cartLine: cartLine ? {
      quantity: cartLine.quantity,
      cost: cartLine.cost?.totalAmount,
      merchandise: {
        id: cartLine.merchandise?.id,
        title: cartLine.merchandise?.title,
        product_id: cartLine.merchandise?.product?.id,
        product_title: cartLine.merchandise?.product?.title,
        price: cartLine.merchandise?.price,
      },
    } : null,
    raw: event,
  });
});

// 兜底：打印所有标准事件，方便确认 checkout 实际触发了哪些
analytics.subscribe('all_standard_events', (event) => {
  const href = event.context?.document?.location?.href || '';

  console.log('[Pixel] all_standard_events', {
    event_name: event.name,
    timestamp: event.timestamp,
    clientId: event.clientId,
    page_url: href,
    is_checkout: /\/checkouts\//.test(href),
    data: event.data,
  });
});
```

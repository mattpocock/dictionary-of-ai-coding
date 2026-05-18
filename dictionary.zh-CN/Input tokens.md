---
description: harness 在每次 model provider request 中发送的 token。计费通常低于 output tokens。
---

[harness](./Harness.md) 在每次[模型提供商请求](./Model%20provider%20request.md)中发送的 [token](./Token.md)。计费通常低于[输出 token](./Output%20tokens.md)。

_用法：_

“账单很高，但 [agent](./Agent.md) 明明没写多少东西。”

“高的是 input tokens。每个[轮次](./Turn.md)都会重新发送整个[会话](./Session.md)。没有[前缀缓存](./Prefix%20cache.md)，你每次请求都在为历史重新付费。”

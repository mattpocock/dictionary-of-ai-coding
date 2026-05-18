---
description: 提供商通过 prefix cache 从上一次请求中缓存的 input tokens，计费低很多。
---

[模型提供商](./Model%20provider.md)从之前的[模型提供商请求](./Model%20provider%20request.md)中缓存下来的[输入 token](./Input%20tokens.md)，因此不必重新处理它们。当连续请求共享前缀时，提供商会通过[前缀缓存](./Prefix%20cache.md)复用工作，并以更低价格计费缓存部分。这是让长[会话](./Session.md)变得可负担的杠杆；没有它，每个[轮次](./Turn.md)都会为全部历史重新付费。

_用法：_

“长会话成本太狠了，一个重构八美元。”

“看 cache tokens。如果 [harness](./Harness.md) 在轮次之间重排[系统提示](./System%20prompt.md)或文件，前缀会断，你就会为每个请求按完整输入价格付费。”

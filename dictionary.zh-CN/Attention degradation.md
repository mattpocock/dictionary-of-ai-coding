---
description: session 变长时，每个 token 的 attention budget 会摊到更多竞争者上；有意义关系上的信号变弱。
---

随着[会话](./Session.md)变长，每个 [token](./Token.md) 的[注意力预算](./Attention%20budget.md)会被摊到更多竞争者上。任何一个[有意义关系](./Attention%20relationship.md)上的信号都会变弱；无关[上下文](./Context.md)里的噪音会挤进来。同一个[模型](./Model.md)、同一组[参数](./Parameters.md)，只是同一只碗里有更多嘴在抢。它是 smart zone / dumb [zone effect](./Smart%20zone.md) 的原因。

_用法：_

“它已经深陷笨区，开始编类型文件里没有的泛型。”

“注意力退化。类型定义仍在 context 里，但它们的信号被我们后来加入的东西埋住了。[清空](./Clearing.md)后重新加载。”

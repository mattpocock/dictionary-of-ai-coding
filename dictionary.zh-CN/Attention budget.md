---
description: 每个 token 都有有限影响力，可以分配给上下文其他部分。它是逐 token 的，不会随上下文变长而增加。
---

每个 [token](./Token.md) 都有有限的影响力，可以分配给[上下文](./Context.md)中的其他部分。对[某个关系](./Attention%20relationship.md)投入很重，就留给其他关系的更少。这个预算是逐 token 的，不会随着上下文变长而增加；这就是长[会话](./Session.md)会稀释信号的原因。

_用法：_

“为什么它总是忽略我粘在顶部的 schema？”

“我们已经在[笨区](./Smart%20zone.md)很深了。每个 token 的注意力预算是固定的，但上下文一直增长。schema 上的信号现在要和几千个更新的 token 竞争。”

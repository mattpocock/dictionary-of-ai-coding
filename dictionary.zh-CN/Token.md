---
description: 模型读写的原子单位。大致像词，但不完全等同。上下文窗口大小、成本和延迟都按 token 计算。
---

[模型](./Model.md)读写的原子单位。它大致像一个词，但不完全是词：常见词可能是一个 token，罕见或很长的词会拆成多个 token。[上下文窗口](./Context%20window.md)大小、成本和延迟都按 token 计算。

_避免：_ 把 token 说成“词”。token 边界和词边界并不一致，tokens-per-second、tokens-per-dollar 才是真正有用的单位。

_用法：_

“这个 prompt 会有多大？”

“丢进 tokenizer 看一下。schema 很紧凑，但 JSON key 很怪，可能会比你想的拆出更多 token。”

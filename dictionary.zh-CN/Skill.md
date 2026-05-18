---
description: 作为一个单元打包的可教能力，在 context pointer 因任务需要拉入之前，先留在 context window 外。
---

作为一个单元打包的可教能力：用于把一件事做好的指令和资源。它留在[环境](./Environment.md)里，直到某个[上下文指针](./Context%20pointer.md)因为当前任务把它拉进[上下文窗口](./Context%20window.md)。它是 [harness](./Harness.md) 中[渐进披露](./Progressive%20disclosure.md)的单位。

_避免：_ 把它叫[工具](./Tool.md)。工具是 [agent](./Agent.md) *调用*的东西；skill 是它*阅读*的指令。

_用法：_

“deploy runbook 应该放哪？”

“作为 skill。只有任务涉及 deploy 时 agent 才加载它。放进 [AGENTS.md](./AGENTS.md.md) 会让每个[轮次](./Turn.md)都为一个每周才用的东西烧 [token](./Token.md)。”

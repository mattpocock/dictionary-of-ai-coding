---
description: 试图让 agent 通过持久化到 environment 并在 session 开始重新加载，从而跨 session 有状态的系统。
---

一种试图让 [agent](./Agent.md) 跨[会话](./Session.md)变得[有状态](./Stateful.md)的系统。它在会话中把信息持久化到[环境](./Environment.md)，并在未来会话开始时重新加载进[上下文窗口](./Context%20window.md)，让 agent 在用户[清空](./Clearing.md)会话之后仍然保持连续性。

_用法：_

“能不能让它记住这个项目里的约定？”

“接一个 memory system。在第一轮把学到的东西写进[文件系统](./Filesystem.md)，会话开始时再加载。[模型](./Model.md)本身是[无状态](./Stateless.md)的，记忆层是在伪造连续性。”

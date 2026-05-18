---
description: 不携带信息向前。模型在请求之间是无状态的；agent 默认在 session 之间也是无状态的。
---

不携带信息向前。[模型](./Model.md)在[模型提供商请求](./Model%20provider%20request.md)之间是无状态的；每次请求都要重新发送完整的[上下文窗口](./Context%20window.md)，因为模型没有别的方式看到信息。[agent](./Agent.md) 默认在[会话](./Session.md)之间也是无状态的：新会话从空开始，没有之前会话的痕迹。对应概念是[有状态](./Stateful.md)。

_用法：_

“为什么我每次[清空](./Clearing.md)后它都会忘掉约定？”

“模型是无状态的，新会话从空开始。如果你想保留下来，就写进 [AGENTS.md](./AGENTS.md.md)，或者写进 [harness](./Harness.md) 会在会话开始加载的记忆文件。”

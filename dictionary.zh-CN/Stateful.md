---
description: 携带信息向前。session 在 turn 之间有状态；agent 可以通过 memory system 在 session 之间变得有状态。
---

携带信息向前。[会话](./Session.md)在[轮次](./Turn.md)之间是有状态的，[上下文](./Context.md)会随着会话运行不断累积，这就是长会话会漂进[笨区](./Smart%20zone.md)的原因。[agent](./Agent.md) 可以通过添加[记忆系统](./Memory%20system.md)在**会话之间**变得有状态：把信息持久化到[环境](./Environment.md)，并在未来会话开始时重新加载。[模型](./Model.md)本身永远不是有状态的；任何看似连续的东西，都是 [harness](./Harness.md) 在重新喂上下文。对应概念是[无状态](./Stateless.md)。

_用法：_

“它记得我昨天的偏好，这是不是说明模型学会了？”

“不是。agent 有状态，是因为 harness 把偏好写进记忆文件，并在会话开始重新加载。模型本身没有看到昨天。”

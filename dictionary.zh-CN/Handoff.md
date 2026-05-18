---
description: 把 agent context 从一个 session 转移到另一个 session，且没有返回路径。承载机制可能是 artifact、compaction 等。
---

把 [agent](./Agent.md) [上下文](./Context.md)从一个[会话](./Session.md)转移到另一个会话，且没有返回路径。承载机制可能不同：书面的[交接产物](./Handoff%20artifact.md)、内存中的摘要（[压缩](./Compaction.md)）等等。它不同于[清空](./Clearing.md)，因为清空完全不转移。原因也不同：切换角色（planner → implementer）、启动一次 [AFK](./AFK.md) 运行、扇出到并行会话，或释放[上下文窗口](./Context%20window.md)空间。

_用法：_

“规划会话越来越重了，要不要继续？”

“做 handoff。把决策写进文档，清空，再让新的实现会话读取它。”

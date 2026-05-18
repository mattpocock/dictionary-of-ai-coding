---
description: harness 在每次 model provider request 前面加上的指令，是 agent 的常驻任务说明。通常在 session 内稳定。
---

[harness](./Harness.md) 在每次[模型提供商请求](./Model%20provider%20request.md)前面加上的指令，也就是 [agent](./Agent.md) 的常驻任务说明：它是谁、该如何行为、能调用哪些[工具](./Tool.md)、该遵守什么约定。通常在一个[会话](./Session.md)内保持稳定。

_用法：_

“两个 harness，同一个[模型](./Model.md)，同一个 prompt，行为完全不同。”

“系统提示不同。一个偏短促代码编辑，另一个偏解释说明。分歧在你的消息到达之前就已经存在了。”

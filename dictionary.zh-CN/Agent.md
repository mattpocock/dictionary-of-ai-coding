---
description: 一个带着工具、系统提示和上下文窗口运行的模型，会和用户轮流交互。运动中的模型。
---

一个被 [harness](./Harness.md) 装配起来的[模型](./Model.md)，带着[工具](./Tool.md)、[系统提示](./System%20prompt.md)和[上下文窗口](./Context%20window.md)，并和用户按[轮次](./Turn.md)交互。_Claude Code 是 agent。Cursor 是 agent。Claude.ai 也是 agent。_ agent 是你实际在对话的东西，也就是为某个目的配置好的、运动中的模型。

_避免：_ “AI”、“bot”。这些说法太模糊，会掩盖你说的是参数本身，还是被 harness 装起来的东西。

_用法：_

“这次迁移你用哪个 agent？”

“本地用 Claude Code，UI 工作用 Cursor。底层可能是同一个模型，但 harness 不同。”

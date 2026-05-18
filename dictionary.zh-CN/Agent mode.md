---
description: 一个预设，把 permission mode 和注入 system prompt 的行为指令打包在一起。可以在 session 中途切换。
aliases:
  - plan mode
  - accept-edits
  - bypass permissions
  - YOLO mode
---

塑造 [agent](./Agent.md) 运行时行为的预设：把[权限模式](./Permission%20mode.md)和注入[系统提示](./System%20prompt.md)的行为指令打包在一起。例子包括：默认模式会在风险调用上提示；**plan mode** 阻止编辑并把 agent 引向研究；**accept-edits** 模式自动批准编辑；**bypass permissions** 模式（口语里常叫 **YOLO mode**）自动批准所有事情。它可以在[会话](./Session.md)中途切换。

_厂商术语：_ Claude Code 把这些叫“permission modes”，Codex 把它们叫“approval modes”。两者都早于行为指令打包。

_用法：_

“我只是想要计划，它却一直在改文件。”

“切到 plan mode。它会阻止写入并停留在研究阶段。”

“后面的 [AFK](./AFK.md) run 怎么办？”

“用 bypass mode，但只放在 [sandbox](./Sandbox.md) 里。”

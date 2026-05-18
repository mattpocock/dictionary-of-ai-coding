---
description: 一个文档中指向另一个文档的提及，让 agent 只在任务需要时把后者拉进 context。
---

一个文档中指向另一个文档的提及，让 [agent](./Agent.md) 只在任务需要时才把后者拉进[上下文窗口](./Context%20window.md)。它是构成[渐进披露](./Progressive%20disclosure.md)的单位。

_避免：_ “reference” 太干，不表达“跟过去会拉入更多上下文”；“portal” 又太花。

_用法：_

“AGENTS.md 变得太大了。”

“大部分应该是 context pointers，而不是内容。常驻规则留在里面；deploy runbook 和 style guide 做成[skills](./Skill.md)，只留下 context pointer。”

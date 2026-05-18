---
description: environment 中的一个文件，harness 在 session 开始时把它加载进 context window，是项目给 agent 的常驻说明。
---

[环境](./Environment.md)中的一个文件，[harness](./Harness.md) 在[会话](./Session.md)开始时把它加载进[上下文窗口](./Context%20window.md)。它是项目给 [agent](./Agent.md) 的常驻任务说明，也是跨 harness 的约定。

_避免：_ 把应该[渐进披露](./Progressive%20disclosure.md)的内容放进 AGENTS.md。里面任何东西都会在每个[轮次](./Turn.md)付出 [token](./Token.md) 成本。

_用法：_

“为什么每个 session 一开始就已经烧掉 4k tokens？”

“查 AGENTS.md。有人把整份 style guide 贴进去了，而不是放在一个[skill](./Skill.md)后面。”

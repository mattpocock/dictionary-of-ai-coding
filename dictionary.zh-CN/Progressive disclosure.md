---
description: 只加载 agent 当前需要的 context，其余内容用 context pointers 指向。借自 UI 设计。
---

只加载 [agent](./Agent.md) 当前需要的[上下文](./Context.md)，其余内容用[上下文指针](./Context%20pointer.md)指向。这个词借自 UI 设计。

_用法：_

“我要不要把整份 style guide 都塞进 [AGENTS.md](./AGENTS.md.md)？”

“不要，做 progressive disclosure。把 style guide 作为一个 [skill](./Skill.md) 引用，让 agent 真的要写组件时再加载。AGENTS.md 里的内容每个[轮次](./Turn.md)都要付 [token](./Token.md) 成本。”

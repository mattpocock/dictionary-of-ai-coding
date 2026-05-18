---
description: 一个 agent 通过 tool call 生成的另一个 agent。它在自己的 session 中运行，返回一个 tool result，不能再生成下级 subagent。
---

由另一个 [agent](./Agent.md) 通过[工具调用](./Tool%20call.md)生成的 [agent](./Agent.md)。它在自己的[会话](./Session.md)和[上下文窗口](./Context%20window.md)中运行，并把一个[工具结果](./Tool%20result.md)报告回来。它不同于[交接](./Handoff.md)：父 agent 明确期待返回结果，而 handoff 没有返回路径。**subagent 不能再生成下级 subagent**；树只有一层。subagent 的用途是隔离[上下文](./Context.md)，不是组合层级结构。

_用法：_

“grep 结果快把我的 context 撑爆了。”

“生成一个 subagent 去做搜索。它会用自己的上下文窗口消化噪音，然后只把你真正需要的两个文件路径报告回来。”

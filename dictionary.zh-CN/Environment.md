---
description: agent 行动所在的世界：harness 外部的一切，agent 通过 tool result 感知，通过 tool call 改变。
---

[agent](./Agent.md) 行动所在的世界，也就是 [harness](./Harness.md) 外部的一切。agent 通过[工具结果](./Tool%20result.md)感知它，通过[工具调用](./Tool%20call.md)改变它。harness _运行_ agent；environment 是 agent _工作的地方_。像 [`AGENTS.md`](./AGENTS.md.md) 这样的文件存在于 environment 中，harness 负责把它加载进[上下文窗口](./Context%20window.md)。[文件系统](./Filesystem.md)是最常见的 environment，但不是唯一的；数据库、远程 API、浏览器会话也都可以是 environment。

_避免：_ 用 environment 指运行时或 harness 本身。harness 是外壳，environment 是工作区。

_用法：_

“agent 看不到 staging DB schema。”

“把它接进 environment：给它一个只读 staging 的 `psql` [工具](./Tool.md)。harness 没问题，只是它没有能作用的东西。”

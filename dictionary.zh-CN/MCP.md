---
description: 把外部工具服务器接入 harness 的协议，是 agent 获得 harness 自带工具之外能力的方式。
---

**Model Context Protocol。** 一种把外部工具服务器接入 [harness](./Harness.md) 的协议，是 [agent](./Agent.md) 获得 harness 自带[工具](./Tool.md)之外能力的方式。agent 不会“调用 MCP”；它调用的是工具，只是这个工具碰巧由 harness 从 MCP server 得来。MCP 也暴露资源（只读数据）和提示（可复用模板），但提供工具是主要用途。

_用法：_

“我想让 agent 访问 Linear issue。”

“接一个 MCP server。对 agent 来说它只是多了几个工具；MCP 是 harness 获取这些工具的协议层。”

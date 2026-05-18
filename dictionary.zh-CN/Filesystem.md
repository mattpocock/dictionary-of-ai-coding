---
description: agent 读取、写入和执行所在的文件目录树，是 coding agent 默认的 environment。
---

[agent](./Agent.md) 读取、写入和执行所在的一棵文件目录树，是 coding agent 默认类型的[环境](./Environment.md)。[AGENTS.md](./AGENTS.md.md)、[skills](./Skill.md)、源代码、构建脚本和[工具](./Tool.md)配置都生活在文件系统里。当 [harness](./Harness.md) “从你的项目启动”时，它就是把 agent 指向某个文件系统。

_用法：_

“为什么它没读到我的 AGENTS.md？”

“它跑在另一个文件系统上。[sandbox](./Sandbox.md) 挂载的是父目录，不是项目根目录。把 harness 重新指过去。”

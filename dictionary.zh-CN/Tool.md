---
description: harness 暴露给 agent 调用的函数，例如 Read、Write、Bash、Search。agent 通过它感知和作用于环境。
---

[harness](./Harness.md) 暴露给 [agent](./Agent.md) 调用的函数，例如 Read、Write、Bash、Search。工具是 agent 感知和作用于[环境](./Environment.md)的方式：它只能通过[工具结果](./Tool%20result.md)看见环境，也只能通过[工具调用](./Tool%20call.md)改变环境。每次工具调用都会多花一次[模型提供商请求](./Model%20provider%20request.md)，因为结果必须回到模型，模型才能决定下一步。

_用法：_

“agent 能直接查 staging 吗？”

“给 harness 加一个 `psql` 工具，只读 scoped 到 staging。没有这个工具，agent 对[文件系统](./Filesystem.md)之外的东西就是瞎的。”

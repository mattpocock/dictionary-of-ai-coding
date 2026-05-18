---
description: 模型输出的一段命名工具及参数的结构化文本。harness 必须读取并执行它。
---

[模型](./Model.md)输出的一段命名[工具](./Tool.md)及其参数的结构化文本。它自己不会做任何事；[harness](./Harness.md) 必须读取并执行它。它由模型在一次[模型提供商请求](./Model%20provider%20request.md)中产生。

_用法：_

“它说跑了测试，但文件时间戳没变。”

“看 transcript：它是真的发出了 tool call，还是只是描述自己在运行？模型产生调用，但如果 harness 没执行，什么都不会发生。”

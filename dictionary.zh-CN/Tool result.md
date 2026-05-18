---
description: harness 执行 tool call 后发回的内容：文件内容、命令输出或错误。agent 看见环境的唯一窗口。
---

[harness](./Harness.md) 执行[工具调用](./Tool%20call.md)后发回的内容：文件内容、命令输出或错误。它是 [agent](./Agent.md) 看见[环境](./Environment.md)的唯一窗口。它会在*下一次*[模型提供商请求](./Model%20provider%20request.md)中回到[模型](./Model.md)，由模型决定如何处理。tool call 和 tool result 是同一次交换的两端，都发生在一个[轮次](./Turn.md)内。

_用法：_

“它像文件是空的一样推理。”

“工具结果返回的是权限拒绝，不是文件内容。模型只看到了错误字符串，没有其他窗口能看到这个文件。”

---
description: harness 在执行未预先批准的 tool call 前展示给用户的请求，是把人放进回路的机制。
---

[harness](./Harness.md) 在执行未预先批准的[工具调用](./Tool%20call.md)前展示给用户的东西。[模型](./Model.md)产生 tool call；harness 不立即执行，而是暂停并询问。你批准，它就运行；你拒绝，harness 会把拒绝作为[工具结果](./Tool%20result.md)报告给模型。这是 harness 把人放进[回路](./Human-in-the-loop.md)来处理危险或敏感动作的机制。

_用法：_

“它卡在 permission request 上十分钟了，我刚才在开会。”

“这就是 human-in-the-loop 的成本。把安全[工具](./Tool.md)预先批准，让请求只在真正有风险的调用上出现。”

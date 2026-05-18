---
description: agent mode 中负责权限门控的部分：哪些 tool call 会触发 permission request，哪些会自动运行。
---

[agent mode](./Agent%20mode.md) 中负责权限门控的部分：哪些[工具调用](./Tool%20call.md)会触发[权限请求](./Permission%20request.md)，哪些会自动运行。在 [harness](./Harness.md) 开始把行为指令一起打包之前，这原本就是 mode 系统的主要用途。

_用法：_

“它每次 grep 都暂停，整个 [AFK](./AFK.md) run 都被拖死了。”

“放宽只读[工具](./Tool.md)的 permission mode，写入和 shell 继续提示。研究型[会话](./Session.md)里的多数权限请求都是噪音。”

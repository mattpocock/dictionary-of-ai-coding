---
description: 在内存中完成的 handoff：上一 session 的历史被总结出来，用来启动新 session。有损，用细节换空间。
---

一种在内存中完成的[交接](./Handoff.md)：上一个[会话](./Session.md)的历史被总结，并作为新会话的起点。它是有损的，用细节换取空间。可以由用户手动触发，也可以[自动](./Autocompact.md)触发。

_用法：_

“[上下文](./Context.md)越来越重，但我还要让它把测试跑通。”

“开始前先 compact。把真正承重的信息写进摘要 prompt，让新会话保留 schema 决策，丢掉探索噪音。”

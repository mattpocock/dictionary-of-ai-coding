---
description: harness 到模型提供商的一次往返。harness 发送上下文，提供商返回一个响应。
---

从 [harness](./Harness.md) 到[模型提供商](./Model%20provider.md)的一次往返。harness 发送当前[上下文](./Context.md)，提供商返回一个响应，可能是[工具调用](./Tool%20call.md)，也可能是最终回答。一次用户消息如果触发 [agent](./Agent.md) 调用很多[工具](./Tool.md)，就会产生很多模型提供商请求；每个[工具结果](./Tool%20result.md)都会触发下一次请求。

_用法：_

“一个问题怎么烧了四万个 [token](./Token.md)？”

“看工具调用。十二次 grep、八次 read、四次编辑。每个工具结果都会产生另一次模型提供商请求，而且整个[会话](./Session.md)前缀每次都要重新发送。”

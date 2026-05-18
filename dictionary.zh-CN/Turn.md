---
description: 一条用户消息，以及 agent 响应它所做的一切，直到它把控制权交回用户。包含一个或多个 provider request。
---

一条用户消息，加上 [agent](./Agent.md) 为响应它所做的一切，直到它把控制权交回用户。它包含一个或多个[模型提供商请求](./Model%20provider%20request.md)；如果 agent 调用[工具](./Tool.md)，就可能很多。澄清问题会结束当前轮次；你的回复开启下一个轮次。层级是：[会话](./Session.md) **> Turn > Model provider request**。

_用法：_

“一个 turn 花了两分钟？”

“它在那个 turn 里做了十四次[工具调用](./Tool%20call.md)，每一次都是单独的模型提供商请求。延迟会一路叠加，直到 agent 最终把控制权交还给你。”

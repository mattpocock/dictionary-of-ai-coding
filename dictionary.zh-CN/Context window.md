---
description: 模型在每次 model provider request 中看到的一切。有限、模型特定，也是模型感知世界的唯一表面。
---

[模型](./Model.md)在每次[模型提供商请求](./Model%20provider%20request.md)中看到的一切。它是有限的、随模型而定的，也是模型感知任何东西的*唯一*表面。

_避免：_ 把它叫“memory”。上下文窗口是工作状态，不会跨[会话](./Session.md)持久化。[记忆系统](./Memory%20system.md)是叠在上面的另一个概念。

_用法：_

“我能不能把整个 monorepo 都粘进 prompt？”

“上下文窗口是 200k [token](./Token.md)，大概也就仓库的五分之一。挑任务会碰到的文件，其他留在[工具调用](./Tool%20call.md)后面。”

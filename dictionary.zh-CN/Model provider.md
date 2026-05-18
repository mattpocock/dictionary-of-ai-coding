---
description: 为推理提供模型的东西。通常是远程服务，也可以是本地运行时。
---

为[推理](./Inference.md)提供[模型](./Model.md)的东西。通常是远程服务，比如 Anthropic、OpenAI、Google；也可以是本地的 Ollama、LM Studio、llama.cpp。[harness](./Harness.md) 本身不运行模型，它会向提供商发请求。

_用法：_

“Cursor 和 Claude Code 是不是同一个模型提供商？”

“不一定。看它们把请求发到哪里。harness 是你交互的界面，model provider 是实际服务模型的地方。”

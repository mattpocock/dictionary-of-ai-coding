---
description: 运行已训练好的模型来生成输出，发生在每一次 model provider request 中。参数保持不变。
---

运行已训练好的[模型](./Model.md)来生成输出，也就是每一次[模型提供商请求](./Model%20provider%20request.md)中发生的事。[参数](./Parameters.md)保持不变；模型只是基于给定的[上下文](./Context.md)做[下一个 token 预测](./Next-token%20prediction.md)。相对[训练](./Training.md)便宜，但按 [token](./Token.md) 计费，是使用模型的主要成本。

_用法：_

“训练都已经完成了，为什么还会花钱？”

“你付的是推理费。每个模型提供商请求都会在提供商硬件上运行模型。训练已经发生过，但推理会按请求和 token 持续累积；一个[轮次](./Turn.md)里如果调用很多[工具](./Tool.md)，成本会继续放大。”

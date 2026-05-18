---
description: 参数本身。无状态，只做 next-token prediction，单独不能执行 agentic 行为。
---

[模型参数](./Parameters.md)本身。[无状态](./Stateless.md)，只做[下一个 token 预测](./Next-token%20prediction.md)，除此之外什么也不会做。“Claude Opus 4.7”和“GPT-5”都是模型。模型自己不能做任何 agentic 的事，必须被[装入 harness](./Harness.md) 里才行。

_用法：_

“规划步骤要不要把模型从 Sonnet 换成 Opus？”

“可以试，但这个任务主要是 harness 在出力。如果[系统提示](./System%20prompt.md)和[工具](./Tool.md)错了，换模型也救不了。”

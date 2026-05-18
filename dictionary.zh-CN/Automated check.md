---
description: 在 environment 中运行的确定性验证：测试、类型检查、lint、构建、pre-commit hooks。通过或失败，没有判断。
---

在[环境](./Environment.md)中运行的确定性验证：测试、类型检查、lint、构建、pre-commit hooks。结果是通过或失败，没有判断。这是 [agent](./Agent.md) 可以在不牵涉其他人的情况下用来自我修正的信号。flaky test 是坏掉的 check，不是非 check；automated checks 在设计上就是确定性的。

_避免：_ “feedback loop” / “backpressure”，这两个词会把 check 和[review](./Automated%20review.md)混在一起。_避免：_ “test”，测试是 automated check，但不是所有 automated check 都是测试。

_用法：_

“agent 在 [AFK](./AFK.md) run 里老是交破代码。”

“[sandbox](./Sandbox.md) 里接了哪些 automated checks？”

“只有单元测试。”

“加 typecheck 和 lint。PR 落地前它会先根据这些自我修正。”

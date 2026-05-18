---
description: 一种工作模式，用户不做人类 review 就接受 agent 的代码。diff 被视为不透明。
---

一种工作模式：用户在没有[人类 review](./Human%20review.md)的情况下接受 [agent](./Agent.md) 的代码。diff 被视为不透明；重要的是程序行为是否正确，而不是里面写了什么。[Automated review](./Automated%20review.md) 和 [automated checks](./Automated%20check.md) 仍然可以运行；vibe coding 对两者都不表态。

_避免：_ 把 “vibe coding” 当作“低质量 AI 编程”的同义词。这个术语描述的是 review 立场，不是产出代码的质量。

_用法：_

“认证流程里它改了什么，你读过吗？”

“vibe coded。登录还能用，我就只检查了这个。”

“push 前读 diff。认证流程上 vibe，是把 secrets 泄进日志的好办法。”

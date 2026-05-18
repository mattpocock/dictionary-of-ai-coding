---
description: 为一个 session 的工作划定范围的 handoff artifact。可以独立存在，也可以挂在 spec 下。可以阻塞或被 sibling tickets 阻塞。
---

为一个[会话](./Session.md)的工作划定范围的[交接产物](./Handoff%20artifact.md)。它可以独立存在，也可以作为某个[规格说明](./Spec.md)的子项挂在下面。Ticket 可以阻塞或被同级 ticket 阻塞，所以工作顺序来自依赖图，而不是线性计划。

_用法：_

“迁移 spec 应该从哪里开始？”

“看 ticket graph。schema change 阻塞 backfill，backfill 阻塞 API switch。挑一个叶子节点开一个会话做。”

---
description: 一个 agent review 另一个 agent 的工作，通常使用不同模型或系统提示。非确定性：它会形成判断。
---

一个 [agent](./Agent.md) review 另一个 agent 的工作，通常用不同[模型](./Model.md)或[系统提示](./System%20prompt.md)。它是非确定性的：会形成判断。它可以在任何地方运行：PR 合并前、提交历史事后检查、会话中作为 [subagent](./Subagent.md)。CI 中的 LLM-as-judge 是 automated review，不是[automated check](./Automated%20check.md)；断言*做什么*决定分类，不是它运行在哪里。

_避免：_ “AI review” / “agent review”。这些太模糊，无法和正在工作的 agent 本身区分。

_用法：_

“[AFK](./AFK.md) run 产出的坏 PR 太多了。”

“合并前加一个 automated review：不同模型、独立系统提示，只关注安全和契约变更。”

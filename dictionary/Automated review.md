An [agent](./Agent.md) reviewing another agent's work, often with a different [model](./Model.md) or [system prompt](./System%20prompt.md). Non-deterministic: it forms a judgement. Runs anywhere — pre-merge on a PR, post-hoc on commit history, mid-session as a [subagent](./Subagent.md). An LLM-as-judge in CI is automated review, not an [automated check](./Automated%20check.md); what the assertion *does* decides the category, not where it runs.

*Avoid:* "AI review" / "agent review" — too vague to distinguish from the working agent itself.

*Usage:*

"We're getting too many bad PRs from the AFK runs."

"Add an automated review step before merge — different model, separate system prompt, scoped to security and contract changes."

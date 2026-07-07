---
description: "Early in a session the agent is sharp and focused. As the session grows it drifts into a dumb zone: sloppier, forgetful, more mistakes."
aliases:
  - Dumb zone
  - Smart zone / Dumb zone
---

Early in a [session](./Session.md) the [agent](./Agent.md) is in a "smart zone" — sharp, focused, recall is good. As the session grows it drifts into a "dumb zone": sloppier, forgetful, more mistakes — and more faithfulness [hallucinations](./Hallucination.md). Same [model](./Model.md), same [harness](./Harness.md) — just more [context](./Context.md). The felt effect of [attention degradation](./Attention%20degradation.md). On frontier models, the dumb zone commonly begins around 125K-150K [tokens](./Token.md) — though this is debated. [Clear](./Clearing.md) or [compact](./Compaction.md) when the session bloats; don't push through.

The decline is gradual, which makes it easy to miss. There's no error message and no visible boundary; the agent just starts performing slightly worse, then noticeably worse. Common signs: it forgets an instruction you gave twenty turns ago, repeats a mistake it had already corrected, or confidently asserts something the context contradicts. Because the slide is smooth, the usual response is to push through and re-explain — which adds more context and makes the problem worse.

The zones don't track the [context window](./Context%20window.md) limit. A session can be deep in the dumb zone with most of the window still free: the limit is where the harness refuses to continue, but quality falls off long before that. Plan around the smart zone, not the window — the practical budget for a task is the tokens the agent works well within, not the tokens it can technically hold.

The smart zone is a budget, and unrelated work spends it. Every task done in a session uses up tokens, so starting a second task in the same session means starting it closer to the dumb zone. Doing one task per session gives each task the sharpest part of the session. When a single task is bigger than one smart zone, split it: [hand off](./Handoff.md) or compact at a natural boundary, and let a fresh session do the next piece.

_Usage:_

"It nailed the first three components and just butchered the fourth."

"You're out of the smart zone — same model, just deep into the dumb zone now. Compact and reload the plan, the next component will land."

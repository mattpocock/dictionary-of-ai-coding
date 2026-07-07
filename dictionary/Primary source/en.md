---
description: The thing itself — code, transcripts, raw data. Complete and authoritative, but expensive to load into context.
---

A source of truth in its original form — the code, the conversation transcript, the raw log, the actual API response. Not an account of the thing; the thing. Counterpart to [secondary source](./Secondary%20source.md).

If you want to know what your codebase does, the code is the primary source. The docs, the architecture diagram, and the README are all descriptions of it — accurate when written, on their own schedule ever since. When an [agent](./Agent.md) confidently asserts something wrong about your project, the question to ask is which source it was working from: an agent that read a doc inherits the doc's staleness; an agent that read the code is reading the current truth.

The cost is what keeps primary sources from being the default. Loading one into the [context window](./Context%20window.md) is expensive — the full file, the full transcript, every [token](./Token.md) billed as [input](./Input%20tokens.md) and competing for [attention budget](./Attention%20budget.md). What you get for the cost is completeness: nothing has been pre-filtered by someone else's judgement about what mattered. A summary written last month can't contain the detail that turned out to matter today; the primary source still does.

Reach for the primary source when precision matters — the exact signature, the actual error, the line that throws. Much of managing [context](./Context.md) is deciding when to pay for the primary source and when a secondary source is good enough.

_Usage:_

"The agent says the retry logic backs off exponentially, but I'm watching it hammer the endpoint."

"It read that out of the design doc. Point it at the actual retry module — work from the primary source when the behaviour matters."

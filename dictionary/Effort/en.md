---
description: A dial for how much reasoning the model does before it answers. More effort spends more output tokens for a better shot at hard problems.
aliases:
  - Reasoning effort
  - Thinking effort
---

Effort is a dial for how much reasoning a [model](./Model.md) does before it answers. Set per [model provider request](./Model%20provider%20request.md), it controls the length of the thinking the model works through before it starts writing the response you see. That thinking is generated at [inference](./Inference.md) time like everything else; the [harness](./Harness.md) often hides it, but it's real work the model is doing.

Higher effort costs more and runs slower. The reasoning is emitted as [tokens](./Token.md), billed as [output tokens](./Output%20tokens.md) even when you never see them, and produced one token at a time — so turning effort up lengthens the wait before the answer arrives and adds to the bill. The trade is more deliberation against speed and cost.

Most harnesses expose effort as a small ladder:

| Level  | What it's for                                                          |
| ------ | ---------------------------------------------------------------------- |
| Low    | Mechanical edits, lookups, well-specified changes with one clear path. |
| Medium | Everyday coding — the usual default.                                   |
| High   | Tricky bugs, design decisions, multi-step plans.                       |
| Max    | The hardest problems, where a wrong answer is expensive to unwind.     |

The symptom of getting it wrong cuts both ways. Set effort too low on a hard problem and you get a confident, shallow answer that skipped the reasoning the problem needed — it reads fine and is wrong in a way that costs you later. Set it to max for a one-line rename and you sit through a long think that produces nothing the lowest setting wouldn't have.

Match effort to the task, not the [session](./Session.md). Turn it up for the part that's genuinely hard to reason about, and back down for the rote work around it.

_Usage:_

"It keeps botching this concurrency fix — I've re-explained it three times."

"Bump the effort up. That's a reasoning-heavy bug, and on the default setting it's not thinking long enough before it commits to an approach."

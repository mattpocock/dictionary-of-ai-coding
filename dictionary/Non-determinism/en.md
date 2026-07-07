---
description: The same input can produce different output. A property of how models generate text and how providers serve requests.
---

The same input can produce different output. Run a [model](./Model.md) twice with identical [context](./Context.md) and you may get two different answers — sometimes a word, sometimes a completely different approach. Nothing in your code has to change for this to happen.

It's a property of how models generate text, and how [model providers](./Model%20provider.md) serve [requests](./Model%20provider%20request.md). During [inference](./Inference.md), the model produces a probability distribution over possible next [tokens](./Token.md) and one is sampled from it — usually with some randomness on purpose, since always picking the most likely token produces repetitive, lower-quality text. One differently-sampled token early in a response changes every token after it, which is how a single different word becomes a completely different approach. Provider-side serving adds more variation on top: requests are batched together on shared hardware, and tiny floating-point differences between batches can tip a close call between two tokens. There's no setting you can flip to make it all go away.

Expect a spread of results from an [agent](./Agent.md) on the same task. Most responses fall within a reasonable bell curve of quality — that's why the non-determinism is tolerable at all — but the tails are real: some days the model will feel sharp; some days it'll feel like it's lost the plot. Same task, different rolls of the dice. This has two practical consequences. Retrying is a legitimate strategy: a failed attempt is one draw from the distribution, and a fresh attempt at the same task may simply land better. And verification matters more than it would with deterministic tools — you can't test an agent's behaviour once and rely on it repeating, so [automated checks](./Automated%20check.md) have to catch the bad draws.

Be careful not to over-narrativize this. Humans are pattern-matching machines, and a string of bad runs can feel like proof that "the model got worse this week." Usually it's just the distribution.

_Usage:_

"Claude has been awful today. Did they ship a worse version?"

"Probably not — model output is non-deterministic. You're going to have good days and bad days on the same task. Try again tomorrow before you go looking for a cause."

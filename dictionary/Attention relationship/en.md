---
description: The pairing between two tokens — meaningful pairs influence each other more than unrelated ones. A context of N tokens has ~N² of these.
---

When predicting each [token](./Token.md), the [model](./Model.md) factors in every other token in the [context](./Context.md) — some heavily, others barely at all. The pairing between two tokens is an **attention relationship**, and meaningful pairs ("her" with "Sarah", or a `getUser()` call with its `function getUser` definition) influence each other more than unrelated ones. A context of N tokens has on the order of N² relationships.

The pairings are where the model's apparent understanding lives. When it resolves a pronoun, it's because the attention relationship between "her" and "Sarah" is strong. When it calls a function with the right arguments, the relationship between the call site and the definition it read earlier is doing the work. None of this is looked up — it's computed fresh on every [model provider request](./Model%20provider%20request.md), for every pair.

The N² figure is worth sitting with, because it grows faster than intuition suggests:

| Context size   | Pairings (~N²) |
| -------------- | -------------- |
| 1,000 tokens   | ~1 million     |
| 10,000 tokens  | ~100 million   |
| 100,000 tokens | ~10 billion    |

Each pairing is also computed more than once. Models have multiple attention heads — exact counts for frontier models are unpublished, but fifty to a hundred is a reasonable guess — and each head computes its own version of every relationship. So every pairing in the table above is duplicated across every head. That's a lot of pairings.

Only a small number of these relationships matter for any given task. The pairing between your instruction and the code it governs is one of a handful that count; almost everything else in the pool is noise. And the two grow at different rates: the relationships that matter stay roughly constant, while the total pool grows quadratically with context size. At 1,000 tokens, the pairing you care about is one in a million; at 100,000 tokens, it's one in ten billion. This is the arithmetic underneath the [attention budget](./Attention%20budget.md), and [attention degradation](./Attention%20degradation.md) is what it feels like when the relationships that matter get too thin a share.

_Usage:_

"It keeps confusing the two `user` symbols across the diff — sounds like we're in the [dumb zone](./Smart%20zone.md)."

"Yeah, the attention relationship between each call site and its declaration is fighting the other one — same token shape, different bindings. Rename one and the pairings sharpen."

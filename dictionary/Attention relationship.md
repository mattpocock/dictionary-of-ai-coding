When predicting each [token](./Token.md), the [model](./Model.md) factors in every other token in the [context](./Context.md) — some heavily, others barely at all. The pairing between two tokens is an **attention relationship**, and meaningful pairs ("her" with "Sarah", or a `getUser()` call with its `function getUser` definition) influence each other more than unrelated ones. A context of N tokens has on the order of N² relationships.

*Usage:*

"It keeps confusing the two `user` symbols across the diff — sounds like we're in the dumb zone."

"Yeah, the attention relationship between each call site and its declaration is fighting the other one — same token shape, different bindings. Rename one and the pairings sharpen."

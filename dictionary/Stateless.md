Carries no information forward. The [model](./Model.md) is stateless across [model provider requests](./Model%20provider%20request.md) — each request resends the full [context window](./Context%20window.md), because the model has no way to see anything else. An [agent](./Agent.md) is stateless across [sessions](./Session.md) by default: a new session starts empty, with no trace of prior ones. Counterpart to [stateful](./Stateful.md).

*Usage:*

"Why does it forget the convention every time I clear?"

"The model's stateless — the new session starts empty. If you want it carried, write it to AGENTS.md or a memory file the harness loads at session start."

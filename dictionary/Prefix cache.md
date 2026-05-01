The [provider](./Model%20provider.md)-side store that lets consecutive [model provider requests](./Model%20provider%20request.md) skip re-processing a shared prefix. When the start of a request matches the start of a recent one — same [system prompt](./System%20prompt.md), same history up to some point — the provider reuses its prior work and bills those [tokens](./Token.md) as [cache tokens](./Cache%20tokens.md) at a much lower rate.

Anything that changes the prefix (reordering files, rewriting the system prompt mid-[session](./Session.md), injecting a timestamp near the top) invalidates the cache from that point on, and the rest of the request bills at full [input token](./Input%20tokens.md) rate.

_Usage:_

"Why did the bill spike halfway through the session?"

"[Harness](./Harness.md) started injecting the current time into the system prompt every [turn](./Turn.md). Prefix cache breaks at the first changed token, so every request after that billed at full rate."

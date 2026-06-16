---
description: A published specification for an agent's identity layer — values, bounded authority, persistent memory, and protected surface.
---

A published specification of the [identity layer](./Identity%20layer.md) for a particular [agent](./Agent.md), versioned and external to the agent itself. The contract names what the agent is — its values, the scope of authority it has been granted, the memory it accumulates — and what about that the agent is not authorized to change without explicit principal authorization.

The shape is similar across implementations: a values document, an identity record, a memory convention, and a capability ladder, each held in named files that the [harness](./Harness.md) loads at [session](./Session.md) start. The contract is not whatever happens to be in the files. It is the published specification that asserts those files are the agent's identity and defines which parts of them are off-limits to self-modification. Without that assertion, the files are just configuration the agent might or might not respect.

Versioning matters. An identity that can be silently rewritten between deployments is no specification at all; the contract is what makes a particular version of the agent the same agent across time. Implementations typically pair the contract with a [protected surface](./Protected%20surface.md) classification and a [trust tier](./Trust%20tier.md) ladder: the contract names the surface, the tiers say who can authorize changes to what.

The reference implementation, OpenCoven's Familiar Contract specification, defines five normative properties — values commitment, identity record, bounded authority, persistent memory, and protected surface — with a pointer to a separate enforcement specification (Ward) and a compliance criterion that requires all five. The pattern is reusable; the property set is specific.

_Avoid:_ confusing this with "agent contract" in the principal-agent sense — that contract specifies tasks the agent is paid to perform; the Familiar Contract specifies who the agent is while performing them.

_Usage:_

"Why is the values document a separate file when it could just be in [AGENTS.md](./AGENTS.md.md)?"

"Different layers. AGENTS.md is the project's brief to whatever agent loads it. The values document is the agent's standing brief to itself, and under the contract it doesn't get rewritten by session mining."

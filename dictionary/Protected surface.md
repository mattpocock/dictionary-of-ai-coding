---
description: The subset of an agent's files and configuration that is off-limits to autonomous self-modification.
---

The subset of an [agent](./Agent.md)'s files, configuration, and persistent state that is off-limits to autonomous self-modification — distinct from the editable surface, which the agent can revise on its own authority. Where the [identity layer](./Identity%20layer.md) names what the agent is, the protected surface names which on-disk artifacts encode that identity strongly enough that autonomous edits to them require principal authorization rather than agent judgment.

The classification is per-file, not per-byte. A typical protected surface includes the values document, the identity record, the contract specification itself, and the parts of the [memory](./Memory%20system.md) substrate that record promotions to canon. A typical editable surface includes daily notes, working artifacts, scratch state, and ephemeral session logs. The line between them is set by the [Familiar Contract](./Familiar%20Contract.md) and enforced at the [trust tier](./Trust%20tier.md) where modifications to that file are authorized.

The reason for the distinction is composition. Individual self-improvement edits are usually fine on inspection. A run of small, locally validated edits to project instructions, vault learnings, and agent rules can shift the agent's disposition without any single edit looking wrong. The protected surface intercepts the composition: anything that would touch a file inside the surface is held at a gate that does not depend on the agent's own judgment of whether the change is reasonable.

Protected does not mean immutable. The agent can propose changes; the principal can authorize them. What protected forecloses is _autonomous_ change — the agent applying its own edits to its own identity-bearing files without explicit approval.

_Avoid:_ filesystem [permission mode](./Permission%20mode.md) — a permission mode gates whether the tool call to write the file runs at all on this turn; protected surface gates whether the change is authorized regardless of whether the tool call is allowed.

_Usage:_

"Why is the values file write-protected if the agent can't even propose edits to it?"

"It can propose edits — that part isn't blocked. What's blocked is the agent applying the edit on its own. Protected surface means the principal has to sign off, not that the file is read-only."

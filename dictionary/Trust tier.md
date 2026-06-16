---
description: A rung on a ladder that authorizes which categories of self-modification an agent can apply autonomously and which require human review.
---

A rung on a ladder that classifies an [agent](./Agent.md)'s proposed self-modifications by authority required. The lowest tier is freely editable — daily notes, working artifacts, scratch state. The highest tier is [protected](./Protected%20surface.md) — values, identity files, the contract itself — and cannot change without explicit principal authorization, regardless of whether the proposed change is locally reasonable.

A typical ladder for an agent with a [Familiar Contract](./Familiar%20Contract.md):

| Tier | Surface                                 | Authorization required                   |
| ---- | --------------------------------------- | ---------------------------------------- |
| 3    | Daily notes, working artifacts          | Agent decides; auto-applied              |
| 2    | Skills, role configuration, preferences | Agent proposes; logged and auditable     |
| 1    | Memory canon, harness configuration     | Agent proposes; veto window before apply |
| 0    | Values, identity record, the contract   | Principal must explicitly approve        |

The tiers exist because individual self-improvement proposals are usually fine and the composition is the failure mode. A run of small, locally validated edits to project instructions, vault learnings, and agent rules can shift the agent's disposition without any single edit looking wrong on review. The tier system intercepts that drift by classification: anything touching the agent's identity surface routes through a gate that does not depend on the agent's own judgment of whether the change is reasonable.

The rung the agent operates at by default is set by the harness and the contract together — not chosen turn-by-turn. Lifting an agent from a lower to a higher tier is itself a tier-0 decision in most implementations.

_Avoid:_ "[permission mode](./Permission%20mode.md)" — a permission mode gates which tool calls run on this turn; a trust tier gates which categories of modification to the agent itself are authorized.

_Usage:_

"The autopilot updated its own rules file three times this week. Is that drift?"

"Probably not — that file lives at tier 2 in our ladder. It would be drift if it had touched the values document, but trust tier zero blocks that without your sign-off."

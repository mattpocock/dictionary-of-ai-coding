---
title: "Knowledge cutoff"
description: "The date past which a model has no parametric knowledge. Post-cutoff libraries and APIs are fabrication traps unless docs are loaded."
editLink: false
---

# Knowledge cutoff

The date past which a [model](/en/model) has no [parametric knowledge](/en/parametric-knowledge). Libraries, APIs, and events from after the cutoff are fabrication traps unless their docs are loaded as [contextual knowledge](/en/contextual-knowledge). Each model release ships with its own cutoff.

The cutoff exists because of how models are made: [training](/en/training) bakes a snapshot of text into the model's [parameters](/en/parameters), and after that the parameters are frozen. The model doesn't know its knowledge has an edge — asked about something past the cutoff, it doesn't refuse, it extrapolates from the nearest thing it does know. That's what makes the trap quiet: code written against an old version of a library looks plausible, often compiles, and fails on the parts that changed.

The fix is always the same: get current information into [context](/en/context). Load the changelog, point at the installed version's type definitions, or have the agent read the docs from the web. Anything in context outranks nothing-in-parameters.

_Usage:_

"It keeps writing the v3 SDK syntax — we're on v5."

"v5 shipped after the knowledge cutoff. Load the v5 changelog as contextual knowledge, otherwise it'll keep fabricating from the older parametric version."

<div style="text-align:center;margin-top:2rem">
  <a href="/th/knowledge-cutoff" class="VPLink">Read in ไทย →</a>
</div>

---
title: "Contextual knowledge"
description: "Facts the agent can read directly from the context right now. Counterpart to parametric knowledge."
editLink: false
---

# Contextual knowledge

Facts the [agent](/en/agent) can read directly from the [context](/en/context) right now — the user's task, files the agent has read in, [tool results](/en/tool-result), [AGENTS.md](/en/agents-md) content loaded at [session](/en/session) start. Counterpart to [parametric knowledge](/en/parametric-knowledge): parametric is _recalled_ from the parameters; contextual is _read_ from the [window](/en/context-window). [Hallucinations](/en/hallucination) are much less common when the agent works from contextual knowledge — the answer is right in front of it, not dredged up from a blurred memory.

Of the two kinds of knowledge, only contextual knowledge is in your control. The parameters are frozen, so the only way to give the [model](/en/model) knowledge it lacks — an internal SDK, a library released after the [knowledge cutoff](/en/knowledge-cutoff), a decision made yesterday — is to put it in the context. A lot of practical [AI](/en/ai) coding work reduces to this: getting the right facts in front of the model at the moment it needs them.

When contextual and parametric knowledge conflict, the contextual usually wins. Paste the current API docs and the model follows them rather than its stale memory of the old API — though the old version can still bleed through, especially deep into a long session. If the agent keeps reverting to an outdated pattern despite the docs being loaded, that's parametric knowledge leaking past the contextual; restating the correction or moving it closer to the work helps.

Unlike parametric knowledge, contextual knowledge costs something to use. Everything loaded into the window spends [tokens](/en/token) and competes for the model's [attention budget](/en/attention-budget), so loading more is not automatically better — the aim is the relevant facts in the window, not all the facts.

_Reach for this term_ only when contrasting with parametric knowledge; otherwise just say **context**.

_Avoid:_ "working memory" — contextual knowledge is what's in the window _now_; a [memory system](/en/memory-system) is what gets cross-session content into it. Different scales, don't conflate.

_Usage:_

"Why does it nail the API when I paste the docs and fabricate it when I don't?"

"With the docs in, it's contextual knowledge — reading off the page. Without, it's parametric and the rare endpoints blur."

<div style="text-align:center;margin-top:2rem">
  <a href="/th/contextual-knowledge" class="VPLink">Read in ไทย →</a>
</div>

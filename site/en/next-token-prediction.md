---
title: "Next-token prediction"
description: "What the model actually does. Samples one next token from the context, appends it, and runs again. Its only mode of operation."
editLink: false
---

# Next-token prediction

What the [model](/en/model) actually does. Given a [context](/en/context), it samples one next [token](/en/token), appends it, and runs again. Every output — a sentence, a [tool call](/en/tool-call), a thousand-line file — is built one token at a time. The model has no other mode of operation.

Each step works the same way: the tokens in the [context window](/en/context-window) are run through the [parameters](/en/parameters), which produce a probability for every token in the vocabulary — this one is very likely next, that one less so. One token is sampled from those probabilities, appended, and the loop runs again with the slightly longer context. That sampling step is why the same prompt produces different output on different runs: [non-determinism](/en/non-determinism) is built into the mechanism, not a bug layered on top.

Holding onto this mechanism explains behaviour that otherwise looks strange. The model never checks whether a token is _true_ before emitting it — only whether it's _likely_ — which is the root of [hallucination](/en/hallucination). It commits to each token as it goes, so a confident-sounding opening sentence can steer the rest of the answer wrong. And because [output tokens](/en/output-tokens) are produced strictly one at a time, generation speed puts a floor on how fast any [agent](/en/agent) can work.

_Usage:_

"How does the agent 'decide' to call a tool?"

"It doesn't — it's next-token prediction all the way down. The tool call is just a structured string the [harness](/en/harness) parses out of the output stream."

<div style="text-align:center;margin-top:2rem">
  <a href="/th/next-token-prediction" class="VPLink">Read in ไทย →</a>
</div>

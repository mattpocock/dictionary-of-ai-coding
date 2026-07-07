---
description: Running a trained model to generate output — what happens on every model provider request. Parameters stay fixed.
---

Running a trained [model](./Model.md) to generate output — what happens on every [model provider request](./Model%20provider%20request.md). [Parameters](./Parameters.md) stay fixed; the model just does [next-token prediction](./Next-token%20prediction.md) over the [context](./Context.md) it's given. Cheap relative to [training](./Training.md), but billed per [token](./Token.md) and the dominant cost of using a model.

A model's life splits into two phases:

| Phase     | When it happens                  | What it does                                                    | Parameters    |
| --------- | -------------------------------- | --------------------------------------------------------------- | ------------- |
| Training  | Once, before release             | Produces the parameters from a training corpus                  | Being written |
| Inference | Every time anyone uses the model | Runs the frozen parameters over your context to generate tokens | Read-only     |

Nothing you do at inference time writes back to the parameters — that's the reason a correction you make today doesn't stick tomorrow. The model that makes the same mistake next [session](./Session.md), after you carefully explained the fix, hasn't ignored you; it's incapable of learning from the exchange. The model is [stateless](./Stateless.md) — continuity has to come from outside it — from the [context window](./Context%20window.md) or a [memory system](./Memory%20system.md).

This mechanism also explains how you're billed. Every request runs the model over the full context, so cost scales with [input tokens](./Input%20tokens.md) and [output tokens](./Output%20tokens.md), and an agent making dozens of [tool](./Tool.md) calls pays for inference on each round trip. This is why context size is a cost question as well as a quality one.

_Usage:_

"Why does the bill scale with usage instead of being a flat license?"

"You're paying for inference — every model provider request runs the model on the provider's hardware. Training already happened, but inference costs accrue per request, and a single [turn](./Turn.md) can expand into many requests when tools are called."

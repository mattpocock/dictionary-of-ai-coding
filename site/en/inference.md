---
title: "Inference"
description: "Running a trained model to generate output — what happens on every model provider request. Parameters stay fixed."
editLink: false
---

# Inference

Running a trained [model](/en/model) to generate output — what happens on every [model provider request](/en/model-provider-request). [Parameters](/en/parameters) stay fixed; the model just does [next-token prediction](/en/next-token-prediction) over the [context](/en/context) it's given. Cheap relative to [training](/en/training), but billed per [token](/en/token) and the dominant cost of using a model.

A model's life splits into two phases:

| Phase     | When it happens                  | What it does                                                    | Parameters    |
| --------- | -------------------------------- | --------------------------------------------------------------- | ------------- |
| Training  | Once, before release             | Produces the parameters from a training corpus                  | Being written |
| Inference | Every time anyone uses the model | Runs the frozen parameters over your context to generate tokens | Read-only     |

Nothing you do at inference time writes back to the parameters — that's the reason a correction you make today doesn't stick tomorrow. The model that makes the same mistake next [session](/en/session), after you carefully explained the fix, hasn't ignored you; it's incapable of learning from the exchange. The model is [stateless](/en/stateless) — continuity has to come from outside it — from the [context window](/en/context-window) or a [memory system](/en/memory-system).

This mechanism also explains how you're billed. Every request runs the model over the full context, so cost scales with [input tokens](/en/input-tokens) and [output tokens](/en/output-tokens), and an agent making dozens of [tool](/en/tool) calls pays for inference on each round trip. This is why context size is a cost question as well as a quality one.

_Usage:_

"Why does the bill scale with usage instead of being a flat license?"

"You're paying for inference — every model provider request runs the model on the provider's hardware. Training already happened, but inference costs accrue per request, and a single [turn](/en/turn) can expand into many requests when tools are called."

<div style="text-align:center;margin-top:2rem">
  <a href="/th/inference" class="VPLink">Read in ไทย →</a>
</div>

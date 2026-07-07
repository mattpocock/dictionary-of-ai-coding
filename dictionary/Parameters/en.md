---
description: The numbers inside a model — often billions — tuned during training. Everything the model knows lives in them. Also called weights.
---

The numbers inside a [model](./Model.md) — often billions of them — tuned during [training](./Training.md). Everything the model "knows" lives in them. Training sets them; [inference](./Inference.md) uses them unchanged. Also called _weights_.

Mechanically, the parameters are what turn input into output. [Next-token prediction](./Next-token%20prediction.md) is a giant calculation: the [tokens](./Token.md) in the [context window](./Context%20window.md) go in, get multiplied through the parameters, and a prediction for the next token comes out. There is no database of facts inside the model, no code lookup table — just these numbers, arranged so that the calculation tends to produce useful output. Facts the model can recite from training, like a standard library API, are [parametric knowledge](./Parametric%20knowledge.md): stored in the parameters, not retrieved from anywhere.

The detail worth internalising is that parameters are frozen after training. Nothing you do in a [session](./Session.md) changes them — no correction you make, no codebase you show it, no mistake it learns from. Every session runs on the same numbers. This is why the model is [stateless](./Stateless.md), why its built-in knowledge stops at the [knowledge cutoff](./Knowledge%20cutoff.md), and why anything project-specific has to arrive via [context](./Context.md) instead. The only way parameters change is more training — which produces, in effect, a different model.

_Usage:_

"Can we fine-tune it on our codebase?"

"That'd update the parameters — different model afterwards. For one project it's almost always cheaper to load the codebase as context than to retrain."

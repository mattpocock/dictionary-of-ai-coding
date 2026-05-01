The process that sets a [model](./Model.md)'s [parameters](./Parameters.md), by exposing it to vast amounts of text and adjusting parameters to improve [next-token prediction](./Next-token%20prediction.md). A one-time, expensive process done by the [model provider](./Model%20provider.md). Encompasses both pre-training (the bulk run) and post-training (later refinements like instruction-following and safety); the distinction doesn't matter at this glossary's level.

*Usage:*

"Can we get it to know our internal API?"

"Not via training — that's a months-long process by the model provider. Load the API docs into context instead, that's the lever you actually have."

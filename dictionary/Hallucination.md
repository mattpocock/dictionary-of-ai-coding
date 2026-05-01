Confidently-wrong [model](./Model.md) output. Two flavors with different causes and fixes:

- *Factuality hallucination* — invented or wrong facts about the world (a function that doesn't exist, a wrong API signature, a fake citation). Caused by [parametric knowledge](./Parametric%20knowledge.md) gaps, often past the [knowledge cutoff](./Knowledge%20cutoff.md). Fix: load the right [contextual knowledge](./Contextual%20knowledge.md).
- *Faithfulness hallucination* — output drifts from the **contextual knowledge** that's loaded, the user's instructions, or the model's own prior reasoning. Symptom of [attention degradation](./Attention%20degradation.md); worsens in the [dumb zone](./Smart%20zone.md). Fix: [clear](./Clearing.md) or [compact](./Compaction.md).

*Avoid:* "hallucination" as a bare synonym for "wrong" — without naming the flavor, the term has no diagnostic value.

*Usage:*

"It hallucinated a `parseAsync` method on the schema."

"Factuality or faithfulness?"

"The method exists in the docs I pasted — it just stopped reading them after turn forty."

"Faithfulness then. Compact and reload, don't bother adding more docs."

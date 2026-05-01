Running a trained [model](./Model.md) to generate output — what happens on every [model provider request](./Model%20provider%20request.md). [Parameters](./Parameters.md) stay fixed; the model just does [next-token prediction](./Next-token%20prediction.md) over the [context](./Context.md) it's given. Cheap relative to [training](./Training.md), but billed per [token](./Token.md) and the dominant cost of using a model.

*Usage:*

"Why does the bill scale with usage instead of being a flat license?"

"You're paying for inference — every model provider request runs the model on the provider's hardware. Training already happened, but inference costs accrue per request, and a single turn can fan out into many requests when tools are called."

What the [harness](./Harness.md) shows the user before executing a [tool call](./Tool%20call.md) that isn't pre-approved. The [model](./Model.md) produces a tool call; instead of running it immediately, the harness pauses and asks. Approve and it runs; deny and the harness reports the denial back to the model as a [tool result](./Tool%20result.md). The mechanism by which a harness puts a human in the [loop](./Human-in-the-loop.md) for risky or sensitive actions.

*Usage:*

"It's been blocked on a permission request for ten minutes — I was in a meeting."

"That's the cost of human-in-the-loop. Pre-approve the safe tools so the request only fires on the actually-risky calls."

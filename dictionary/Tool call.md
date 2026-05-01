The [model](./Model.md)'s output naming a [tool](./Tool.md) and its arguments — just structured text. It doesn't do anything on its own; the [harness](./Harness.md) has to read it and execute. Produced by the model in one [model provider request](./Model%20provider%20request.md).

*Usage:* "It said it ran the tests but the file timestamps haven't changed." "Look at the transcript — did it actually emit a tool call, or just describe running them? The model produces the call, but if the harness didn't execute it, nothing happened."

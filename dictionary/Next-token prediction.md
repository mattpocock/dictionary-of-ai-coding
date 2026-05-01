What the [model](./Model.md) actually does. Given a [context](./Context.md), it samples one next [token](./Token.md), appends it, and runs again. Every output — a sentence, a [tool call](./Tool%20call.md), a thousand-line file — is built one token at a time. The model has no other mode of operation.

*Usage:*

"How does the agent 'decide' to call a tool?"

"It doesn't — it's next-token prediction all the way down. The tool call is just a structured string the harness parses out of the output stream."

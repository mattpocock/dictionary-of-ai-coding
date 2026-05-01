One user message plus everything the [agent](./Agent.md) does in response, up until it yields back to the user. Contains one or more [model provider requests](./Model%20provider%20request.md) — many, if the agent calls [tools](./Tool.md). A clarifying question closes the turn; your reply opens the next one. The hierarchy is [session](./Session.md) **> Turn > Model provider request**.

*Usage:* "One turn took two minutes?" "It made fourteen tool calls inside that turn — each one is a separate model provider request. Latency stacks up before the agent finally yields back to you."

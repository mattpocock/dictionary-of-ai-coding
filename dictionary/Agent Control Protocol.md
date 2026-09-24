---
description: A draft protocol for agents to operate an existing app's UI via structured commands instead of screenshots or DOM scraping.
---

**Agent Control Protocol.** A draft protocol that lets an [agent](./Agent.md) operate an existing application's UI through structured commands, instead of reading screenshots or scraping the DOM. The application declares a manifest of its screens, fields, and actions up front; the agent reads that manifest rather than the pixels, then sends commands such as "set this field" or "click this button" and gets a result back for each one.

The alternatives it's trying to replace both break in a specific, familiar way. Vision-based automation feeds screenshots to the model, which is slow and spends [tokens](./Token.md) decoding an image just to locate a button — and the moment a designer reflows the page, whatever the agent had inferred about layout is wrong. DOM scraping avoids the image cost but couples the agent to markup that shifts with every deploy, so a class-name rename breaks the automation with no warning. Traditional robotic process automation sidesteps both, but it's built for scheduled batch runs, not a live, conversational back-and-forth with a user mid-task.

The protocol runs as a loop once the manifest is exchanged:

| Step | Who   | What happens                                                                |
| ---- | ----- | --------------------------------------------------------------------------- |
| 1    | App   | Sends a manifest: its screens, fields, and actions                          |
| 2    | Agent | Matches the user's request against the manifest                             |
| 3    | Agent | Sends a numbered command — `set_field`, `click`, `navigate`, and so on      |
| 4    | App   | Executes the command, returns a result tagged with the same sequence number |

This makes the application's UI an ordinary [environment](./Environment.md) for the agent to act on — structured data in, structured commands out, the same shape as any other tool integration, just aimed at a UI instead of a database or API.

It sits next to [MCP](./MCP.md) rather than replacing it: MCP covers agent-to-data and agent-to-tool, this covers agent-to-existing-UI. It's a v2.0 draft from a small team, not an established standard — most applications don't expose a manifest, so treat support for it as the exception rather than something to plan around by default.

_Avoid:_ confusing this with the [Agent Client Protocol](./Agent%20Client%20Protocol.md) — same acronym, unrelated protocols. That one standardizes how a code editor talks to a coding agent; this one is an agent operating an arbitrary application's UI, and has nothing to do with coding tools specifically.

_Usage:_

"The UI-testing agent keeps breaking every time the design team reflows a screen."

"That's screenshot coupling. If the app ships an ACP manifest, swap the vision step for reading the manifest — fields and actions arrive as data, so a layout change doesn't retrain the agent."

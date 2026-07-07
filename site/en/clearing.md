---
title: "Clearing"
description: "Ending the current session and starting a fresh one. The next message begins with an empty session and an empty context window."
editLink: false
---

# Clearing

Ending the current [session](/en/session) and starting a fresh one. The next message begins with an empty session and an empty [context window](/en/context-window). Usually user-driven.

Clearing is the cure for a polluted context. A session accumulates everything: failed attempts, wrong turns, stale [tool results](/en/tool-result), abandoned plans. The [model](/en/model) re-reads all of it on every [turn](/en/turn), and bad history drags on new work. Deep into a long session the [agent](/en/agent) gets vaguer and less obedient — instructions you gave clearly get ignored, quality slips, and prodding it to do better doesn't help, because the noise it's wading through is still in its [context](/en/context). Clearing removes the noise.

Clearing doesn't erase the conversation. Most [harnesses](/en/harness) keep session history on your computer, so the transcript is still there to read or resume. What's gone is the agent's working state: the model is [stateless](/en/stateless), so the new session knows nothing the old one knew. If the session holds decisions or progress the next one will need, have the agent write a [handoff artifact](/en/handoff-artifact) first, then start the new session by pointing at it.

Compare [compaction](/en/compaction), which summarises the session into the new context instead of starting empty. Clearing is the blunter tool: nothing carries over, including the junk.

_Usage:_

"It's stuck looping on the failing test."

"Just clear it — start a fresh session with the plan doc and the test file. No point fighting the existing context."

<div style="text-align:center;margin-top:2rem">
  <a href="/th/clearing" class="VPLink">Read in ไทย →</a>
</div>

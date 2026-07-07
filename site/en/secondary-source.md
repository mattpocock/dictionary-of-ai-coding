---
title: "Secondary source"
description: "An account of a primary source, one step removed — summaries, docs, compaction summaries. Cheap to load, lossy by construction."
editLink: false
---

# Secondary source

An account of a [primary source](/en/primary-source), one step removed — documentation describing code, a summary describing a transcript, a report describing search results. Cheaper to load into the [context window](/en/context-window) than the source it describes, and lossy by construction: whoever wrote it decided what mattered, and whatever they dropped is invisible to a reader who only has the summary.

A lot of [context](/en/context) engineering is the manufacture of secondary sources. [Compaction](/en/compaction) turns the [session](/en/session) history into a summary that seeds the next session. A [subagent](/en/subagent) burns its own context on a noisy search and returns a short report. A [handoff artifact](/en/handoff-artifact) condenses a session's decisions into a document the next session reads. [Memory systems](/en/memory-system) distil what a session learned into notes. Each makes the same trade: fidelity for headroom.

Secondary sources fail in two ways. They're lossy — the compaction summary that lost the schema decision, the report that didn't mention the edge case. And they drift — the primary source changes and the account doesn't follow, so docs describe last quarter's architecture with this quarter's confidence. When an [agent](/en/agent) acts on a secondary source that has failed either way, it works confidently from wrong information; the fix is sending it back to the primary source.

Neither failure makes secondary sources a mistake. The context window is finite, and primary sources are expensive; without summaries, reports, and handoff documents, nothing large fits. The skill is knowing which details can survive the loss — and verifying against the primary source when one can't. A well-made secondary source carries a [context pointer](/en/context-pointer) back to its original — the summary that names the transcript it came from, the doc that names the file it describes — so when the account isn't enough, the reader can follow the pointer rather than work from the loss.

_Usage:_

"The handoff doc says auth is done, but the new session keeps finding broken token refresh."

"The doc's a secondary source — the last session wrote down what it believed, not what's true. Have the new session run the auth tests and trust the primary source."

<div style="text-align:center;margin-top:2rem">
  <a href="/th/secondary-source" class="VPLink">Read in ไทย →</a>
</div>

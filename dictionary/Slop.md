---
description: AI-generated output shipped to someone else without review. Plausible on the surface; the cost of checking it lands on the recipient.
aliases:
  - AI slop
---

AI-generated output shipped to someone else without [human review](./Human%20review.md) — the pull request its sender never read, the bug report nobody reproduced, the generated doc pasted into the wiki. Simon Willison [pinned the definition down in 2024](https://simonwillison.net/2024/May/8/slop/), drawing the parallel to spam: content "mindlessly generated and thrust upon someone who didn't ask for it". Two properties define it — unrequested and unreviewed. A [model](./Model.md) produced it, and no one exercised judgement on it before it was handed to another person.

Slop is hard to reject on sight because model output is plausible by construction. [Next-token prediction](./Next-token%20prediction.md) produces the same assured register whether the content is sound, [hallucinated](./Hallucination.md), or subtly wrong for this codebase, and the signals reviewers use as shortcuts — tidy structure, comments, tests, a confident description — now cost nothing to counterfeit. So the 600-line PR looks careful. An hour of reading finds tests that assert on mocks and a helper the codebase already had; a follow-up question goes unanswered, because the sender never read the diff and the [session](./Session.md) that wrote it is gone. Identifying slop takes exactly the reading the producer skipped.

The economics behind slop are an asymmetry: generation became nearly free, verification didn't. The skipped review isn't saved — it is transferred to a recipient who starts with less knowledge of the change than the sender had. At volume the transfer breaks anything that runs on human attention: review queues, issue trackers, bug bounties. In 2025 roughly [20% of the security reports curl received were slop](https://daniel.haxx.se/blog/2025/07/14/death-by-a-thousand-slops/), each occupying three or four maintainers for 30 minutes to three hours before it could be dismissed; the project shut its bug bounty down the following year.

Provenance is not the test — review is. [Agent](./Agent.md)-written code a human has read and stands behind is not slop, whatever fraction of it the model typed. The term is the artifact-side complement of [vibe coding](./Vibe%20coding.md), which names the stance: vibe coding your own [prototype](./Prototyping.md) spends only your own time, and turns into slop production the moment unread output ships to someone else. Correctness doesn't redeem it — an unreviewed change that happens to work still arrives unowned, and the recipient can't know it works without doing the reading themselves. The norm that follows is Willison's: you attach your credibility to what you publish — read it before you ship it, or say plainly that you haven't.

_Avoid:_ "slop" as a slur for anything AI-assisted. The test is review, not provenance — applied to work someone has read and stands behind, the word loses the line it exists to draw.

_Usage:_

"Three PRs this morning, each adding its own retry helper — full test suites, every assertion against a mock."

"Did you ask why the helpers retry three times?"

"Asked one author. They said they'd need to check with the agent that wrote it. That session's gone."

"Slop, then. Close them and ask for one PR the author has actually read."

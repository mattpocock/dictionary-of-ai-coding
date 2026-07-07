---
title: "Automated check"
description: "A deterministic verification that runs in the environment — tests, type checks, lints, build, pre-commit hooks. Pass/fail, no judgement."
editLink: false
---

# Automated check

A deterministic verification that runs in the [environment](/en/environment) — tests, type checks, lints, build, pre-commit hooks. Pass/fail, no judgement. The signal an [agent](/en/agent) can self-correct from without involving anyone else. A flaky test is a broken check, not a non-check; automated checks are deterministic _by design_.

Self-correction works as a loop. The agent makes a change, runs the check as a [tool call](/en/tool-call), and the failure output lands in its [context window](/en/context-window) — a type error with a file and line, a failing assertion with expected and actual values. That's enough for the agent to fix the problem and run the check again, around and around until it passes, with no human in the loop. Determinism is what makes the loop trustworthy: the same code always produces the same verdict, so a pass means something. A flaky check poisons this — the agent "fixes" code that was fine, or retries past a real failure.

This is why good checks are a large part of a codebase's [AX](/en/ax). An agent in a repo with strict types, a fast test suite, and a linter catches most of its own mistakes before you see them; an agent in a repo with none of those ships whatever it produces. The difference matters most in [AFK](/en/afk) runs, where checks are the only verification happening during the run. But a check only catches what it asserts — green checks mean the asserted properties hold, not that the code is right. The judgement-shaped gaps are what [automated review](/en/automated-review) and [human review](/en/human-review) are for.

_Avoid:_ "feedback loop" / "backpressure" — both lump checks together with review. _Avoid:_ "test" — tests are automated checks, but not all automated checks are tests.

_Usage:_

"The agent keeps shipping broken code in the AFK runs."

"What automated checks are wired into the [sandbox](/en/sandbox)?"

"Just the unit tests."

"Add typecheck and lint — it'll self-correct from those before the PR ever lands."

<div style="text-align:center;margin-top:2rem">
  <a href="/th/automated-check" class="VPLink">Read in ไทย →</a>
</div>

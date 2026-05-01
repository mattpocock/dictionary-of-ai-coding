A deterministic verification that runs in the [environment](./Environment.md) — tests, type checks, lints, build, pre-commit hooks. Pass/fail, no judgement. The signal an [agent](./Agent.md) can self-correct from without involving anyone else. A flaky test is a broken check, not a non-check; automated checks are deterministic *by design*.

*Avoid:* "feedback loop" / "backpressure" — both lump checks together with [review](./Automated%20review.md). *Avoid:* "test" — tests are automated checks, but not all automated checks are tests.

*Usage:* "The agent keeps shipping broken code in the AFK runs." "What automated checks are wired into the sandbox?" "Just the unit tests." "Add typecheck and lint — it'll self-correct from those before the PR ever lands."

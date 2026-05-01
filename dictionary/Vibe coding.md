A working pattern where the user accepts the [agent](./Agent.md)'s code without [human review](./Human%20review.md). The diff is treated as opaque — what matters is whether the program behaves, not what's inside. [Automated review](./Automated%20review.md) and [automated checks](./Automated%20check.md) may still run; vibe coding is silent on both.

*Avoid:* "vibe coding" as a synonym for "low-quality AI coding" — the term names the review stance, not the resulting code.

*Usage:* "Did you read what it changed in the auth flow?" "Vibe coded it — login still works, that's all I checked." "Read the diff before you push, vibing on auth is how secrets leak into logs."

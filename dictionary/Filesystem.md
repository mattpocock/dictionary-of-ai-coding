A tree of files and directories the [agent](./Agent.md) reads from, writes to, and executes within — the default kind of [environment](./Environment.md) for a coding agent. [AGENTS.md](./AGENTS.md.md), [skills](./Skill.md), source code, build scripts, and [tool](./Tool.md) configs all live in a filesystem. When a [harness](./Harness.md) "starts in your project," it's pointing the agent at a filesystem.

*Usage:*

"Why isn't it picking up my AGENTS.md?"

"It's running against a different filesystem — the sandbox mounted the parent dir, not the project root. Repoint the harness."

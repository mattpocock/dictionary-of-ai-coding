---
description: One repo that holds your skills, AGENTS.md and shared docs, and points at your other repos. You run your agent from it.
---

A repository that holds your [skills](./Skill.md), your [AGENTS.md](./AGENTS.md.md) and your shared docs, and points at your other repos. You run your [agent](./Agent.md) in the Home Repo, and it opens or clones the other repos as the task needs them.

When a project spans several repos, an agent started in one of them sees only that repo. Each repo ends up with its own copy of the skills and the agent setup, the copies drift apart, and [grilling](./Grilling.md) a feature that crosses repos happens without the whole overview. A Home Repo keeps one copy of the shared material, and [sessions](./Session.md) start there rather than inside a single repo.

| Lives in the Home Repo                                              | Stays in each repo                         |
| ------------------------------------------------------------------- | ------------------------------------------ |
| Skills used across repos                                            | The repo's code                            |
| AGENTS.md, with a pointer to each repo                              | Its own AGENTS.md, build and test commands |
| Shared docs: coding standards, a glossary, system-wide decisions    | Docs about that repo alone                 |
| Tooling, such as a CLI that connects the agent to external services |                                            |

Each pointer is a [context pointer](./Context%20pointer.md): one line naming the repo, where it lives on disk, and where to clone it from if it's missing. About 20 repos works fine this way. At a few hundred, one pointer per repo is too many for the agent to choose between, so point at one file per area of the business and list that area's repos in it ([progressive disclosure](./Progressive%20disclosure.md)). At thousands of repos, the skills have enough consumers that a skills marketplace fits better.

A Home Repo replaces a monorepo when you can't have one: when you mix public and private repos, or when a team won't adopt a monorepo. For a team, the Home Repo is the thing you share. In a [software factory](./Software%20factory.md), the Home Repo goes in the [sandbox](./Sandbox.md) and clones the other repos as it needs them.

_Avoid:_ "agent repo" and "meta-repo", older names for the same thing.

_Usage:_

"I keep copying the same skills into every repo, and the copies have drifted."

"Move them into a Home Repo. One copy of the skills, AGENTS.md points at each repo, and you start your sessions there."

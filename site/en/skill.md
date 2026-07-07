---
title: "Skill"
description: "A teachable capability bundled as a unit — kept out of the context window until a context pointer pulls it in for the task at hand."
editLink: false
---

# Skill

A teachable capability bundled as a unit — instructions and resources for doing one task well, kept in the [environment](/en/environment) until a [context pointer](/en/context-pointer) pulls it into the [context window](/en/context-window) for the task at hand. The unit of [progressive disclosure](/en/progressive-disclosure) in a [harness](/en/harness).

Skills are an open standard, defined at [agentskills.io](https://agentskills.io) — originally developed by Anthropic and since adopted by most major harnesses, so a skill written once works across them. The format is a folder containing:

- A `SKILL.md` file — metadata (a name and description, at minimum) plus the instructions themselves
- Optionally, scripts the [agent](/en/agent) can run
- Optionally, templates and reference material the instructions point to

Only the name and description sit in [context](/en/context) by default. When the agent's task matches, it loads the rest. Until then, the skill takes up almost no room — a sentence or two of [tokens](/en/token), however large its full instructions are.

This distinguishes skills from [AGENTS.md](/en/agents-md), which is loaded into every [session](/en/session) regardless of the task. A skill is read when a particular kind of work comes up — releasing, scaffolding a new service, writing a migration — and ignored the rest of the time.

_Avoid:_ "[tool](/en/tool)" — a tool is what the agent _calls_; a skill is instructions it _reads_.

_Usage:_

"Where should I put the deploy runbook?"

"As a skill — the agent loads it only when the task involves deploys. In AGENTS.md it'd burn tokens on every [turn](/en/turn) for something we use weekly."

<div style="text-align:center;margin-top:2rem">
  <a href="/th/skill" class="VPLink">Read in ไทย →</a>
</div>

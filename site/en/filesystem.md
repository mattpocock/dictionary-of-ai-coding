---
title: "Filesystem"
description: "A tree of files and directories the agent reads from, writes to, and executes within — the default environment for a coding agent."
editLink: false
---

# Filesystem

A tree of files and directories the [agent](/en/agent) reads from, writes to, and executes within — the default kind of [environment](/en/environment) for a coding agent. [AGENTS.md](/en/agents-md), [skills](/en/skill), source code, build scripts, and [tool](/en/tool) configs all live in a filesystem. When a [harness](/en/harness) "starts in your project," it's pointing the agent at a filesystem.

The agent touches it only through [tool calls](/en/tool-call) — reading a file, writing one, running a shell command. Nothing on disk is in the [context window](/en/context-window) until a tool call loads it, which is what lets the agent work in a repository far larger than the window: the filesystem holds everything, the context holds only what the current task has read. Some harnesses do load the current directory's filenames into the context window by default — not the contents, just the tree — which act as [context pointers](/en/context-pointer): the agent sees what exists and reads the files it needs.

And it's shared with you. The files the agent edits are the same ones you open in your editor and diff in git — the filesystem is the common workspace where you review what the agent did.

_Usage:_

"Why isn't it picking up my AGENTS.md?"

"It's running against a different filesystem — the [sandbox](/en/sandbox) mounted the parent dir, not the project root. Repoint the harness."

<div style="text-align:center;margin-top:2rem">
  <a href="/th/filesystem" class="VPLink">Read in ไทย →</a>
</div>

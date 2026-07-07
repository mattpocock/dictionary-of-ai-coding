---
layout: page
title: AI Coding Dictionary
lang: en
---

<script setup>
import DictionaryHome from '../.vitepress/theme/DictionaryHome.vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const sections = [
  {
    "heading": "The Model",
    "terms": [
      {
        "slug": "ai",
        "title": "AI",
        "description": "A moving label, not a technology. Points at whatever computers can newly, impressively do — right now, large language models."
      },
      {
        "slug": "model",
        "title": "Model",
        "description": "The parameters. Stateless — does next-token prediction and nothing else. Cannot do anything agentic on its own."
      },
      {
        "slug": "parameters",
        "title": "Parameters",
        "description": "The numbers inside a model — often billions — tuned during training. Everything the model knows lives in them. Also called weights."
      },
      {
        "slug": "training",
        "title": "Training",
        "description": "The process that sets a model's parameters by exposing it to vast amounts of text and adjusting to improve next-token prediction."
      },
      {
        "slug": "inference",
        "title": "Inference",
        "description": "Running a trained model to generate output — what happens on every model provider request. Parameters stay fixed."
      },
      {
        "slug": "effort",
        "title": "Effort",
        "description": "A dial for how much reasoning the model does before it answers. More effort spends more output tokens for a better shot at hard problems."
      },
      {
        "slug": "token",
        "title": "Token",
        "description": "The atomic unit a model reads and writes. Roughly word-sized but not exactly. Context window size, cost, and latency all count tokens."
      },
      {
        "slug": "next-token-prediction",
        "title": "Next-token prediction",
        "description": "What the model actually does. Samples one next token from the context, appends it, and runs again. Its only mode of operation."
      },
      {
        "slug": "non-determinism",
        "title": "Non-determinism",
        "description": "The same input can produce different output. A property of how models generate text and how providers serve requests."
      },
      {
        "slug": "model-provider",
        "title": "Model provider",
        "description": "Whatever serves a model for inference. Usually remote (Anthropic, OpenAI, Google), but can also be local (Ollama, llama.cpp)."
      },
      {
        "slug": "harness",
        "title": "Harness",
        "description": "\"Everything around the model that turns it into an agent: tools, system prompt, context-window management, permissions, hooks.\""
      },
      {
        "slug": "model-provider-request",
        "title": "Model provider request",
        "description": "One round-trip from the harness to the model provider. The harness sends context; the provider returns one response."
      },
      {
        "slug": "input-tokens",
        "title": "Input tokens",
        "description": "Tokens the harness sends on each model provider request. Billed at a lower rate than output tokens."
      },
      {
        "slug": "output-tokens",
        "title": "Output tokens",
        "description": "Tokens the model generates back. Billed at a higher rate than input tokens, since they cost more compute to produce."
      },
      {
        "slug": "prefix-cache",
        "title": "Prefix cache",
        "description": "The provider-side store that lets consecutive requests skip re-processing a shared prefix, billing those tokens at a lower rate."
      },
      {
        "slug": "cache-tokens",
        "title": "Cache tokens",
        "description": "Input tokens the provider has cached from a previous request via its prefix cache, billed at a much lower rate."
      }
    ]
  },
  {
    "heading": "Sessions, Context Windows & Turns",
    "terms": [
      {
        "slug": "stateless",
        "title": "Stateless",
        "description": "Carries no information forward. The model is stateless across requests; an agent is stateless across sessions by default."
      },
      {
        "slug": "context",
        "title": "Context",
        "description": "The relevant information the agent has access to right now — what the agent knows that's pertinent to the task."
      },
      {
        "slug": "context-window",
        "title": "Context window",
        "description": "Everything the model sees on each model provider request. Finite, model-specific, the only surface through which the model perceives."
      },
      {
        "slug": "stateful",
        "title": "Stateful",
        "description": "Carries information forward. Sessions are stateful across turns; agents can be made stateful across sessions via a memory system."
      },
      {
        "slug": "agent",
        "title": "Agent",
        "description": "A model harnessed with tools, a system prompt, and a context window, that takes turns with a user. The model in motion."
      },
      {
        "slug": "system-prompt",
        "title": "System prompt",
        "description": "The instructions the harness prepends to every model provider request — the agent's standing brief. Usually stable across a session."
      },
      {
        "slug": "session",
        "title": "Session",
        "description": "One bounded run of interaction with an agent. Starts empty, accumulates, ends when cleared, closed, or compacted into a fresh session."
      },
      {
        "slug": "turn",
        "title": "Turn",
        "description": "One user message plus everything the agent does in response, up until it yields back to the user. Contains one or more provider requests."
      }
    ]
  },
  {
    "heading": "Tools & Environment",
    "terms": [
      {
        "slug": "environment",
        "title": "Environment",
        "description": "The world the agent acts on — anything outside the harness that the agent perceives via tool results and changes via tool calls."
      },
      {
        "slug": "filesystem",
        "title": "Filesystem",
        "description": "A tree of files and directories the agent reads from, writes to, and executes within — the default environment for a coding agent."
      },
      {
        "slug": "tool",
        "title": "Tool",
        "description": "A function the harness exposes for the agent to call — Read, Write, Bash, Search. How an agent perceives and acts on the environment."
      },
      {
        "slug": "tool-call",
        "title": "Tool call",
        "description": "The model's output naming a tool and its arguments — just structured text. The harness has to read it and execute."
      },
      {
        "slug": "tool-result",
        "title": "Tool result",
        "description": "What the harness sends back after executing a tool call — file contents, output, or error. The agent's only view of the environment."
      },
      {
        "slug": "mcp",
        "title": "MCP",
        "description": "A protocol for plugging external tool servers into a harness — how an agent gets tools beyond what the harness ships with."
      },
      {
        "slug": "permission-request",
        "title": "Permission request",
        "description": "What the harness shows the user before executing a tool call that isn't pre-approved. The mechanism for putting a human in the loop."
      },
      {
        "slug": "permission-mode",
        "title": "Permission mode",
        "description": "The permission-gating slice of an agent mode — which tool calls trigger a permission request and which run automatically."
      },
      {
        "slug": "agent-mode",
        "title": "Agent mode",
        "description": "A preset bundling a permission mode with behavioral instructions injected into the system prompt. Can flip mid-session."
      },
      {
        "slug": "sandbox",
        "title": "Sandbox",
        "description": "An isolated environment the agent runs inside — container, VM, or restricted shell. Limits the blast radius of agent actions."
      }
    ]
  },
  {
    "heading": "Failure Modes",
    "terms": [
      {
        "slug": "sycophancy",
        "title": "Sycophancy",
        "description": "Confidently agreeable model output. Caused by training that shaped the model to favor answers humans liked — including agreement."
      },
      {
        "slug": "hallucination",
        "title": "Hallucination",
        "description": "\"Confidently-wrong model output. Two flavors: factuality (invented facts) and faithfulness (drift from loaded context).\""
      },
      {
        "slug": "parametric-knowledge",
        "title": "Parametric knowledge",
        "description": "What the model knows from training, stored in its parameters. Frozen at training time. Counterpart to contextual knowledge."
      },
      {
        "slug": "knowledge-cutoff",
        "title": "Knowledge cutoff",
        "description": "The date past which a model has no parametric knowledge. Post-cutoff libraries and APIs are fabrication traps unless docs are loaded."
      },
      {
        "slug": "contextual-knowledge",
        "title": "Contextual knowledge",
        "description": "Facts the agent can read directly from the context right now. Counterpart to parametric knowledge."
      },
      {
        "slug": "attention-relationship",
        "title": "Attention relationship",
        "description": "The pairing between two tokens — meaningful pairs influence each other more than unrelated ones. A context of N tokens has ~N² of these."
      },
      {
        "slug": "attention-budget",
        "title": "Attention budget",
        "description": "Each token has a finite amount of influence to distribute across the rest of the context. Per-token, doesn't grow when context does."
      },
      {
        "slug": "attention-degradation",
        "title": "Attention degradation",
        "description": "As a session grows, each token's attention budget spreads across more competitors; signal on meaningful relationships shrinks."
      },
      {
        "slug": "smart-zone",
        "title": "Smart zone",
        "description": "\"Early in a session the agent is sharp and focused. As the session grows it drifts into a dumb zone: sloppier, forgetful, more mistakes.\""
      }
    ]
  },
  {
    "heading": "Handoffs",
    "terms": [
      {
        "slug": "clearing",
        "title": "Clearing",
        "description": "Ending the current session and starting a fresh one. The next message begins with an empty session and an empty context window."
      },
      {
        "slug": "handoff",
        "title": "Handoff",
        "description": "Transferring agent context from one session to another, with no return path. Carry mechanism varies — artifact, compaction, others."
      },
      {
        "slug": "primary-source",
        "title": "Primary source",
        "description": "The thing itself — code, transcripts, raw data. Complete and authoritative, but expensive to load into context."
      },
      {
        "slug": "secondary-source",
        "title": "Secondary source",
        "description": "An account of a primary source, one step removed — summaries, docs, compaction summaries. Cheap to load, lossy by construction."
      },
      {
        "slug": "handoff-artifact",
        "title": "Handoff artifact",
        "description": "A document used as the carry mechanism for a handoff — written by one session to be read by another."
      },
      {
        "slug": "spec",
        "title": "Spec",
        "description": "A handoff artifact describing a multi-session piece of work — what's being built, not how each session does its share. Made of tickets."
      },
      {
        "slug": "ticket",
        "title": "Ticket",
        "description": "A handoff artifact scoping one session of work. Stands alone or hangs off a spec. Can block or be blocked by sibling tickets."
      },
      {
        "slug": "compaction",
        "title": "Compaction",
        "description": "A handoff done in-memory: the previous session's history is summarised and seeds a fresh session. Lossy — detail traded for headroom."
      },
      {
        "slug": "autocompact",
        "title": "Autocompact",
        "description": "Compaction triggered automatically by the harness when the context window approaches full."
      }
    ]
  },
  {
    "heading": "Memory and Steering",
    "terms": [
      {
        "slug": "memory-system",
        "title": "Memory system",
        "description": "A system that attempts to make an agent stateful across sessions by persisting to the environment and reloading at session start."
      },
      {
        "slug": "agents-md",
        "title": "AGENTS.md",
        "description": "A file in the environment that the harness loads into the context window at session start — the project's standing brief to the agent."
      },
      {
        "slug": "progressive-disclosure",
        "title": "Progressive disclosure",
        "description": "Loading only the context an agent needs right now, with context pointers to the rest. Borrowed from UI design."
      },
      {
        "slug": "context-pointer",
        "title": "Context pointer",
        "description": "A mention in one document that points to another, so the agent can pull it into context only when the task calls for it."
      },
      {
        "slug": "skill",
        "title": "Skill",
        "description": "A teachable capability bundled as a unit — kept out of the context window until a context pointer pulls it in for the task at hand."
      },
      {
        "slug": "subagent",
        "title": "Subagent",
        "description": "An agent spawned by another agent via a tool call. Runs in its own session, reports a single tool result. Cannot spawn further subagents."
      }
    ]
  },
  {
    "heading": "Patterns of Work",
    "terms": [
      {
        "slug": "human-in-the-loop",
        "title": "Human-in-the-loop",
        "description": "A working pattern where one or more humans pair with the agent during a session — reviewing, redirecting, or collaborating in real time."
      },
      {
        "slug": "afk",
        "title": "AFK",
        "description": "A working pattern where the user kicks off a session and leaves the agent to run unattended (away from keyboard)."
      },
      {
        "slug": "automated-check",
        "title": "Automated check",
        "description": "A deterministic verification that runs in the environment — tests, type checks, lints, build, pre-commit hooks. Pass/fail, no judgement."
      },
      {
        "slug": "automated-review",
        "title": "Automated review",
        "description": "\"An agent reviewing another agent's work, often with a different model or system prompt. Non-deterministic: it forms a judgement.\""
      },
      {
        "slug": "human-review",
        "title": "Human review",
        "description": "The user reading the code the agent produced and forming a judgement on it. Reading the diff counts; reading the summary doesn't."
      },
      {
        "slug": "vibe-coding",
        "title": "Vibe coding",
        "description": "A working pattern where the user accepts the agent's code without human review. The diff is treated as opaque."
      },
      {
        "slug": "design-concept",
        "title": "Design concept",
        "description": "The shared understanding of what's being built, held in common between user and agent but separate from any asset."
      },
      {
        "slug": "grilling",
        "title": "Grilling",
        "description": "\"A technique for developing a design concept: the agent interviews the user Socratically, one decision at a time.\""
      },
      {
        "slug": "prototyping",
        "title": "Prototyping",
        "description": "Having the agent build a quick, rough version when conversation is too low-fidelity and you need a real artifact to talk about."
      },
      {
        "slug": "dx",
        "title": "DX",
        "description": "\"Developer experience: how easy a codebase and its toolchain make it for humans to do good work — docs, feedback speed, errors.\""
      },
      {
        "slug": "ax",
        "title": "AX",
        "description": "\"Agent experience: how well the environment is set up for an agent to do good work — checks, architecture, and free context.\""
      }
    ]
  }
]
</script>

<DictionaryHome :sections="sections" />

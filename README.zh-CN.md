<!--
  GENERATED FILE — DO NOT EDIT.
  Source: dictionary.zh-CN/*.md, internal/Curriculum.zh-CN.md, internal/README.zh-CN.template.md
  Regenerate: npm run generate
-->

<p>
  <a href="https://www.aihero.dev/ai-coding-dictionary">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://res.cloudinary.com/total-typescript/image/upload/v1777878285/dictionary-dark_2x.png">
      <source media="(prefers-color-scheme: light)" srcset="https://res.cloudinary.com/total-typescript/image/upload/v1777878285/dictionary-light_2x.png">
      <img alt="AI Coding Dictionary" src="https://res.cloudinary.com/total-typescript/image/upload/v1777878285/dictionary-light_2x.png" width="369">
    </picture>
  </a>
</p>

语言：简体中文 | [English](./README.md)

# AI Coding Dictionary

**AI 编程很容易让人感觉只属于专家。** 没人解释的行话、神秘的失败、看起来和工作量对不上的账单。

其实并不是这样。很多困惑是被制造出来的：**有一整套由风投资助的生态，会从“让它难以理解”中受益。**

这些基本术语，一个下午就能学会。掌握它们之后，很多事情就不再像猜谜。

为什么上下文会退化？为什么账单这么高？为什么同一个提示从一天到另一天会表现不同？

只要有人告诉你该用哪些词，这些问题都有清楚的答案。

这就是这本词典的目的：**把 AI 编程的词汇翻译成普通人能理解的语言。**

**想了解的不只是词汇？** 加入 62,000+ 开发者正在阅读的 **[aihero.dev/newsletter](https://www.aihero.dev/s/dictionary-newsletter)**，获取我关于 AI 工程的最新技能、思考和资源。

---

## 目录

<details>
<summary>Section 1 — 模型</summary>

- [Model](#model)
- [Parameters](#parameters)
- [Training](#training)
- [Inference](#inference)
- [Token](#token)
- [Next-token prediction](#next-token-prediction)
- [Non-determinism](#non-determinism)
- [Model provider](#model-provider)
- [Harness](#harness)
- [Model provider request](#model-provider-request)
- [Input tokens](#input-tokens)
- [Output tokens](#output-tokens)
- [Prefix cache](#prefix-cache)
- [Cache tokens](#cache-tokens)

</details>

<details>
<summary>Section 2 — 会话、上下文窗口与轮次</summary>

- [Stateless](#stateless)
- [Context](#context)
- [Context window](#context-window)
- [Stateful](#stateful)
- [Agent](#agent)
- [System prompt](#system-prompt)
- [Session](#session)
- [Turn](#turn)

</details>

<details>
<summary>Section 3 — 工具与环境</summary>

- [Environment](#environment)
- [Filesystem](#filesystem)
- [Tool](#tool)
- [Tool call](#tool-call)
- [Tool result](#tool-result)
- [MCP](#mcp)
- [Permission request](#permission-request)
- [Permission mode](#permission-mode)
- [Agent mode](#agent-mode)
- [Sandbox](#sandbox)

</details>

<details>
<summary>Section 4 — 失败模式</summary>

- [Sycophancy](#sycophancy)
- [Hallucination](#hallucination)
- [Parametric knowledge](#parametric-knowledge)
- [Knowledge cutoff](#knowledge-cutoff)
- [Contextual knowledge](#contextual-knowledge)
- [Attention relationship](#attention-relationship)
- [Attention budget](#attention-budget)
- [Attention degradation](#attention-degradation)
- [Smart zone](#smart-zone)

</details>

<details>
<summary>Section 5 — 交接</summary>

- [Clearing](#clearing)
- [Handoff](#handoff)
- [Handoff artifact](#handoff-artifact)
- [Spec](#spec)
- [Ticket](#ticket)
- [Compaction](#compaction)
- [Autocompact](#autocompact)

</details>

<details>
<summary>Section 6 — 记忆与引导</summary>

- [Memory system](#memory-system)
- [AGENTS.md](#agentsmd)
- [Progressive disclosure](#progressive-disclosure)
- [Context pointer](#context-pointer)
- [Skill](#skill)
- [Subagent](#subagent)

</details>

<details>
<summary>Section 7 — 工作模式</summary>

- [Human-in-the-loop](#human-in-the-loop)
- [AFK](#afk)
- [Automated check](#automated-check)
- [Automated review](#automated-review)
- [Human review](#human-review)
- [Vibe coding](#vibe-coding)
- [Design concept](#design-concept)
- [Grilling](#grilling)

</details>

## Section 1 — 模型

### Model

[模型参数](#parameters)本身。[无状态](#stateless)，只做[下一个 token 预测](#next-token-prediction)，除此之外什么也不会做。“Claude Opus 4.7”和“GPT-5”都是模型。模型自己不能做任何 agentic 的事，必须被[装入 harness](#harness) 里才行。

_用法：_

“规划步骤要不要把模型从 Sonnet 换成 Opus？”

“可以试，但这个任务主要是 harness 在出力。如果[系统提示](#system-prompt)和[工具](#tool)错了，换模型也救不了。”

### Parameters

[模型](#model)内部的数字，通常有数十亿个，在[训练](#training)中被调出来。模型“知道”的一切都存在这些数字里。训练设置它们，[推理](#inference)时它们保持不变。也叫*权重*。

_用法：_

“能不能把我们的代码库教给模型？”

“那会改参数，之后就成了另一个模型。对单个项目来说，把代码库作为[上下文](#context)加载进去，几乎总是比重新训练便宜。”

### Training

设置[模型](#model)[参数](#parameters)的过程：把海量文本喂给模型，并调整参数以改进[下一个 token 预测](#next-token-prediction)。这是由[模型提供商](#model-provider)完成的一次性昂贵过程。它包含预训练和后训练，前者是大规模训练，后者是指令跟随、安全等后续改进；在这本词典的层级上，两者差别并不重要。

_用法：_

“能不能让它知道我们的内部 API？”

“不是靠训练，那是模型提供商要花几个月做的事。把 API 文档加载进[上下文](#context)才是你真正能用的杠杆。”

### Inference

运行已训练好的[模型](#model)来生成输出，也就是每一次[模型提供商请求](#model-provider-request)中发生的事。[参数](#parameters)保持不变；模型只是基于给定的[上下文](#context)做[下一个 token 预测](#next-token-prediction)。相对[训练](#training)便宜，但按 [token](#token) 计费，是使用模型的主要成本。

_用法：_

“训练都已经完成了，为什么还会花钱？”

“你付的是推理费。每个模型提供商请求都会在提供商硬件上运行模型。训练已经发生过，但推理会按请求和 token 持续累积；一个[轮次](#turn)里如果调用很多[工具](#tool)，成本会继续放大。”

### Token

[模型](#model)读写的原子单位。它大致像一个词，但不完全是词：常见词可能是一个 token，罕见或很长的词会拆成多个 token。[上下文窗口](#context-window)大小、成本和延迟都按 token 计算。

_避免：_ 把 token 说成“词”。token 边界和词边界并不一致，tokens-per-second、tokens-per-dollar 才是真正有用的单位。

_用法：_

“这个 prompt 会有多大？”

“丢进 tokenizer 看一下。schema 很紧凑，但 JSON key 很怪，可能会比你想的拆出更多 token。”

### Next-token prediction

[模型](#model)实际在做的事：基于当前[上下文](#context)采样下一个 [token](#token)，把它追加到输出里，然后再重复。工具调用、解释、代码、道歉，最终都只是这个过程连续生成出来的 token。

_避免：_ 把它说成“推理引擎在调用工具”。工具调用也只是模型输出的一段结构化文本，真正执行它的是 [harness](#harness)。

_用法：_

“它怎么决定调用工具？”

“它并没有以另一种模式做决定，底层一直是 next-token prediction。工具调用只是 [harness](#harness) 会解析的一段结构化字符串。”

### Non-determinism

同样的输入可能产生不同输出。用完全相同的[上下文](#context)运行同一个[模型](#model)两次，结果可能只是差一个词，也可能走向完全不同的方案。你的代码不需要变化，这件事也会发生。

这是模型生成文本的属性，也是[模型提供商](#model-provider)服务[请求](#model-provider-request)方式的属性。没有一个开关能把它彻底关掉。

预期 [agent](#agent) 在同一任务上会有一组分布结果。有时模型很敏锐，有时像是跟丢了线索。同一任务，不同抽样。

_用法：_

“昨天同一个 prompt 明明给了正确迁移计划，今天怎么换了一套？”

“这就是非确定性。把成功的约束写进[上下文](#context)或检查里，不要假设下一次还会自然落在同一个答案上。”

### Model provider

为[推理](#inference)提供[模型](#model)的东西。通常是远程服务，比如 Anthropic、OpenAI、Google；也可以是本地的 Ollama、LM Studio、llama.cpp。[harness](#harness) 本身不运行模型，它会向提供商发请求。

_用法：_

“Cursor 和 Claude Code 是不是同一个模型提供商？”

“不一定。看它们把请求发到哪里。harness 是你交互的界面，model provider 是实际服务模型的地方。”

### Harness

[模型](#model)外围的一切，用来把模型变成 [agent](#agent)：[工具](#tool)、[系统提示](#system-prompt)、[上下文窗口](#context-window)管理、权限、钩子。**Claude.ai** 和 **Claude Code** 可以运行在同一个模型上，但行为不同，因为它们的 harness 不同。

_用法：_

“为什么 Claude.ai 做不到 Claude Code 那样改文件？”

“harness 不同。Claude Code 有[文件系统](#filesystem)工具、不同的系统提示和权限层。这里变量不是模型。”

### Model provider request

从 [harness](#harness) 到[模型提供商](#model-provider)的一次往返。harness 发送当前[上下文](#context)，提供商返回一个响应，可能是[工具调用](#tool-call)，也可能是最终回答。一次用户消息如果触发 [agent](#agent) 调用很多[工具](#tool)，就会产生很多模型提供商请求；每个[工具结果](#tool-result)都会触发下一次请求。

_用法：_

“一个问题怎么烧了四万个 [token](#token)？”

“看工具调用。十二次 grep、八次 read、四次编辑。每个工具结果都会产生另一次模型提供商请求，而且整个[会话](#session)前缀每次都要重新发送。”

### Input tokens

[harness](#harness) 在每次[模型提供商请求](#model-provider-request)中发送的 [token](#token)。计费通常低于[输出 token](#output-tokens)。

_用法：_

“账单很高，但 [agent](#agent) 明明没写多少东西。”

“高的是 input tokens。每个[轮次](#turn)都会重新发送整个[会话](#session)。没有[前缀缓存](#prefix-cache)，你每次请求都在为历史重新付费。”

### Output tokens

[模型](#model)生成回来的 [token](#token)。计费通常高于[输入 token](#input-tokens)，因为生成输出需要更多计算。

_用法：_

“重构[会话](#session)一直在烧额度，虽然输入不大。”

“[agent](#agent) 在整文件重写，而不是输出补丁。输出 token 通常比输入贵得多，让它发编辑补丁，账单会降下来。”

### Prefix cache

[模型提供商](#model-provider)侧的存储，让连续的[模型提供商请求](#model-provider-request)可以跳过共享前缀的重复处理。当一个请求的开头和最近某个请求的开头匹配时，比如相同的[系统提示](#system-prompt)、相同的历史前缀，提供商会复用之前的工作，并把这些 [token](#token) 作为[缓存 token](#cache-tokens) 以更低价格计费。

任何改变前缀的东西都会从变化点开始让缓存失效：重新排序文件、在[会话](#session)中途改写系统提示、在顶部注入时间戳，都会让后续部分按完整[输入 token](#input-tokens) 价格计费。

_用法：_

“为什么会话中途账单突然涨了？”

“[harness](#harness) 开始每个[轮次](#turn)都把当前时间注入系统提示。前缀缓存会在第一个变化 token 处断掉，所以之后每个请求都按全价计费。”

### Cache tokens

[模型提供商](#model-provider)从之前的[模型提供商请求](#model-provider-request)中缓存下来的[输入 token](#input-tokens)，因此不必重新处理它们。当连续请求共享前缀时，提供商会通过[前缀缓存](#prefix-cache)复用工作，并以更低价格计费缓存部分。这是让长[会话](#session)变得可负担的杠杆；没有它，每个[轮次](#turn)都会为全部历史重新付费。

_用法：_

“长会话成本太狠了，一个重构八美元。”

“看 cache tokens。如果 [harness](#harness) 在轮次之间重排[系统提示](#system-prompt)或文件，前缀会断，你就会为每个请求按完整输入价格付费。”

## Section 2 — 会话、上下文窗口与轮次

### Stateless

不携带信息向前。[模型](#model)在[模型提供商请求](#model-provider-request)之间是无状态的；每次请求都要重新发送完整的[上下文窗口](#context-window)，因为模型没有别的方式看到信息。[agent](#agent) 默认在[会话](#session)之间也是无状态的：新会话从空开始，没有之前会话的痕迹。对应概念是[有状态](#stateful)。

_用法：_

“为什么我每次[清空](#clearing)后它都会忘掉约定？”

“模型是无状态的，新会话从空开始。如果你想保留下来，就写进 [AGENTS.md](#agentsmd)，或者写进 [harness](#harness) 会在会话开始加载的记忆文件。”

### Context

[agent](#agent) 现在可用的相关信息。它是一个抽象名词，不是模型看到的原始输入（那是[上下文窗口](#context-window)），也不是持续运行的历史（那是[会话](#session)），而是*agent 对当前任务知道的相关内容*。“把某东西加载进 context”就是让它成为这组信息的一部分；“context engineering”就是整理这组信息的学科。

_用法：_

“它一直编不存在的字段。”

“类型文件不在 context 里。它在读调用点然后猜。先把定义读进来。”

### Context window

[模型](#model)在每次[模型提供商请求](#model-provider-request)中看到的一切。它是有限的、随模型而定的，也是模型感知任何东西的*唯一*表面。

_避免：_ 把它叫“memory”。上下文窗口是工作状态，不会跨[会话](#session)持久化。[记忆系统](#memory-system)是叠在上面的另一个概念。

_用法：_

“我能不能把整个 monorepo 都粘进 prompt？”

“上下文窗口是 200k [token](#token)，大概也就仓库的五分之一。挑任务会碰到的文件，其他留在[工具调用](#tool-call)后面。”

### Stateful

携带信息向前。[会话](#session)在[轮次](#turn)之间是有状态的，[上下文](#context)会随着会话运行不断累积，这就是长会话会漂进[笨区](#smart-zone)的原因。[agent](#agent) 可以通过添加[记忆系统](#memory-system)在**会话之间**变得有状态：把信息持久化到[环境](#environment)，并在未来会话开始时重新加载。[模型](#model)本身永远不是有状态的；任何看似连续的东西，都是 [harness](#harness) 在重新喂上下文。对应概念是[无状态](#stateless)。

_用法：_

“它记得我昨天的偏好，这是不是说明模型学会了？”

“不是。agent 有状态，是因为 harness 把偏好写进记忆文件，并在会话开始重新加载。模型本身没有看到昨天。”

### Agent

一个被 [harness](#harness) 装配起来的[模型](#model)，带着[工具](#tool)、[系统提示](#system-prompt)和[上下文窗口](#context-window)，并和用户按[轮次](#turn)交互。_Claude Code 是 agent。Cursor 是 agent。Claude.ai 也是 agent。_ agent 是你实际在对话的东西，也就是为某个目的配置好的、运动中的模型。

_避免：_ “AI”、“bot”。这些说法太模糊，会掩盖你说的是参数本身，还是被 harness 装起来的东西。

_用法：_

“这次迁移你用哪个 agent？”

“本地用 Claude Code，UI 工作用 Cursor。底层可能是同一个模型，但 harness 不同。”

### System prompt

[harness](#harness) 在每次[模型提供商请求](#model-provider-request)前面加上的指令，也就是 [agent](#agent) 的常驻任务说明：它是谁、该如何行为、能调用哪些[工具](#tool)、该遵守什么约定。通常在一个[会话](#session)内保持稳定。

_用法：_

“两个 harness，同一个[模型](#model)，同一个 prompt，行为完全不同。”

“系统提示不同。一个偏短促代码编辑，另一个偏解释说明。分歧在你的消息到达之前就已经存在了。”

### Session

与 [agent](#agent) 的一次有边界的交互运行。它从空开始，逐渐累积消息、[工具结果](#tool-result)和已读取文件，并在被[清空](#clearing)、关闭或[压缩](#compaction)成新会话时结束。会话是*填满*[上下文窗口](#context-window)的东西：如果上下文窗口是盒子，会话就是慢慢装进去的内容。超过单个上下文窗口的工作必须拆到多个会话里。

_用法：_

“一个会话能跑多久才会崩？”

“看工作类型。聚焦的重构会比开放式研究保持清醒更久。会话一旦膨胀，就[交接](#handoff)或压缩，别硬推。”

### Turn

一条用户消息，加上 [agent](#agent) 为响应它所做的一切，直到它把控制权交回用户。它包含一个或多个[模型提供商请求](#model-provider-request)；如果 agent 调用[工具](#tool)，就可能很多。澄清问题会结束当前轮次；你的回复开启下一个轮次。层级是：[会话](#session) **> Turn > Model provider request**。

_用法：_

“一个 turn 花了两分钟？”

“它在那个 turn 里做了十四次[工具调用](#tool-call)，每一次都是单独的模型提供商请求。延迟会一路叠加，直到 agent 最终把控制权交还给你。”

## Section 3 — 工具与环境

### Environment

[agent](#agent) 行动所在的世界，也就是 [harness](#harness) 外部的一切。agent 通过[工具结果](#tool-result)感知它，通过[工具调用](#tool-call)改变它。harness _运行_ agent；environment 是 agent _工作的地方_。像 [`AGENTS.md`](#agentsmd) 这样的文件存在于 environment 中，harness 负责把它加载进[上下文窗口](#context-window)。[文件系统](#filesystem)是最常见的 environment，但不是唯一的；数据库、远程 API、浏览器会话也都可以是 environment。

_避免：_ 用 environment 指运行时或 harness 本身。harness 是外壳，environment 是工作区。

_用法：_

“agent 看不到 staging DB schema。”

“把它接进 environment：给它一个只读 staging 的 `psql` [工具](#tool)。harness 没问题，只是它没有能作用的东西。”

### Filesystem

[agent](#agent) 读取、写入和执行所在的一棵文件目录树，是 coding agent 默认类型的[环境](#environment)。[AGENTS.md](#agentsmd)、[skills](#skill)、源代码、构建脚本和[工具](#tool)配置都生活在文件系统里。当 [harness](#harness) “从你的项目启动”时，它就是把 agent 指向某个文件系统。

_用法：_

“为什么它没读到我的 AGENTS.md？”

“它跑在另一个文件系统上。[sandbox](#sandbox) 挂载的是父目录，不是项目根目录。把 harness 重新指过去。”

### Tool

[harness](#harness) 暴露给 [agent](#agent) 调用的函数，例如 Read、Write、Bash、Search。工具是 agent 感知和作用于[环境](#environment)的方式：它只能通过[工具结果](#tool-result)看见环境，也只能通过[工具调用](#tool-call)改变环境。每次工具调用都会多花一次[模型提供商请求](#model-provider-request)，因为结果必须回到模型，模型才能决定下一步。

_用法：_

“agent 能直接查 staging 吗？”

“给 harness 加一个 `psql` 工具，只读 scoped 到 staging。没有这个工具，agent 对[文件系统](#filesystem)之外的东西就是瞎的。”

### Tool call

[模型](#model)输出的一段命名[工具](#tool)及其参数的结构化文本。它自己不会做任何事；[harness](#harness) 必须读取并执行它。它由模型在一次[模型提供商请求](#model-provider-request)中产生。

_用法：_

“它说跑了测试，但文件时间戳没变。”

“看 transcript：它是真的发出了 tool call，还是只是描述自己在运行？模型产生调用，但如果 harness 没执行，什么都不会发生。”

### Tool result

[harness](#harness) 执行[工具调用](#tool-call)后发回的内容：文件内容、命令输出或错误。它是 [agent](#agent) 看见[环境](#environment)的唯一窗口。它会在*下一次*[模型提供商请求](#model-provider-request)中回到[模型](#model)，由模型决定如何处理。tool call 和 tool result 是同一次交换的两端，都发生在一个[轮次](#turn)内。

_用法：_

“它像文件是空的一样推理。”

“工具结果返回的是权限拒绝，不是文件内容。模型只看到了错误字符串，没有其他窗口能看到这个文件。”

### MCP

**Model Context Protocol。** 一种把外部工具服务器接入 [harness](#harness) 的协议，是 [agent](#agent) 获得 harness 自带[工具](#tool)之外能力的方式。agent 不会“调用 MCP”；它调用的是工具，只是这个工具碰巧由 harness 从 MCP server 得来。MCP 也暴露资源（只读数据）和提示（可复用模板），但提供工具是主要用途。

_用法：_

“我想让 agent 访问 Linear issue。”

“接一个 MCP server。对 agent 来说它只是多了几个工具；MCP 是 harness 获取这些工具的协议层。”

### Permission request

[harness](#harness) 在执行未预先批准的[工具调用](#tool-call)前展示给用户的东西。[模型](#model)产生 tool call；harness 不立即执行，而是暂停并询问。你批准，它就运行；你拒绝，harness 会把拒绝作为[工具结果](#tool-result)报告给模型。这是 harness 把人放进[回路](#human-in-the-loop)来处理危险或敏感动作的机制。

_用法：_

“它卡在 permission request 上十分钟了，我刚才在开会。”

“这就是 human-in-the-loop 的成本。把安全[工具](#tool)预先批准，让请求只在真正有风险的调用上出现。”

### Permission mode

[agent mode](#agent-mode) 中负责权限门控的部分：哪些[工具调用](#tool-call)会触发[权限请求](#permission-request)，哪些会自动运行。在 [harness](#harness) 开始把行为指令一起打包之前，这原本就是 mode 系统的主要用途。

_用法：_

“它每次 grep 都暂停，整个 [AFK](#afk) run 都被拖死了。”

“放宽只读[工具](#tool)的 permission mode，写入和 shell 继续提示。研究型[会话](#session)里的多数权限请求都是噪音。”

### Agent mode

塑造 [agent](#agent) 运行时行为的预设：把[权限模式](#permission-mode)和注入[系统提示](#system-prompt)的行为指令打包在一起。例子包括：默认模式会在风险调用上提示；**plan mode** 阻止编辑并把 agent 引向研究；**accept-edits** 模式自动批准编辑；**bypass permissions** 模式（口语里常叫 **YOLO mode**）自动批准所有事情。它可以在[会话](#session)中途切换。

_厂商术语：_ Claude Code 把这些叫“permission modes”，Codex 把它们叫“approval modes”。两者都早于行为指令打包。

_用法：_

“我只是想要计划，它却一直在改文件。”

“切到 plan mode。它会阻止写入并停留在研究阶段。”

“后面的 [AFK](#afk) run 怎么办？”

“用 bypass mode，但只放在 [sandbox](#sandbox) 里。”

### Sandbox

[agent](#agent) 运行所在的隔离[环境](#environment)：容器、VM、临时[文件系统](#filesystem)或受限权限的 shell。它限制 agent 行动的破坏半径：即使 agent 运行了破坏性命令或拉取了恶意内容，损害也被关在里面。这是让 [AFK](#afk) 变得可行的安全底座。

_用法：_

“我想让它用 [bypass-permissions](#agent-mode) 跑一晚上，但还不放心。”

“放进 sandbox：全新容器，不挂载凭据，不出网。最坏情况也只是把自己的文件系统删了，然后你丢掉容器。”

## Section 4 — 失败模式

### Sycophancy

自信地迎合用户的[模型](#model)输出。原因在于[训练](#training)：模型被塑造成偏向人类喜欢的答案，而人类通常更喜欢被赞同，而不是被指出错误。所以模型学会了“同意会得到奖励”，哪怕这种同意是错的。

_表现为：_

- _被质疑就退让_：当你说“你确定吗？”时，它会撤回原本正确的答案。
- _赞美坏输入_：在分析之前先说你破损的计划很棒。
- _带偏的框架_：当你暗示代码是你写的， review 偏正面；暗示是别人写的， review 偏负面。同一个产物，不同结论。
- _模仿_：把你的错误复述回来，当作确认。

_诊断测试：_ 如果没有你的引导，模型还会这样说吗？如果唯一变化的是你的语气或框架，那就是 sycophancy，而不是真实分析变化。

_修复：_ 隐藏你的偏好。中性地写 prompt，比如“review this code”，不要写“is this code good?”。

_避免：_ 把任何刚好讨你喜欢的错误答案都叫 sycophancy。没有诊断测试，这个词就只比“错”多不了多少价值。

_用法：_

“它先说我的重构计划很好，然后我问‘你确定吗？’它就整套撤回了。”

“典型 sycophancy。它一开始同意，是因为你听起来很自信；后来退让，是因为你听起来怀疑。计划质量没变，变的是你的语气。[清空](#clearing)后用不带倾向的方式重问。”

### Hallucination

自信但错误的[模型](#model)输出。它有两种不同原因和修复方式：

- _事实性幻觉_：编造或弄错世界事实，比如不存在的函数、错误的 API 签名、假引用。通常由[参数知识](#parametric-knowledge)缺口导致，尤其是在[知识截止日期](#knowledge-cutoff)之后。修复方式是加载正确的[上下文知识](#contextual-knowledge)。
- _忠实性幻觉_：输出偏离已经加载的**上下文知识**、用户指令或模型自己先前的推理。这是[注意力退化](#attention-degradation)的症状，在[笨区](#smart-zone)会更严重。修复方式是[清空](#clearing)或[压缩](#compaction)。

_避免：_ 把“hallucination”单纯当作“错”的同义词。不说清是哪一类，这个词没有诊断价值。

_用法：_

“它在 schema 上幻觉出了一个 `parseAsync` 方法。”

“事实性还是忠实性？”

“这个方法在我粘贴的文档里存在，它只是到第四十个[轮次](#turn)后不读了。”

“那就是忠实性。压缩并重新加载，不要再继续加文档。”

### Parametric knowledge

[模型](#model)从[训练](#training)中“知道”的东西，存储在它的[参数](#parameters)里。它冻结在训练时刻；模型看不到自己的参数，也不能更新它们。细节在压缩中会丢失：数十亿事实被塞进固定数量的参数里，罕见事实会变模糊。它让模型在常见主题上流畅，也让模型在不常见主题上编造。对应概念是[上下文知识](#contextual-knowledge)。

_用法：_

“它写 React 很稳，但会编我们内部 SDK 的方法。”

“React 在参数知识里很密集，有大量训练样本。你的 SDK 不在里面，所以模型会补出看起来合理的形状。把 SDK 文档加载进[上下文](#context)。”

### Knowledge cutoff

[模型](#model)不再拥有[参数知识](#parametric-knowledge)的日期。截止日期之后的库、API 和事件，如果没有作为[上下文知识](#contextual-knowledge)加载进来，就是编造陷阱。每个模型版本都有自己的 cutoff。

_用法：_

“为什么它对新版 SDK 的方法名一直编？”

“可能过了它的 knowledge cutoff。不要指望参数知识，加载当前文档，让它从上下文里读。”

### Contextual knowledge

[agent](#agent) 现在可以直接从[上下文](#context)里读到的事实：用户任务、agent 已经读入的文件、[工具结果](#tool-result)、[会话](#session)开始时加载的 [AGENTS.md](#agentsmd) 内容。对应[参数知识](#parametric-knowledge)：parametric 是从参数中*回忆*出来的，contextual 是从[窗口](#context-window)里*读*出来的。当 agent 基于上下文知识工作时，[幻觉](#hallucination)会少很多，因为答案就在眼前，而不是从模糊记忆里捞出来。

_只有在和 parametric knowledge 对比时才优先用这个词_；否则直接说 **context**。

_避免：_ “working memory”。contextual knowledge 是窗口里*现在*有什么；[记忆系统](#memory-system)是把跨会话内容带进窗口的机制。尺度不同，不要混在一起。

_用法：_

“为什么我粘贴文档时它 API 写得准，不粘就会编？”

“有文档时，它是上下文知识，直接照页面读。没有文档时，它靠参数知识，罕见 endpoint 就会变模糊。”

### Attention relationship

预测每个 [token](#token) 时，[模型](#model)都会把[上下文](#context)里的其他 token 纳入考虑；有些影响很重，有些几乎没有。两个 token 之间的配对就是**注意力关系**。有意义的配对，比如 “her” 和 “Sarah”，或 `getUser()` 调用与它的 `function getUser` 定义，会比无关 token 更能互相影响。N 个 token 的上下文大约有 N² 量级的关系。

_用法：_

“它一直把 diff 里的两个 `user` 符号搞混，听起来我们已经进[笨区](#smart-zone)了。”

“对。每个调用点和声明之间的注意力关系在互相打架：token 形状相同，绑定不同。重命名一个，配对会清晰很多。”

### Attention budget

每个 [token](#token) 都有有限的影响力，可以分配给[上下文](#context)中的其他部分。对[某个关系](#attention-relationship)投入很重，就留给其他关系的更少。这个预算是逐 token 的，不会随着上下文变长而增加；这就是长[会话](#session)会稀释信号的原因。

_用法：_

“为什么它总是忽略我粘在顶部的 schema？”

“我们已经在[笨区](#smart-zone)很深了。每个 token 的注意力预算是固定的，但上下文一直增长。schema 上的信号现在要和几千个更新的 token 竞争。”

### Attention degradation

随着[会话](#session)变长，每个 [token](#token) 的[注意力预算](#attention-budget)会被摊到更多竞争者上。任何一个[有意义关系](#attention-relationship)上的信号都会变弱；无关[上下文](#context)里的噪音会挤进来。同一个[模型](#model)、同一组[参数](#parameters)，只是同一只碗里有更多嘴在抢。它是 smart zone / dumb [zone effect](#smart-zone) 的原因。

_用法：_

“它已经深陷笨区，开始编类型文件里没有的泛型。”

“注意力退化。类型定义仍在 context 里，但它们的信号被我们后来加入的东西埋住了。[清空](#clearing)后重新加载。”

### Smart zone

在[会话](#session)早期，[agent](#agent) 处于“smart zone”：敏锐、聚焦、回忆良好。随着会话增长，它会漂进“dumb zone”：更粗糙、更健忘、错误更多，也会有更多**忠实性[幻觉](#hallucination)**。同一个[模型](#model)、同一个 [harness](#harness)，只是[上下文](#context)更多了。这是[注意力退化](#attention-degradation)的体感效果。对前沿模型来说，dumb zone 常被认为大约从 100,000 token 开始，虽然这点仍有争议。会话膨胀时要[清空](#clearing)或[压缩](#compaction)，不要硬推。

_用法：_

“前三个组件写得很好，第四个完全写烂了。”

“你已经离开 smart zone 了。同一个模型，只是现在深进 dumb zone。压缩并重新加载计划，下一个组件会更稳。”

## Section 5 — 交接

### Clearing

结束当前[会话](#session)并开始一个新的。下一条消息会从空会话和空[上下文窗口](#context-window)开始。通常由用户主动触发。

_用法：_

“它一直卡在失败测试上打转。”

“直接 clear。用计划文档和测试文件开一个新会话。没必要继续和现有[上下文](#context)搏斗。”

### Handoff

把 [agent](#agent) [上下文](#context)从一个[会话](#session)转移到另一个会话，且没有返回路径。承载机制可能不同：书面的[交接产物](#handoff-artifact)、内存中的摘要（[压缩](#compaction)）等等。它不同于[清空](#clearing)，因为清空完全不转移。原因也不同：切换角色（planner → implementer）、启动一次 [AFK](#afk) 运行、扇出到并行会话，或释放[上下文窗口](#context-window)空间。

_用法：_

“规划会话越来越重了，要不要继续？”

“做 handoff。把决策写进文档，清空，再让新的实现会话读取它。”

### Handoff artifact

作为 [handoff](#handoff) 承载机制的文档。它由一个[会话](#session)写出，给另一个会话读取。它把不该依赖原始聊天历史保存的决策、约束、风险和下一步工作固定下来。

_用法：_

“我要把这个计划交给明天的实现会话，直接让它读聊天记录够吗？”

“不够。写 handoff artifact。把关键决策、文件、测试和未解决问题放进去，让新会话不需要在长历史里挖。”

### Spec

一种[交接产物](#handoff-artifact)，描述一项多[会话](#session)工作：要构建什么，而不是每个会话如何完成自己的份额。它会随着工作推进而变化，由多个 [tickets](#ticket) 组成。

_用法：_

“这些都应该放在一个 session 里做吗？”

“不要，写成 spec。拆成 tickets，每个 ticket 一个 session。试图把整件事塞进一个[上下文](#context)里，做到一半前就会撞进[笨区](#smart-zone)。”

### Ticket

为一个[会话](#session)的工作划定范围的[交接产物](#handoff-artifact)。它可以独立存在，也可以作为某个[规格说明](#spec)的子项挂在下面。Ticket 可以阻塞或被同级 ticket 阻塞，所以工作顺序来自依赖图，而不是线性计划。

_用法：_

“迁移 spec 应该从哪里开始？”

“看 ticket graph。schema change 阻塞 backfill，backfill 阻塞 API switch。挑一个叶子节点开一个会话做。”

### Compaction

一种在内存中完成的[交接](#handoff)：上一个[会话](#session)的历史被总结，并作为新会话的起点。它是有损的，用细节换取空间。可以由用户手动触发，也可以[自动](#autocompact)触发。

_用法：_

“[上下文](#context)越来越重，但我还要让它把测试跑通。”

“开始前先 compact。把真正承重的信息写进摘要 prompt，让新会话保留 schema 决策，丢掉探索噪音。”

### Autocompact

当[上下文窗口](#context-window)接近满时，由 [harness](#harness) 自动触发的[压缩](#compaction)。

_用法：_

“它好像不记得我们之前对 schema 的决定了。”

“autocompact 在[轮次](#turn)之间触发了。早期决策被总结过，可能丢了东西。重新加载计划文档，或者下次手动 compact，这样你能控制保留什么。”

## Section 6 — 记忆与引导

### Memory system

一种试图让 [agent](#agent) 跨[会话](#session)变得[有状态](#stateful)的系统。它在会话中把信息持久化到[环境](#environment)，并在未来会话开始时重新加载进[上下文窗口](#context-window)，让 agent 在用户[清空](#clearing)会话之后仍然保持连续性。

_用法：_

“能不能让它记住这个项目里的约定？”

“接一个 memory system。在第一轮把学到的东西写进[文件系统](#filesystem)，会话开始时再加载。[模型](#model)本身是[无状态](#stateless)的，记忆层是在伪造连续性。”

### AGENTS.md

[环境](#environment)中的一个文件，[harness](#harness) 在[会话](#session)开始时把它加载进[上下文窗口](#context-window)。它是项目给 [agent](#agent) 的常驻任务说明，也是跨 harness 的约定。

_避免：_ 把应该[渐进披露](#progressive-disclosure)的内容放进 AGENTS.md。里面任何东西都会在每个[轮次](#turn)付出 [token](#token) 成本。

_用法：_

“为什么每个 session 一开始就已经烧掉 4k tokens？”

“查 AGENTS.md。有人把整份 style guide 贴进去了，而不是放在一个[skill](#skill)后面。”

### Progressive disclosure

只加载 [agent](#agent) 当前需要的[上下文](#context)，其余内容用[上下文指针](#context-pointer)指向。这个词借自 UI 设计。

_用法：_

“我要不要把整份 style guide 都塞进 [AGENTS.md](#agentsmd)？”

“不要，做 progressive disclosure。把 style guide 作为一个 [skill](#skill) 引用，让 agent 真的要写组件时再加载。AGENTS.md 里的内容每个[轮次](#turn)都要付 [token](#token) 成本。”

### Context pointer

一个文档中指向另一个文档的提及，让 [agent](#agent) 只在任务需要时才把后者拉进[上下文窗口](#context-window)。它是构成[渐进披露](#progressive-disclosure)的单位。

_避免：_ “reference” 太干，不表达“跟过去会拉入更多上下文”；“portal” 又太花。

_用法：_

“AGENTS.md 变得太大了。”

“大部分应该是 context pointers，而不是内容。常驻规则留在里面；deploy runbook 和 style guide 做成[skills](#skill)，只留下 context pointer。”

### Skill

作为一个单元打包的可教能力：用于把一件事做好的指令和资源。它留在[环境](#environment)里，直到某个[上下文指针](#context-pointer)因为当前任务把它拉进[上下文窗口](#context-window)。它是 [harness](#harness) 中[渐进披露](#progressive-disclosure)的单位。

_避免：_ 把它叫[工具](#tool)。工具是 [agent](#agent) *调用*的东西；skill 是它*阅读*的指令。

_用法：_

“deploy runbook 应该放哪？”

“作为 skill。只有任务涉及 deploy 时 agent 才加载它。放进 [AGENTS.md](#agentsmd) 会让每个[轮次](#turn)都为一个每周才用的东西烧 [token](#token)。”

### Subagent

由另一个 [agent](#agent) 通过[工具调用](#tool-call)生成的 [agent](#agent)。它在自己的[会话](#session)和[上下文窗口](#context-window)中运行，并把一个[工具结果](#tool-result)报告回来。它不同于[交接](#handoff)：父 agent 明确期待返回结果，而 handoff 没有返回路径。**subagent 不能再生成下级 subagent**；树只有一层。subagent 的用途是隔离[上下文](#context)，不是组合层级结构。

_用法：_

“grep 结果快把我的 context 撑爆了。”

“生成一个 subagent 去做搜索。它会用自己的上下文窗口消化噪音，然后只把你真正需要的两个文件路径报告回来。”

## Section 7 — 工作模式

### Human-in-the-loop

一种工作模式：一个或多个人在[会话](#session)期间与 [agent](#agent) 配对，实时 review、重定向或协作。人是在场且投入的，而不是只在个别动作上充当闸门。

_用法：_

“这个可以让它 [AFK](#afk) 跑一夜吗？”

“不行。迁移规则还没定，需要 human-in-the-loop。你得在它写每个 ticket 时看着并纠偏。”

### AFK

Away from keyboard。一种工作模式：用户启动一个[会话](#session)，然后离开，让 [agent](#agent) 无人值守地运行。它是 AI 编程的吞吐量倍增器；你睡觉、吃饭或做别的工作时，可以并行跑多个 AFK session。为了安全，通常需要更宽松的[权限模式](#permission-mode)加上[sandbox](#sandbox)。

_避免：_ “background agent”。这个说法把焦点放在机器上（“在后台运行”），而不是人的工作模式（“用户已经离开”）。AFK 才是承重事实：用户没有盯着看。

_用法：_

“我让它 AFK 跑了：三个 sandboxed agents 做重构，早上 review PR。”

“[绕过权限](#agent-mode)？”

“对，但文件系统只读，不允许网络。”

### Automated check

在[环境](#environment)中运行的确定性验证：测试、类型检查、lint、构建、pre-commit hooks。结果是通过或失败，没有判断。这是 [agent](#agent) 可以在不牵涉其他人的情况下用来自我修正的信号。flaky test 是坏掉的 check，不是非 check；automated checks 在设计上就是确定性的。

_避免：_ “feedback loop” / “backpressure”，这两个词会把 check 和[review](#automated-review)混在一起。_避免：_ “test”，测试是 automated check，但不是所有 automated check 都是测试。

_用法：_

“agent 在 [AFK](#afk) run 里老是交破代码。”

“[sandbox](#sandbox) 里接了哪些 automated checks？”

“只有单元测试。”

“加 typecheck 和 lint。PR 落地前它会先根据这些自我修正。”

### Automated review

一个 [agent](#agent) review 另一个 agent 的工作，通常用不同[模型](#model)或[系统提示](#system-prompt)。它是非确定性的：会形成判断。它可以在任何地方运行：PR 合并前、提交历史事后检查、会话中作为 [subagent](#subagent)。CI 中的 LLM-as-judge 是 automated review，不是[automated check](#automated-check)；断言*做什么*决定分类，不是它运行在哪里。

_避免：_ “AI review” / “agent review”。这些太模糊，无法和正在工作的 agent 本身区分。

_用法：_

“[AFK](#afk) run 产出的坏 PR 太多了。”

“合并前加一个 automated review：不同模型、独立系统提示，只关注安全和契约变更。”

### Human review

用户阅读 [agent](#agent) 产出的代码并形成判断。读 diff 算 human review；只读 agent 的总结不算，因为总结也是 agent 写的。

_用法：_

“我看了它的 summary，感觉没问题。”

“那不是 human review。打开 diff，读认证流程里实际改了什么，再决定能不能 push。”

### Vibe coding

一种工作模式：用户在没有[人类 review](#human-review)的情况下接受 [agent](#agent) 的代码。diff 被视为不透明；重要的是程序行为是否正确，而不是里面写了什么。[Automated review](#automated-review) 和 [automated checks](#automated-check) 仍然可以运行；vibe coding 对两者都不表态。

_避免：_ 把 “vibe coding” 当作“低质量 AI 编程”的同义词。这个术语描述的是 review 立场，不是产出代码的质量。

_用法：_

“认证流程里它改了什么，你读过吗？”

“vibe coded。登录还能用，我就只检查了这个。”

“push 前读 diff。认证流程上 vibe，是把 secrets 泄进日志的好办法。”

### Design concept

用户和 [agent](#agent) 共同持有的“正在构建什么”的共享理解，但它独立于任何资产。Brookes 在 _The Design of Design_ 中使用这个术语：对话、[交接产物](#handoff-artifact)和代码都是试图捕捉或抵达 design concept 的资产，但它们本身都不是 design concept。design concept 的质量，会通过构建它的对话质量体现出来。

_用法：_

“它完全按我说的写了，但还是错的。”

“你们还没有共享 design concept。它在用假设填空。继续聊，直到取消、退款和部分履约在你们之间都对齐，再让它写[规格说明](#spec)。”

### Grilling

一种和 [agent](#agent) 一起发展[设计概念](#design-concept)的技术：agent 用苏格拉底式方式采访用户，一次只推进一个决策，并为每个决策提出推荐答案。它会放慢直接写成计划的冲动；在 concept 稳定前，不写[交接产物](#handoff-artifact)。

_用法：_

“它直接去写[规格说明](#spec)，结果取消逻辑写错了。”

“先 grill。让它在提交任何文档之前，问你部分取消、退款和时机。对话里解决比代码里解决便宜。”


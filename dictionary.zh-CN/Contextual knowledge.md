---
description: agent 现在可以直接从 context 里读到的事实。对应 parametric knowledge。
---

[agent](./Agent.md) 现在可以直接从[上下文](./Context.md)里读到的事实：用户任务、agent 已经读入的文件、[工具结果](./Tool%20result.md)、[会话](./Session.md)开始时加载的 [AGENTS.md](./AGENTS.md.md) 内容。对应[参数知识](./Parametric%20knowledge.md)：parametric 是从参数中*回忆*出来的，contextual 是从[窗口](./Context%20window.md)里*读*出来的。当 agent 基于上下文知识工作时，[幻觉](./Hallucination.md)会少很多，因为答案就在眼前，而不是从模糊记忆里捞出来。

_只有在和 parametric knowledge 对比时才优先用这个词_；否则直接说 **context**。

_避免：_ “working memory”。contextual knowledge 是窗口里*现在*有什么；[记忆系统](./Memory%20system.md)是把跨会话内容带进窗口的机制。尺度不同，不要混在一起。

_用法：_

“为什么我粘贴文档时它 API 写得准，不粘就会编？”

“有文档时，它是上下文知识，直接照页面读。没有文档时，它靠参数知识，罕见 endpoint 就会变模糊。”

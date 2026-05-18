---
description: 模型外围的一切，把模型变成 agent：工具、系统提示、上下文窗口管理、权限、钩子。
---

[模型](./Model.md)外围的一切，用来把模型变成 [agent](./Agent.md)：[工具](./Tool.md)、[系统提示](./System%20prompt.md)、[上下文窗口](./Context%20window.md)管理、权限、钩子。**Claude.ai** 和 **Claude Code** 可以运行在同一个模型上，但行为不同，因为它们的 harness 不同。

_用法：_

“为什么 Claude.ai 做不到 Claude Code 那样改文件？”

“harness 不同。Claude Code 有[文件系统](./Filesystem.md)工具、不同的系统提示和权限层。这里变量不是模型。”

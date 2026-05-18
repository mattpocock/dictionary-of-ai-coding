---
description: 一种工作模式，用户启动 session 后离开，让 agent 无人值守地运行。
aliases:
  - away from keyboard
  - AFK (away from keyboard)
---

Away from keyboard。一种工作模式：用户启动一个[会话](./Session.md)，然后离开，让 [agent](./Agent.md) 无人值守地运行。它是 AI 编程的吞吐量倍增器；你睡觉、吃饭或做别的工作时，可以并行跑多个 AFK session。为了安全，通常需要更宽松的[权限模式](./Permission%20mode.md)加上[sandbox](./Sandbox.md)。

_避免：_ “background agent”。这个说法把焦点放在机器上（“在后台运行”），而不是人的工作模式（“用户已经离开”）。AFK 才是承重事实：用户没有盯着看。

_用法：_

“我让它 AFK 跑了：三个 sandboxed agents 做重构，早上 review PR。”

“[绕过权限](./Agent%20mode.md)？”

“对，但文件系统只读，不允许网络。”

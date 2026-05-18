---
description: agent 运行所在的隔离环境，可以是容器、VM 或受限 shell。限制 agent 行动的破坏半径。
aliases:
  - Sandboxing
  - Sandbox / Sandboxing
---

[agent](./Agent.md) 运行所在的隔离[环境](./Environment.md)：容器、VM、临时[文件系统](./Filesystem.md)或受限权限的 shell。它限制 agent 行动的破坏半径：即使 agent 运行了破坏性命令或拉取了恶意内容，损害也被关在里面。这是让 [AFK](./AFK.md) 变得可行的安全底座。

_用法：_

“我想让它用 [bypass-permissions](./Agent%20mode.md) 跑一晚上，但还不放心。”

“放进 sandbox：全新容器，不挂载凭据，不出网。最坏情况也只是把自己的文件系统删了，然后你丢掉容器。”

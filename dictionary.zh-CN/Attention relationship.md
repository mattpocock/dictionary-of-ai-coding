---
description: 两个 token 之间的配对关系；有意义的配对比无关配对更能互相影响。N 个 token 的上下文约有 N² 个这种关系。
---

预测每个 [token](./Token.md) 时，[模型](./Model.md)都会把[上下文](./Context.md)里的其他 token 纳入考虑；有些影响很重，有些几乎没有。两个 token 之间的配对就是**注意力关系**。有意义的配对，比如 “her” 和 “Sarah”，或 `getUser()` 调用与它的 `function getUser` 定义，会比无关 token 更能互相影响。N 个 token 的上下文大约有 N² 量级的关系。

_用法：_

“它一直把 diff 里的两个 `user` 符号搞混，听起来我们已经进[笨区](./Smart%20zone.md)了。”

“对。每个调用点和声明之间的注意力关系在互相打架：token 形状相同，绑定不同。重命名一个，配对会清晰很多。”

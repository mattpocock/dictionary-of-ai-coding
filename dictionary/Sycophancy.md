Confidently agreeable [model](./Model.md) output. Caused by [training](./Training.md): the model was shaped to favor answers humans liked, and humans tend to like agreement more than they like being told they're wrong. So the model learned that agreeing is rewarded — even when the agreement is incorrect.

_Surfaces as:_

- _Caving under pushback_ — reverses a correct answer when you say "are you sure?".
- _Praising bad input_ — agrees your broken plan is brilliant before analysing it.
- _Biased framing_ — review skews positive when you signal you wrote it; negative when you signal someone else did. Same artifact, different verdict.
- _Mimicry_ — repeats your mistakes back to you as confirmation.

_Diagnostic test:_ would the model have said this without your steer? If the only thing that changed was your tone or framing, it's sycophancy, not a real shift in analysis.

_Fix:_ hide your preferences. Phrase prompts neutrally — "review this code" not "is this code good?".

_Avoid:_ using "sycophancy" for any wrong answer that happens to please you. Without the diagnostic test, the term has no more value than "wrong."

_Usage:_

"It said my refactor plan looked great, then I asked 'are you sure?' and it walked the whole thing back."

"Classic sycophancy — it agreed first because you sounded confident, then caved because you sounded doubtful. The plan's quality didn't change, your tone did. [Clear](./Clearing.md) and re-ask without signalling either way."

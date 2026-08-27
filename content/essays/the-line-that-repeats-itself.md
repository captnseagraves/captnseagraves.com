The last time I snapshotted my open Claude Code sessions, there were seventeen. One per workstream: a trading system, this website, an acquisition search, a hiring agent, an essay pipeline, a standup processor. That's not a brag, it's the actual shape of working with agents — the marginal cost of starting a thread collapsed, so I started more threads.

What didn't collapse was the cost of coming back to one.

I'd switch to a tab that had been idle for three hours and lose the next minute reconstructing it. What was this one doing? Did it finish? Is it waiting on me, or did I leave it mid-run? Multiply by seventeen and the re-entry tax is most of the day. The irony is exact: I'd automated the work and left the context-switching manual.

Session recaps didn't fix it. A recap is prose — it tells you what happened, in a paragraph you have to read to find out whether anything is pending. On re-entry I don't want a summary. I want three facts, and it's the same three facts every time.

So now every response, in every project, ends with this:

```
---
📍 Task:   Session status block — packaging the hook as an installable repo
📊 Status: Executing — ~60% (install script + tests done, README in progress)
▶ Next:    Me: write the README, then hand it back for approval
```

The part that earns its keep is the two characters at the front of the last line. `You:` means the session is blocked on me. `Me:` means it isn't. I can scan seventeen tabs for `You:` and find every piece of work that's actually waiting, without reading a word of context. Everything else in the block is orientation; the owner prefix is triage.

## The instruction was the easy half

Defining the format took one edit to my global `CLAUDE.md`: the three lines, five status phases, the rule that the percentage is a gut-read rather than fake precision, and what "done" looks like (`✅ Complete` / `None — no further steps`). Ten minutes.

It also didn't work reliably, and the reason is worth naming because it generalizes to every agent instruction you'll ever write.

`CLAUDE.md` is read once, at session start. It sits at the very beginning of the context window. In a five-turn conversation, that's fine. In a session sixty turns deep — which is most of mine, because the whole point is that these tabs stay alive for days — that instruction is now buried under an enormous pile of newer, louder, more specific material: file contents, tool output, my own follow-up requests. It's still technically in context. It just isn't winning anymore.

This is the failure mode people describe as the model "forgetting" its instructions or "drifting." It isn't forgetting. It's that a static instruction has a fixed position and everything else keeps arriving in front of it.

## The fix is one line of shell

Claude Code has a hook called `UserPromptSubmit` that fires every time you send a message. Whatever it writes to stdout gets appended to that turn's context. So the hook can be a plain `echo`:

```bash
echo 'Reminder: end this response with the 📍/📊/▶ session status block
defined in global CLAUDE.md (Task / Status / Next) as the very last thing.'
```

No script on disk, no state file, no daemon. And it inverts the decay problem completely: instead of one instruction at the oldest position in context, the reminder re-appears at the *newest* position on every single turn. Turn 3 and turn 300 look the same to it.

The division of labor matters more than it looks. The hook carries the **reminder**; the `CLAUDE.md` section carries the **format**. That's deliberate — the format is thirty lines and I edit it freely, but it only has to be read once. The reminder has to be read every turn, so it stays at one line. Put the whole format in the hook and you'd pay for it on every message forever.

That's the reusable idea: **if a behavior has to hold for the entire session, a static instruction won't carry it. Put the format in config and the reminder in a hook.**

## Two rules I'd pass on

**Something has to lose the fight over "last."** I already had a convention that appended a suggestion to the end of my responses. Adding a second thing that also wanted to be last meant both showed up unreliably — two instructions, one final position. The fix was boring and necessary: state the order explicitly, so the older convention now sits *immediately before* the status block. If you have trailing conventions, rank them, or you'll get neither.

**Keep it small enough to be honest.** This is a config section and an `echo`. There's no runtime, nothing to keep in sync, and the failure mode is graceful — if the hook stops firing, compliance degrades back to `CLAUDE.md`-only and the block shows up most of the time instead of every time. I'd rather have that than a status daemon I have to babysit.

The whole thing is on GitHub as [`session-status-block`](https://github.com/captnseagraves/session-status-block): the `CLAUDE.md` section, an idempotent installer that appends to your existing config without stomping the hooks you already have, an uninstaller, and thirteen tests that run against a temp directory instead of your real `~/.claude`. Install is a clone and `./install.sh`.

It's the smallest thing I've built in months. Seventeen tabs, three lines each, and re-entry costs a glance.

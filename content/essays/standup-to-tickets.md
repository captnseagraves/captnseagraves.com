Most standups produce a feeling of alignment and zero artifacts. Everyone says what they're doing, someone says "I'll make a ticket for that," and by 10:15 the whole thing exists only in memory. I got tired of being the person who spent the next forty minutes turning what people said into what the board needed to say.

So I built a process that does it, and I run it every morning for the Ubitel team, where I work as an engineer/PM. Here's the whole flow:

1. **I record standup.** The transcript lands in my notes automatically — an AI meeting note with a summary and the raw transcript.
2. **A Claude Code skill analyzes it.** It reads the transcript, pulls the current sprint board from our Notion kanban, and dedupes: for every commitment or problem mentioned in standup, it decides whether that's a genuinely new ticket, added context for an existing ticket, or already covered.
3. **It presents me three lists:** potential new tickets, existing tickets that need context appended, and a per-person to-do list built from what each person said they'd do today.
4. **First review gate.** I prune, edit, reassign. This matters more than it sounds — the person who *raises* a task is often not the person it belongs to, and a model reading a transcript will happily assign work to whoever mentioned it.
5. **It posts the to-do list to Slack** — our general channel, plain names, one message. Everyone sees what everyone committed to, in writing, minutes after standup ends.
6. **It drafts the full tickets** — title, assignee, status, area, priority, description.
7. **Second review gate.** I review the drafted tickets the same way I'd review a teammate's.
8. **It writes to the board** — creating the new tickets and appending context to existing ones rather than spawning duplicates — and **files the transcript** from my private notes into the team's shared standup repository, so the source of truth is visible to everyone, not trapped in the recorder's account.

Total hands-on time for me: 5-10 min now vs. 1-3 hours depending on the number and size of tasks. Standups processed this way so far: 30+.

## What the skill actually is

Not custom software. It's a markdown file — a procedure document that Claude Code loads when I say "run the standup." It encodes the steps above plus everything I learned the hard way: which channel to post to, how our board's schema works, the fact that our ticketing system's API refuses to move AI meeting notes (they aren't real pages, so you file a linked entry instead), and that notes are private to whoever recorded them until they're explicitly shared. Every gotcha I hit once is written down so neither of us hits it twice.

That's the part I'd underline for anyone building something similar: the value isn't the automation, it's the **encoded operational knowledge**. The first time I ran this flow manually with Claude, it took real effort — looking up IDs, discovering API dead ends, correcting wrong assignments. Each fix went into the skill file. Now the marginal cost of a perfect standup writeup is one review pass.

## The two gates are the design

Nothing in this pipeline writes to a shared surface — Slack, the board, the team's notes — without me approving it first. That's not caution theater; it's what makes the thing usable at all. A transcript is messy. People think out loud, change their minds mid-sentence, mention work that's already on the board. A model's first-pass reading is maybe 70-80% right. The gates convert "AI wrote to our board" (scary, and rightly so) into "AI drafted, a human shipped" (just… how work gets done).

The rule I follow everywhere now: **automate the drafting, gate the publishing.** Every irreversible step — a Slack message the team reads, a ticket someone will act on — gets a human in front of it. Everything before that gets automated as aggressively as possible.

## Why this beats "just take better notes"

The output isn't notes. It's the actual work products the meeting was supposed to produce: commitments visible in Slack, a reconciled board, a filed transcript. The meeting itself didn't change at all — nobody had to adopt a tool, change how they talk, or even know the pipeline exists on day one. That's the adoption trick: automate your own chore first, and let the team experience the output before you ask anything of them.

## It's on GitHub now

I've open-sourced the skill: [standup-to-tickets](https://github.com/captnseagraves/standup-to-tickets). The procedure is `SKILL.md`; your team's specifics — the Slack channel, the sprint board, the name-to-user-ID table — live in a gitignored `config.md`, so the workflow is shareable without leaking your internals.

That split is the reason it *can* be public, and I only did it properly when I went to publish. Fold the IDs into the procedure and a useful skill becomes an unshareable one — which, if you're writing skills you might ever want to hand to someone, is worth getting right on the first pass rather than the day you publish.

One skill file, one morning routine, and standup now ends when the tickets are on the board — not when someone promises to make them.

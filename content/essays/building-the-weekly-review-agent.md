Most weeks I build things and tell nobody. When I mapped the gaps
between me and the AI product roles I want, the biggest one wasn't a
skill — it was publishing. The work existed; the evidence was private.
So I built a system that makes publishing nearly free: an agent that
turns a week of real work into a shipped essay. This site's
[/writing](/writing) section is its output. The system itself is
[open source](https://github.com/captnseagraves/weekly-review-agent) —
and it's packaged as a Claude Code skill, so you can run it on your own
week, not just read about mine.

The obvious version of this — "have an LLM write my blog" — is easy and
bad. Fluent models fabricate by default, flatten your voice into
LinkedIn-speak, and have no business near your private data or a
Publish button. Those three failure modes became the three design
constraints, and designing around them turned out to be the whole
project.

## Constraint one: it is not allowed to invent an accomplishment

Every sentence in a generated draft traces back to evidence: a commit,
a session transcript, a conversation title, or something I said in an
interview. Where evidence is missing, the agent writes an explicit
`[FILL IN]` slot and asks me — never a plausible guess.

The evidence comes from deterministic collectors, not from the model.
Plain Python and bash walk my agent-session transcripts (filtering out
tool noise, automation sessions, and the currently running session),
every git repo under my dev folder (~70 of them, with worktree dedup
and a case-insensitive author match that a real bug taught me to add),
and chat-app exports. Twenty-nine unit tests cover the parsing logic,
written test-first. The model only ever sees pre-filtered digests.

This rule earned its keep immediately. An early draft casually asserted
I was attending a conference that week — inferred from an attendee-list
email. I wasn't going. That failure became a standing rule: registration
emails are not plans; future intentions come only from my own words.

## Constraint two: the human stays the author

The agent doesn't know what I think; it knows what I did. So the heart
of the pipeline is a structured interview, run after the evidence is
collected: an open brain-dump first — always — then pointed questions
generated from the week's material, pushing on tensions and
counterarguments. When the essay engages a piece of writing, the agent
reads it and its primary sources first, then interviews me about it.
The opinions in every essay are mine; the model does assembly.

That order matters. Pointed questions first would anchor me to the
machine's framing of my week. Brain dump first means my connections
lead and the agent's questions sharpen rather than steer.

## Constraint three: gates before anything irreversible

Draft approval, site push, and social posting are three separate gates.
Approving the essay doesn't push the site; pushing the site doesn't
post to LinkedIn. The last step is deliberately manual — the agent
stages the post, and I click Publish.

Privacy runs through everything before those gates. The collectors
redact credential-shaped strings before any text reaches a prompt —
a layer that exists because the transcripts surfaced a real API key
I'd pasted into a session months ago. The playbook adds named-entity
rules on top: no client names, no counterparties, no live-deal details
without my explicit OK. And the lesson kept teaching: when I published
the system itself, GitHub's push protection caught a key-shaped test
fixture my own scrub had missed. Around LLM pipelines, paranoia about
secrets is just calibration.

## What shipped

The pipeline runs weekly: Friday reminder, evidence collection,
interview, draft in my voice, my edits, then a header-art stage — I
pick the visual concept, the newest image model generates three
style-varied options, my pick wires into the page and the link-preview
tags automatically. First essay through the full loop:
["Oil, god, and open weights"](/writing/2026-07-28-weekly).

The stack is deliberately boring: stdlib Python and bash collectors, a
markdown playbook the agent follows, a static site with build-time
OpenGraph prerendering. The interesting parts aren't the technology —
they're the product decisions about where the model is allowed to act
and where it must stop and ask.

And because the playbook is just a skill, implementing it yourself is
one command:

```bash
git clone https://github.com/captnseagraves/weekly-review-agent \
  ~/.claude/skills/weekly-review
```

Swap in your own paths, voice guide, and privacy rules in `SKILL.md`,
and `/weekly-review draft` runs the whole loop — collectors, interview,
draft, art, gates — on your week.

## What I'd tell you if you're building agents

Hallucination is a product constraint, not a model bug — design so
fabrication is structurally impossible, and the model's fluency becomes
safe to use. Put deterministic, testable code everywhere you can and
save the model for judgment. Keep the human where the meaning is made:
opinions in, approvals out. And treat every irreversible action as its
own gate, because "the draft looks good" and "publish it" are different
decisions — collapsing them is how agents ship things you regret.

Last month I needed to hire two people through Upwork — a React Native engineer and a product designer — for a startup I work with. If you've posted on Upwork recently you know what happens next: the proposals arrive in a wall. Fifty-three of them, in our case. Most are templated. Some are agencies pretending to be individuals. A few are genuinely great, and they're buried.

Reading 53 proposals carefully is a full day of work. Skimming them is worse than useless, because skimming selects for confident formatting, not for the person who actually shipped the thing you need.

So I built an agent to do the reading. I just open-sourced it: [upwork-shortlist](https://github.com/captnseagraves/upwork-shortlist).

## What it does

It's a headless TypeScript pipeline: post the jobs, ingest new proposals daily, score each one with Claude against a weighted rubric, and email the hiring team a digest — A-tier shortlist on top, with a one-line rationale for every score.

The rubric is plain data: six weighted dimensions (shipped evidence, skill fit, freelancer stats, rate vs. budget, proposal quality, timezone), red flags that cap a score, green flags that boost it. One deliberate detail: the tier is always computed from the score in code. Claude returns a tier field in its JSON and the pipeline ignores it — a drifting model can't promote anyone past the thresholds.

## What the scoring actually caught

The aggregate result surprised me: **all 53 proposals had at least one red flag.** Not most — all.

The dominant one was mundane and damning: roughly 30 of 53 applicants didn't answer the screening questions at all. Not badly — at all. That single check, which takes a human two seconds per proposal but 53 proposals' worth of patience, cleanly separated people who read the job post from people running a volume strategy.

The subtler catches were the ones that justified the project:

- An agency submitting on behalf of an unnamed engineer — polished proposal, but you can't verify the stats or portfolio of the person who'd actually do the work. I would have missed that on a skim.
- An applicant whose location made their claimed "9am–5pm Pacific availability" arithmetically doubtful.
- A portfolio link that pointed to an established brand's app, presented as solo-built work.
- A cover letter that opened by explicitly declining to write a cover letter.
- Engineers applying to a job whose posting said, in bold, that an LLM-integrated workflow was a core requirement — with no mention of any of it.

The green flags mattered just as much. The strongest signal for the engineering role was a fluent, specific description of a daily Claude Code workflow — not "familiar with AI tools," but concrete detail you can't fake without living it. Scores ranged from 12 to 82. Four applicants cleared the A-tier bar. That's the shortlist. That's the whole point.

## The human veto

Here's the part I care most about: the agent never talks to a candidate. It can't accept, decline, message, or nudge anyone. Its only outputs are an internal email to us and — for A-tier applicants — a *draft* outreach line a human has to copy, edit, and send.

That's not a missing feature. Screening is judgment-heavy but reversible; a bad score costs a re-read. Outreach is a relationship with a real person, and "an AI contacted me about a job" is not how I want anyone to experience a company I work with. Automate the reading. Keep the veto.

## Shipping the pipeline before the integration

One more design decision worth stealing: the Upwork API sits behind a single two-method interface, and the default implementation is a mock that serves fixture proposals. Everything else — Claude scoring, the database, the rendered digest email — is real from day one.

That meant the pipeline was in production, tuned, and trusted before the riskiest dependency (Upwork OAuth approval, which takes a manual review) existed. Going live is one env var. When people ask what "human-in-the-loop agent design" means in practice, this is my answer: real engine, mock edges, hard gate on anything that touches a person.

## What's next

The repo is MIT-licensed and configured for a fictional company, so you can run the whole pipeline — tests, mock ingest, Claude scoring, digest — without any Upwork credentials. Swap in your own job posts and rubric.

I've also written a spec (in the repo, `docs/hosted-product-spec.md`) for what this becomes as a product: a proposal inbox where every application arrives pre-read and pre-scored, and the approve/reject queue — the human veto — is the main screen. Spec only, for now.

If you're hiring through any high-volume channel and drowning: the reading is automatable. The judgment isn't, and shouldn't be.

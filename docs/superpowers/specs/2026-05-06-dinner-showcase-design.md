# Dinner Showcase — Design Spec

**Date:** 2026-05-06
**Author:** Kevin Seagraves (with Claude)
**Status:** Approved, ready for implementation plan
**Repo:** `captnseagraves` (this repo)
**Related repo:** `/Users/kevinseagraves/Desktop/dev/dinner` (Dinner project source)

---

## 1. Context & goals

The Dinner project (Mar 2025 – Jan 2026) is currently represented on `captnseagraves.com` as one of four case-study cards (`content/case-studies/04-dinner.md`, `src/data/caseStudies.ts`). The card hits the basics — surface area, paid-funnel economics, wind-down coda — but it does not do the project justice as the defining personal-brand artifact it could be.

This spec covers three related deliverables:

1. **A long-form essay** about Dinner — drafted via a single tightly-scoped LLM prompt and edited by Kevin.
2. **A new dedicated page** on `captnseagraves.com` to host the essay, plus the small infrastructure to support a second essay already in flight.
3. **A distribution plan** for moving the artifact into the right hands.

### Primary audience

Hiring managers, VPs, and founders evaluating Kevin for **Head of Product, AI Product Manager, Founding Engineer, or Forward Deployed Engineer** roles.

### Secondary audience

Builder peers and the broader operator network who will read this as a personal-brand-defining artifact.

### Required takeaway

> "This person has operator judgment, real AI craft, and absurd range. They should run product or engineering for me."

---

## 2. Spine (non-negotiable)

The piece sits on three legs, in this order of weight:

1. **Operator judgment** — built well, decided well, chose to stop well. Product-life fit is part of product-market fit.
2. **AI craft** — Claude-powered matching system shipped into a real consumer product. *Don't claim earliness; just claim doing it.*
3. **Range** — solo, three platforms, working unit economics on a paid funnel, plus the AI matching system. Don't list like a resume; let it land as evidence.

### Structure: mid-essay pivot

- **Open** with the build and why-it-mattered. Lede framing (verbatim):
  > Adulthood is a friendship problem. In a world that's more isolated and divided I wanted to bring people back to community and back to themselves.
- **Middle**: what was actually built. The product surface, the AI matching, the paid funnel. Concrete and specific. This is where range and AI craft do their work.
- **Pivot, back third**: the call to wind down. Candid. Wind-down framing (verbatim):
  > I felt like I could have driven Dinner to work — but it required being in New York or another anchor city, and my life was moving to Costa Rica for lifestyle and my girlfriend at the time.
- **Close** with what's permanent: what Kevin now knows how to do, and what he's building toward next.

---

## 3. The article

### 3.1 LLM prompt (final, ready to paste)

```
You are helping me draft a long-form personal essay for my website,
captnseagraves.com/dinner. Write the full piece end to end. Don't
ask clarifying questions — write the draft, and I'll edit.

# Who I am
Kevin Seagraves. Founder-engineer, 8 years shipping from scratch.
Past: Gitcoin Grants v0 ($60M+ distributed), NiftyApes (CEO/CTO,
$4.2M raised, two protocols on Ethereum mainnet, wound down
cleanly), Bankless AI agent on Twitter, Ubitel (decentralized
connectivity). Based in Boulder + Nosara.

# The project this essay is about
Dinner — a curated community-dinner platform for adults building
close friendships in new cities. Built solo Mar 2025 – Jan 2026.
React Native (iOS + Android) + full-stack web app + admin
dashboard + marketing site (letsdinner.co) + multi-market paid
acquisition. ~722 commits over 14 months. Eventually wound down
because of product-life fit, not product-market fit — I started
in Brooklyn but ended up living mostly in Costa Rica, and the
on-the-ground operating model couldn't survive the move.

# AI craft (lean into this — but don't claim earliness)
- Claude-powered matching system in production: each scheduled
  dinner gets matched groups via an LLM that reasons over user
  affinity preferences and writes a per-table rationale ("Why
  you're at this table").
- Prompt caching wired through the matching pipeline to control
  cost and latency.
- Per-signup re-match + undo at both signup and run level —
  operationally real, not demo code.
- Snapshot-tested LLM client.
I shipped this. State that. Don't claim I did it before others.

# Audience and intent
Primary reader: hiring managers, VPs, founders evaluating me for
Head of Product, AI PM, founding engineer, or forward-deployed
engineer roles. Secondary reader: peers and the broader builder
audience who'll read this as a defining personal-brand artifact.
The takeaway has to be: "this person has operator judgment, real
AI craft, and absurd range — they should run product or
engineering for me."

# Spine (non-negotiable)
The piece sits on three legs, in this order of weight:
1. Operator judgment — I built it well, decided well, and chose
   to stop well. Product-life fit is part of product-market fit.
2. AI craft — I shipped Claude-driven matching into a real
   consumer product. Real, in production. Not a demo.
3. Range — solo, three platforms, a paid funnel that worked at
   the unit level, plus the AI matching system. Don't list this
   like a resume; let it land as evidence.

# Structure (mid-essay pivot)
- Open with the build and why-it-mattered, using this lede
  framing exactly:
  "Adulthood is a friendship problem. In a world that's more
  isolated and divided I wanted to bring people back to
  community and back to themselves."
- Middle: what I actually built. The product surface, the
  AI matching, the paid funnel hitting ~$0.50 returned per $1
  spent in early tests. Concrete and specific. This is where
  range and AI craft do their work.
- Pivot in the back third: the call to wind down, using this
  framing exactly:
  "I felt like I could have driven Dinner to work — but it
  required being in New York or another anchor city, and my
  life was moving to Costa Rica for lifestyle and my girlfriend
  at the time."
  Frame the wind-down as judgment, not failure.
- Close with what's permanent: what I now know how to do, and
  what I'm building toward next.

# Voice and craft
- First person, confident operator, essayistic but not
  self-indulgent. Paul Graham meets a founder post-mortem.
- Concrete over abstract. Numbers, specific decisions,
  one-line technical asides. No filler adjectives.
- Candid about the wind-down without performing humility.
  Avoid "I'm so grateful for the journey" energy.
- One memorable line in the lede and one in the close.
- No bullet-list dumps. Lists only where they earn their
  place (e.g., the surface area you shipped solo).

# Length and format
- 1,800–2,200 words.
- Markdown. H1 title, H2 section breaks. No H3.
- Pull-quote candidates marked with > so I can lift them
  for the page layout.
- One-line TL;DR at the top, italicized, that I can use as
  share copy.

# Hard constraints
- Don't write "in today's world" or "in this article we'll
  explore" — start in scene.
- Don't make me sound humble-bragging. State facts; let the
  reader infer the brag.
- Don't soften the wind-down with euphemisms like "pivoted"
  or "concluded the chapter." I shut it down.
- Don't invent numbers, partnerships, or quotes I didn't
  give you.
- Don't claim I shipped AI matching "early" or "before others."
  Just say I shipped it.

# Source material to draw from
[PASTE: content/case-studies/04-dinner.md]
[PASTE: content/about.md]
[ATTACH OR REFERENCE: the Dinner software repo at
 /Users/kevinseagraves/Desktop/dev/dinner — the model can use
 this for technical specifics on the matching system, the AI
 craft, and the surface area shipped.]

# Deliverable
A complete draft of the essay, ready to edit. Title at top,
TL;DR italicized, then the body. No commentary, no meta.
```

### 3.2 What the prompt does NOT include (deliberately)

- **No optional anecdote slot.** Kevin opted out; he'll add scene-level texture in editing if he wants it.
- **No NiftyApes wind-down callback.** Kevin opted out to keep Dinner self-contained.
- **No tone references like "Paul Graham" or specific writers** beyond what's in the prompt above. The prompt anchors voice; the editing pass tightens it.

### 3.3 Source attachments to include when running the prompt

1. `content/case-studies/04-dinner.md`
2. `content/about.md`
3. The Dinner software repo as context, for technical specifics on the matching system, undo flows, and shipped surface.

---

## 4. On-site presentation

### 4.1 Routing

- Add **React Router DOM** (latest stable, currently v7.x).
- Two routes today: `/` (the existing single-page anchor scroll) and `/dinner`.
- Routing pattern is **flat top-level slugs** for marquee essays — `/dinner`, then `/<next-slug>`, etc.
- A second essay is actively being drafted; the implementation MUST be generalizable enough to drop the second piece in by writing one markdown file and adding one route line.
- No `/writing` index page yet. Add one only when there's a third essay AND there's a real reason to surface a hub.

### 4.2 Page component

A single reusable `EssayPage` component:

- Takes a `slug` prop.
- Loads `content/essays/<slug>.md` at build time (Vite raw import or similar — decide in implementation plan).
- Renders through a markdown renderer (recommend `react-markdown` + `remark-gfm` for tables/blockquotes; revisit in implementation plan).
- Computes reading time from word count on the fly. No hardcoded value.

### 4.3 Page anatomy

```
┌──────────────────────────────────────┐
│ Navbar (existing, minus section nav) │
│ "← Back" link top-left               │
├──────────────────────────────────────┤
│ HERO BAND                            │
│   eyebrow:  CASE STUDY · ESSAY       │
│   h1:       <title from LLM>         │
│   tl;dr:    italicized one-liner     │
│   meta:     Founder · Mar '25–Jan '26│
│             ~9 min read              │
├──────────────────────────────────────┤
│ HERO IMAGE (optional, single)        │
│   either letsdinner.co screenshot    │
│   or "Why you're at this table" card │
├──────────────────────────────────────┤
│ ARTICLE BODY                         │
│   max-w-2xl, ~17–18px body, 1.7 lh   │
│   H2 section breaks, no H3           │
│   pull-quotes styled distinctively   │
│   2–3 inline screenshots:            │
│     · app matching screen            │
│     · admin / match runs view        │
│     · letsdinner.co marketing site   │
├──────────────────────────────────────┤
│ CLOSER BAND                          │
│   "Currently open to:" line          │
│   email CTA button                   │
│   share row: copy link · X · LinkedIn│
│   "← Back to captnseagraves.com"     │
├──────────────────────────────────────┤
│ Footer (existing)                    │
└──────────────────────────────────────┘
```

### 4.4 Style system

Reuse existing CSS variables and Tailwind v4 setup. **No new design language.** The essay page is a quieter, more spacious version of the home page.

- **Body type**: `text-[1.0625rem]` to `text-[1.125rem]` with `leading-[1.7]`.
- **Reading column**: `max-w-2xl` (~672px).
- **Pull quotes**: left-border `--color-accent-violet`, italic, larger type, generous vertical margin. Reuse the coda treatment from the existing case-study cards.
- **Pull-quote markers**: render `>` blockquotes from the markdown as full pull-quote treatment, not standard browser blockquote.
- **Inline screenshots**: rounded, subtle border in `--color-border`, optional caption below in `--color-text-dim`.
- **Number callouts** (e.g., 722 commits, $0.50 / $1, 3 platforms): inline `<span>` with `--color-accent` and slightly heavier weight. No big block stat banners — that's resume energy.

### 4.5 Home-page integration

The existing Dinner card on `/` keeps its structure and existing expanded view. Add **one** new line at the bottom of the card: **"Read the full essay →"**, linking to `/dinner`. The card keeps its expand-in-place behavior for skimmers; the essay is for committed readers.

For consistency, the same pattern can be added to other case-study cards if a corresponding essay exists. Not required for this spec.

### 4.6 Meta + sharing

- Per-page `<title>` and `<meta description>`.
- OG card per essay. Recommend a Vercel OG-image function that renders the essay title + Kevin's name on the existing dark theme. ~20 lines of code; the right level of effort for an asset that gets pasted into LinkedIn / X / DMs.
- Verify OG card renders correctly on LinkedIn debugger and X card validator before distribution day.

### 4.7 Authoring loop

Essays live as markdown in `content/essays/<slug>.md`. Edit-publish loop:

1. Edit the markdown.
2. `npm run dev` shows the change immediately.
3. `npm run build && deploy` ships it.

No CMS, no headless admin, no draft preview. The markdown file IS the source of truth.

---

## 5. Distribution plan

### 5.1 Channels (ranked by leverage for primary audience)

1. **LinkedIn original post** — highest leverage for hiring intent. ~250–400 words ending with the link. Lead with spine. Tease the wind-down call as the hook. Don't paste the essay.
2. **Targeted DMs (10–25 people)** — past investors, ex-teammates, founders in graph, hiring managers. One-line note + link. Personal, not bulk.
3. **X / Twitter thread** — 4–6 tweets. Tease the wind-down judgment as hook. Link in last tweet, not first.
4. **Founder Slacks / Discords** — 2–3 places of standing. Post once with context, not drive-by.
5. **Cross-post to Mirror or Substack (pick one)**. Mirror for crypto-adjacent founder audience; Substack for a different operator cohort. Set canonical URL to `captnseagraves.com/dinner`.
6. **HN / Indie Hackers (optional, high-variance)**. Submit yourself; never coordinate upvotes.

### 5.2 Sequence

| Day | Move |
|-----|------|
| T+0 morning | Ship `captnseagraves.com/dinner`. Verify OG renders. |
| T+0 morning | LinkedIn post live. X thread live. |
| T+0 evening | 10–25 targeted DMs (drip, not blast). |
| T+1 | 1–2 founder Slacks / Discords. |
| T+3 | Optional Mirror or Substack cross-post (canonical link set). |
| T+3–5 | Optional HN submission, Tue/Wed AM. |
| T+14–21 | Repurpose one thread (AI matching / paid funnel / wind-down) into a shorter standalone post. |

### 5.3 Anti-patterns

- Don't burn every channel in the same hour.
- Don't post in 10 founder Slacks (spammy-founder pattern).
- Don't ask explicitly for engagement ("would love your support").
- Don't paste the full essay anywhere except canonical URL + (optional) cross-post with canonical tag.
- Don't hero-link the essay from the homepage. The card with "Read the full essay →" is the right level.

### 5.4 Drafting templates

First-draft copy for the LinkedIn post, X thread, DM template, and Slack/Discord post will be produced by the implementation plan, not this design spec.

---

## 6. Open items deferred to the implementation plan

The implementation plan (next step, via the writing-plans skill) will resolve:

1. **Markdown renderer choice and Vite glob/raw import strategy** — `react-markdown` + `remark-gfm` is the leading candidate; confirm and pin.
2. **Routing structure in code** — where `EssayPage` lives, how routes are declared, how the existing single-page scroll behavior on `/` is preserved when React Router is added.
3. **Pull-quote and code-block component overrides** — exact JSX styles passed to `react-markdown`'s `components` prop.
4. **OG image function** — Vercel `@vercel/og` function path (e.g., `/api/og?slug=dinner`) and template design.
5. **Hero image asset selection** — which screenshot from the Dinner app/admin/marketing site is the hero. Must be captured / exported.
6. **Inline screenshots** — exact 2–3 to use, where they sit in the essay flow.
7. **Distribution copy first drafts** — LinkedIn post, X thread, DM template, Slack/Discord post.
8. **Reading-time calculation utility** — small util shared across essays.

---

## 7. Out of scope

- A `/writing` index hub page (not until essay #3).
- Redesigning the homepage Dinner card.
- Adding analytics beyond what the site already has.
- Comments, reading-progress UI, scroll indicators.
- A second essay's content (separate spec when ready).
- Migrating other case studies to dedicated essay pages (orthogonal effort).

---

## 8. Success criteria

- `captnseagraves.com/dinner` is live, mobile-readable, and renders cleanly.
- The page loads in under 1.5s on a cold mobile connection.
- OG card renders correctly on LinkedIn and X.
- The Dinner card on `/` links to `/dinner`.
- A second essay can be added by writing one markdown file and adding one route line.
- Distribution sequence executes within 1 week of the page going live.

# Fact-check kit — captnseagraves.com

Generated 2026-07-30 for Kevin's manual review before/after the staged launch.
Every factual claim on the live site, one row each, with an empty **Verdict**
column for you (verify / soften / cut). Rows marked ⚠️ have **no external
evidence linked from the site** — hit those first.

Line numbers reference the files as of commit `8a1a5c6` (post-gating). The
Dinner *essay* is gated and not live; the Dinner *case study card* IS live and
is inventoried below. The gated essay draft lives at `content/drafts/dinner.md`
and is excluded from this inventory (it gets its own rewrite pass).

---

## 1. Content map — source file → where it renders

| Source file | Renders as | Live URL |
|---|---|---|
| `index.html` | Title, meta description, OG/Twitter tags | every page (head) |
| `src/components/sections/Hero.tsx` | Hero: name, tagline, stats line, role chips | `/` (top) |
| `src/components/sections/About.tsx` | "My Path" — short version + expandable long version | `/#about` |
| `src/data/caseStudies.ts` → `CaseStudies.tsx` | Five case-study cards (Gitcoin, NiftyApes, Bankless, Dinner, SBA Calculator) | `/#work` |
| `src/data/recognition.ts` → `Recognition.tsx` | Recognition: fundraising, standards, speaking, awards, board | `/#recognition` (rendered between Work and Skills) |
| `src/data/skills.ts` → `Skills.tsx` | Skill categories with experience claims | `/#skills` |
| `src/components/sections/Contact.tsx` | Email / LinkedIn / GitHub / X cards | `/#contact` |
| `src/components/layout/Footer.tsx` | Footer links | every page |
| `src/data/essays.ts` + `content/essays/*.md` via `src/lib/loadEssay.ts` (eager glob) | Writing index + essay pages | `/writing`, `/writing/<slug>` |
| `content/essays/2026-07-28-weekly.md` | "Oil, god, and open weights" weekly essay | `/writing/2026-07-28-weekly` (pending your include/hold call) |
| `content/drafts/dinner.md` | **NOT RENDERED** — gated Dinner essay draft | — |
| `content/*.md` (hero, about, contact, skills, recognition, case-studies/) | **Source/spec copies only — not imported by the app.** The `.tsx`/`.ts` files above are what renders. Keep them in sync or ignore them. | — |
| `public/og-image.jpg` | Social share image | link previews |

## 2. Claims inventory — Hero + head meta

| # | Claim | Source | Displayed | Verdict |
|---|---|---|---|---|
| H1 | "8 years of shipping from scratch" | `src/components/sections/Hero.tsx:49` (also `index.html:15,23`) | Hero + meta description | |
| H2 | "$4.2M raised" | `Hero.tsx:50`, `index.html:15` | Hero stats line | |
| H3 | "$60M+ distributed" | `Hero.tsx:51`, `index.html:15` | Hero stats line | |
| H4 | "protocols on Ethereum mainnet" (plural) | `Hero.tsx:52` | Hero stats line | |
| H5 | "AI agents in production" (plural) | `Hero.tsx:52` | Hero stats line | |
| H6 | Open to: Head of Product / AI PM / Founding Engineer / FDE | `Hero.tsx:3-8` | Role chips | |

## 3. Claims inventory — About ("My Path")

| # | Claim | Source | Displayed | Verdict |
|---|---|---|---|---|
| A1 | Shipped **two** lending protocols to Ethereum mainnet | `About.tsx:37` | Short version | |
| A2 | Architected grants platform that distributed $60M+ | `About.tsx:38-39` | Short version | |
| A3 | Deployed AI agent to production "for a major media company" | `About.tsx:40-42` | Short version | |
| A4 | Galvanize bootcamp, 2017 | `About.tsx:47` | Short version | |
| A5 | BCG DV: blockchain PoCs for WWF, De Beers | `About.tsx:7` | Expanded | |
| A6 | Built Gitcoin Grants **v0**; ERC-1337 co-author; "first production application to use meta-transactions" ⚠️ | `About.tsx:8` | Expanded | |
| A7 | Co-founded and scaled Charge Technology Group | `About.tsx:9` | Expanded | |
| A8 | NiftyApes: $4.2M from Coinbase Ventures, Variant, Polygon Ventures; invented HSLA; led team of 10; returned capital | `About.tsx:9` | Expanded | |
| A9 | Signet: "architected a cross-chain smart wallet protocol" ⚠️ | `About.tsx:10` | Expanded | |
| A10 | Runs mobile app build and GTM at Ubitel | `About.tsx:10` | Expanded | |
| A11 | ⚠️ **"Based in Boulder, Colorado… good chunk of the year in Nosara, Costa Rica" — OUTDATED (you're in Durango since ~May 2026).** Not in the spec's scope so I didn't touch it, but it's factually stale on launch day. | `About.tsx:11` | Expanded | |
| A12 | "AI agents that talk to thousands of users" ⚠️ (audience-size claim, no source) | `About.tsx:15` | Expanded ("The Thread") | |

## 4. Claims inventory — Case study: Gitcoin Grants

| # | Claim | Source | Displayed | Verdict |
|---|---|---|---|---|
| G1 | Lead Engineer & Product Manager, Jul 2018 – Mar 2019 | `src/data/caseStudies.ts:22-23` | Card header | |
| G2 | Team: 4 engineers, 1 designer, ~5 OSS contributors | `caseStudies.ts:24` | Card | |
| G3 | $60M+ distributed to OSS projects | `caseStudies.ts:25,34` | Hero metric + impact | |
| G4 | Co-authored **and implemented** ERC-1337; Grants used it for recurring donations | `caseStudies.ts:30` | What I built (EIP link present) | |
| G5 | "first production application on Ethereum to implement" meta-transactions ⚠️ (strong superlative; no citation) | `caseStudies.ts:31` | What I built | |
| G6 | "Platform still in active use 7+ years later" (grants.gitcoin.co linked — note the platform has changed architecture since v0; is "still in active use" fair for *your* build?) | `caseStudies.ts:35` | Impact | |
| G7 | "Became a model other public goods funding platforms copied" ⚠️ | `caseStudies.ts:36` | Impact | |
| G8 | "ERC-1337 influenced subscription-payment design across Ethereum" ⚠️ | `caseStudies.ts:37` | Impact | |

## 5. Claims inventory — Case study: NiftyApes

| # | Claim | Source | Displayed | Verdict |
|---|---|---|---|---|
| N1 | Co-Founder, CEO & CTO, Oct 2021 – Aug 2024; team of 10 | `caseStudies.ts:55-57,66` | Card | |
| N2 | $4.2M seed: Coinbase Ventures, Variant, Fintech Collective, Robot Ventures, Polygon Ventures, "notable angels" | `caseStudies.ts:59,65` | Hero metric + What I built | |
| N3 | **2** protocols shipped to Ethereum mainnet (HSLA + BNPL) | `caseStudies.ts:59,71` | Hero metric + impact | |
| N4 | Invented the HSLA mechanism | `caseStudies.ts:59,63` | Hero metric (whitepaper linked) | |
| N5 | "Managed three independent security audits across both protocols" ⚠️ (audit reports not linked) | `caseStudies.ts:68` | What I built | |
| N6 | "Contributed new primitives to the DeFi lending space" ⚠️ | `caseStudies.ts:72` | Impact | |
| N7 | ⚠️ **"HSLA mechanism cited as prior art in subsequent lending protocol designs"** — flagged in your spec by name; no citation exists on the site. Find the citing design or cut/soften. | `caseStudies.ts:73` | Impact | |
| N8 | Returned **~1/3** of invested capital to investors | `caseStudies.ts:81` | Coda | |

## 6. Claims inventory — Case study: Bankless AI Agent

| # | Claim | Source | Displayed | Verdict |
|---|---|---|---|---|
| B1 | CEO & Consultant, Context Monkey; client Bankless Media; 2024–2025 | `caseStudies.ts:96-98` | Card header | |
| B2 | "AI agent shipped to production on Twitter for a major media company" | `caseStudies.ts:100,112` | Hero metric + impact | |
| B3 | Built on Eliza framework; prompt design, tone calibration, response tuning were yours | `caseStudies.ts:104-108` | What I built | |
| B4 | Human-in-the-loop evaluation framework "designed from scratch" | `caseStudies.ts:109` | What I built | |
| B5 | "Engaged audience members with on-brand, edited content at a sustainable cadence" ⚠️ (no live agent/account linked — is the account still visible? If so, link it) | `caseStudies.ts:113` | Impact | |

## 7. Claims inventory — Case study: Dinner (card only; essay gated)

| # | Claim | Source | Displayed | Verdict |
|---|---|---|---|---|
| D1 | Founder, Mar 2025 – Jan 2026 | `caseStudies.ts:127-128` | Card header | |
| D2 | Shipped solo across iOS, Android, web | `caseStudies.ts:130,134-135,142` | Hero metric + impact | |
| D3 | letsdinner.co marketing site ⚠️ (is it still up? dead link = credibility hit) | `caseStudies.ts:136` | What I built | |
| D4 | "Multi-market paid-acquisition funnel — tested across multiple cities with measurable ROAS" | `caseStudies.ts:137,144` | What I built + impact | |
| D5 | "~$0.50 return on every $1 spent in early tests" ⚠️ (specific number, private data — decide if you want it public) | `caseStudies.ts:143,148` | Impact + lessons | |
| D6 | Brooklyn → Costa Rica narrative in coda | `caseStudies.ts:152` | Coda | |

## 8. Claims inventory — Case study: SBA Deal Calculator (added 2026-07-30 by the other session — not in your spec's four, inventoried anyway since it ships)

| # | Claim | Source | Displayed | Verdict |
|---|---|---|---|---|
| S1 | 2026 search: 25+ inquiries, 13+ NDAs, "multiple deals taken to lender term sheets" (matches your context dump; "multiple… term sheets" may overstate — one Venturus/Heritage term sheet + pre-quals?) | `caseStudies.ts:163` | Problem | |
| S2 | Real defaults: 80/10/10 stack, 8.75%, 10-year | `caseStudies.ts:165` | What I built | |
| S3 | "the debt math behind real lender conversations and a fully drafted $1.0M LOI" ⚠️ (private deal detail now public; LOI was drafted, never submitted — wording is accurate but decide if you want it on the site) | `caseStudies.ts:171` | Impact | |
| S4 | "Shared with Small Capital… they've used the build as reference for their own internal tooling" ⚠️ (verify with Jamie before claiming their internal use publicly) | `caseStudies.ts:172` | Impact | |
| S5 | Live calculator + public repo links | `caseStudies.ts:181-185` | Links (verifiable — click them) | |

## 9. Claims inventory — Recognition

| # | Claim | Source | Displayed | Verdict |
|---|---|---|---|---|
| R1 | $4.2M from Coinbase Ventures, Variant, Fintech Collective, Robot Ventures, Polygon Ventures, **The LAO, Flamingo DAO** ⚠️ (two more names than the NiftyApes card lists — make the investor list consistent) | `src/data/recognition.ts:11` | Fundraising | |
| R2 | Co-author, ERC-1337 (EIP linked — verifiable) | `recognition.ts:19-20` | Standards | |
| R3 | HSLA whitepaper (linked — verifiable) | `recognition.ts:23-24` | Standards | |
| R4 | Led "Current State of Security" panel at DevCon 4 ⚠️ (no link; DevCon archive video exists if true — link it) | `recognition.ts:31` | Speaking | |
| R5 | Organized ETHBerlin Security Unconference (2018) ⚠️ | `recognition.ts:32` | Speaking | |
| R6 | Co-founded ETHSecurity — "200+ professionals, ECF grant recipient" ⚠️ (membership count + grant claim, no link) | `recognition.ts:33` | Speaking | |
| R7 | Authored ETHSecurity Report — "30+ interviews with top security firms" ⚠️ | `recognition.ts:34` | Speaking | |
| R8 | Winner, BCG DV dAppathon (2017), "You've Got Eth" ⚠️ (internal event, unverifiable externally — fine if true, just confirm year) | `recognition.ts:41` | Awards | |
| R9 | Board Member, ICDevs (nonprofit) — 2021 to Present ⚠️ (ICDevs lists board publicly — confirm you're still listed) | `recognition.ts:47` | Board | |

## 10. Skills-section claims worth a glance (experience-length claims)

| # | Claim | Source | Verdict |
|---|---|---|---|
| K1 | Solidity "7+ years, audited protocols to mainnet" | `src/data/skills.ts:10` | |
| K2 | TypeScript/JavaScript "8+ years, full-stack" | `skills.ts:11` | |
| K3 | Remaining skill `detail` strings (scan `skills.ts` in full — mostly capability claims, low risk) | `skills.ts` | |

---

### Suggested first pass (the ⚠️ rows, hardest-to-defend first)
1. **N7** — "HSLA cited as prior art" (you flagged this one yourself)
2. **G5** — "first production application on Ethereum to implement meta-transactions"
3. **S4** — Small Capital using your build internally (verify with Jamie)
4. **A11** — Boulder/Nosara location line (stale fact, easy fix)
5. **R1 vs N2** — investor-list mismatch between Recognition and the NiftyApes card
6. **D3 / S5 / R2 / R3** — click every external link on the site; dead links first

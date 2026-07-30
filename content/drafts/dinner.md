# Dinner

*I built and wound down a community-dinner platform solo over ten months — iOS, Android, web, AI-driven matching, paid funnel — because product-life fit is part of product-market fit.*

Adulthood is a friendship problem. In a world that's more isolated and divided I wanted to bring people back to community and back to themselves.

That sentence is the whole reason I started.

The social products I'd watched and helped build over the prior decade — the messaging tools, the social apps, the dating products — optimized for matches and not for depth. They engineered novelty, not closeness. The pattern that kept showing up in my own life and my friends' lives was a quiet erosion: you move to a new city, you have a few people you text, and over the years your circle gets thinner. The medium of friendship in adulthood is shared time at a table, not a swipe. So in early 2025 I started building Dinner — a curated community-dinner platform that took strangers in a city, grouped them by personality and affinity, and put them across a table together for an evening.

I built it solo. iOS, Android, web. The marketing site at letsdinner.co. An admin tool to curate signups and run matching. A multi-market paid acquisition funnel to test cities at the unit-economics level. A signup flow with an in-app messaging layer. And, late in the project, a Claude-powered matching system that grouped people into tables and wrote a short rationale, "Why you're at this table," that landed in the app the night of the event.

722 commits. One person.

I shut it down.

This is the writeup.

## What I built

The product surface was unreasonable for one person, on purpose. Dinner was a real consumer experience or it was nothing — chat, an admin dashboard, a marketing site, three platforms — because the moment you ask someone to commit a weeknight and pay you to sit with strangers, every seam matters. You can't ship 60% of the experience and expect strangers to show up.

So I shipped 100%.

The mobile app, in React Native, on iOS and Android: account creation, personality and affinity preference capture, in-app messaging between matched diners, the "Why you're at this table" card. The full-stack web app for users who didn't want to install yet. The admin dashboard with every signup row inspectable, per-row matching, per-run undo. The marketing site for paid acquisition to point at. The branding and visual identity, because I was not paying a designer for v1. The community operations playbook for the actual dinners, which is a different kind of code.

Three platforms shipped from one person is a taste exercise. You don't get to build six versions of a feature. Every screen has to earn its place across iOS, Android, and web. You learn fast which features are vestigial. I cut more than I shipped.

The acquisition funnel is the part most builders underestimate. I ran paid acquisition across multiple cities and got the unit-level number to about $0.50 returned for every $1 spent in early tests. That number is unspectacular until you've actually run a paid funnel for a cold-start community product, at which point it's defensible — most never get that far, and most that do never measure cleanly. It told me the demand was real. It also told me what the demand cost.

## The matching system

The most technically interesting part of Dinner was the part I built last.

Curated dinners aren't a deterministic problem. The signal that matters isn't "these four people share three checkboxes." It's whether four people will sit down and have a conversation that stretches past the first round of drinks. That signal is in the texture — what someone wrote about why they're moving to a new city, what they meant by "I want to build something." A rules engine couldn't see it.

So I built matching against Claude. The pipeline:

1. For a scheduled dinner, gather all eligible signups in that city and time window.
2. Pass the affinity preferences and personality signals into a Claude call — prompt-cached, because the system prompt is heavy and shared across runs.
3. Have the model propose table groupings with explicit reasoning.
4. For each proposed table, have the model write a per-table rationale: a short, voice-y, specific paragraph titled "Why you're at this table" that tells each diner what their match was about.
5. Persist the run, the rationale, and the assignments. Surface them in the app the night of the dinner.

I built undo at every layer — per-signup, per-run, per-batch — because the moment you put an LLM between two humans and a weeknight plan, you need to be able to roll back. The matching service has a snapshot-tested client, integration tests against a stubbed rationale generator, and a separate admin route for re-running a single signup if the model picks badly. The unglamorous operational hardening that turns "AI demo" into "AI shipped."

> The model is fifteen percent. The system around the model is the rest.

I'm not claiming I shipped Claude-driven consumer matching first or earliest. What I'm claiming is that I took a real consumer product and put a real LLM matching pipeline behind it — with caching, undo, and the kind of evaluation discipline that means it doesn't fall over on the night of a dinner. That's the bar. Most "AI-powered" consumer products haven't actually cleared it.

## The wind-down

> I felt like I could have driven Dinner to work — but it required being in New York or another anchor city, and my life was moving to Costa Rica for lifestyle and my girlfriend at the time.

That's the whole reason.

The product was real. The system was built end to end across three platforms. The paid funnel returned about $0.50 on every $1 in early tests — a defensible unit-level number for a cold-start community product. But the operating model required a founder on the ground in a single anchor market — doing community curation, photographing dinners, showing up to venues, building the local credibility that makes a stranger trust a signup with a $40 charge attached. That's not a model you outsource in v1. That's the founder's job, and it requires a body in a city.

I started Dinner in Brooklyn. I ended up living mostly in Nosara. The two facts can't be reconciled by force.

I could have tried to push through it. Pushing harder against an invalidated thesis isn't resilience, though — it's denial dressed up as resilience, which is a thing I've watched founders do and a thing I've done myself before. The market wasn't wrong. My life was. The right call was the boring call: stop.

So I stopped.

Knowing when to stop is a skill. The cost of grinding through a market or a life condition that's invalidating your thesis is much higher than the ego cost of admitting it. I'd rather pay the ego cost.

## What's permanent

Solo-shipping a 3-platform consumer product with a working unit-economics funnel and an LLM-driven matching layer is a thing I now know how to do. That capability is permanent. It survives the wind-down.

What I learned in concrete terms:

The pace of solo shipping is a cutting practice. Every feature has to earn its way onto every platform or it doesn't get built. The discipline transfers. I will be a more ruthless scoper for the rest of my career.

Consumer acquisition is brutal even when it works. A funnel that returns $0.50 on every $1 is "pretty good" for a cold-start community product, and "pretty good" doesn't cover salaries. Most consumer founders never measure cleanly enough to even know they're at "pretty good." I now do.

Shipping LLMs into a real consumer product is not the same as building an LLM demo. Caching, undo, evaluation, snapshot testing — the unglamorous infrastructure around the model is most of the work.

The business model has to fit the founder's life. This is the lesson I keep paying tuition for, and most founders eventually do too. Product-life fit is part of product-market fit. If the model requires you to be in a place, you have to be in that place. Otherwise you're not the right founder for that company. That's not failure. That's information.

## What's next

I'm looking for what's next with a much clearer picture of what I want to do.

I want to build inside a team rather than alone — not because I can't run my own thing, but because the next thing I want to put my hands on is a product where I can spend most of my time on craft and judgment rather than payroll, vendor contracts, and Meta ads campaigns. Specifically: AI products in the post-demo phase, where the actual work is the hard infrastructure around the model. The matching system in Dinner is the kind of work I want to do at scale — but with a team, in a company that's already past the cold-start brutality.

Concretely: Head of Product, AI Product Manager, Founding Engineer, Forward Deployed Engineer. I have eight years of shipping novel systems that move real value — $60M+ distributed in grants at Gitcoin, $4.2M raised at NiftyApes with capital partly returned, two protocols on Ethereum mainnet, an AI agent in production for a media company, and now Dinner. The combination of operator judgment, AI craft, and absurd range is rare, and it's what I'm bringing.

If you're building an AI product where the unglamorous infrastructure is the work — caching, evaluation, human-in-the-loop, undo, the boring durable parts — and you want someone who can do the engineering, the product, and the pitch, I'd like to talk.

The lesson is paid for. The next thing is the next thing.

Every searcher I've met — and I'm one, seven months into hunting for a small business to buy — says some version of the same thing: *I'd love to do employee ownership once I get around to it.* Then year one is chaos, year two is recovering from year one, and a decade later it never happened. The people working on this problem call it the broken promise of "later." It's why the interesting question isn't whether employee ownership is good — it's whether it can happen at the moment of acquisition, when the ownership question is already on the table.

I have a selfish reason to care. I'm often looking at businesses in industries where I've never operated. Walking in as "your new CEO who's never made a sandwich or fixed a furnace" is a weak pitch. Walking in with "you're all becoming part-owners of this company" is a fundamentally different one — for retention, for buy-in, for the legitimacy I can't otherwise claim.

## The model being built in Durango

[Small Capital](https://smallcapital.org) is a syndicate of mostly Durango-based investors building exactly this. The model, concretely: in an acquisition — say a $2M deal with a $500K equity gap — they fill the gap *on behalf of an employee-ownership vehicle*, and bring in impact debt alongside it. The more of the company that's employee-owned, the cheaper that capital gets. They target a 2x return, and as they're repaid from free cash flow, their ownership redeems into an Employee Ownership Trust. The investors get paid; the employees end up owning a real piece of the company they run.

Two things I respect about how they're building it. First, honesty about where they are: roughly three years validating the model and building infrastructure, still pre-first-transaction — which is what inventing a new deal structure actually looks like. Second, an integrity threshold: if the employees don't each end up meaningfully better off — their bar is every employee owning at least ~10% more value even assuming flat growth — the deal isn't worth doing. Employee ownership that's nominal has no teeth.

My searcher's read of the math: for roughly 20% of the company, I could about double my effective down payment, which means a bigger deal and more cash flow than I could reach alone — and walk in with a better story for the team. If it were an out-of-the-box product, I'd use it tomorrow.

## The structure menu, with price tags

"Employee ownership" is four different legal animals. The numbers below are as quoted by practitioners I've talked with and published ranges; treat them as planning figures.

- **Employee Ownership Trust (EOT).** A perpetual trust owns some or all of the company; employees, as beneficiaries, receive profit distributions per the trust's waterfall. Works in every state. Its superpower is durable governance — the same pattern Patagonia used to lock its purpose permanently. Setup runs roughly $20K–$100K depending on complexity; the quotes I've heard cluster mid-range.
- **LLC with employee partners.** Employees hold membership interests — the cheapest and most flexible option, and the messiest: the moment an employee becomes a partner, their tax life changes (K-1 instead of W-2), and the details bite if the documents aren't careful.
- **Worker cooperative.** Full employee governance — one member, one vote on the big questions. Meaningful tax advantages for the seller and the company, with key seller benefits kicking in around 30% employee ownership. Colorado is unusually good ground for this; lawyers call it the Delaware of cooperative law.
- **ESOP.** The famous one, and the wrong tool at small scale: built for companies of 40+ employees, hundreds of thousands of dollars to stand up, and ERISA-regulated as a retirement plan.

## The day-one problem

Here's the friction: the SBA 7(a) loan is the tried-and-true engine of small business acquisition — and its underwriting currently makes day-one employee ownership very hard. Anyone owning 20% or more must personally guarantee the loan, and in practice lenders tend to pull employee-owners into that calculation even below the line. Employees who aren't writing checks get treated like borrowers. The complexity explodes, and lenders default to "this is new and weird."

It isn't for lack of trying. Congress passed the Main Street Employee Ownership Act in 2018 specifically to open SBA lending to employee-ownership transitions. Implementation didn't deliver — practitioners and the employee-ownership groups tracking it found the follow-on guidance so restrictive that only a trickle of loans ever happened, and for cooperatives the personal-guarantee question was never resolved.

I want to be precise about the framing, because it matters: this is not "SBA is broken" or "SBA is incompatible with employee ownership." It's a structural mismatch that nobody has fully engineered around yet. Engineering around it is the actual work.

## The live workarounds

Three paths are being worked right now, each with an honest tradeoff:

**The precise-lender co-purchase.** The searcher takes an SBA tranche; the employee-ownership vehicle takes a separate, non-SBA tranche; and one willing lender works through the guarantee boundaries line by line instead of pattern-matching. New territory — it needs a lender who'll engage on specifics.

**100% employee-owned from day one, no SBA.** Skip the 7(a) entirely and borrow from lenders who underwrite the company's cash-flow engine — taking liens on business assets rather than personal guarantees. This isn't theoretical: community banks do it, a national bench of cooperative-focused lenders does it without personal guarantees at all, and there's a live precedent where a retiring owner's guarantee burns off after two years if cash-flow milestones hold. The tradeoff is role clarity: the searcher becomes a CEO within a trust or co-op, not a majority owner. The compensation levers still exist; the ownership story is different.

<!-- HOLD START — do not publish this section until Kevin has personally replied to the open Small Capital email thread. -->

**The conversion contingency.** *[HOLD — publishes after the private thread is answered.]* Buy conventionally with an SBA loan — but make creating the employee-ownership trust a contractual commitment rather than a good intention: conversion within a defined window unlocks a cost-of-capital benefit from the equity investor. Structured carefully (the incentive has to live in the equity documents, not the loan or the purchase price), it attacks the broken promise of "later" with aligned incentives instead of willpower. The idea came out of conversations between Small Capital and one of the leading employee-ownership-trust implementers, and I think it's the most pragmatic of the three: it uses the financing system as it exists today and puts teeth on the conversion.

<!-- HOLD END -->

## Modeling it in public

I model deals for a living now, so I built this math into my open-source deal calculator ([sbcalculator.vercel.app](https://sbcalculator.vercel.app), [repo](https://github.com/captnseagraves/sbcalculator)): a redeemable investor alongside SBA debt, the free-cash-flow waterfall, year-by-year ownership migration into the trust, employee outcome projections, and a side-by-side comparison — the same deal with and without the employee-ownership capital stack.

The headline the model shows: same buyer cash, roughly double the deal, more cash flow, and a team that owns a growing piece of the company — *if* the financing structure can be made as routine as a 7(a) checklist.

That's the real conclusion. The structure that works probably isn't one structure — it's a menu, plus tooling that makes each path legible to a lender, a seller, and a room full of employees. All of that is buildable. Some of it is being built in Durango right now, and I'm modeling it in public while I search.

If you're a lender who does cashflow-based underwriting, a searcher who wants employees on the cap table, or someone who's closed one of these — I want to compare notes. And if you want to pressure-test the math: the repo is open.

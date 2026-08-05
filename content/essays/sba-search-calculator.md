Last month I sat with a lender's term sheet in hand, sixteen days after first inquiring about a Boulder restaurant institution, working out what the business was actually worth. Not what the seller was asking. Not what it would feel like to lose the deal. What the cash flow could support.

The distance between wanting to buy a business and being able to price one is a methodology. This is how I built mine, and the calculator that came out of it.

## The search, by the numbers

I started looking in December 2025. Seven months later: 78 listings inquired, 28 NDAs signed, three deals taken deep, zero closed. That reads like failure until you understand how this game works. Every serious acquirer I've talked to says some version of the same thing: do a hundred deal analyses before you trust yourself on one. The reps are the point.

What I'm looking for is specific: recession-resistant essential services — I want businesses people need even when they lose their jobs. AI-resistant, with a physical service component that can't be automated away. Recurring revenue. At least five years old, ideally ten. And management in place or promotable — I plan to be in the business full-time, but I'd like to buy a business, not just a job, and having management and infrastructure already there makes the transition and the growth that follows go smoothly.

The financing side is real, not aspirational: I have six figures of committed capital, and three lenders have independently validated the borrowing capacity I need for the deals I chase — a pre-qualification, a pre-approval, and a term sheet on a live deal.

## The screening layer

You can't deep-dive every listing. My first-pass filter takes about two minutes, and the heart of it is what's called the Golden Ratio: seller's discretionary earnings divided by revenue. Below 15%, the margins are too thin to survive a bad year and a debt payment. Above 35%, the number is usually telling you the owner *is* the business — you're not buying a company, you're buying their job.

The filter works because failure modes repeat. I passed on a mobile medical practice where three licensed clinicians generated all of the revenue — one resignation would have vaporized a third of it, and I don't hold the license to backfill. I went deep on a mountain-town property management business whose ratio sat in the high 30s: a genuinely excellent company, and the ratio was still right — the owner's personal relationships with every client were the product.

## The valuation layer

Screening tells you what to look at. Valuation tells you what to pay. After watching my own numbers drift toward what I *wanted* a deal to be worth, I codified a three-approach method, adapted from a broker whose discipline I respected:

1. **Revenue approach:** normalized multi-year revenue — excluding anomalous years — times a market multiple from sold comps.
2. **Earnings approach:** normalized SDE, weighted toward recent years and stripped of things that aren't operating earnings (unverified add-backs, insurance proceeds), times the multiple for that industry *and* that revenue tier.
3. **Buyer's Test:** solve for the maximum price where normalized earnings, minus what it costs to replace the owner, minus a capital-expenditure reserve, still covers debt service with a 1.3x cushion plus a 10% return on my equity.

Equal weight, then rules that exist because each one has a scar behind it: never price off a single peak year. Treat the Buyer's Test as an affordability ceiling, not a market price. Open below supportable value and bridge gaps with seller financing, not price. And never count a standby seller note toward the down payment unless it's on full standby for the life of the loan — which I won't ask a seller for, so in my math it never counts.

## The calculator

By the third serious deal I was answering the same questions in the same spreadsheet every time, so I turned the spreadsheet into software. It's live at [sbcalculator.vercel.app](https://sbcalculator.vercel.app) and the repo is public at [github.com/captnseagraves/sbcalculator](https://github.com/captnseagraves/sbcalculator). I built it with Claude Code, in public, on purpose.

It encodes my actual defaults, not textbook ones: an SBA 7(a) stack of 80% bank debt, 10% seller note, 10% down; 8.75% over ten years; debt-service coverage with and without the seller note on standby; taxes on earnings minus interest; cash reserves off the top before anyone celebrates "owner take-home"; and equity build at the five- and ten-year marks. The screening and valuation layers above live in my process — the calculator is the debt-math half made executable, which is exactly the part that's most tedious to redo per-deal and most dangerous to get wrong.

A calculator is a methodology made honest. Every default is a claim you have to defend. The moment my assumptions became a URL, lenders and I had something concrete to argue about — and the arguments made the model better.

There's also a second module that models employee ownership entering the capital stack — a redeemable investor alongside the SBA loan, with ownership migrating to the employees over time. That one gets its own essay.

## What the reps bought

Zero closes. Also: a bench of lenders who answer my calls, a methodology I trust under pressure — on the Boulder deal I went from inquiry to a fully drafted LOI in sixteen days, and then had the discipline to step away when the bidding ran past my number — and a tool anyone can use.

If you're searching: use the calculator, and tell me where it's wrong. That's how it got built, and it's how it gets better.

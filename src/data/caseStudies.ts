export interface CaseStudy {
  id: string;
  title: string;
  role: string;
  dates: string;
  team?: string;
  heroMetric: string;
  problem: string;
  whatIBuilt: string[];
  whatIBuiltIntro?: string;
  impact: string[];
  lessons: string[];
  links?: { label: string; url: string }[];
  coda?: string;
  essayUrl?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "gitcoin-grants",
    title: "Gitcoin Grants",
    role: "Lead Engineer & Product Manager",
    dates: "Jul 2018 – Mar 2019",
    team: "4 engineers, 1 designer, ~5 open source contributors",
    heroMetric: "$60M+ distributed to open source software projects",
    problem:
      "Open source software is the backbone of the modern internet, but maintainers were systematically underfunded. Gitcoin wanted to solve this with a grants platform that let anyone contribute crypto to projects they cared about, with matching funds amplifying small donations.",
    whatIBuilt: [
      "Django backend + Solidity smart contracts — off-chain for UX speed, on-chain for transparent fund custody",
      "Co-authored and implemented ERC-1337 — the Ethereum standard for subscription payments, which Gitcoin Grants used to let donors set up recurring, ongoing donations to the projects they cared about",
      "Meta-transactions — ERC-1337 utilized meta-transactions, making Gitcoin Grants the first production application on Ethereum to implement them",
    ],
    impact: [
      "$60M+ distributed to open source projects",
      "Platform still in active use 7+ years later",
      "Became a model other public goods funding platforms copied",
      "ERC-1337 influenced subscription-payment design across Ethereum",
    ],
    lessons: [
      "Public goods funding is a product problem, not just a funding problem. The UX of giving matters more than the math.",
      "Shipping meta-transactions in production taught me the difference between a technical pattern and a deployable system. They're far apart.",
      "When you build something teams copy, you've built the right thing.",
    ],
    links: [
      { label: "Platform", url: "https://grants.gitcoin.co" },
      {
        label: "ERC-1337",
        url: "https://eips.ethereum.org/EIPS/eip-1337",
      },
    ],
  },
  {
    id: "niftyapes",
    title: "NiftyApes",
    role: "Co-Founder, CEO & CTO",
    dates: "Oct 2021 – Aug 2024",
    team: "10 people (engineering, product, operations)",
    heroMetric:
      "$4.2M raised, 2 protocols shipped to Ethereum mainnet, invented the HSLA mechanism",
    problem:
      "NFT markets had tons of illiquid capital locked in JPEGs. Lenders wanted to underwrite against NFTs, and borrowers wanted liquidity without selling. Existing lending protocols priced loans badly, had slow liquidation mechanics, and couldn't support secondary debt markets.",
    whatIBuilt: [
      "HSLA Protocol (NFT Mortgage + HELOC) — a novel lending auction mechanism inspired by Harberger taxation. Rates continuously re-priced based on market competition.",
      "Buy-Now-Pay-Later Protocol — a seller-financing mechanism for NFT sales, letting buyers pay over time.",
      "Raised $4.2M in seed funding from Coinbase Ventures, Variant Fund, Fintech Collective, Robot Ventures, Polygon Ventures, and notable angels.",
      "Led a team of 10 across engineering, product, and operations; hired, mentored, and eventually laid off the team.",
      "Full P&L ownership — burn rate, payroll, vendor contracts, investor reporting.",
      "Managed three independent security audits across both protocols.",
    ],
    impact: [
      "Two novel protocols live on Ethereum mainnet",
      "Contributed new primitives to the DeFi lending space",
      "HSLA mechanism cited as prior art in subsequent lending protocol designs",
    ],
    lessons: [
      "Raising capital is a product. The pitch, the deck, the data room — they're UX for investors.",
      "Team building is the real job of a founder. You spend more time hiring and managing than coding.",
      "Knowing when to stop is a skill. Grinding through market conditions that invalidate your thesis isn't resilience — it's denial.",
      "Investor references travel. How you handle the downside determines whether you get a second chance.",
    ],
    coda: "When the NFT market shifted, I made the disciplined call to wind down and return ~1/3 of invested capital to investors — a decision I'm still proud of today.",
    links: [
      {
        label: "HSLA Whitepaper",
        url: "https://whitepaper.niftyapes.money/",
      },
      {
        label: "BNPL Docs",
        url: "https://niftyapes.readme.io/docs/introduction",
      },
    ],
  },
  {
    id: "bankless-agents",
    title: "Bankless AI Agent",
    role: "CEO & Consultant, Context Monkey",
    dates: "2024 – 2025",
    team: "Client: Bankless Media",
    heroMetric:
      "AI agent shipped to production on Twitter for a major media company",
    problem:
      "Bankless Media wanted to extend their editorial voice into an always-on presence — an AI agent that could engage their audience authentically on Twitter. The bar was deliberately high: not a chatbot, but an agent that could pass as a thoughtful member of the team.",
    whatIBuiltIntro:
      "Built on top of the Eliza framework, which provided the base agent architecture. My work focused on making it Bankless rather than generic:",
    whatIBuilt: [
      "Prompt design and management — iterated on the prompt stack that shaped how the agent reasoned and responded",
      "Tone calibration and personality scaffolding — the core editorial work of making the agent sound like the Bankless team",
      "Response generation tuning — extended and modified the default response flow to better fit the use case",
      "Human-in-the-loop evaluation framework — designed from scratch. The agent generated candidate tweets from current topics. I reviewed the queue, selected the strongest candidates, edited them to sound more on-brand, and loaded them into a hopper that published at semi-random intervals.",
    ],
    impact: [
      "Agent shipped to production and ran in public",
      "Engaged audience members with on-brand, edited content at a sustainable cadence",
      "Limited by model maturity at the time, not system design",
    ],
    lessons: [
      "The gap between 'AI agent demo' and 'AI agent in production' is huge. Reliability, tone consistency, and handling edge cases are the entire game.",
      "Evaluation is the unsolved problem in agents. Prompting is easy. Knowing if the agent is doing its job is hard.",
      "Shipping something imperfect teaches you more than polishing something in private.",
      "Model maturity is a rate limiter. You can build the best architecture and still be bounded by what the base models can do.",
    ],
    coda: "The architecture is more viable today than it was then. The patterns I designed — tone calibration, context management, and especially human-in-the-loop evaluation — are exactly what the current wave of AI products is converging toward.",
  },
  {
    id: "dinner",
    title: "Dinner",
    role: "Founder",
    dates: "Mar 2025 – Jan 2026",
    heroMetric:
      "Full-stack consumer product across iOS, Android, and web — shipped solo with a paid-acquisition funnel",
    problem:
      "Adults in new cities struggle to build close friendships. Traditional social apps optimize for matches, not depth. I wanted to build a platform that brought curated groups of strangers together for dinners — high-context, intentional, offline.",
    whatIBuilt: [
      "React Native app deployed to iOS and Android",
      "Full-stack web application — user management, in-app messaging, event orchestration",
      "Marketing site (letsdinner.co)",
      "Multi-market paid-acquisition funnel — tested across multiple cities with measurable ROAS",
      "Branding, visual identity, and social presence",
      "Community operations playbook — curation, logistics for real-world events",
    ],
    impact: [
      "Functional product shipped across 3 platforms (iOS, Android, web)",
      "Paid funnel achieved ~$0.50 return on every $1 spent in early tests",
      "Multi-market launch executed",
    ],
    lessons: [
      "Building across 3 platforms solo is a taste exercise. You have to cut relentlessly.",
      "Consumer acquisition is brutal. $0.50 back on $1 is pretty good for a cold-start community product — but 'pretty good' doesn't pay the bills.",
      "The business model has to fit your life, not just the market. That was a product-life fit problem, not a product-market fit problem.",
      "Shipping teaches you things nothing else will. I now know how to scope, build, and launch a cross-platform consumer product solo. That's permanent.",
    ],
    coda: "I started Dinner while living in Brooklyn, but transitioned to spending much of my time in Costa Rica. The model required high on-the-ground presence, and I couldn't deliver that remotely.",
  },
  {
    id: "sbcalculator",
    title: "SBA Deal Calculator",
    role: "Solo builder (and active searcher)",
    dates: "Jan – Jun 2026",
    heroMetric:
      "Live deal-math tool built from a 7-month business acquisition search — including an employee-ownership financing model developed with input from a Durango EO investment syndicate",
    problem:
      "I've spent 2026 searching to acquire a small business with SBA 7(a) financing — 78 listings inquired, 28 NDAs signed, multiple deals taken to lender term sheets. Every deal raised the same questions: what does the debt service actually look like, does the cash flow cover it, and what's left for the owner? And when I met Small Capital, a syndicate financing employee ownership at acquisition, a harder question: how does the math work when a redeemable equity investor and an Employee Ownership Trust enter the capital stack? I built the calculator to answer both — with my real defaults, in public.",
    whatIBuilt: [
      "Core deal calculator — SBA 7(a) capital stack (80% bank / 10% seller note / 10% down), amortization at real defaults (8.75%, 10-year), DSCR with and without seller-note standby, tax and cash-reserve adjustments, owner take-home, and 5/10-year equity buildup",
      "Small Capital / EOT financing module — models a redeemable preferred investor alongside SBA debt: free-cash-flow waterfall, year-by-year ownership migration into an Employee Ownership Trust, employee profit-share and outcome projections, and a max-affordable-deal-size solver against equity-injection and DSCR constraints",
      "Side-by-side comparison of the same deal with and without the employee-ownership capital stack, plus a sensitivity grid over FCF share and SDE decline",
      "Pure TypeScript calculation engine with vitest unit tests, separate from the React UI — Next.js, deployed on Vercel",
    ],
    impact: [
      "In active use in my own search — the debt math behind real lender conversations and a fully drafted $1.0M LOI",
      "Shared with Small Capital; I applied their feedback to the model's defaults, capital stack, and waterfalls, and they've used the build as reference for their own internal tooling",
      "Public repo — anyone searching can fork it and pressure-test their own deal",
    ],
    lessons: [
      "A calculator is a methodology made honest. Every default is a claim you have to defend — the moment my assumptions were executable, lenders and I had something concrete to argue about.",
      "Modeling employee ownership at acquisition made the structural problem precise: it's not that the math doesn't work, it's that SBA underwriting doesn't yet have a box for it.",
      "Building the tool in public turned a solo search into collaboration — the fastest feedback I got came from sharing a URL and a repo, not a deck.",
    ],
    links: [
      { label: "Live calculator", url: "https://sbcalculator.vercel.app" },
      {
        label: "GitHub",
        url: "https://github.com/captnseagraves/sbcalculator",
      },
    ],
    essayUrl: "/writing/sba-search-calculator",
  },
  {
    id: "weekly-review-agent",
    title: "Weekly Review Agent",
    role: "Solo builder (product, engineering, and the human in the loop)",
    dates: "Jul – Aug 2026",
    heroMetric:
      "An agentic publishing pipeline in production — its output is the /writing section of this site",
    problem:
      "I build constantly and publish almost never — and for the AI product roles I care about, unpublished work might as well not exist. 'Have an LLM write my blog' is easy and bad: fluent models fabricate by default, flatten your voice, and can't be trusted near private data or a Publish button. The real product problem is designing an agent system where grounding, voice, privacy, and irreversible actions are first-class constraints — then living with it every week.",
    whatIBuilt: [
      "Evidence collectors (deterministic, stdlib, 29 unit tests) over every work surface — agent-session transcripts, git history across ~70 repos, chat-app exports — with a redaction layer that strips credential-shaped strings before anything reaches a prompt",
      "A grounding rule enforced end-to-end: the agent is not allowed to invent an accomplishment; missing evidence becomes an explicit [FILL IN] slot for me, never a plausible guess",
      "An interview-driven synthesis flow — open brain-dump first, then pointed questions generated from the week's evidence — so the opinions in every essay are mine and the model only does assembly",
      "Human approval gates at each irreversible step: draft approval, site push, and social posting are three separate gates, with chrome-assisted posting where I click Post",
      "A header-art stage: concept chosen in review, three style-varied generations against the newest image model with a fallback chain, my pick wired into per-essay OpenGraph tags via build-time prerendering",
      "The full publishing loop: state tracking, a Friday reminder routine, static-site integration, and link-preview infrastructure — all orchestrated by a skill playbook the agent follows",
    ],
    impact: [
      "In production: every essay in /writing ships through this pipeline, from evidence to LinkedIn",
      "Published as a public template repo with the sanitized playbook, collectors, and test suite",
      "Closed my single biggest job-market gap — publishing — by making the publishing cost near zero while keeping every claim true",
    ],
    lessons: [
      "Hallucination is a product constraint, not a model bug. Design the system so fabrication is structurally impossible and the model's fluency becomes safe to use.",
      "Deterministic where possible, model where necessary. Collection and redaction are plain tested code; judgment is the model's job; opinions stay human.",
      "The redaction layer wasn't theoretical — the collectors surfaced a real API key pasted into an old session, and GitHub's push protection later caught a fixture my own scrub missed. Secrets management around LLM pipelines deserves paranoia.",
      "Approval gates have to be separate. 'The draft is approved' and 'push it' and 'post it' are three different decisions, and collapsing them is how agents publish things you regret.",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/captnseagraves/weekly-review-agent",
      },
      { label: "The output", url: "/writing" },
    ],
    essayUrl: "/writing/building-the-weekly-review-agent",
  },
];

# Case Study: Bankless AI Agent

**Role:** CEO & Consultant, Context Monkey
**Dates:** 2024 – 2025
**Client:** Bankless Media

## Hero Metric
**AI agent shipped to production on Twitter** for a major media company — deployed at the frontier of what the underlying models could support.

## The Problem
Bankless Media wanted to extend their editorial voice into an always-on presence — an AI agent that could engage their audience authentically on Twitter, surface interesting content, and hold conversations that felt indistinguishable from the Bankless team. The bar was deliberately high: not a chatbot, not a scheduling assistant — an agent that could pass as a thoughtful member of the team.

## What I Built
The agent was built on top of the **Eliza framework**, which provided the base agent architecture, response generation, and publishing primitives. My work focused on making it *Bankless* rather than generic:

- **Prompt design and management** — iterated on the prompt stack that shaped how the agent reasoned and responded
- **Tone calibration and personality scaffolding** — the core editorial work of making the agent sound like the Bankless team
- **Response generation tuning** — extended and modified the default response flow to better fit the use case
- **Human-in-the-loop evaluation framework** — the piece I designed from scratch. Based on the personality and tone calibration, the agent generated candidate tweets from current topics. I reviewed the queue, selected the strongest candidates, edited them to sound more on-brand, and loaded them into a hopper that published at semi-random intervals. Humans stayed in the loop on quality; the system handled scale and timing.

## Impact
The agent shipped to production and ran in public. It engaged audience members with on-brand, edited content at a sustainable cadence — limited, ultimately, by the maturity of underlying AI models at the time rather than the system design.

## What I Learned
- **The gap between "AI agent demo" and "AI agent in production" is huge.** Reliability, tone consistency, and handling edge cases are the entire game.
- **Evaluation is the unsolved problem in agents.** Prompting is easy. Knowing if the agent is doing its job is hard.
- **Shipping something imperfect teaches you more than polishing something in private.** The real world surfaces every assumption.
- **Model maturity is a rate limiter.** You can build the best agent architecture in the world and still be bounded by what the base models can do.

## Why This Matters Now
The architecture is more viable today than it was then. The patterns I designed — tone calibration, context management, and especially **human-in-the-loop evaluation** — are exactly what the current wave of AI products is converging toward. Production AI isn't "let the agent run free" or "replace humans" — it's a well-designed loop with humans in the right places.

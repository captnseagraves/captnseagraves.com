# Case Study: Gitcoin Grants

**Role:** Lead Engineer & Product Manager
**Dates:** Jul 2018 – Mar 2019
**Team:** 4 engineers, 1 designer, ~5 open source contributors

## Hero Metric
**$60M+ distributed to open source software projects** (as of 2026, still in active use)

## The Problem
Open source software is the backbone of the modern internet, but maintainers were (and still are) systematically underfunded. Gitcoin wanted to solve this with a grants platform that let anyone contribute crypto to projects they cared about, with matching funds amplifying small donations.

## What I Built
I architected and led engineering on Gitcoin Grants v0 — the first version of what became the flagship product of the Gitcoin platform. Key technical decisions:

- **Django backend + Solidity smart contracts** — off-chain for UX speed, on-chain for transparent fund custody
- **Co-authored and implemented ERC-1337** — the Ethereum standard for subscription payments, which Gitcoin Grants used to let donors set up recurring, ongoing donations to the projects they cared about
- **Meta-transactions** — ERC-1337 utilized meta-transactions, making Gitcoin Grants the first production application on Ethereum to implement them

## Impact
- $60M+ distributed to open source projects
- Platform is still in active use 7+ years later
- Became a model other public goods funding platforms copied
- ERC-1337 went on to influence subscription-payment design across Ethereum

## What I Learned
- **Public goods funding is a product problem, not just a funding problem.** The UX of giving matters more than the math.
- **Shipping meta-transactions in production taught me the difference between a technical pattern and a deployable system.** They're far apart.
- **When you build something teams copy, you've built the right thing.**

## Links
- Platform: [grants.gitcoin.co](https://grants.gitcoin.co)
- ERC-1337: [EIP-1337](https://eips.ethereum.org/EIPS/eip-1337)

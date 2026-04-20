import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Section from "../layout/Section";

const longParagraphs = [
  "I came into tech through a coding bootcamp at Galvanize in 2017, after years working in outdoor ethics and environmental nonprofits. That non-traditional path ended up being a feature, not a bug — I think about products as things real humans use, and technology as a way to make the world a better place. Can we improve the lives of humans and other beings across the planet?",
  "My first tech role was at BCG Digital Ventures, where I built blockchain proofs-of-concept for Fortune 500 clients — the World Wildlife Fund, De Beers — and spent a lot of time translating complex technical concepts for C-suite audiences. That taught me the most under-rated skill in engineering: being able to explain what you built to the people who need to understand it.",
  "From there I joined Gitcoin as Lead Engineer and Product Manager, where I built Gitcoin Grants v0 — a quadratic-funding grants platform that has now distributed over $60M to open source software projects. I co-authored ERC-1337, the Ethereum standard for subscription payments, and built the first production application to use meta-transactions.",
  "After Gitcoin, I co-founded and scaled Charge Technology Group (payments and compliance infrastructure) and then co-founded NiftyApes, an NFT-collateralized lending protocol where I served as CEO and CTO. At NiftyApes I raised $4.2M from Coinbase Ventures, Variant Fund, Polygon Ventures and others, invented the Harberger Style Lending Auction mechanism, and led a team of 10. When the NFT market shifted, I made the disciplined call to wind down and return capital to investors — a decision I'm still proud of today.",
  "Since 2024 I've been building and tinkering with AI agents through my consulting practice, Context Monkey — including shipping an AI agent on Twitter for Bankless Media. I architected a cross-chain smart wallet protocol at Signet, built and launched a social app, Dinner — The Dinner Club For Extraordinary Strangers, and currently run go-to-market and marketing at Ubitel, decentralized global connectivity.",
  "I'm based in Boulder, Colorado, and spend a good chunk of the year in Nosara, Costa Rica. Outside of work I practice meditation, play music, and surf.",
];

const thread =
  "What connects all of it: I like building novel systems that move real value — whether that's $60M in grants, $4.2M in venture capital, or AI agents that talk to thousands of users. I can do the engineering, the product, and the pitch. That combination is rare, and it's what I bring.";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Section id="about">
      <h2 className="mb-6 text-2xl font-semibold">
        <span className="gradient-text">My Path</span>
      </h2>

      <div className="space-y-5 text-[var(--color-text-muted)] leading-relaxed">
        <p>
          I build{" "}
          <span className="text-[var(--color-text)]">
            products, protocols, and AI systems
          </span>{" "}
          from zero to one and beyond. Over the last{" "}
          <span className="accent-text font-medium">8 years</span> I've raised{" "}
          <span className="text-[var(--color-text)]">
            $4.2M in venture capital
          </span>
          , shipped two lending protocols to Ethereum mainnet, architected a
          grants platform that distributed{" "}
          <span className="text-[var(--color-text)]">$60M+</span> to open source
          projects, and deployed an{" "}
          <span className="violet-text font-medium">AI agent</span> to
          production for a major media company.
        </p>

        <p>
          I came into tech through a coding bootcamp at{" "}
          <span className="text-[var(--color-text)]">Galvanize in 2017</span>,
          after years working in outdoor ethics and environmental nonprofits.
          That non-traditional path ended up being a feature, not a bug — I
          think about products as things real humans use, and technology as a
          way to make the world a better place.
        </p>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="long"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-5 space-y-5 text-[var(--color-text-muted)] leading-relaxed">
              {longParagraphs.slice(1).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="border-l-2 border-[var(--color-accent)] pl-4 text-[var(--color-text)] font-medium italic">
                {thread}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-7 inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-card)]/60 px-5 py-2 text-sm font-medium text-[var(--color-text)] backdrop-blur transition-all hover:border-[var(--color-accent)] hover:shadow-[0_0_24px_-8px_rgba(94,201,214,0.5)]"
      >
        <span className="accent-text">{expanded ? "Show less" : "Read the full story"}</span>
        <span
          className={`accent-text transition-transform ${expanded ? "rotate-180" : ""}`}
        >
          ↓
        </span>
      </button>
    </Section>
  );
}

import { motion } from "motion/react";

const roles = [
  "Head of Product",
  "AI Product Manager",
  "Founding Engineer",
  "Forward Deployed Engineer",
];

export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[90vh] max-w-4xl flex-col justify-center px-6 pt-24">
      <motion.div
        className="flex flex-col items-start gap-8 sm:flex-row sm:items-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="relative shrink-0">
          <img
            src="/images/kevin.png"
            alt="Kevin Seagraves"
            className="glow-ring h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
          />
          <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-bg)] text-xs">
            <span className="gradient-text font-bold">★</span>
          </div>
        </div>

        <div>
          <p className="text-sm text-[var(--color-text-muted)]">
            Hi, I'm{" "}
            <span className="accent-text font-medium">@captnseagraves</span>,
          </p>
          <h1 className="mt-2 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            <span className="gradient-text">Engineer</span> who can pitch.
            <br />
            <span className="gradient-text">Product thinker</span> who can code.
          </h1>
        </div>
      </motion.div>

      <motion.p
        className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)] sm:text-xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
      >
        8 years of shipping from scratch —{" "}
        <span className="text-[var(--color-text)]">$4.2M raised</span>,{" "}
        <span className="text-[var(--color-text)]">$60M+ distributed</span>,
        protocols on Ethereum mainnet, and AI agents in production.
      </motion.p>

      <motion.div
        className="mt-8 flex flex-wrap items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <span className="mr-1 text-xs uppercase tracking-wider text-[var(--color-text-dim)]">
          Open to
        </span>
        {roles.map((role, i) => (
          <span key={role} className={i === 0 ? "chip chip-accent" : "chip"}>
            {role}
          </span>
        ))}
      </motion.div>

      <motion.div
        className="mt-10 flex flex-wrap gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <a
          href="#work"
          className="rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-violet)] px-6 py-2.5 text-sm font-semibold text-[var(--color-bg)] transition-transform hover:scale-[1.02]"
        >
          See my work →
        </a>
        <a
          href="#contact"
          className="rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-card)]/60 px-6 py-2.5 text-sm font-medium text-[var(--color-text-muted)] backdrop-blur transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
        >
          Get in touch
        </a>
      </motion.div>
    </section>
  );
}

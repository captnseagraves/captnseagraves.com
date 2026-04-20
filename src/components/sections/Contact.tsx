import Section from "../layout/Section";

const roles = [
  {
    title: "Head of Product / AI Product Manager",
    desc: "At an established company with revenue, applying AI to a real product surface",
  },
  {
    title: "Founding Engineer / Early Technical Hire",
    desc: "If the team, market, and mission are right",
  },
  {
    title: "Forward Deployed Engineer / AI Solutions Architect / Field CTO",
    desc: "Roles that combine technical depth with customer-facing work",
  },
  {
    title: "Developer Relations / Developer Advocate",
    desc: "If the product is something I'd build with",
  },
];

const priorities = [
  "Established revenue or clear path to it",
  "Remote-first, or open to Colorado-based",
  "Mission that matters — AI, fintech, open source, climate, public goods",
  "Team I respect — people I'd want to spend my creative energy with",
];

const ctas = [
  {
    label: "Email",
    sub: "k.s.seagraves@gmail.com",
    href: "mailto:k.s.seagraves@gmail.com",
    primary: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-4 w-4"
      >
        <path d="M3 7l9 6 9-6M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7a2 2 0 012-2h14a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    sub: "/in/kevinseagraves",
    href: "https://linkedin.com/in/kevinseagraves",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    sub: "@captnseagraves",
    href: "https://github.com/captnseagraves",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    sub: "@captnseagraves",
    href: "https://x.com/captnseagraves",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <Section id="contact">
      <h2 className="mb-6 text-2xl font-semibold">
        <span className="gradient-text">Let's Talk</span>
      </h2>

      <p className="mb-8 leading-relaxed text-[var(--color-text-muted)]">
        I'm actively exploring my next role at the intersection of AI, product,
        and building from zero to one. Specifically interested in:
      </p>

      <div className="mb-10 space-y-4">
        {roles.map((role) => (
          <div
            key={role.title}
            className="border-l-2 border-[var(--color-accent)]/60 pl-4 transition-colors hover:border-[var(--color-accent)]"
          >
            <p className="font-medium text-[var(--color-text)]">{role.title}</p>
            <p className="text-sm text-[var(--color-text-dim)]">{role.desc}</p>
          </div>
        ))}
      </div>

      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-text-dim)]">
        What I'm Prioritizing
      </h3>
      <ul className="mb-12 space-y-2">
        {priorities.map((p) => (
          <li key={p} className="text-sm text-[var(--color-text-muted)]">
            → {p}
          </li>
        ))}
      </ul>

      <div className="rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-bg-card)]/50 p-6 backdrop-blur sm:p-8">
        <p className="mb-1 text-xs uppercase tracking-wider text-[var(--color-accent)]">
          Get in touch
        </p>
        <p className="mb-6 text-lg font-semibold text-[var(--color-text)]">
          The best way to reach me →
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {ctas.map((cta) => {
            const isPrimary = cta.primary;
            const baseClasses =
              "group flex items-center gap-3 rounded-xl px-5 py-4 transition-all";
            const primaryClasses =
              "bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-violet)] text-[var(--color-bg)] hover:scale-[1.02] hover:shadow-[0_0_32px_-8px_rgba(94,201,214,0.6)]";
            const secondaryClasses =
              "border border-[var(--color-border-strong)] bg-[var(--color-bg)]/60 text-[var(--color-text)] hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-hover)]/50 hover:text-[var(--color-accent)]";
            return (
              <a
                key={cta.label}
                href={cta.href}
                target={cta.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`${baseClasses} ${isPrimary ? primaryClasses : secondaryClasses}`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                    isPrimary
                      ? "bg-[var(--color-bg)]/15"
                      : "bg-[var(--color-bg-hover)]"
                  }`}
                >
                  {cta.icon}
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold">{cta.label}</span>
                  <span
                    className={`text-xs ${isPrimary ? "text-[var(--color-bg)]/80" : "text-[var(--color-text-dim)]"}`}
                  >
                    {cta.sub}
                  </span>
                </span>
                <span className="ml-auto text-lg transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import Section from "../layout/Section";
import { caseStudies, type CaseStudy } from "../../data/caseStudies";

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/40 backdrop-blur transition-all hover:border-[var(--color-border-strong)] hover:shadow-[0_0_32px_-12px_rgba(94,201,214,0.35)]">
      <div className="flex flex-col gap-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-[var(--color-text)]">
            {study.title}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-wider text-[var(--color-text-dim)]">
            {study.role} · {study.dates}
          </p>
        </div>

        <p className="rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 p-3 text-sm font-medium leading-snug text-[var(--color-accent)]">
          {study.heroMetric}
        </p>

        <p className="text-sm leading-relaxed text-[var(--color-text-muted)] line-clamp-4">
          {study.problem}
        </p>

        {study.impact.length > 0 && (
          <ul className="space-y-1.5">
            {study.impact.slice(0, 3).map((item, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm leading-relaxed text-[var(--color-text-muted)]"
              >
                <span className="violet-text mt-1 shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-5 border-t border-[var(--color-border)] px-6 py-6">
              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                  What I Built
                </h4>
                {study.whatIBuiltIntro && (
                  <p className="mb-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {study.whatIBuiltIntro}
                  </p>
                )}
                <ul className="space-y-2">
                  {study.whatIBuilt.map((item, i) => (
                    <li
                      key={i}
                      className="border-l-2 border-[var(--color-border-strong)] pl-3 text-sm leading-relaxed text-[var(--color-text-muted)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {study.impact.length > 3 && (
                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                    More Impact
                  </h4>
                  <ul className="space-y-1">
                    {study.impact.slice(3).map((item, i) => (
                      <li
                        key={i}
                        className="text-sm leading-relaxed text-[var(--color-text-muted)]"
                      >
                        → {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                  What I Learned
                </h4>
                <ul className="space-y-2">
                  {study.lessons.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm leading-relaxed text-[var(--color-text-muted)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {study.coda && (
                <p className="border-l-2 border-[var(--color-accent-violet)] pl-4 text-sm italic leading-relaxed text-[var(--color-text)]">
                  {study.coda}
                </p>
              )}

              {study.essayUrl && (
                <div className="pt-1">
                  <Link
                    to={study.essayUrl}
                    className="text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                  >
                    Read the full essay →
                  </Link>
                </div>
              )}

              {study.links && study.links.length > 0 && (
                <div className="flex flex-wrap gap-3 pt-1">
                  {study.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-auto border-t border-[var(--color-border)] p-4">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-bg-hover)]/50 hover:text-[var(--color-accent)] cursor-pointer"
        >
          <span>{open ? "Show less" : "Read full case study"}</span>
          <span
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          >
            ↓
          </span>
        </button>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <Section id="work">
      <h2 className="mb-6 text-2xl font-semibold">
        <span className="gradient-text">What I've Built</span>
      </h2>
      <p className="mb-8 text-[var(--color-text-muted)]">
        Four projects, eight years, $4.2M raised, $60M+ moved. Each card is a
        deeper look — click to read the full story.
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>
    </Section>
  );
}

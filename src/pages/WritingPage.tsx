import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { getEssaysSorted } from "../data/essays";
import { useDocumentMeta } from "../lib/useDocumentMeta";

export default function WritingPage() {
  const essays = getEssaysSorted();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useDocumentMeta({
    title: "Writing — Kevin Seagraves",
    description:
      "Essays and weekly notes on building products, AI engineering, and figuring out what to work on.",
    url:
      typeof window !== "undefined"
        ? `${window.location.origin}/writing`
        : undefined,
  });

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-2xl px-6 pb-24 pt-28">
        <header className="border-b border-[var(--color-border)] pb-10">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Writing
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.15] sm:text-5xl">
            <span className="gradient-text">Essays &amp; weekly notes</span>
          </h1>
          <p className="mt-5 text-[1.125rem] leading-[1.6] text-[var(--color-text-muted)]">
            What I shipped and what I've been thinking about — case-study
            essays and a weekly working log.
          </p>
        </header>
        <ul className="mt-4 divide-y divide-[var(--color-border)]">
          {essays.map((essay) => (
            <li key={essay.slug} className="py-8">
              <p className="text-xs uppercase tracking-wider text-[var(--color-text-dim)]">
                {essay.dates}
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                <Link
                  to={`/writing/${essay.slug}`}
                  className="hover:text-[var(--color-accent)] transition-colors"
                >
                  {essay.title}
                </Link>
              </h2>
              <p className="mt-3 leading-[1.6] text-[var(--color-text-muted)]">
                {essay.tldr}
              </p>
              <Link
                to={`/writing/${essay.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--color-accent)] hover:underline"
              >
                <span>Read</span>
                <span aria-hidden>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}

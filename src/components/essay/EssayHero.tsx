import { Link } from "react-router-dom";
import type { Essay } from "../../data/essays";

interface Props {
  essay: Essay;
  readingTimeLabel: string;
}

export default function EssayHero({ essay, readingTimeLabel }: Props) {
  return (
    <header className="border-b border-[var(--color-border)] pb-10">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
      >
        <span aria-hidden>←</span>
        <span>Back to home</span>
      </Link>
      <p className="mt-10 text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
        {essay.eyebrow}
      </p>
      <h1 className="mt-4 text-4xl font-semibold leading-[1.15] sm:text-5xl">
        <span className="gradient-text">{essay.title}</span>
      </h1>
      <p className="mt-5 text-[1.125rem] italic leading-[1.6] text-[var(--color-text-muted)]">
        {essay.tldr}
      </p>
      <p className="mt-6 text-xs uppercase tracking-wider text-[var(--color-text-dim)]">
        {essay.role} · {essay.dates} · {readingTimeLabel}
      </p>
    </header>
  );
}

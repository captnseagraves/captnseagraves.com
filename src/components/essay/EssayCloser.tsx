import { Link } from "react-router-dom";
import { useState } from "react";
import NewsletterSignup from "../NewsletterSignup";

interface Props {
  shareTitle: string;
}

export default function EssayCloser({ shareTitle }: Props) {
  const [copied, setCopied] = useState(false);

  function copyLink() {
    if (typeof window === "undefined") return;
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function shareUrl(platform: "x" | "linkedin"): string {
    if (typeof window === "undefined") return "#";
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(shareTitle);
    if (platform === "x") {
      return `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    }
    return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
  }

  return (
    <footer className="mt-20 border-t border-[var(--color-border)] pt-10">
      <div className="mb-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-accent)]/[0.03] p-6">
        <NewsletterSignup compact />
      </div>
      <p className="text-sm uppercase tracking-wider text-[var(--color-accent)]">
        Currently open to
      </p>
      <p className="mt-2 text-[var(--color-text-muted)]">
        Head of Product · AI Product Manager · Founding Engineer · Forward
        Deployed Engineer
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="mailto:k.s.seagraves@gmail.com"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/5 px-4 py-2 text-sm font-medium text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-colors"
        >
          Get in touch
        </a>
        <button
          type="button"
          onClick={copyLink}
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border-strong)] px-4 py-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-text-dim)] transition-colors cursor-pointer"
        >
          {copied ? "Link copied" : "Copy link"}
        </button>
        <a
          href={shareUrl("x")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border-strong)] px-4 py-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-text-dim)] transition-colors"
        >
          Share on X
        </a>
        <a
          href={shareUrl("linkedin")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border-strong)] px-4 py-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-text-dim)] transition-colors"
        >
          Share on LinkedIn
        </a>
      </div>
      <Link
        to="/"
        className="mt-10 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
      >
        <span aria-hidden>←</span>
        <span>Back to captnseagraves.com</span>
      </Link>
    </footer>
  );
}

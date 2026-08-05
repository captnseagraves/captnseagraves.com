import { useState } from "react";

type Status = "idle" | "submitting" | "sent" | "error";

interface Props {
  compact?: boolean;
}

export default function NewsletterSignup({ compact = false }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    try {
      const r = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(r.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className={compact ? "" : "text-center"}>
        <p className="text-[var(--color-text)] font-medium">
          Check your inbox — one click to confirm and you're in.
        </p>
      </div>
    );
  }

  return (
    <div className={compact ? "" : "text-center"}>
      {!compact && (
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
          Newsletter
        </p>
      )}
      <h3
        className={
          compact
            ? "text-lg font-semibold"
            : "mt-3 text-2xl font-semibold sm:text-3xl"
        }
      >
        Get the next essay by email
      </h3>
      <p
        className={`mt-2 text-sm leading-[1.6] text-[var(--color-text-muted)] ${
          compact ? "" : "mx-auto max-w-md"
        }`}
      >
        What I shipped and what I'm thinking about — building with AI agents,
        buying a small business, working in public. Usually weekly. The start
        of each essay in your inbox, no spam, unsubscribe anytime.
      </p>
      <form
        onSubmit={submit}
        className={`mt-5 flex gap-2 ${compact ? "max-w-md" : "mx-auto max-w-md"}`}
      >
        {/* honeypot */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="min-w-0 flex-1 rounded-lg border border-[var(--color-border-strong)] bg-transparent px-4 py-2 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-dim)] focus:border-[var(--color-accent)] focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-lg border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-4 py-2 text-sm font-medium text-[var(--color-accent)] hover:bg-[var(--color-accent)]/20 transition-colors disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-sm text-red-400">
          Something went wrong — try again in a minute.
        </p>
      )}
    </div>
  );
}

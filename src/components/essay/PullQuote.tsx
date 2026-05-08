import type { ReactNode } from "react";

export default function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-10 border-l-2 border-[var(--color-accent-violet)] pl-6 text-[1.25rem] italic leading-[1.6] text-[var(--color-text)]">
      {children}
    </blockquote>
  );
}

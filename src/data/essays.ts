import essaysData from "./essays.json";

export interface Essay {
  slug: string;
  title: string;
  tldr: string;
  eyebrow: string;
  role?: string;
  dates: string;
  /** ISO date (YYYY-MM-DD) used to sort the /writing index; undated essays sort last. */
  date?: string;
  heroImage?: string;
  ogImage?: string;
  metaDescription: string;
}

// Essay metadata lives in essays.json so the post-build prerender script
// (scripts/prerender-meta.mjs) can read the same source of truth.
export const essays: Essay[] = essaysData;

export function getEssay(slug: string): Essay | undefined {
  return essays.find((e) => e.slug === slug);
}

export function getEssaysSorted(): Essay[] {
  return [...essays].sort((a, b) => {
    if (a.date && b.date) return b.date.localeCompare(a.date);
    if (a.date) return -1;
    if (b.date) return 1;
    return 0;
  });
}

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

export const essays: Essay[] = [
  {
    slug: "dinner",
    title: "Dinner",
    tldr: "I built and wound down a community-dinner platform solo over ten months — iOS, Android, web, AI-driven matching, paid funnel — because product-life fit is part of product-market fit.",
    eyebrow: "Case Study · Essay",
    role: "Founder",
    dates: "Mar 2025 – Jan 2026",
    heroImage: undefined,
    ogImage: "/og/dinner.jpg",
    metaDescription:
      "How I built and wound down Dinner — a community-dinner platform shipped solo across iOS, Android, web, and a multi-market paid funnel, with Claude-powered matching in production.",
  },
];

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

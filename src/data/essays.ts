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
    slug: "2026-07-28-weekly",
    title: "Oil, god, and open weights",
    tldr: "Where I land on the week's open-weights fight — Nvidia's letter, Anthropic's answer, Packy's metaphor — after a career on the open-source side of the argument. Plus 30 commits of reliability work, a deal I walked away from, and the pipeline that drafts these posts.",
    eyebrow: "Weekly Review",
    dates: "July 28, 2026",
    date: "2026-07-28",
    metaDescription:
      "Reflections on the open-weights debate (the Nvidia coalition letter, Anthropic's position, and 'AI is Oil, Not God'), plus what I shipped and what I'm thinking about, week of July 21–28, 2026.",
  },
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

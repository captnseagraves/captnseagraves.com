# Dinner Showcase Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship `captnseagraves.com/dinner` — a long-form essay page about the Dinner project — with the supporting infrastructure to drop in a second essay by writing one markdown file and adding one route line. Plus first-draft distribution copy.

**Architecture:** Single-page Vite + React 19 site, dark theme via Tailwind v4 tokens, deployed on Vercel. Add React Router for two routes: `/` (existing anchor-scroll page, untouched in feel) and `/dinner` (new long-form essay layout). Essay metadata lives in TypeScript (`src/data/essays.ts`); essay body lives in markdown (`content/essays/<slug>.md`) imported via Vite's `?raw` and rendered with `react-markdown`. Static OG image per essay shipped in `public/og/`.

**Tech Stack:** React 19, React Router DOM v7, Vite 6, Tailwind CSS v4, react-markdown 9, remark-gfm 4, TypeScript 6, motion 12, Vercel hosting.

**Verification approach:** No test runner currently exists in this repo, and adding one is out of scope for this plan. Each task uses **manual verification in the dev server** (`npm run dev`) and **build success** (`npm run build`) as the green check. Visual checks are explicit per task.

**Working directory for all commands:** `/Users/kevinseagraves/Desktop/claude/career/website`

---

## File Structure

**Create:**
- `content/essays/dinner.md` — essay body (markdown)
- `src/data/essays.ts` — essay metadata (title, tldr, role, dates, hero image, etc.)
- `src/lib/readingTime.ts` — pure word-count → reading time util
- `src/lib/loadEssay.ts` — markdown loader (Vite `?raw` import map)
- `src/components/essay/PullQuote.tsx` — pull-quote treatment for `>` blockquotes
- `src/components/essay/EssayHero.tsx` — hero band (eyebrow, h1, tldr, meta)
- `src/components/essay/EssayMarkdown.tsx` — react-markdown wrapper with custom components
- `src/components/essay/EssayCloser.tsx` — CTA + share row + back link
- `src/pages/EssayPage.tsx` — composes the above; takes `slug`
- `src/lib/useDocumentMeta.ts` — small hook to set `<title>` / meta description / OG tags
- `public/og/dinner.jpg` — 1200×630 static OG image (created externally)
- `docs/distribution/dinner-launch-copy.md` — first-draft launch copy

**Modify:**
- `package.json` — add deps
- `src/main.tsx` — wrap App in `<BrowserRouter>`
- `src/App.tsx` — replace single render with `<Routes>` and a `<HomePage>` extracted from current content
- `src/components/layout/Navbar.tsx` — make anchor links route-aware (`/#about` instead of `#about`); fix back-from-essay behavior
- `src/data/caseStudies.ts` — add optional `essayUrl?: string` field, set on dinner entry
- `src/components/sections/CaseStudies.tsx` — render "Read the full essay →" when `essayUrl` is set

**Tasks 19–21 are pure content / external steps** (run the LLM prompt, generate the OG image, verify on social validators). They do not produce code commits but are required for ship.

---

## Phase 0 — Draft the essay

### Task 1: Run the LLM prompt and save the draft

**Files:**
- Create: `content/essays/dinner.md`

This task is performed by Kevin manually outside this agent. The result is committed.

- [ ] **Step 1: Open Claude (or your model of choice) and paste the LLM prompt from spec §3.1**

Open the design spec at `docs/superpowers/specs/2026-05-06-dinner-showcase-design.md` and copy the entire fenced prompt block in section 3.1. Replace the `[PASTE: …]` and `[ATTACH OR REFERENCE: …]` markers with:

- The contents of `content/case-studies/04-dinner.md`
- The contents of `content/about.md`
- A pointer (or attached repo bundle) to `/Users/kevinseagraves/Desktop/dev/dinner` so the model can reference technical specifics on the matching system, undo flows, and shipped surface.

- [ ] **Step 2: Receive the draft, edit to taste**

The prompt asks for ~1,800–2,200 words, markdown, H1 title, italicized TL;DR, H2 section breaks, and `>` pull-quote markers. Edit the draft to your voice. Do not skip this step — the model produces a 70% draft; the last 30% is yours.

- [ ] **Step 3: Save to `content/essays/dinner.md`**

```bash
mkdir -p content/essays
# Then paste the final edited markdown into content/essays/dinner.md
```

The file should look roughly like:

```markdown
# <title>

*<one-line TL;DR italicized>*

<body paragraphs and H2 sections>
```

- [ ] **Step 4: Commit**

```bash
git add content/essays/dinner.md
git commit -m "Draft Dinner essay"
```

---

## Phase 1 — Foundation

### Task 2: Install dependencies

**Files:**
- Modify: `package.json`, `package-lock.json`

- [ ] **Step 1: Install runtime deps**

```bash
npm install react-router-dom react-markdown remark-gfm
```

Expected: three packages added to `dependencies` in `package.json`. No peer-dep warnings on React 19.

- [ ] **Step 2: Verify build still passes**

```bash
npm run build
```

Expected: build succeeds. The new deps are imported by no code yet, so they don't affect output.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "Add react-router-dom, react-markdown, remark-gfm"
```

---

### Task 3: Wrap app in BrowserRouter and split routes

**Files:**
- Modify: `src/main.tsx`
- Modify: `src/App.tsx`

We split the current single-page App into a `HomePage` component and let `App` route between `HomePage` and (in the next task) `EssayPage`.

- [ ] **Step 1: Update `src/main.tsx` to provide the router**

Replace the entire file contents with:

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

- [ ] **Step 2: Replace `src/App.tsx` with route splitting**

Replace the entire file contents with:

```tsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import CaseStudies from "./components/sections/CaseStudies";
import Skills from "./components/sections/Skills";
import Recognition from "./components/sections/Recognition";
import Contact from "./components/sections/Contact";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <CaseStudies />
        <Recognition />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* /dinner route added in Task 11 */}
    </Routes>
  );
}
```

- [ ] **Step 3: Run dev server and verify `/` still renders identically**

```bash
npm run dev
```

Open `http://localhost:5173`. Expected: site renders exactly as before. Click each navbar link (About, Work, Skills, Contact). Expected: anchor scroll still works. (We will fix Navbar's hash links in Task 16 to be safe across routes — but on `/` they currently work fine because the route is `/`.)

- [ ] **Step 4: Verify `npm run build` still passes**

```bash
npm run build
```

Expected: build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/main.tsx src/App.tsx
git commit -m "Add BrowserRouter; extract HomePage component"
```

---

### Task 4: Add SPA fallback for Vercel

**Files:**
- Create: `vercel.json`

Vercel's static deploy needs to know that all unknown routes should serve `index.html` so React Router can take over. Without this, hitting `/dinner` directly returns a 404.

- [ ] **Step 1: Create `vercel.json`**

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

- [ ] **Step 2: Commit**

```bash
git add vercel.json
git commit -m "Add SPA fallback for client-side routes"
```

---

## Phase 2 — Essay infrastructure

### Task 5: Reading-time util

**Files:**
- Create: `src/lib/readingTime.ts`

- [ ] **Step 1: Create the util**

```ts
// src/lib/readingTime.ts
const WORDS_PER_MINUTE = 220;

export function readingTimeMinutes(markdown: string): number {
  const text = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = text.length === 0 ? 0 : text.split(" ").length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}
```

- [ ] **Step 2: Quick visual sanity check**

Run a one-off in the dev server console (after Task 12 is done) or trust the next step: the formatter renders a number followed by " min read." If it shows 0 or NaN later, debug here.

- [ ] **Step 3: Commit**

```bash
git add src/lib/readingTime.ts
git commit -m "Add reading-time util"
```

---

### Task 6: Essay metadata file

**Files:**
- Create: `src/data/essays.ts`

- [ ] **Step 1: Create the file**

```ts
// src/data/essays.ts
export interface Essay {
  slug: string;
  title: string;
  tldr: string;
  eyebrow: string;
  role: string;
  dates: string;
  heroImage?: string;
  ogImage?: string;
  metaDescription: string;
}

export const essays: Essay[] = [
  {
    slug: "dinner",
    title: "Dinner",
    tldr: "I built a community-dinner platform solo — iOS, Android, web, AI matching, paid funnel. I wound it down because product-life fit is part of product-market fit.",
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
```

- [ ] **Step 2: After the essay is drafted, replace the `tldr` field with the actual TL;DR line from the markdown**

Open `content/essays/dinner.md`, copy the italicized TL;DR line, paste it as the `tldr` value (without the asterisks). The placeholder above is a fallback if the real one isn't ready yet.

- [ ] **Step 3: Replace `title` with the real essay title once known**

The H1 at the top of `content/essays/dinner.md` is the source of truth. Match it here.

- [ ] **Step 4: Commit**

```bash
git add src/data/essays.ts
git commit -m "Add essay metadata for Dinner"
```

---

### Task 7: Essay loader util

**Files:**
- Create: `src/lib/loadEssay.ts`

We use Vite's `import.meta.glob` with `as: "raw"` to load all essay markdown bodies at build time. This makes adding a new essay = drop a markdown file in `content/essays/` (no loader edit needed).

- [ ] **Step 1: Create the loader**

```ts
// src/lib/loadEssay.ts
const essayModules = import.meta.glob("/content/essays/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export function loadEssayBody(slug: string): string | null {
  const key = `/content/essays/${slug}.md`;
  return essayModules[key] ?? null;
}
```

- [ ] **Step 2: Verify Vite picks up the path**

```bash
npm run build
```

Expected: build succeeds. If Vite errors with "no module found," confirm `content/essays/dinner.md` exists from Task 1. If it doesn't, create a placeholder:

```bash
mkdir -p content/essays
printf "# Dinner\n\n*Placeholder TL;DR.*\n\nPlaceholder body.\n" > content/essays/dinner.md
```

- [ ] **Step 3: Commit**

```bash
git add src/lib/loadEssay.ts
git commit -m "Add essay markdown loader"
```

---

### Task 8: PullQuote component

**Files:**
- Create: `src/components/essay/PullQuote.tsx`

- [ ] **Step 1: Create the component**

```tsx
// src/components/essay/PullQuote.tsx
import type { ReactNode } from "react";

export default function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-10 border-l-2 border-[var(--color-accent-violet)] pl-6 text-[1.25rem] italic leading-[1.6] text-[var(--color-text)]">
      {children}
    </blockquote>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/essay/PullQuote.tsx
git commit -m "Add PullQuote component"
```

---

### Task 9: EssayHero component

**Files:**
- Create: `src/components/essay/EssayHero.tsx`

- [ ] **Step 1: Create the component**

```tsx
// src/components/essay/EssayHero.tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/essay/EssayHero.tsx
git commit -m "Add EssayHero component"
```

---

### Task 10: EssayMarkdown component

**Files:**
- Create: `src/components/essay/EssayMarkdown.tsx`

- [ ] **Step 1: Create the component**

```tsx
// src/components/essay/EssayMarkdown.tsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PullQuote from "./PullQuote";

interface Props {
  body: string;
}

export default function EssayMarkdown({ body }: Props) {
  return (
    <div className="mt-12 max-w-2xl text-[1.0625rem] leading-[1.75] text-[var(--color-text)]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: () => null, // title already rendered in EssayHero
          h2: ({ children }) => (
            <h2 className="mt-14 mb-5 text-2xl font-semibold text-[var(--color-text)]">
              {children}
            </h2>
          ),
          p: ({ children }) => (
            <p className="my-5 text-[var(--color-text-muted)]">{children}</p>
          ),
          a: ({ children, href }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] underline underline-offset-4 decoration-[var(--color-accent)]/30 transition-colors"
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="my-6 ml-5 list-disc space-y-2 text-[var(--color-text-muted)] marker:text-[var(--color-accent)]">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-6 ml-5 list-decimal space-y-2 text-[var(--color-text-muted)]">
              {children}
            </ol>
          ),
          blockquote: ({ children }) => <PullQuote>{children}</PullQuote>,
          img: ({ src, alt }) => (
            <figure className="my-10">
              <img
                src={src}
                alt={alt ?? ""}
                className="rounded-xl border border-[var(--color-border)]"
                loading="lazy"
              />
              {alt ? (
                <figcaption className="mt-3 text-xs uppercase tracking-wider text-[var(--color-text-dim)]">
                  {alt}
                </figcaption>
              ) : null}
            </figure>
          ),
          code: ({ children }) => (
            <code className="rounded bg-[var(--color-bg-card)] px-1.5 py-0.5 text-[0.95em] text-[var(--color-accent)]">
              {children}
            </code>
          ),
          hr: () => (
            <hr className="my-12 border-t border-[var(--color-border)]" />
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-[var(--color-text)]">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-[var(--color-text)]">{children}</em>
          ),
        }}
      >
        {body}
      </ReactMarkdown>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/essay/EssayMarkdown.tsx
git commit -m "Add EssayMarkdown renderer with custom components"
```

---

### Task 11: EssayCloser component

**Files:**
- Create: `src/components/essay/EssayCloser.tsx`

The share row uses `window.location.href` at click time so it always picks up the canonical URL.

- [ ] **Step 1: Create the component**

```tsx
// src/components/essay/EssayCloser.tsx
import { Link } from "react-router-dom";
import { useState } from "react";

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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/essay/EssayCloser.tsx
git commit -m "Add EssayCloser with email CTA and share row"
```

---

### Task 12: useDocumentMeta hook

**Files:**
- Create: `src/lib/useDocumentMeta.ts`

This hook updates `<title>` and OG/description meta tags client-side when an essay route is rendered. Since the SPA serves `index.html` for every route, the document defaults belong to the home page; the hook overwrites them per essay.

- [ ] **Step 1: Create the hook**

```ts
// src/lib/useDocumentMeta.ts
import { useEffect } from "react";

interface Meta {
  title: string;
  description: string;
  ogImage?: string;
  url?: string;
}

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector(selector);
  if (el) {
    el.setAttribute(attr, value);
  }
}

export function useDocumentMeta(meta: Meta) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = meta.title;

    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    if (meta.ogImage) {
      const absolute = meta.ogImage.startsWith("http")
        ? meta.ogImage
        : `${window.location.origin}${meta.ogImage}`;
      setMeta('meta[property="og:image"]', "content", absolute);
      setMeta('meta[name="twitter:image"]', "content", absolute);
    }
    if (meta.url) {
      setMeta('meta[property="og:url"]', "content", meta.url);
    }
    setMeta('meta[name="twitter:title"]', "content", meta.title);
    setMeta('meta[name="twitter:description"]', "content", meta.description);

    return () => {
      document.title = prevTitle;
    };
  }, [meta.title, meta.description, meta.ogImage, meta.url]);
}
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/useDocumentMeta.ts
git commit -m "Add useDocumentMeta hook for per-route meta tags"
```

---

### Task 13: EssayPage composing component

**Files:**
- Create: `src/pages/EssayPage.tsx`

- [ ] **Step 1: Create the page**

```tsx
// src/pages/EssayPage.tsx
import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import EssayHero from "../components/essay/EssayHero";
import EssayMarkdown from "../components/essay/EssayMarkdown";
import EssayCloser from "../components/essay/EssayCloser";
import { getEssay } from "../data/essays";
import { loadEssayBody } from "../lib/loadEssay";
import { readingTimeMinutes, formatReadingTime } from "../lib/readingTime";
import { useDocumentMeta } from "../lib/useDocumentMeta";

interface Props {
  slug: string;
}

export default function EssayPage({ slug }: Props) {
  const essay = getEssay(slug);
  const body = loadEssayBody(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  useDocumentMeta({
    title: essay
      ? `${essay.title} — Kevin Seagraves`
      : "Essay — Kevin Seagraves",
    description: essay?.metaDescription ?? "",
    ogImage: essay?.ogImage,
    url:
      typeof window !== "undefined"
        ? `${window.location.origin}/${slug}`
        : undefined,
  });

  if (!essay || !body) {
    return (
      <>
        <Navbar />
        <main className="mx-auto max-w-2xl px-6 py-32 text-center">
          <h1 className="text-2xl font-semibold">Essay not found.</h1>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Try heading <a href="/" className="text-[var(--color-accent)] underline">back home</a>.
          </p>
        </main>
        <Footer />
      </>
    );
  }

  const minutes = readingTimeMinutes(body);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-2xl px-6 pb-24 pt-28">
        <EssayHero
          essay={essay}
          readingTimeLabel={formatReadingTime(minutes)}
        />
        <EssayMarkdown body={body} />
        <EssayCloser shareTitle={`${essay.title} — Kevin Seagraves`} />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/EssayPage.tsx
git commit -m "Add EssayPage composing hero, body, and closer"
```

---

### Task 14: Wire `/dinner` route in App

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Add the import and route**

Open `src/App.tsx`. Add the import alongside the others:

```tsx
import EssayPage from "./pages/EssayPage";
```

Replace the comment line `{/* /dinner route added in Task 11 */}` (or its equivalent if you renamed) with:

```tsx
<Route path="/dinner" element={<EssayPage slug="dinner" />} />
```

So the final `Routes` block reads:

```tsx
return (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/dinner" element={<EssayPage slug="dinner" />} />
  </Routes>
);
```

- [ ] **Step 2: Run dev server and verify `/dinner` renders**

```bash
npm run dev
```

Open `http://localhost:5173/dinner`. Expected:
- Hero band with eyebrow, title, italic TL;DR, role/dates/reading time
- Markdown body rendered with proper spacing, H2 styling, pull quotes
- Closer band with email CTA, share buttons, back link
- "Back to home" link in hero returns you to `/`

If body looks wrong, the issue is in `EssayMarkdown` component overrides — adjust spacing/colors there.

- [ ] **Step 3: Verify `npm run build` passes**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/App.tsx
git commit -m "Wire /dinner route to EssayPage"
```

---

## Phase 3 — Home-page integration

### Task 15: Add `essayUrl` to CaseStudy type and Dinner entry

**Files:**
- Modify: `src/data/caseStudies.ts`

- [ ] **Step 1: Extend the interface**

Open `src/data/caseStudies.ts`. Edit the `CaseStudy` interface to add an optional `essayUrl`:

```ts
export interface CaseStudy {
  id: string;
  title: string;
  role: string;
  dates: string;
  team?: string;
  heroMetric: string;
  problem: string;
  whatIBuilt: string[];
  whatIBuiltIntro?: string;
  impact: string[];
  lessons: string[];
  links?: { label: string; url: string }[];
  coda?: string;
  essayUrl?: string;
}
```

- [ ] **Step 2: Set `essayUrl` on the dinner entry**

In the same file, add `essayUrl: "/dinner",` to the `dinner` entry object (the one with `id: "dinner"`). Place it just before the closing `}`.

- [ ] **Step 3: Commit**

```bash
git add src/data/caseStudies.ts
git commit -m "Add essayUrl to CaseStudy type; wire Dinner essay link"
```

---

### Task 16: Render "Read the full essay →" link on cards

**Files:**
- Modify: `src/components/sections/CaseStudies.tsx`

- [ ] **Step 1: Add the import**

Open `src/components/sections/CaseStudies.tsx`. At the top, add:

```tsx
import { Link } from "react-router-dom";
```

- [ ] **Step 2: Render the link inside the expanded panel**

Inside the `<AnimatePresence>` block, find the section that conditionally renders `study.links` (the `{study.links && study.links.length > 0 && (` block). Immediately *before* that block, insert:

```tsx
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
```

- [ ] **Step 3: Verify in dev server**

```bash
npm run dev
```

Open `http://localhost:5173`, scroll to the Dinner card, click "Read full case study," confirm the new "Read the full essay →" link appears, and click it. Expected: routes to `/dinner` and renders the essay page.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/CaseStudies.tsx
git commit -m "Show 'Read the full essay' link on case study cards"
```

---

### Task 17: Make Navbar anchor links route-aware

**Files:**
- Modify: `src/components/layout/Navbar.tsx`

When a visitor lands on `/dinner` and clicks "About" in the navbar, the current implementation does `#about` and stays on `/dinner`, scrolling nowhere useful. We need `/#about`.

- [ ] **Step 1: Update the link href values**

Replace the `links` array at the top of `src/components/layout/Navbar.tsx` with:

```tsx
const links = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];
```

- [ ] **Step 2: Verify in dev server**

```bash
npm run dev
```

Open `http://localhost:5173/dinner`, click each navbar link. Expected: navigates to `/` and scrolls to the corresponding section. Then open `http://localhost:5173/`, click each link. Expected: anchor scroll works as before (browser handles `/#about` from `/` as in-page hash navigation).

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Navbar.tsx
git commit -m "Make Navbar anchor links route-aware"
```

---

## Phase 4 — Meta and OG asset

### Task 18: Generate static OG image

**Files:**
- Create: `public/og/dinner.jpg`

This is performed manually outside the agent. Output is committed.

- [ ] **Step 1: Design a 1200×630 OG image**

Use Figma, your design tool of choice, or a screenshot of a Vite-rendered preview frame. Suggested content:
- Background: `#0a0f1a` with the same radial gradients as the site (cyan top-left, violet top-right)
- Eyebrow text: "Case Study · Essay" (cyan, small caps, tracking-wide)
- Title: "Dinner" (gradient cyan → violet, large, ~120px)
- Subtitle: a single short line — e.g. *"Built solo. Wound it down. Here's what it taught me."* (muted)
- Bottom-right corner: `captnseagraves.com` (small, muted)

Match the existing `og-image.jpg` aesthetic so the home OG and essay OG feel like one family.

- [ ] **Step 2: Export as JPEG, max 200 KB**

Save the file to `public/og/dinner.jpg`. Verify it loads:

```bash
ls -lh public/og/dinner.jpg
```

- [ ] **Step 3: Commit**

```bash
git add public/og/dinner.jpg
git commit -m "Add OG image for /dinner essay"
```

---

### Task 19: Verify OG renders on social validators

**Files:**
- None (manual verification post-deploy)

This task only runs after the next deploy is live (Task 22 or your normal Vercel push).

- [ ] **Step 1: Deploy current state to Vercel**

Either push to the connected branch and let Vercel auto-deploy, or run `vercel --prod`.

- [ ] **Step 2: LinkedIn Post Inspector**

Visit `https://www.linkedin.com/post-inspector/` and paste `https://captnseagraves.com/dinner`. Expected: title, description, and OG image render. If LinkedIn caches an old preview, click "Inspect" to force a refetch.

- [ ] **Step 3: X Card Validator**

X retired its public card validator, but you can verify by composing a draft tweet with the URL and confirming the preview card appears below the compose box. Don't post; just confirm preview.

- [ ] **Step 4: Spot-check meta tags**

```bash
curl -s https://captnseagraves.com/dinner | grep -E '(og:|twitter:|<title>)'
```

Expected: title, og:title, og:description, og:image, twitter:image all updated to essay values. (Note: the SPA renders client-side, so this curl will return the home-page meta — that's a known limitation of static SPAs without SSR. LinkedIn and X both execute JavaScript when scraping, so the preview rendering is what matters, not the raw HTML response. If preview rendering is broken on LinkedIn, the fix is to either use SSR or add static `<meta>` tags per route via a build-time script — out of scope for this plan; flag it for follow-up if it bites.)

> **Known follow-up risk:** LinkedIn's scraper has historically been inconsistent about executing JS. If the preview shows the home-page OG when sharing `/dinner`, the fix is to render `index.html` per route at build time (Vite multi-page config) or move to SSR. Out of scope here; document and revisit.

---

## Phase 5 — Distribution copy first drafts

### Task 20: Write distribution copy templates

**Files:**
- Create: `docs/distribution/dinner-launch-copy.md`

These are first drafts. Kevin will edit them on launch day.

- [ ] **Step 1: Create the file**

```bash
mkdir -p docs/distribution
```

Create `docs/distribution/dinner-launch-copy.md` with the following content:

````markdown
# Dinner Launch — Distribution Copy (First Drafts)

> All channels point to **https://captnseagraves.com/dinner**. Edit on launch day; ship.

---

## LinkedIn original post (~300 words)

> Tone: confident operator, candid, lesson-led. Hook = the wind-down decision.
> Posted as a regular text post (not an article). The link goes at the end.

```
Last month I made the call to wind down Dinner — a curated community-dinner
platform I'd been building solo for ~10 months.

iOS, Android, web, an admin tool, a multi-market paid funnel hitting ~$0.50
returned per $1, and a Claude-powered matching system that wrote per-table
rationales for every dinner.

The product worked. The unit economics worked. The market was real.

What didn't work: my life. I started Dinner in Brooklyn but ended up living
mostly in Costa Rica. The model needed me on the ground in a single anchor
city — for community curation, photography, real-world events. I couldn't
deliver that remotely, and forcing it would have been denial dressed up as
resilience.

So I shut it down.

I wrote up the whole arc — what I built, what the AI matching looks like in
production, the paid-funnel learnings, and the call to stop. It's the second
time I've made a clean wind-down call (NiftyApes was the first), and the
playbook is becoming clearer to me.

Currently open to: Head of Product · AI PM · Founding Engineer · Forward
Deployed Engineer.

Full essay: https://captnseagraves.com/dinner
```

---

## X / Twitter thread (5 tweets)

> Tone: builder-to-builder. Wind-down judgment as the hook.

**Tweet 1 (hook)**
```
Last month I wound down Dinner — a curated community-dinner platform I built
solo over ~10 months.

iOS, Android, web, paid funnel, Claude-powered matching in production.

The product worked. My life didn't.

A thread on what I built and why I stopped 🧵
```

**Tweet 2 (range)**
```
Solo: React Native app on iOS + Android, full-stack web app, admin dashboard,
marketing site, multi-market paid acquisition (~$0.50 returned per $1 in
early tests).

722 commits. 14 months. One person.

Building at this surface area is a taste exercise. You cut relentlessly.
```

**Tweet 3 (AI craft)**
```
The matching system runs on Claude.

For every scheduled dinner, an LLM reasons over user affinity preferences,
groups people into tables, and writes a rationale ("Why you're at this
table") that ships into the app.

Prompt caching wired through. Per-signup re-match. Operationally real.
```

**Tweet 4 (wind-down)**
```
Why I stopped: I started Dinner in Brooklyn but my life moved to Costa Rica.

The model needed me on the ground for curation, photography, real-world
events. I couldn't deliver that remotely.

Product-life fit is part of product-market fit. I made the call.
```

**Tweet 5 (link)**
```
I wrote up the whole arc — build, AI matching, paid funnel, the wind-down
decision, what I'm building toward next.

https://captnseagraves.com/dinner
```

---

## Targeted DM template

> Use for past investors, ex-teammates, founders in your graph, hiring managers.
> Edit per recipient — at minimum the first sentence.

```
Hey {{name}} — wrote up Dinner. Built it solo over the last year, decided to
wind it down because of product-life fit. Thought you might find the AI
matching section / wind-down framing / [pick one specific thing] interesting.

https://captnseagraves.com/dinner

Open to whatever's next — Head of Product, AI PM, founding engineer, FDE
roles. Always happy to compare notes.
```

---

## Founder Slack / Discord post

> Use in 1–2 communities of standing. Not drive-by.

```
For anyone who builds and ships solo / has wound down a venture / is curious
about LLM matching in production —

I wrote up Dinner. 10 months solo, three platforms, Claude-powered matching,
paid funnel that worked, and the call to wind it down because my life moved
out of the city the model required.

The wind-down section is the meatiest part. Happy to riff on any of it.

https://captnseagraves.com/dinner
```

---

## Distribution sequence (T = ship day)

| When | What |
|------|------|
| T+0 morning | Publish `/dinner`. Verify OG on LinkedIn + X. |
| T+0 morning | LinkedIn post + X thread live. |
| T+0 evening | 10–25 targeted DMs (drip across 2–3 hours). |
| T+1 | 1–2 founder Slacks/Discords. |
| T+3 | Optional: Mirror or Substack cross-post (canonical link). |
| T+3–5 | Optional: HN submission Tue/Wed AM. |
| T+14–21 | Repurpose one thread (AI matching / paid funnel / wind-down) into a standalone post. |

---

## Anti-patterns

- Don't burn every channel in the same hour.
- Don't post in 10 founder Slacks.
- Don't ask explicitly for engagement.
- Don't paste the essay text anywhere except the canonical URL + cross-post with canonical tag.
- Don't hero-link the essay from the homepage.

---

## DM target list (fill in before launch)

- [ ] Past NiftyApes investors (Coinbase Ventures, Variant, Fintech Collective, Robot, Polygon, LAO, Flamingo, angels)
- [ ] Bankless team
- [ ] Gitcoin alumni
- [ ] Ubitel team / hiring contacts
- [ ] AI PM / FDE role hiring managers in your graph
- [ ] Other founder peers (target 5–10)

Total: aim for 15–25 personal sends.
````

- [ ] **Step 2: Commit**

```bash
git add docs/distribution/dinner-launch-copy.md
git commit -m "Add Dinner launch distribution copy first drafts"
```

---

## Phase 6 — Ship

### Task 21: Final build and dev-server smoke pass

**Files:**
- None

- [ ] **Step 1: Run full build**

```bash
npm run build
```

Expected: TypeScript compile + Vite build succeed with no errors. Note any warnings.

- [ ] **Step 2: Run preview**

```bash
npm run preview
```

Open `http://localhost:4173/`. Click around home, click "Read full case study" on Dinner, click "Read the full essay →", verify the essay page renders end-to-end. Then visit `http://localhost:4173/dinner` directly. Expected: works (proves SPA fallback is in place — confirms `vercel.json` will hold up in production).

- [ ] **Step 3: Mobile check**

In Chrome DevTools, toggle device emulation (iPhone 14). Verify:
- Hero readable, h1 not overflowing
- Body text comfortably wide, not crammed against edges
- Pull quotes render with proper spacing
- Share row buttons wrap reasonably

- [ ] **Step 4: Check console for errors**

DevTools console on each route. Expected: no red errors. Yellow warnings from third-party libs are tolerable.

If anything's off, fix and amend the relevant task's commit before moving on.

---

### Task 22: Deploy to production

**Files:**
- None

- [ ] **Step 1: Push or `vercel --prod`**

```bash
git push origin main
```

Wait for Vercel auto-deploy. Or:

```bash
vercel --prod
```

- [ ] **Step 2: Smoke-test the live URL**

Open `https://captnseagraves.com/dinner` directly. Expected: renders. Hard-refresh (Cmd+Shift+R) to bust any CDN cache.

- [ ] **Step 3: Run Task 19 (OG validators)** — see that task above.

---

### Task 23: Distribution day

This is execution against `docs/distribution/dinner-launch-copy.md`. Not a code change.

- [ ] **Step 1: Pick a Tuesday or Wednesday morning**

These are the highest-engagement days for LinkedIn and X. Mornings Pacific = mid-day Eastern, the sweet spot for a US operator audience.

- [ ] **Step 2: Execute T+0 actions in order**

1. Verify the URL is live + OG renders.
2. Post to LinkedIn (paste copy from the launch-copy doc; edit live).
3. Post the X thread.
4. Drip 10–25 DMs across the afternoon/evening.

- [ ] **Step 3: Execute T+1 through T+5 per the schedule in launch-copy.md**

- [ ] **Step 4: Calendar a T+14 reminder to repurpose one thread**

---

## Self-review notes (already addressed by the plan author)

- **Spec coverage:** every section of `docs/superpowers/specs/2026-05-06-dinner-showcase-design.md` maps to one or more tasks. The eight items in spec §6 (deferred to this plan) are all resolved here: markdown renderer (Task 10), routing (Tasks 3 + 14), pull-quote component (Task 8), OG image (Task 18 — chose static over Vercel OG function for scope), hero image (deliberately omitted as optional, can be added by editing `EssayHero` later), inline screenshots (handled by markdown `![](path)` syntax + `EssayMarkdown` `img` override — Kevin includes them in the markdown), distribution copy (Task 20), reading-time util (Task 5).
- **Placeholder scan:** intentional bracketed placeholders only inside the LLM prompt code block in spec §3.1 — those are for Kevin at prompt-paste time, not unresolved plan TODOs. Otherwise all steps have concrete code.
- **Type consistency:** `Essay` interface in `src/data/essays.ts` is referenced consistently in `EssayHero`, `EssayPage`, `loadEssay`. `CaseStudy.essayUrl` is the new field; usage in `CaseStudies.tsx` matches.

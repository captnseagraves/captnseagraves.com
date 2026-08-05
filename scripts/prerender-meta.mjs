// Post-build: write static HTML per /writing route with page-specific meta,
// so link scrapers (LinkedIn, Twitter, Slack) see essay titles/descriptions
// instead of the homepage's. Vercel serves these files before the SPA rewrite.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const essays = JSON.parse(readFileSync(join(root, "src/data/essays.json"), "utf8"));
const baseHtml = readFileSync(join(root, "dist/index.html"), "utf8");

const SITE = "https://www.captnseagraves.com";
const HOME_TITLE =
  "Kevin Seagraves — Engineer who can pitch. Product thinker who can code.";
const HOME_DESCRIPTIONS = [
  "Kevin Seagraves — founder-engineer with 8 years of shipping from scratch. $4.2M raised, $60M+ distributed, protocols on Ethereum mainnet, and AI agents in production.",
  "8 years of shipping from scratch — $4.2M raised, $60M+ distributed, protocols on Ethereum mainnet, and AI agents in production.",
];

const esc = (s) => s.replaceAll("&", "&amp;").replaceAll('"', "&quot;");

function pageHtml({ title, description, url, ogType, ogImage }) {
  let html = baseHtml;
  html = html.replaceAll(HOME_TITLE, esc(title));
  for (const d of HOME_DESCRIPTIONS) html = html.replaceAll(d, esc(description));
  html = html.replaceAll(`href="${SITE}/"`, `href="${url}"`);
  html = html.replaceAll(`content="${SITE}/"`, `content="${url}"`);
  html = html.replace('property="og:type" content="website"', `property="og:type" content="${ogType}"`);
  if (ogImage) {
    const abs = ogImage.startsWith("http") ? ogImage : `${SITE}${ogImage}`;
    html = html.replaceAll(`${SITE}/og-image.jpg`, abs);
  }
  return html;
}

function writePage(relDir, page) {
  const dir = join(root, "dist", relDir);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), pageHtml(page));
}

writePage("writing", {
  title: "Writing — Kevin Seagraves",
  description:
    "Essays and weekly notes on building products, AI engineering, and figuring out what to work on.",
  url: `${SITE}/writing`,
  ogType: "website",
});

for (const essay of essays) {
  writePage(`writing/${essay.slug}`, {
    title: `${essay.title} — Kevin Seagraves`,
    description: essay.metaDescription,
    url: `${SITE}/writing/${essay.slug}`,
    ogType: "article",
    ogImage: essay.ogImage,
  });
}

console.log(`prerender-meta: wrote /writing + ${essays.length} essay page(s)`);

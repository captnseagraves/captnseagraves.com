const essayModules = import.meta.glob("/content/essays/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export function loadEssayBody(slug: string): string | null {
  const key = `/content/essays/${slug}.md`;
  return essayModules[key] ?? null;
}

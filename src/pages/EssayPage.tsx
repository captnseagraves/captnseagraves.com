import { useEffect } from "react";
import { useParams } from "react-router-dom";
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
  slug?: string;
  backTo?: string;
  backLabel?: string;
}

export default function EssayPage({ slug: slugProp, backTo, backLabel }: Props) {
  const params = useParams<{ slug: string }>();
  const slug = slugProp ?? params.slug ?? "";
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
        ? `${window.location.origin}${window.location.pathname}`
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
          backTo={backTo}
          backLabel={backLabel}
        />
        {essay.heroImage && (
          <img
            src={essay.heroImage}
            alt=""
            className="mt-10 w-full rounded-xl border border-[var(--color-border)]"
          />
        )}
        <EssayMarkdown body={body} />
        <EssayCloser shareTitle={`${essay.title} — Kevin Seagraves`} />
      </main>
      <Footer />
    </>
  );
}

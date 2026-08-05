import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useDocumentMeta } from "../lib/useDocumentMeta";

export default function SubscribedPage() {
  useDocumentMeta({
    title: "Subscribed — Kevin Seagraves",
    description: "Subscription confirmed.",
  });
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="text-3xl font-semibold">You're in. 🎉</h1>
        <p className="mt-4 text-[var(--color-text-muted)]">
          New essays will land in your inbox — the opening in the email, the
          rest on the site. Unsubscribe anytime with one click.
        </p>
        <Link
          to="/writing"
          className="mt-8 inline-flex items-center gap-2 text-sm text-[var(--color-accent)] hover:underline"
        >
          <span>Read the essays so far</span>
          <span aria-hidden>→</span>
        </Link>
      </main>
      <Footer />
    </>
  );
}

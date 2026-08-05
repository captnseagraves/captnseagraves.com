import { Routes, Route, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import CaseStudies from "./components/sections/CaseStudies";
import Skills from "./components/sections/Skills";
import Recognition from "./components/sections/Recognition";
import Contact from "./components/sections/Contact";
import EssayPage from "./pages/EssayPage";
import WritingPage from "./pages/WritingPage";
import SubscribedPage from "./pages/SubscribedPage";
import NewsletterSignup from "./components/NewsletterSignup";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section className="border-y border-[var(--color-border)] bg-[var(--color-accent)]/[0.03] px-6 py-14">
          <NewsletterSignup />
        </section>
        <About />
        <CaseStudies />
        <Recognition />
        <Skills />
        <Contact />
        <section className="mx-auto max-w-4xl px-6 pb-20">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-accent)]/[0.03] p-6">
            <NewsletterSignup compact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <Analytics />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/subscribed" element={<SubscribedPage />} />
        <Route
          path="/writing/:slug"
          element={<EssayPage backTo="/writing" backLabel="Back to writing" />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

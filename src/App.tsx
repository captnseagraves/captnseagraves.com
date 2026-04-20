import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import CaseStudies from "./components/sections/CaseStudies";
import Skills from "./components/sections/Skills";
import Recognition from "./components/sections/Recognition";
import Contact from "./components/sections/Contact";

export default function App() {
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

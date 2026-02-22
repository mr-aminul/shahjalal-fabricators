import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <>
      <a
        href="#hero"
        className="skip-link"
      >
        Skip to main content
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;

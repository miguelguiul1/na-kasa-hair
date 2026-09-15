import { Header } from "@/components/site/Header";
import { MobileWhatsappBar } from "@/components/site/MobileWhatsappBar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Gallery } from "@/components/site/Gallery";
import { InstagramBlock } from "@/components/site/InstagramBlock";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

function App() {
  return (
    <div className="min-h-screen bg-cream-base font-sans text-navy-primary">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-pink-deep focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <InstagramBlock />
        <Contact />
      </main>
      <Footer />
      <MobileWhatsappBar />
    </div>
  );
}

export default App;

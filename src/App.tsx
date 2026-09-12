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
      <Header />
      <main>
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

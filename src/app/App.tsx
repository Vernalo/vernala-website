import { useRef } from "react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Translator } from "@/components/translator";
import { LanguagesSection } from "@/components/languages-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

function App() {
  const contactRef = useRef<HTMLElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Header onContactClick={scrollToContact} />
      <HeroSection />
      <Translator />
      <LanguagesSection />
      <ContactSection ref={contactRef} />
      <Footer />
      <Toaster />
    </main>
  );
}

export default App;

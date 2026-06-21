import { LanguageProvider } from "./context/LanguageContext";
import HeroSection from "./sections/HeroSection";
import MarqueeSection from "./sections/MarqueeSection";
import AboutSection from "./sections/AboutSection";
import MenuSection from "./sections/MenuSection";
import OriginsSection from "./sections/OriginsSection";
import EventsSection from "./sections/EventsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

function App() {
  return (
    <LanguageProvider>
      <main style={{ overflowX: "clip" }}>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <MenuSection />
        <OriginsSection />
        <EventsSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
    </LanguageProvider>
  );
}

export default App;

import React from 'react';
import { LanguageProvider } from './LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { OriginsSection } from './components/OriginsSection';
import { EventsSection } from './components/EventsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-raw-paper text-ink-navy selection:bg-rust-copper selection:text-raw-paper">
        {/* Floating Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="w-full">
          {/* 1. Hero Section */}
          <HeroSection />

          {/* 2. Marquee Section */}
          <MarqueeSection />

          {/* 3. About Section */}
          <AboutSection />

          {/* 4. Menu Section */}
          <MenuSection />

          {/* 5. Origins Section */}
          <OriginsSection />

          {/* 6. Events Section */}
          <EventsSection />

          {/* 7. Testimonials Section */}
          <TestimonialsSection />

          {/* 8. Contact Section */}
          <ContactSection />
        </main>

        {/* 9. Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;

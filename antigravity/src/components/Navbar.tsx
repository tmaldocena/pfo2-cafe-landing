import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.history, href: "#history" },
    { label: t.nav.coffee, href: "#coffee" },
    { label: t.nav.origins, href: "#origins" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-raw-paper/90 backdrop-blur-md border-b border-ink-navy/10 py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <div className="flex items-center gap-3">
          <a
            href="../"
            className="text-xs uppercase tracking-widest font-medium
              text-ink-navy/40 hover:text-rust-copper transition-colors duration-200"
          >
            ← Hub
          </a>
          <span className="text-ink-navy/15">|</span>
          <a
            href="#"
            className="text-2xl font-bold tracking-wider text-ink-navy transition-transform duration-300 hover:scale-105"
          >
            CAFÉ DE LAS OLAS
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-sm font-medium tracking-wide uppercase">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-ink-navy/80 hover:text-ink-navy transition-colors duration-200 py-2 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-rust-copper transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Bilingual Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center bg-ink-navy/5 border border-ink-navy/20 rounded-full p-1 cursor-pointer select-none transition-all duration-300 hover:bg-ink-navy/10"
            aria-label="Toggle language"
          >
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase transition-all duration-300 ${
                language === 'es'
                  ? 'bg-rust-copper text-raw-paper shadow-sm'
                  : 'text-ink-navy/60'
              }`}
            >
              ES
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase transition-all duration-300 ${
                language === 'en'
                  ? 'bg-rust-copper text-raw-paper shadow-sm'
                  : 'text-ink-navy/60'
              }`}
            >
              EN
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Bilingual Switcher on Mobile (compact) */}
          <button
            onClick={toggleLanguage}
            className="flex items-center bg-ink-navy/5 border border-ink-navy/20 rounded-full p-0.5 cursor-pointer text-xs font-bold"
            aria-label="Toggle language"
          >
            <span className={`px-2 py-0.5 rounded-full ${language === 'es' ? 'bg-rust-copper text-raw-paper' : 'text-ink-navy/60'}`}>ES</span>
            <span className={`px-2 py-0.5 rounded-full ${language === 'en' ? 'bg-rust-copper text-raw-paper' : 'text-ink-navy/60'}`}>EN</span>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-ink-navy hover:text-rust-copper transition-colors focus:outline-none"
            aria-label="Open menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-raw-paper border-b border-ink-navy/10 py-6 px-6 shadow-xl flex flex-col space-y-4 animate-fadeIn">
          <ul className="flex flex-col space-y-4 text-lg font-medium tracking-wide uppercase text-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-ink-navy hover:text-rust-copper transition-colors py-2 border-b border-ink-navy/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

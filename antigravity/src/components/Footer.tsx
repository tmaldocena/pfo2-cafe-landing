import React from 'react';
import { useLanguage } from '../LanguageContext';
import { WaveDivider } from './WaveDivider';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.history, href: "#history" },
    { label: t.nav.coffee, href: "#coffee" },
    { label: t.nav.origins, href: "#origins" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <div className="relative">
      {/* Wave transition from Light (Contact) to Dark (Footer) */}
      <WaveDivider fill="fill-ink-navy" className="absolute top-0 left-0 w-full z-10" />

      <footer className="relative bg-ink-navy text-raw-paper pt-24 pb-12 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col space-y-12 md:space-y-16">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            
            {/* Wordmark and Tagline */}
            <div className="md:col-span-6 flex flex-col space-y-4">
              <h3 className="text-3xl font-extrabold tracking-wider uppercase text-raw-paper">
                CAFÉ DE LAS OLAS
              </h3>
              <p className="text-raw-paper/70 font-light max-w-sm italic">
                “{t.footer.tagline}”
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 flex flex-col space-y-4">
              <h4 className="text-xs font-bold tracking-widest text-rope-natural uppercase">
                {t.nav.contact === 'Contacto' ? 'Navegación' : 'Navigation'}
              </h4>
              <ul className="flex flex-col space-y-2 text-sm font-semibold tracking-wide uppercase">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-raw-paper/60 hover:text-rust-copper transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media & Contact */}
            <div className="md:col-span-3 flex flex-col space-y-4">
              <h4 className="text-xs font-bold tracking-widest text-rope-natural uppercase">
                {t.nav.contact === 'Contacto' ? 'Redes' : 'Socials'}
              </h4>
              
              {/* Custom Inline SVG icons for safety & zero external logo dependency issues */}
              <div className="flex space-x-4">
                
                {/* Instagram Logo */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-raw-paper/10 hover:border-rust-copper hover:text-rust-copper transition-all duration-300 active:scale-90"
                  aria-label="Instagram"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* Facebook Logo */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-raw-paper/10 hover:border-rust-copper hover:text-rust-copper transition-all duration-300 active:scale-90"
                  aria-label="Facebook"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>

                {/* Compass/Nautical Theme Icon */}
                <a
                  href="#"
                  className="p-2.5 rounded-full border border-raw-paper/10 hover:border-rust-copper hover:text-rust-copper transition-all duration-300 active:scale-90"
                  aria-label="Nautical Brand seal"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="2" x2="12" y2="22"></line>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M16.24 7.76l-8.48 8.48M7.76 7.76l8.48 8.48"></path>
                  </svg>
                </a>

              </div>
            </div>

          </div>

          {/* Bottom Copyright & Credit Block */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-raw-paper/10 text-xs tracking-wider font-semibold text-rope-natural/70 space-y-4 md:space-y-0 text-center md:text-left">
            <div>
              <p>{t.footer.copyright}</p>
            </div>
            <div>
              <p className="uppercase text-rust-copper">{t.footer.credit}</p>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

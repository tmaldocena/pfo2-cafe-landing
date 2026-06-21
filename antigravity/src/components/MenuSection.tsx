import React from 'react';
import { useLanguage } from '../LanguageContext';
import { FadeIn } from './FadeIn';
import { WaveDivider } from './WaveDivider';
import { Coffee, Compass, Hourglass, Landmark, Flame } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const { t } = useLanguage();

  // Helper to render matching icon for each menu item
  const getIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Compass className="w-6 h-6 stroke-[1.5]" />;
      case '02':
        return <Coffee className="w-6 h-6 stroke-[1.5]" />;
      case '03':
        return <Hourglass className="w-6 h-6 stroke-[1.5]" />;
      case '04':
        return <Landmark className="w-6 h-6 stroke-[1.5]" />;
      case '05':
        return <Flame className="w-6 h-6 stroke-[1.5]" />;
      default:
        return <Coffee className="w-6 h-6 stroke-[1.5]" />;
    }
  };

  return (
    <div className="relative">
      {/* Wave transition from Light (About) to Dark (Menu) */}
      <WaveDivider fill="fill-ink-navy" className="absolute top-0 left-0 w-full z-10" />

      <section
        id="coffee"
        className="relative min-h-screen bg-ink-navy text-raw-paper pt-32 pb-24 md:pt-40 md:pb-32 px-6 overflow-hidden"
      >
        <div className="max-w-4xl mx-auto flex flex-col space-y-12 md:space-y-16">
          
          {/* Header */}
          <FadeIn y={25} className="text-center">
            <h2 className="wave-heading dark text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase">
              {t.menu.heading}
            </h2>
            <div className="w-20 h-[3px] bg-rust-copper mx-auto mt-4 rounded-full" />
          </FadeIn>

          {/* Numbered List */}
          <div className="flex flex-col border-t border-raw-paper/15">
            {t.menu.items.map((item, idx) => (
              <FadeIn
                key={item.number}
                delay={idx * 0.1}
                y={20}
                className="group border-b border-raw-paper/15 py-8 md:py-10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between items-start md:space-x-8 space-y-4 md:space-y-0 group-hover:translate-x-2 transition-transform duration-300">
                  {/* Left: Number and Title */}
                  <div className="flex items-start space-x-6 md:w-2/5">
                    <span className="text-3xl md:text-4xl font-extrabold text-rope-natural/50 group-hover:text-rust-copper transition-colors duration-300 leading-none">
                      {item.number}
                    </span>
                    <div className="flex flex-col space-y-1">
                      <h3 className="text-xl md:text-2xl font-bold tracking-wide uppercase group-hover:text-rust-copper transition-colors duration-300 flex items-center gap-2">
                        {item.name}
                      </h3>
                      <span className="text-xs tracking-wider uppercase text-rope-natural/70 font-semibold md:hidden flex items-center gap-1.5">
                        {getIcon(item.number)}
                      </span>
                    </div>
                  </div>

                  {/* Middle/Right: Description */}
                  <div className="md:w-1/2">
                    <p className="text-base sm:text-lg text-raw-paper/80 font-light leading-relaxed group-hover:text-raw-paper transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>

                  {/* Far Right: Icon (Desktop only) */}
                  <div className="hidden md:flex items-center justify-end w-12 text-rope-natural/40 group-hover:text-rust-copper group-hover:rotate-12 transition-all duration-300">
                    {getIcon(item.number)}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

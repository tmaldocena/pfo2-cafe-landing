import React from 'react';
import { useLanguage } from '../LanguageContext';
import { AnimatedText } from './AnimatedText';
import { PrimaryButton } from './PrimaryButton';
import { FadeIn } from './FadeIn';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="history"
      className="relative min-h-screen bg-raw-paper flex flex-col justify-center items-center py-24 md:py-32 px-6 overflow-hidden border-b border-ink-navy/5"
    >
      {/* Decorative Nautical Backdrop (Compass Rose SVG) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <svg
          className="w-[300px] sm:w-[500px] md:w-[600px] aspect-square text-ink-navy opacity-[0.04] transition-transform duration-[10s] hover:rotate-12"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          {/* Compass Rings */}
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="40" strokeDasharray="1 1" />
          <circle cx="50" cy="50" r="15" />
          <circle cx="50" cy="50" r="2" fill="currentColor" />
          
          {/* Compass points */}
          <path d="M50,5 L50,95 M5,50 L95,50" />
          <path d="M50,5 L53,35 L50,45 L47,35 Z" fill="currentColor" />
          <path d="M50,95 L53,65 L50,55 L47,65 Z" fill="currentColor" />
          <path d="M95,50 L65,53 L55,50 L65,47 Z" fill="currentColor" />
          <path d="M5,50 L35,53 L45,50 L35,47 Z" fill="currentColor" />

          {/* Diagonals */}
          <path d="M18.2,18.2 L81.8,81.8 M18.2,81.8 L81.8,18.2" strokeWidth="0.3" />
          
          {/* Decorative cardinal labels */}
          <text x="48" y="12" fontSize="5" className="font-semibold fill-current">N</text>
          <text x="48" y="93" fontSize="5" className="font-semibold fill-current">S</text>
          <text x="89" y="52" fontSize="5" className="font-semibold fill-current">E</text>
          <text x="7" y="52" fontSize="5" className="font-semibold fill-current">W</text>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center space-y-8 md:space-y-12">
        <FadeIn y={25}>
          <h2 className="wave-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase">
            {t.about.heading}
          </h2>
        </FadeIn>

        {/* Character-by-character scroll-reveal paragraph */}
        <div className="w-full max-w-3xl text-2xl sm:text-3xl md:text-4xl text-ink-navy/90 leading-relaxed font-light tracking-wide text-left md:text-center">
          <AnimatedText text={t.about.text} className="justify-start md:justify-center" />
        </div>

        <FadeIn delay={0.3} y={20}>
          <PrimaryButton href="#coffee">{t.about.cta}</PrimaryButton>
        </FadeIn>
      </div>
    </section>
  );
};

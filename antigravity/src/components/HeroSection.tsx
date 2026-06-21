import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { PrimaryButton } from './PrimaryButton';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  // Scroll tracking across the 100vh height of the Hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Receding tide overlay band translation: covers ~70% of the screen at start (translateY = 0)
  // and recedes completely off-screen at end of scroll (translateY = 100%)
  const tideY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Parallax on the heading and subtext: moves slower than the scroll rate
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Parallax on the illustration: moves slightly upwards or slower to create depth
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen w-full bg-raw-paper overflow-hidden flex flex-col justify-between"
    >
      {/* Top Half: Brand Typography & Subtext (Always above waterline at start) */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-20 w-full max-w-5xl mx-auto px-6 pt-32 md:pt-36 flex flex-col items-center text-center pointer-events-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="wave-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase select-none pb-2 leading-none"
        >
          Café de las Olas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-ink-navy/80 text-lg sm:text-xl md:text-2xl font-light tracking-wide max-w-xl sm:max-w-2xl mt-4 lowercase italic text-wrap-balance"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          “{t.hero.subtext}”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <PrimaryButton href="#menu">{t.hero.cta}</PrimaryButton>
        </motion.div>
      </motion.div>

      {/* Sailor Illustration (Centerpiece) */}
      <motion.div
        style={{ y: imageY }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[280px] sm:w-[400px] lg:w-[450px] aspect-square z-10 pointer-events-none flex items-center justify-center"
      >
        <img
          src="https://i.imgur.com/2SUTnwn.png"
          alt="Café de las Olas Sailor Captain Illustration"
          className="w-full h-full object-contain filter drop-shadow-xl"
        />
      </motion.div>

      {/* Receding Tide Band Overlay */}
      {/* Covered initially at ~70% height, translating down as we scroll */}
      <motion.div
        style={{ y: tideY }}
        className="absolute bottom-0 left-0 right-0 h-[20vh] z-30 pointer-events-none"
      >
        {/* Wave silhouette SVG path sitting at the boundary of the band */}
        <div className="absolute top-0 left-0 w-full -translate-y-[98%] leading-[0]">
          <svg
            viewBox="0 0 1440 74"
            className="w-full h-[30px] sm:h-[45px] md:h-[60px] fill-ink-navy"
            preserveAspectRatio="none"
          >
            <path d="M0,32 C240,70 480,70 720,32 C960,-6 1200,-6 1440,32 L1440,74 L0,74 Z" />
          </svg>
        </div>

        {/* Solid navy water body */}
        <div className="w-full h-full bg-ink-navy border-t border-ink-navy flex items-end justify-center pb-8">
          {/* Subtle design element: small anchor/compass outline */}
          <div className="opacity-15 text-raw-paper flex flex-col items-center">
            <svg
              className="w-8 h-8 animate-pulse"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21V9m0 0a3 3 0 100-6 3 3 0 000 6z"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

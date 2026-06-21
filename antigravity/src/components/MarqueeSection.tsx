import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll relative to this section's position
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Dual marquee scrolling ranges:
  // Row 1 slides left-to-right (lower negative value to higher)
  const row1X = useTransform(scrollYProgress, [0, 1], ['-15%', '5%']);
  // Row 2 slides right-to-left (higher positive value to lower)
  const row2X = useTransform(scrollYProgress, [0, 1], ['5%', '-15%']);

  const row1Images = [
    { src: '/images/cafe_interior.png', alt: 'Café interior design' },
    { src: '/images/roasting_drum.png', alt: 'Coffee roasting drum' },
    { src: '/images/pour_over.png', alt: 'Barista preparing pour over' },
    { src: '/images/latte_art.png', alt: 'Latte art close up' },
    { src: '/images/cafe_interior.png', alt: 'Café interior design duplicate' },
    { src: '/images/roasting_drum.png', alt: 'Coffee roasting drum duplicate' },
    { src: '/images/pour_over.png', alt: 'Barista preparing pour over duplicate' },
  ];

  const row2Images = [
    { src: '/images/coffee_bags.png', alt: 'Specialty coffee bags' },
    { src: '/images/green_beans.png', alt: 'Macro green coffee beans' },
    { src: '/images/latte_art.png', alt: 'Latte art pouring' },
    { src: '/images/pour_over.png', alt: 'Steaming drip coffee' },
    { src: '/images/coffee_bags.png', alt: 'Specialty coffee bags duplicate' },
    { src: '/images/green_beans.png', alt: 'Macro green coffee beans duplicate' },
    { src: '/images/latte_art.png', alt: 'Latte art pouring duplicate' },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-raw-paper overflow-hidden flex flex-col space-y-6 md:space-y-10 border-b border-ink-navy/5"
    >
      {/* Row 1 (Left to Right) */}
      <div className="w-full flex overflow-hidden">
        <motion.div
          style={{ x: row1X, willChange: 'transform' }}
          className="flex whitespace-nowrap"
        >
          {row1Images.map((img, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex-shrink-0 w-[240px] sm:w-[360px] aspect-[4/3] mx-3 overflow-hidden rounded-xl border border-ink-navy/10 shadow-md group"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 (Right to Left) */}
      <div className="w-full flex overflow-hidden">
        <motion.div
          style={{ x: row2X, willChange: 'transform' }}
          className="flex whitespace-nowrap"
        >
          {row2Images.map((img, idx) => (
            <div
              key={`row2-${idx}`}
              className="flex-shrink-0 w-[240px] sm:w-[360px] aspect-[4/3] mx-3 overflow-hidden rounded-xl border border-ink-navy/10 shadow-md group"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

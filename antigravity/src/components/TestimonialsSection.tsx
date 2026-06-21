import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { FadeIn } from './FadeIn';
import { WaveDivider } from './WaveDivider';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const testimonials = t.testimonials.items;

  // Slide animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay functionality
  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [activeIndex]);

  return (
    <div className="relative">
      {/* Wave transition from Dark (Events) to Light (Testimonials) */}
      <WaveDivider fill="fill-raw-paper" flipped={true} className="absolute top-0 left-0 w-full z-10" />

      <section
        id="testimonials"
        className="relative bg-raw-paper text-ink-navy pt-32 pb-24 md:pt-40 md:pb-32 px-6 overflow-hidden border-b border-ink-navy/5"
        onMouseEnter={stopTimer}
        onMouseLeave={startTimer}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-12 md:space-y-16">
          
          {/* Header */}
          <FadeIn y={25} className="text-center">
            <span className="text-xs font-bold tracking-widest text-rust-copper uppercase block mb-2">
              COMMUNITY
            </span>
            <h2 className="wave-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase">
              {t.testimonials.heading}
            </h2>
            <div className="w-20 h-[3px] bg-rust-copper mx-auto mt-4 rounded-full" />
          </FadeIn>

          {/* Testimonial Slider Area */}
          <div className="relative w-full min-h-[250px] md:min-h-[220px] flex items-center justify-center">
            
            {/* Quote Icon Background */}
            <div className="absolute top-0 left-0 text-toasted-wood/5 pointer-events-none select-none">
              <Quote size={120} className="fill-current" />
            </div>

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
                className="w-full text-center flex flex-col items-center space-y-6 px-6 md:px-12"
              >
                {/* Quote Text */}
                <p className="text-xl sm:text-2xl md:text-3xl font-light italic leading-relaxed text-ink-navy/90 max-w-2xl text-wrap-pretty" style={{ textWrap: 'pretty' } as React.CSSProperties}>
                  “{testimonials[activeIndex].quote}”
                </p>

                {/* Author Info */}
                <div className="flex flex-col items-center space-y-1">
                  <span className="text-lg font-bold uppercase tracking-wide text-rust-copper">
                    {testimonials[activeIndex].name}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-toasted-wood/80">
                    {testimonials[activeIndex].role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <FadeIn delay={0.2} y={15} className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-6">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="p-3 rounded-full border border-toasted-wood/20 hover:border-rust-copper hover:bg-rust-copper/5 text-ink-navy hover:text-rust-copper transition-all duration-300 active:scale-90 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dot Indicators */}
              <div className="flex space-x-3">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > activeIndex ? 1 : -1);
                      setActiveIndex(idx);
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeIndex
                        ? 'w-8 bg-rust-copper'
                        : 'w-2.5 bg-toasted-wood/30 hover:bg-toasted-wood/50'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="p-3 rounded-full border border-toasted-wood/20 hover:border-rust-copper hover:bg-rust-copper/5 text-ink-navy hover:text-rust-copper transition-all duration-300 active:scale-90 cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </FadeIn>

        </div>
      </section>
    </div>
  );
};

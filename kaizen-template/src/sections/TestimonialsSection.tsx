import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import FadeIn from "../components/FadeIn";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/content";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function TestimonialsSection() {
  const { lang } = useLanguage();
  const items = content.testimonials.items;
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = items.length;

  const goTo = (i: number) => {
    setIndex(((i % total) + total) % total);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const restartAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 6000);
  };

  useEffect(() => {
    restartAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleManualNav = (action: () => void) => {
    action();
    restartAutoplay();
  };

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 80;
    if (info.offset.x < -threshold) {
      handleManualNav(next);
    } else if (info.offset.x > threshold) {
      handleManualNav(prev);
    }
  };

  const current = items[index];

  return (
    <section
      id="testimonials"
      className="bg-ink px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20"
          style={{ fontSize: "clamp(2.5rem, 8vw, 100px)" }}
        >
          {content.testimonials.heading[lang]}
        </h2>
      </FadeIn>

      <FadeIn delay={0.2} y={30}>
        <div className="max-w-4xl mx-auto relative">
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Prev arrow */}
            <button
              onClick={() => handleManualNav(prev)}
              aria-label={lang === "en" ? "Previous testimonial" : "Testimonio anterior"}
              className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-cream/30
                flex items-center justify-center text-cream
                hover:border-terracotta hover:text-terracotta transition-colors duration-200"
            >
              <ArrowLeft size={20} />
            </button>

            {/* Card */}
            <div className="flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={handleDragEnd}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="rounded-[32px] sm:rounded-[40px] border-2 border-brown bg-ink
                    p-8 sm:p-10 md:p-12 flex flex-col gap-6 cursor-grab active:cursor-grabbing"
                >
                  <Quote className="text-terracotta" size={36} />
                  <p
                    className="text-cream font-light italic leading-relaxed"
                    style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
                  >
                    {current.quote[lang]}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <div
                      className="w-12 h-12 rounded-full bg-brown flex items-center justify-center
                        text-cream font-medium text-sm flex-shrink-0"
                    >
                      {getInitials(current.name)}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-cream font-medium uppercase tracking-wide text-sm">
                        {current.name}
                      </span>
                      <span className="text-terracotta font-light text-xs">
                        {current.role[lang]}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next arrow */}
            <button
              onClick={() => handleManualNav(next)}
              aria-label={lang === "en" ? "Next testimonial" : "Siguiente testimonio"}
              className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-cream/30
                flex items-center justify-center text-cream
                hover:border-terracotta hover:text-terracotta transition-colors duration-200"
            >
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => handleManualNav(() => goTo(i))}
                aria-label={`${lang === "en" ? "Go to testimonial" : "Ir al testimonio"} ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-terracotta" : "w-2 bg-cream/30"
                }`}
              />
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

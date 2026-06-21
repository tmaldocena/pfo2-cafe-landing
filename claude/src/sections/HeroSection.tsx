import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Anchor } from "lucide-react";
import FadeIn from "../components/FadeIn";
import FitHeading from "../components/FitHeading";
import PrimaryButton from "../components/PrimaryButton";
import LanguageToggle from "../components/LanguageToggle";
import WaveDivider from "../components/WaveDivider";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/content";
import sailorPortrait from "../assets/sailor-portrait.png";

export default function HeroSection() {
  const { lang } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Band height at rest is expressed in vh (not %) so it stays proportional
  // to the sailor illustration, which is also sized in vh — this keeps the
  // band-to-portrait ratio consistent across breakpoints instead of drifting
  // with viewport aspect ratio.
  const bandHeight = useTransform(scrollYProgress, [0, 1], ["12vh", "0vh"]);
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const navLinks = [
    { key: "historia", href: "#historia" },
    { key: "cafe", href: "#cafe" },
    { key: "origenes", href: "#origenes" },
    { key: "contacto", href: "#contacto" },
  ] as const;

  return (
    <section
      ref={heroRef}
      className="h-screen relative overflow-hidden bg-paper"
      style={{ overflowX: "clip" }}
    >
      <FadeIn delay={0} y={-20} as="nav" className="relative z-30">
        <div className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          <div className="flex items-center gap-3 text-navy">
            <a
              href="../"
              className="text-xs uppercase tracking-widest font-medium
                text-navy/50 hover:text-rust transition-colors duration-200"
            >
              ← Hub
            </a>
            <span className="text-navy/20">|</span>
            <Anchor size={20} />
          </div>
          <div className="hidden sm:flex items-center gap-6 md:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-navy font-medium uppercase tracking-wider
                  text-sm md:text-base
                  hover:text-rust transition-colors duration-200"
              >
                {content.nav[link.key][lang]}
              </a>
            ))}
          </div>
          <LanguageToggle light={false} />
        </div>
      </FadeIn>

      <motion.div
        style={{ y: headingY }}
        className="relative z-30 flex flex-col items-center text-center px-5 pt-16 sm:pt-20 md:pt-24"
      >
        <FadeIn delay={0.15} y={30} className="w-full max-w-3xl">
          <FitHeading text="Café de las Olas" />
        </FadeIn>

        <FadeIn delay={0.35} y={20}>
          <p
            className="text-navy font-light uppercase tracking-wide leading-snug mt-4
              max-w-[280px] sm:max-w-[420px]"
            style={{ fontSize: "clamp(0.7rem, 1.4vw, 1rem)" }}
          >
            {content.hero.subtext[lang]}
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="mt-6">
          <PrimaryButton label={content.hero.cta[lang]} />
        </FadeIn>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center z-10 h-full">
        <img
          src={sailorPortrait}
          alt="Capitán marinero ilustrado sosteniendo una taza de café humeante"
          className="select-none pointer-events-none"
          style={{ height: "52vh", width: "auto" }}
          draggable={false}
        />
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 bg-navy"
        style={{ height: bandHeight }}
      >
        <div className="absolute -top-px left-0 right-0 h-10 sm:h-14 -translate-y-full">
          <WaveDivider color="#1B2A4A" />
        </div>
      </motion.div>
    </section>
  );
}

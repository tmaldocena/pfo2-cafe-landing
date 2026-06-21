import FadeIn from "../components/FadeIn";
import Magnet from "../components/Magnet";
import ContactButton from "../components/ContactButton";
import FitHeading from "../components/FitHeading";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/content";
import shibaPortrait from "../assets/shiba-portrait.png";
import LanguageToggle from "../components/LanguageToggle";

export default function HeroSection() {
  const { lang } = useLanguage();

  const navLinks = [
    { key: "about", href: "#about" },
    { key: "price", href: "#services" },
    { key: "projects", href: "#projects" },
    { key: "contact", href: "#contact" },
  ] as const;

  return (
    <section
      className="h-screen flex flex-col relative"
      style={{ overflowX: "clip" }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav">
        <div className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-cream font-medium uppercase tracking-wider
                text-sm md:text-lg lg:text-[1.4rem]
                hover:opacity-70 transition-opacity duration-200"
            >
              {content.nav[link.key][lang]}
            </a>
          ))}
          <LanguageToggle />
        </div>
      </FadeIn>

      {/* Hero heading */}
      <div className="overflow-hidden w-full px-2 sm:px-3">
        <FadeIn delay={0.15} y={40}>
          <FitHeading text="We Are Kaizen" />
        </FadeIn>
      </div>

      {/* Hero portrait */}
      <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        className="absolute left-1/2 -translate-x-1/2 z-10
          top-1/2 -translate-y-1/2
          sm:top-auto sm:translate-y-0 sm:bottom-0
          w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <FadeIn delay={0.6} y={30}>
          <img
            src={shibaPortrait}
            alt="Kaizen studio mascot, a 3D rendered Shiba Inu"
            className="w-full h-auto select-none pointer-events-none"
            draggable={false}
          />
        </FadeIn>
      </Magnet>

      {/* Bottom bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 mt-auto relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-cream font-light uppercase tracking-wide leading-snug
              max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            {content.hero.subtext[lang]}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}

import FadeIn from "../components/FadeIn";
import AnimatedText from "../components/AnimatedText";
import ContactButton from "../components/ContactButton";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/content";

const DECOR_BASE =
  "https://i.imgur.com";

export default function AboutSection() {
  const { lang } = useLanguage();

  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col items-center justify-center
        px-5 sm:px-8 md:px-10 py-20 gap-10 sm:gap-14 md:gap-16"
    >
      {/* Decorative corner images */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]
          w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <img src={`${DECOR_BASE}/krmxTpU.png`} alt="" aria-hidden="true" />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]
          w-[100px] sm:w-[140px] md:w-[180px]"
      >
        <img src={`${DECOR_BASE}/9CkXrEZ.png`} alt="" aria-hidden="true" />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]
          w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <img src={`${DECOR_BASE}/pSv7wQB.png`} alt="" aria-hidden="true" />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]
          w-[130px] sm:w-[170px] md:w-[220px]"
      >
        <img src={`${DECOR_BASE}/LqxeBPv.pngg`} alt="" aria-hidden="true" />
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          {content.about.heading[lang]}
        </h2>
      </FadeIn>

      {/* Animated paragraph */}
      <AnimatedText
        text={content.about.paragraph[lang]}
        className="text-cream font-medium text-center leading-relaxed max-w-[560px]"
        style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
      />

      <ContactButton />
    </section>
  );
}

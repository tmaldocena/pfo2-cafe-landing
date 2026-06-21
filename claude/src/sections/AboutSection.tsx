import { Anchor, Compass, Sailboat, Shell } from "lucide-react";
import FadeIn from "../components/FadeIn";
import AnimatedText from "../components/AnimatedText";
import PrimaryButton from "../components/PrimaryButton";
import FitHeading from "../components/FitHeading";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/content";

export default function AboutSection() {
  const { lang } = useLanguage();

  return (
    <section
      id="historia"
      className="min-h-screen relative flex flex-col items-center justify-center
        bg-paper px-5 sm:px-8 md:px-10 py-20 gap-10 sm:gap-14 md:gap-16"
    >
      <FadeIn
        delay={0.1}
        x={-60}
        y={0}
        duration={0.9}
        className="absolute top-[5%] left-[3%] sm:left-[6%] md:left-[8%] text-wood/40"
      >
        <Anchor size={48} strokeWidth={1.25} />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-60}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[4%] sm:left-[8%] md:left-[12%] text-wood/40"
      >
        <Shell size={40} strokeWidth={1.25} />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={60}
        y={0}
        duration={0.9}
        className="absolute top-[5%] right-[3%] sm:right-[6%] md:right-[8%] text-wood/40"
      >
        <Compass size={48} strokeWidth={1.25} />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={60}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[4%] sm:right-[8%] md:right-[12%] text-wood/40"
      >
        <Sailboat size={44} strokeWidth={1.25} />
      </FadeIn>

      <FadeIn delay={0} y={40} className="w-full max-w-2xl">
        <FitHeading text={content.about.heading[lang]} className="text-4xl" />
      </FadeIn>

      <AnimatedText
        text={content.about.paragraph[lang]}
        className="text-navy font-light text-center leading-relaxed max-w-[560px]"
        style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
      />

      <PrimaryButton label={content.buttons.seeMenu[lang]} />
    </section>
  );
}

import { Coffee } from "lucide-react";
import FadeIn from "../components/FadeIn";
import PrimaryButton from "../components/PrimaryButton";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/content";

/**
 * Design decision (bonus section, minimal spec — fully open): this is
 * presented as a single focused block rather than a list of dates, since
 * the café only runs one recurring monthly session (not a calendar of
 * varied events). A small "next session" indicator stands in for a full
 * calendar widget, keeping the section honest about what it actually is.
 */
export default function EventsSection() {
  const { lang } = useLanguage();

  return (
    <section className="bg-wood/10 px-5 sm:px-8 md:px-10 py-20 sm:py-24">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <FadeIn delay={0} y={20}>
          <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center mx-auto mb-2">
            <Coffee size={26} className="text-paper" strokeWidth={1.75} />
          </div>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <p className="text-rust uppercase tracking-widest text-xs sm:text-sm">
            {content.events.eyebrow[lang]}
          </p>
        </FadeIn>

        <FadeIn delay={0.15} y={20}>
          <h2
            className="text-navy font-semibold uppercase tracking-tight"
            style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
          >
            {content.events.heading[lang]}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <p className="text-navy/70 font-light leading-relaxed max-w-xl">
            {content.events.description[lang]}
          </p>
        </FadeIn>

        <FadeIn delay={0.25} y={20}>
          <span className="text-wood font-medium uppercase tracking-wide text-sm">
            {content.events.detail[lang]}
          </span>
        </FadeIn>

        <FadeIn delay={0.3} y={20} className="mt-2">
          <PrimaryButton label={content.events.cta[lang]} />
        </FadeIn>
      </div>
    </section>
  );
}

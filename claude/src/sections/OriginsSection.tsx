import { MapPin } from "lucide-react";
import FadeIn from "../components/FadeIn";
import FitHeading from "../components/FitHeading";
import WaveDivider from "../components/WaveDivider";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/content";

/**
 * Design decision (this section was marked [OPEN layout] in the brief):
 * instead of reusing Kaizen's sticky-stacking scale effect, Origins uses
 * a horizontal scroll-snap gallery. The reasoning: stacking cards implies
 * "the same thing happening three times in sequence" (which fit Kaizen's
 * project case studies), but three coffee origins aren't a sequence —
 * they're parallel, equally-weighted choices a customer picks between.
 * A horizontal row that snaps card-to-card reads more like "browsing
 * options" than "scrolling through a timeline," which matches the content
 * better. Each card also gets its own small wave-cap divider, echoing the
 * Hero's tide motif without repeating its exact mechanic.
 */
export default function OriginsSection() {
  const { lang } = useLanguage();

  return (
    <section
      id="origenes"
      className="bg-paper px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={20}>
        <p className="text-rust uppercase tracking-widest text-xs sm:text-sm text-center mb-3">
          {content.origins.eyebrow[lang]}
        </p>
      </FadeIn>

      <FadeIn delay={0.05} y={40} className="mb-14 sm:mb-16 md:mb-20">
        <FitHeading text={content.origins.heading[lang]} className="text-5xl" />
      </FadeIn>

      <div
        className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory
          -mx-5 px-5 sm:-mx-8 sm:px-8 md:-mx-10 md:px-10"
        style={{ scrollbarWidth: "thin" }}
      >
        {content.origins.items.map((origin, i) => (
          <FadeIn
            key={origin.number}
            delay={i * 0.12}
            y={30}
            className="snap-center flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px]"
          >
            <div className="rounded-[28px] overflow-hidden border-2 border-wood/30 bg-navy h-full flex flex-col">
              <div className="h-16 sm:h-20">
                <WaveDivider color="#F2E8D5" flip />
              </div>
              <div className="px-6 sm:px-7 pb-8 sm:pb-9 flex flex-col gap-4 flex-1">
                <span className="text-rust font-bold text-sm tracking-widest">
                  {origin.number}
                </span>
                <div className="flex items-start gap-2">
                  <MapPin
                    size={20}
                    className="text-rust flex-shrink-0 mt-1"
                    strokeWidth={1.75}
                  />
                  <div>
                    <h3 className="text-paper font-semibold uppercase text-xl sm:text-2xl leading-tight">
                      {origin.place}
                    </h3>
                    <span className="text-paper/50 text-sm uppercase tracking-wide">
                      {origin.country[lang]}
                    </span>
                  </div>
                </div>
                <p className="text-paper/70 font-light leading-relaxed text-sm sm:text-base">
                  {origin.note[lang]}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

import { Quote } from "lucide-react";
import FadeIn from "../components/FadeIn";
import FitHeading from "../components/FitHeading";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/content";

/**
 * Design decision (this section was marked [OPEN layout] in the brief):
 * instead of reusing Kaizen's draggable carousel, Testimonials uses a
 * static 2x2 mosaic grid. Reasoning: a carousel implies the reader should
 * only focus on one voice at a time, which works for a portfolio where
 * each client's story is a separate case. Here, the point is closer to
 * "many different kinds of regulars agree" — seeing all four at once
 * reinforces consistency as a chorus, not a sequence, which echoes the
 * brand's own "always the same, reliably" idea better than a carousel
 * (which implies novelty/rotation) would.
 */

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function TestimonialsSection() {
  const { lang } = useLanguage();

  return (
    <section className="bg-navy px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={40} className="mb-14 sm:mb-16 md:mb-20">
        <FitHeading
          text={content.testimonials.heading[lang]}
          gradientClass="wave-heading-inverse"
          className="text-5xl"
        />
      </FadeIn>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {content.testimonials.items.map((item, i) => (
          <FadeIn key={item.name} delay={i * 0.1} y={20}>
            <div className="rounded-[28px] border border-paper/15 bg-paper/5 p-7 sm:p-8 flex flex-col gap-5 h-full">
              <Quote className="text-rust" size={28} />
              <p className="text-paper/85 font-light leading-relaxed text-sm sm:text-base flex-1">
                {item.quote[lang]}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-wood flex items-center justify-center text-paper font-medium text-xs flex-shrink-0">
                  {getInitials(item.name)}
                </div>
                <div className="flex flex-col">
                  <span className="text-paper font-medium uppercase tracking-wide text-xs sm:text-sm">
                    {item.name}
                  </span>
                  <span className="text-rust font-light text-xs">
                    {item.role[lang]}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

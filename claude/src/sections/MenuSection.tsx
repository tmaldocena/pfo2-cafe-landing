import FadeIn from "../components/FadeIn";
import FitHeading from "../components/FitHeading";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/content";

export default function MenuSection() {
  const { lang } = useLanguage();

  return (
    <section
      id="cafe"
      className="bg-navy px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40} className="mb-16 sm:mb-20 md:mb-28">
        <FitHeading
          text={content.menu.heading[lang]}
          gradientClass="wave-heading-inverse"
          className="text-5xl"
        />
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {content.menu.items.map((item, i) => (
          <FadeIn key={item.number} delay={i * 0.1} y={20}>
            <div
              className="flex items-start gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom:
                  i < content.menu.items.length - 1
                    ? "1px solid rgba(242, 232, 213, 0.15)"
                    : "none",
              }}
            >
              <span
                className="text-rust font-bold flex-shrink-0"
                style={{ fontSize: "clamp(2.5rem, 8vw, 110px)", lineHeight: 1 }}
              >
                {item.number}
              </span>
              <div className="flex flex-col gap-2 sm:gap-3 pt-2">
                <h3
                  className="text-paper font-medium uppercase tracking-wide"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2rem)" }}
                >
                  {item.name[lang]}
                </h3>
                <p
                  className="text-paper/60 font-light leading-relaxed max-w-2xl"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.2rem)" }}
                >
                  {item.description[lang]}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

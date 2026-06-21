import { useEffect, useRef, useState } from "react";

// NOTE on image sourcing: the brief for this project did not provide fixed
// asset URLs (unlike Kaizen, which had exact CloudFront links). Unsplash's
// old keyword-based "source.unsplash.com" endpoint was officially
// discontinued in 2023 and would 404/break in production, so it is NOT
// used here despite once being a common placeholder choice. Instead, this
// implementation uses Picsum (an active, stable placeholder image service)
// with deterministic seeds, paired with descriptive coffee-related alt
// text. When the café's own photography is available, only this array
// needs to change — every tile already has the right alt text in place.

const ROW_1_LABELS = [
  "coffee beans",
  "roasting drum",
  "pour-over brewing",
  "latte art",
  "café interior",
  "coffee cup",
];

const ROW_2_LABELS = [
  "espresso shot",
  "roasted coffee bag",
  "coffee grinder",
  "barista at work",
  "wooden café table",
  "cold brew jar",
];

function buildUrl(seed: number) {
  return `https://picsum.photos/seed/cafeolas${seed}/420/270`;
}

function Tile({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0 bg-wood/20"
    />
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const newOffset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(newOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const row1 = [...ROW_1_LABELS, ...ROW_1_LABELS, ...ROW_1_LABELS];
  const row2 = [...ROW_2_LABELS, ...ROW_2_LABELS, ...ROW_2_LABELS];

  return (
    <section
      ref={sectionRef}
      className="bg-paper pt-16 sm:pt-20 md:pt-24 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: "transform",
          }}
        >
          {row1.map((label, i) => (
            <Tile
              key={`r1-${i}`}
              src={buildUrl(i)}
              alt={`Café de las Olas — ${label}`}
            />
          ))}
        </div>

        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: "transform",
          }}
        >
          {row2.map((label, i) => (
            <Tile
              key={`r2-${i}`}
              src={buildUrl(i + 100)}
              alt={`Café de las Olas — ${label}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

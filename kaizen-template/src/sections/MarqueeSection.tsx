import { useEffect, useRef, useState } from "react";

const GIF_URLS = [
  "https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67d173ecedd6cfff80f56c14_Frankli---Hero.jpeg",
  "https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679cce1e49748980444020ae_Coherence---Hero.jpeg",
  "https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/639997ad49dddb11d0c0efba/6a1d878dfd1dfd242edd93fe_screenshot-2026-06-01-14-16-11%20(1).jpeg",
  "https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67b72cafb44fa3e8dfad3d22_Futern---Hero.jpeg",
  "https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/69287eeaa854135c2f3b3ca5_Headroom---Hero.jpeg",
  "https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6811c950fdd3e2f919df064a_Apollo---Hero.jpeg",
  "https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679ccbc43acfd9e1a5aae33e_Vectara---Hero.jpeg",
  "https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679cc71a8ea3e4b96ba7f887_Framer---Hero.jpeg",
  "https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67f396cbfb6c1e7ca41dc874_Ada---Hero.jpeg",
  "https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67c6e60602211fa1cfc8233d_Coframe---Hero.jpeg",
  "https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67d170319560a1db8cf63feb_Localyzer---Hero.jpeg",
  "https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679cc7d58a754828f1e295bc_Loop---Hero.jpeg",
  "https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/69287f354000fb090bee3a01_Pallet---Hero.jpeg",
  "https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679b5211c0d01c9a96f6fdd6_Liveblocks---Hero-2.jpeg",
  "https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67936ee39381f81053bdb68b_Campsite---Hero.jpeg",
  "https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/679b52003ef2e96c8c940ad7_Liveblocks---Hero.jpeg",
  "https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/6867f66080ade49b43ebaf9b_Fin---Hero.jpeg",
  "https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67936f15a506e229b379e0a3_Equals---Hero.jpeg",
  "https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67c830a2e69b6d95cc5f3c1b_Laravel-Cloud---Hero.jpeg",
  "https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67a9cbd2aef49afc700f21f5_Typebot---Hero.jpeg",
  "https://saaspo.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/6399d2d87f63ad4774e11dc2/67a9d785718304652e79ae24_Invertase---Hero-2.jpeg",
];

const ROW_1 = GIF_URLS.slice(0, 11);
const ROW_2 = GIF_URLS.slice(11);

function Tile({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
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

  const row1Tiles = [...ROW_1, ...ROW_1, ...ROW_1];
  const row2Tiles = [...ROW_2, ...ROW_2, ...ROW_2];

  return (
    <section
      ref={sectionRef}
      className="bg-ink pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 — moves right on scroll */}
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: "transform",
          }}
        >
          {row1Tiles.map((src, i) => (
            <Tile key={`r1-${i}`} src={src} alt={`Kaizen project preview ${(i % ROW_1.length) + 1}`} />
          ))}
        </div>

        {/* Row 2 — moves left on scroll */}
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: "transform",
          }}
        >
          {row2Tiles.map((src, i) => (
            <Tile key={`r2-${i}`} src={src} alt={`Kaizen project preview ${(i % ROW_2.length) + 12}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

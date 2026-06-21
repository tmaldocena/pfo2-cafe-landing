import { useEffect, useLayoutEffect, useRef, useState } from "react";

interface FitHeadingProps {
  text: string;
  className?: string;
  gradientClass?: string;
  as?: "h1" | "h2";
}

/**
 * Renders a single-line, full-width heading whose font-size is calculated
 * (not guessed via vw units) so the text always spans the full width of
 * its container without clipping or overflowing, regardless of string
 * length, language, or viewport size.
 */
export default function FitHeading({
  text,
  className = "",
  gradientClass = "wave-heading",
  as = "h1",
}: FitHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [fontSize, setFontSize] = useState(0);

  const recalculate = () => {
    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return;

    const containerWidth = container.offsetWidth;
    const baseline = 100;
    measure.style.fontSize = `${baseline}px`;
    const naturalWidth = measure.offsetWidth;

    if (naturalWidth === 0) return;

    const scale = containerWidth / naturalWidth;
    setFontSize(baseline * scale);
  };

  useLayoutEffect(() => {
    recalculate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => recalculate());
    observer.observe(container);
    window.addEventListener("resize", recalculate);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", recalculate);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Tag = as;

  return (
    <div ref={containerRef} className="w-full">
      <span
        ref={measureRef}
        aria-hidden="true"
        className={`font-bold uppercase tracking-tight ${className}`}
        style={{
          position: "absolute",
          visibility: "hidden",
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
      >
        {text}
      </span>

      <Tag
        className={`${gradientClass} font-bold uppercase tracking-tight leading-none
          whitespace-nowrap w-full text-center ${className}`}
        style={{ fontSize: fontSize ? `${fontSize}px` : "15vw" }}
      >
        {text}
      </Tag>
    </div>
  );
}

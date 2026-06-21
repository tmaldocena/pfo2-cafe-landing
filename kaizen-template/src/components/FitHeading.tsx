import { useEffect, useLayoutEffect, useRef, useState } from "react";

interface FitHeadingProps {
  text: string;
  className?: string;
}

/**
 * Renders a single-line, full-width heading whose font-size is
 * calculated (not guessed via vw units) so the text always spans
 * the full width of its container without ever clipping or
 * overflowing — regardless of string length or viewport size.
 */
export default function FitHeading({ text, className = "" }: FitHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [fontSize, setFontSize] = useState(0);

  const recalculate = () => {
    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return;

    const containerWidth = container.offsetWidth;
    // Render the measuring span at a known baseline size to get its natural width
    const baseline = 100;
    measure.style.fontSize = `${baseline}px`;
    const naturalWidth = measure.offsetWidth;

    if (naturalWidth === 0) return;

    const scale = containerWidth / naturalWidth;
    const newSize = baseline * scale;
    setFontSize(newSize);
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

  return (
    <div ref={containerRef} className="w-full">
      {/* Hidden measuring span — same font styles, used only to compute natural width */}
      <span
        ref={measureRef}
        aria-hidden="true"
        className={`font-black uppercase tracking-tight ${className}`}
        style={{
          position: "absolute",
          visibility: "hidden",
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
      >
        {text}
      </span>

      <h1
        className={`hero-heading font-black uppercase tracking-tight leading-none
          whitespace-nowrap w-full text-center mt-6 sm:mt-4 md:-mt-5 ${className}`}
        style={{ fontSize: fontSize ? `${fontSize}px` : "17.5vw" }}
      >
        {text}
      </h1>
    </div>
  );
}

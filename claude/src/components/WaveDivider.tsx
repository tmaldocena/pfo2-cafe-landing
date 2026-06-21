interface WaveDividerProps {
  color?: string;
  className?: string;
  flip?: boolean;
}

/**
 * A simple, smooth horizontal wave silhouette. Used both as the
 * boundary line riding along the Hero's receding-tide band, and
 * optionally as a section divider elsewhere on the page.
 */
export default function WaveDivider({
  color = "#1B2A4A",
  className = "",
  flip = false,
}: WaveDividerProps) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={className}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        transform: flip ? "scaleY(-1)" : undefined,
      }}
      aria-hidden="true"
    >
      <path
        d="M0,40 C 180,80 360,0 540,40 C 720,80 900,0 1080,40 C 1260,80 1440,0 1440,40 L1440,80 L0,80 Z"
        fill={color}
      />
    </svg>
  );
}

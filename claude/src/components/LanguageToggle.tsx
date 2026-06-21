import { useLanguage } from "../context/LanguageContext";

interface LanguageToggleProps {
  className?: string;
  light?: boolean;
}

export default function LanguageToggle({
  className = "",
  light = true,
}: LanguageToggleProps) {
  const { lang, setLang } = useLanguage();

  const activeColor = "text-rust font-semibold";
  const inactiveColor = light ? "text-paper/50" : "text-navy/50";

  return (
    <div
      className={`flex items-center gap-1.5 font-medium uppercase tracking-wider
        text-sm md:text-base ${className}`}
      role="group"
      aria-label="Language toggle"
    >
      <button
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        className={`transition-opacity duration-200 ${
          lang === "es" ? activeColor : inactiveColor
        }`}
      >
        ES
      </button>
      <span className={light ? "text-paper/30" : "text-navy/30"}>/</span>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`transition-opacity duration-200 ${
          lang === "en" ? activeColor : inactiveColor
        }`}
      >
        EN
      </button>
    </div>
  );
}

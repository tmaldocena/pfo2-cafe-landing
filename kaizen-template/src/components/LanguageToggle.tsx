import { useLanguage } from "../context/LanguageContext";

interface LanguageToggleProps {
  className?: string;
}

export default function LanguageToggle({ className = "" }: LanguageToggleProps) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`flex items-center gap-1.5 font-medium uppercase tracking-wider
        text-sm md:text-lg lg:text-[1.4rem] ${className}`}
      role="group"
      aria-label="Language toggle"
    >
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`transition-opacity duration-200 hover:opacity-100 ${
          lang === "en" ? "text-terracotta font-bold" : "text-cream/50"
        }`}
      >
        EN
      </button>
      <span className="text-cream/30">/</span>
      <button
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        className={`transition-opacity duration-200 hover:opacity-100 ${
          lang === "es" ? "text-terracotta font-bold" : "text-cream/50"
        }`}
      >
        ES
      </button>
    </div>
  );
}

import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/content";

interface LiveProjectButtonProps {
  className?: string;
}

export default function LiveProjectButton({
  className = "",
}: LiveProjectButtonProps) {
  const { lang } = useLanguage();

  return (
    <button
      className={`rounded-full border-2 border-cream text-cream font-medium uppercase tracking-widest
        px-8 py-3 sm:px-10 sm:py-3.5
        text-sm sm:text-base
        transition-colors duration-200 hover:bg-cream/10
        whitespace-nowrap
        ${className}`}
    >
      {content.buttons.liveProject[lang]}
    </button>
  );
}

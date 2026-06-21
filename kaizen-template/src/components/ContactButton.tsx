import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/content";

interface ContactButtonProps {
  className?: string;
  label?: string;
  type?: "button" | "submit";
}

export default function ContactButton({
  className = "",
  label,
  type = "button",
}: ContactButtonProps) {
  const { lang } = useLanguage();

  return (
    <button
      type={type}
      className={`rounded-full text-white font-medium uppercase tracking-widest
        px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
        text-xs sm:text-sm md:text-base
        transition-transform duration-200 hover:scale-[1.03]
        ${className}`}
      style={{
        background:
          "linear-gradient(123deg, #2A0F08 7%, #8B3A1F 37%, #C97A4A 72%, #EDE3D3 100%)",
        boxShadow:
          "0px 4px 4px rgba(201, 122, 74, 0.25), 4px 4px 12px #8B3A1F inset",
        outline: "2px solid white",
        outlineOffset: "-3px",
      }}
    >
      {label ?? content.buttons.contact[lang]}
    </button>
  );
}

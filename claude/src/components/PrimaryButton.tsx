interface PrimaryButtonProps {
  className?: string;
  label: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function PrimaryButton({
  className = "",
  label,
  type = "button",
  onClick,
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-full text-paper font-medium uppercase tracking-widest
        px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
        text-xs sm:text-sm md:text-base
        transition-transform duration-200 hover:scale-[1.03]
        ${className}`}
      style={{
        background: "linear-gradient(135deg, #6E3A1F 0%, #B5562F 60%, #D97D52 100%)",
        boxShadow:
          "0px 4px 10px rgba(181, 86, 47, 0.35), 0px 2px 4px rgba(0,0,0,0.2) inset",
      }}
    >
      {label}
    </button>
  );
}

import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  href,
  type = 'button',
  className = '',
}) => {
  const baseClasses = `
    inline-block rounded-full px-8 py-3
    bg-gradient-to-r from-rust-copper to-[#96421F]
    text-raw-paper text-sm font-semibold tracking-wider uppercase
    shadow-lg shadow-rust-copper/10
    transition-all duration-300 ease-out
    hover:shadow-xl hover:shadow-rust-copper/20 hover:scale-[1.03] hover:brightness-110
    active:scale-[0.98]
    text-center cursor-pointer border border-[#B5562F]/20
  `.trim().replace(/\s+/g, ' ');

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
};

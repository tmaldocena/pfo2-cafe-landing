import React from 'react';

interface WaveDividerProps {
  className?: string;
  fill?: string;
  flipped?: boolean;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  className = '',
  fill = 'fill-raw-paper',
  flipped = false,
}) => {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${
        flipped ? 'rotate-180' : ''
      } ${className}`}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[30px] md:h-[60px]"
      >
        <path
          d="M0,0 C150,90 350,110 600,60 C850,10 1050,30 1200,120 L1200,120 L0,120 Z"
          className={fill}
        />
      </svg>
    </div>
  );
};

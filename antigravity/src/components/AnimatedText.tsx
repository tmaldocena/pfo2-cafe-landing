import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.25'],
  });

  const words = text.split(' ');
  
  // Flatten characters and spaces to give each a unique index
  let charCounter = 0;
  const wordsWithChars = words.map((word, wIdx) => {
    const chars = word.split('');
    const charsWithIndices = chars.map((char) => {
      const idx = charCounter++;
      return { char, idx };
    });
    // Add space after word (except last word)
    if (wIdx < words.length - 1) {
      const idx = charCounter++;
      charsWithIndices.push({ char: ' ', idx });
    }
    return charsWithIndices;
  });

  const totalChars = charCounter;

  return (
    <span ref={containerRef} className={`flex flex-wrap ${className}`}>
      {wordsWithChars.map((wordChars, wIdx) => (
        <span key={wIdx} className="inline-block">
          {wordChars.map(({ char, idx }) => {
            const start = idx / totalChars;
            // Spread the fade-in window slightly for smoother look
            const end = Math.min(1, (idx + 3) / totalChars);
            return (
              <Character
                key={idx}
                char={char}
                progress={scrollYProgress}
                range={[start, end]}
              />
            );
          })}
        </span>
      ))}
    </span>
  );
};

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity, whiteSpace: 'pre' }} className="inline-block">
      {char}
    </motion.span>
  );
};

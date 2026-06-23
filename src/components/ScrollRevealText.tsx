import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

export function ScrollRevealText({ text, className = '' }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(' ');
  const totalChars = text.length;
  let charIndex = 0;

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const wordChars = word.split('');
        const wordNode = (
          <span key={i} className="inline-flex mr-[0.25em] mb-[0.1em]">
            {wordChars.map((char, j) => {
              const currentIdx = charIndex++;
              const charProgress = currentIdx / totalChars;
              const start = Math.max(0, charProgress - 0.1);
              const end = Math.min(1, charProgress + 0.05);
              return (
                <Character 
                  key={j} 
                  char={char} 
                  progress={scrollYProgress} 
                  range={[start, end]} 
                />
              );
            })}
          </span>
        );
        charIndex++; // account for space
        return wordNode;
      })}
    </p>
  );
}

function Character({ char, progress, range }: { char: string, progress: any, range: number[] }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }}>
      {char}
    </motion.span>
  );
}

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}

export function WordsPullUp({ text, className = '', showAsterisk = false }: WordsPullUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(' ');

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isLastWord = i === words.length - 1;
        const hasAsterisk = showAsterisk && isLastWord;
        
        let content: React.ReactNode = word;
        if (hasAsterisk && word.endsWith('a')) {
          content = (
            <>
              {word.slice(0, -1)}
              <span className="relative">
                a
                <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
              </span>
            </>
          );
        }

        return (
          <div key={i} className="overflow-hidden inline-block mr-[0.2em] last:mr-0">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {content}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

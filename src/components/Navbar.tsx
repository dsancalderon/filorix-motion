import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (typeof window !== "undefined") {
      setIsScrolled(latest > window.innerHeight * 0.9); // slightly before leaving the hero
    }
  });

  return (
    <>
      {/* Top Black Bar */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: isScrolled ? "0%" : "-100%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full h-[36px] sm:h-[44px] bg-black z-[40] flex items-center justify-center shadow-xl pointer-events-auto"
      >
        <img 
          src={`${import.meta.env.BASE_URL}logo-letra.png`}
          alt="Filorix" 
          className="h-3 sm:h-4 md:h-5 object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] opacity-90"
        />
      </motion.div>

      {/* Pill Navbar */}
      <motion.div 
        initial={{ x: "-50%" }}
        animate={{ 
          x: "-50%",
          y: isScrolled ? -100 : 0 
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-1/2 bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 z-50"
      >
        <nav className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
          {['Servicios', 'Portafolio', 'Acerca de', 'Contacto'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-[10px] sm:text-xs md:text-sm font-medium transition-colors duration-300 whitespace-nowrap"
              style={{ color: 'rgba(225, 224, 204, 0.8)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#E1E0CC'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)'}
            >
              {item}
            </a>
          ))}
        </nav>
      </motion.div>
    </>
  );
}

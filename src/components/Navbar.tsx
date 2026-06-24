import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (typeof window !== "undefined") {
      const scrolled = latest > window.innerHeight * 0.9;
      setIsScrolled(scrolled);
      if (!scrolled) {
        setIsMenuOpen(false);
      }
    }
  });

  const menuItems = ['Servicios', 'Portafolio', 'Acerca de', 'Contacto'];

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

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#E1E0CC]/80 hover:text-[#E1E0CC] transition-colors p-1"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isScrolled && isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[36px] sm:top-[44px] left-0 w-full bg-black/95 backdrop-blur-md z-[39] border-t border-white/5 shadow-2xl py-6 px-6"
          >
            <nav className="flex flex-col items-center gap-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium transition-colors duration-300 py-2 w-full text-center"
                  style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#E1E0CC'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)'}
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

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
          {menuItems.map((item) => (
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

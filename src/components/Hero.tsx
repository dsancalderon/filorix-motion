import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const headingSegments = [
    { text: 'Código que ', className: 'text-[#E1E0CC]' },
    { text: 'respira elegancia', className: 'text-[#D9C39B] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]' }
  ];

  return (
    <section className="h-screen p-4 md:p-6 bg-black relative z-0">
      {/* Fixed Background */}
      <div className="fixed inset-4 md:inset-6 rounded-2xl md:rounded-[2rem] overflow-hidden z-0 pointer-events-none">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={`${import.meta.env.BASE_URL}hero-poster.jpg`}
          className="absolute inset-0 w-full h-full object-cover"
          src={`${import.meta.env.BASE_URL}hero-video.mp4`}
        />
        
        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* Hero Content (Scrolls normally) */}
      <motion.div style={{ opacity }} className="relative w-full h-full z-10 pointer-events-none">
        
        {/* Top Center Logo */}
        <div className="absolute top-[20px] md:top-[20px] left-1/2 -translate-x-1/2 z-40 flex justify-center pointer-events-auto">
          <img 
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Filorix Logo" 
            className="w-12 sm:w-16 md:w-20 object-contain drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
          />
        </div>


        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16 pointer-events-auto">
          <div className="flex flex-col items-start gap-5 lg:gap-8 max-w-[90vw] lg:max-w-3xl xl:max-w-4xl relative z-10">
            {/* Eyebrow */}
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#E1E0CC]/70 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              Bienvenido a Filorix
            </motion.span>
            
            {/* Heading */}
            <WordsPullUpMultiStyle 
              segments={headingSegments}
              className="font-medium leading-[0.95] tracking-[-0.04em] text-[13vw] sm:text-[10vw] md:text-[8vw] lg:text-[5.5rem] xl:text-[6.5rem] drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] !justify-start" 
            />
            
            {/* Description */}
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#E1E0CC]/90 text-sm sm:text-base md:text-lg lg:text-xl leading-[1.4] max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium"
            >
              Creamos experiencias web sofisticadas y minimalistas. Cada línea de código, cada píxel, es precisión técnica combinada con diseño sin compromiso.
            </motion.p>
            
            {/* Buttons */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button className="group flex items-center bg-primary rounded-full pl-6 pr-2 py-2 gap-2 hover:gap-3 transition-all duration-300 shadow-lg">
                <span className="text-black font-medium text-sm sm:text-base">Comencemos</span>
                <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="text-[#E1E0CC] w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </button>

              <button className="flex items-center justify-center rounded-full px-6 py-[10px] sm:py-[14px] border border-[#E1E0CC]/30 text-[#E1E0CC] hover:bg-[#E1E0CC]/10 transition-all duration-300 font-medium text-sm sm:text-base backdrop-blur-sm shadow-lg">
                Ver Trabajos
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

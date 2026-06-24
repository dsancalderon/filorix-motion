import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function AboutUs() {
  return (
    <section id="acerca-de" className="relative z-10 bg-black py-20 px-4 md:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full"
          >
            <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-6 block">
              Acerca de Filorix
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#E1E0CC] font-medium leading-[1.1] mb-8">
              Precisión técnica con alma creativa
            </h2>
            
            <div className="text-[#A1A1A1] text-sm sm:text-base leading-relaxed space-y-6 mb-10 max-w-xl">
              <p>
                Somos una agencia de desarrollo de software comprometida con la excelencia. Cada proyecto es una oportunidad para demostrar que la tecnología y el diseño pueden coexistir en perfecta armonía.
              </p>
              <p>
                Nuestro equipo está formado por desarrolladores, diseñadores y estrategas que comparten una visión: crear soluciones digitales que no solo funcionan, sino que inspiran.
              </p>
            </div>
            
            <button className="group flex items-center bg-[#1A1A1A] border border-white/10 hover:border-white/20 rounded-full pl-6 pr-2 py-2 gap-3 transition-all duration-300">
              <span className="text-[#E1E0CC] font-medium text-sm">Trabajemos juntos</span>
              <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <ArrowRight className="text-black w-4 h-4" />
              </div>
            </button>
          </motion.div>

          {/* Right Content / Image Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="rounded-2xl md:rounded-[2rem] aspect-square sm:aspect-video lg:aspect-[4/3] flex flex-col items-center justify-center relative overflow-hidden group">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                src={`${import.meta.env.BASE_URL}video-logo-clip.mp4`}
              />
              
              {/* Black square overlay to obscure the watermark */}
              <div className="absolute bottom-0 right-0 w-24 sm:w-32 h-12 sm:h-16 bg-black z-10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

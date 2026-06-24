import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contacto" className="relative z-10 bg-black py-24 px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.1] pointer-events-none mix-blend-overlay" />
      
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-8"
        >
          Contacto
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl text-[#E1E0CC] font-medium leading-[1.1] mb-6"
        >
          Comencemos tu próximo proyecto
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[#A1A1A1] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-12"
        >
          ¿Tienes una idea? Nos encantaría escucharla. Contáctanos para discutir cómo podemos ayudarte a crear algo extraordinario.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="w-full sm:w-auto group flex items-center justify-center bg-[#1A1A1A] border border-white/10 hover:border-white/20 rounded-lg px-8 py-4 gap-3 transition-all duration-300">
            <span className="text-[#E1E0CC] font-medium text-sm">Enviar Email</span>
            <ArrowRight className="text-[#E1E0CC] w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="w-full sm:w-auto flex items-center justify-center bg-transparent border border-[#333] hover:border-white/20 hover:bg-white/5 rounded-lg px-8 py-4 transition-all duration-300">
            <span className="text-[#E1E0CC] font-medium text-sm">Agendar Llamada</span>
          </button>
        </motion.div>
      </div>
      
      {/* Separator line at bottom */}
      <div className="max-w-[1400px] mx-auto mt-24 border-b border-white/10" />
    </section>
  );
}

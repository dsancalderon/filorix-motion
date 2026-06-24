import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';
import { Code, Palette, Zap, ArrowRight } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export function About() {
  const headingSegments = [
    { text: 'Soluciones digitales, ', className: 'font-normal' },
    { text: 'a medida. ', className: 'italic font-serif' }
  ];

  const solutions = [
    {
      icon: <Code className="w-6 h-6 text-[#DEDBC8]" />,
      title: 'Desarrollo Web',
      description: 'Sitios web y aplicaciones modernas, construidas con las tecnologías más actuales y mejores prácticas de desarrollo.'
    },
    {
      icon: <Palette className="w-6 h-6 text-[#DEDBC8]" />,
      title: 'Diseño UI/UX',
      description: 'Interfaces elegantes y minimalistas que priorizan la experiencia del usuario sin sacrificar la estética.'
    },
    {
      icon: <Zap className="w-6 h-6 text-[#DEDBC8]" />,
      title: 'Optimización',
      description: 'Rendimiento, velocidad y escalabilidad. Cada proyecto es optimizado para máxima eficiencia y sostenibilidad.'
    }
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <section id="our-story" className="relative z-10 bg-black py-20 px-4 md:px-6">
      <div className="bg-[#101010] rounded-2xl md:rounded-[2rem] p-8 md:p-16 lg:p-24 max-w-6xl mx-auto flex flex-col items-center text-center">
        <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-8 md:mb-12">Nuestros Servicios</span>
        
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-16 md:mb-24">
          <WordsPullUpMultiStyle segments={headingSegments} />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          {solutions.map((solution, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="flex flex-col text-left bg-[#1A1A1A] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                {solution.icon}
              </div>
              <h3 className="text-xl text-white font-medium mb-4">{solution.title}</h3>
              <p className="text-[#A1A1A1] text-sm leading-relaxed mb-8 flex-grow">
                {solution.description}
              </p>
              <a href="#" className="flex items-center w-fit text-sm text-[#DEDBC8] hover:text-white transition-colors mt-auto group">
                Más información 
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';

export function Features() {
  const headerSegments = [
    { text: 'Nuestros ', className: 'text-[#E1E0CC]' },
    { text: 'proyectos mas destacados.', className: 'text-gray-500' }
  ];

  const projects = [
    {
      title: 'Proyecto 01',
      videoUrl: `${import.meta.env.BASE_URL}triler-villa.mp4`
    },
    {
      title: 'Proyecto 02',
      videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4'
    },
    {
      title: 'Proyecto 03',
      videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4'
    }
  ];

  return (
    <section id="portafolio" className="relative z-10 min-h-screen bg-black py-20 px-4 md:px-6">
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none mix-blend-overlay" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-12 sm:mb-16 md:mb-20 max-w-4xl text-left">
          <WordsPullUpMultiStyle segments={headerSegments} className="!justify-start" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
          {projects.map((project, index) => (
            <FeatureCard key={index} index={index} className="p-0 overflow-hidden relative w-full aspect-video group border border-white/10 rounded-xl md:rounded-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={project.videoUrl}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                <h3 className="text-[#E1E0CC] text-lg sm:text-xl md:text-2xl font-medium tracking-wide drop-shadow-lg">
                  {project.title}
                </h3>
              </div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ children, index, className = '' }: { children: React.ReactNode, index: number, className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl md:rounded-3xl flex flex-col h-full ${className}`}
    >
      {children}
    </motion.div>
  );
}

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';

export function Features() {
  const headerSegments = [
    { text: 'Nuestros ', className: 'text-[#E1E0CC]' },
    { text: 'proyectos mas destacados.', className: 'text-gray-500' }
  ];

  return (
    <section id="portafolio" className="relative z-10 min-h-screen bg-black py-20 px-4 md:px-6">
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none mix-blend-overlay" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-12 sm:mb-16 md:mb-20 max-w-4xl text-left">
          <WordsPullUpMultiStyle segments={headerSegments} className="!justify-start" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          <FeatureCard index={0} className="lg:col-span-1 p-0 overflow-hidden relative min-h-[300px] lg:min-h-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6 text-[#E1E0CC] font-medium">
              Your creative canvas.
            </div>
          </FeatureCard>

          <FeatureCard index={1} className="bg-[#212121]">
            <CardContent
              iconUrl="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
              title="Project Storyboard."
              number="01"
              items={[
                "Visual scene mapping",
                "Non-linear timeline",
                "Asset organization",
                "Team collaboration"
              ]}
            />
          </FeatureCard>

          <FeatureCard index={2} className="bg-[#212121]">
            <CardContent
              iconUrl="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
              title="Smart Critiques."
              number="02"
              items={[
                "AI-powered analysis",
                "Creative note-taking",
                "Tool integrations"
              ]}
            />
          </FeatureCard>

          <FeatureCard index={3} className="bg-[#212121]">
            <CardContent
              iconUrl="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
              title="Immersion Capsule."
              number="03"
              items={[
                "Notification silencing",
                "Ambient soundscapes",
                "Schedule syncing"
              ]}
            />
          </FeatureCard>
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

function CardContent({ iconUrl, title, number, items }: { iconUrl: string, title: string, number: string, items: string[] }) {
  return (
    <div className="flex flex-col h-full p-6 sm:p-8">
      <div className="mb-12">
        <img src={iconUrl} alt="icon" className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover" />
      </div>
      
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-xl sm:text-2xl text-[#E1E0CC]">{title}</h3>
        <span className="text-gray-500 text-sm">({number})</span>
      </div>

      <div className="flex flex-col gap-4 flex-grow">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="text-gray-400 text-sm sm:text-base leading-snug">{item}</span>
          </div>
        ))}
      </div>

      <button className="flex items-center gap-2 mt-8 group w-fit text-[#E1E0CC] hover:text-primary transition-colors">
        <span className="text-sm font-medium">Learn more</span>
        <ArrowRight className="w-4 h-4 -rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </button>
    </div>
  );
}

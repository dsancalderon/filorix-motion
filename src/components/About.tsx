import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';
import { ScrollRevealText } from './ScrollRevealText';

export function About() {
  const headingSegments = [
    { text: 'I am Marcus Chen, ', className: 'font-normal' },
    { text: 'a self-taught director. ', className: 'italic font-serif' },
    { text: 'I have skills in color grading, visual effects, and narrative design.', className: 'font-normal' }
  ];

  return (
    <section id="our-story" className="relative z-10 bg-black py-20 px-4 md:px-6">
      <div className="bg-[#101010] rounded-2xl md:rounded-[2rem] p-8 md:p-16 lg:p-24 max-w-6xl mx-auto flex flex-col items-center text-center">
        <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-8 md:mb-12">Visual arts</span>
        
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-12 md:mb-16">
          <WordsPullUpMultiStyle segments={headingSegments} />
        </div>

        <div className="max-w-2xl mx-auto text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed text-center">
          <ScrollRevealText 
            text="Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals." 
            className="justify-center"
          />
        </div>
      </div>
    </section>
  );
}

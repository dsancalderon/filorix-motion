import { Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8 px-4 md:px-6 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-5 lg:col-span-4">
            <h3 className="text-2xl text-[#E1E0CC] font-medium mb-4">Filorix</h3>
            <p className="text-[#A1A1A1] text-sm leading-relaxed max-w-xs">
              Agencia de desarrollo de software especializada en crear experiencias web elegantes y sofisticadas.
            </p>
          </div>
          
          {/* Links */}
          <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
            <h4 className="text-[#666] text-xs uppercase tracking-widest font-medium mb-6">Enlaces</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#servicios" className="text-[#A1A1A1] hover:text-[#E1E0CC] text-sm transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#portafolio" className="text-[#A1A1A1] hover:text-[#E1E0CC] text-sm transition-colors">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#acerca-de" className="text-[#A1A1A1] hover:text-[#E1E0CC] text-sm transition-colors">
                  Acerca de
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-4 lg:col-span-3 lg:col-start-10">
            <h4 className="text-[#666] text-xs uppercase tracking-widest font-medium mb-6">Contacto</h4>
            <div className="flex flex-col gap-6">
              <a href="mailto:hello@filorix.com" className="group flex items-center gap-3 text-[#A1A1A1] hover:text-[#E1E0CC] transition-colors w-fit">
                <Mail className="w-5 h-5 text-[#666] group-hover:text-[#E1E0CC] transition-colors" />
                <span className="text-sm">hello@filorix.com</span>
              </a>
              
              <div className="flex items-center gap-5">
                <a href="#" className="text-[#666] hover:text-[#E1E0CC] transition-colors" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" className="text-[#666] hover:text-[#E1E0CC] transition-colors" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-[#666] text-xs">
            © 2026 Filorix. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#666] hover:text-[#A1A1A1] text-xs transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-[#666] hover:text-[#A1A1A1] text-xs transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

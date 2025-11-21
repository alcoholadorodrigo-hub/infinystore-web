
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect } from 'react';

const HERO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&q=80&w=800",
    alt: "iPhone 15 Pro Max",
    label: "Nuevo Ingreso"
  },
  {
    src: "https://images.unsplash.com/photo-1706029546359-2054434af04d?auto=format&fit=crop&q=80&w=1000", // Samsung S24
    alt: "Samsung Galaxy S24 Ultra",
    label: "Destacado"
  },
  {
    src: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=800", // iPhone 13
    alt: "iPhone 13 Blue",
    label: "Oferta Seminueva"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {
        // Ignore SecurityError
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center bg-slate-900 overflow-hidden pt-20">
      
      {/* Tech Background Gradient */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-slate-950"></div>
        {/* Abstract Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Block */}
        <div className="animate-fade-in-up order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-sm">
             <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
             <span className="text-xs font-bold uppercase tracking-widest text-blue-300">Innovación 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tight mb-6 leading-tight">
            Tecnología <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Infinita.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-lg">
            Encuentra el smartphone perfecto. Celulares nuevos de última generación y seminuevos verificados con garantía de calidad.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
                href="#products" 
                onClick={(e) => handleNavClick(e, 'products')}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] transform hover:-translate-y-1"
            >
                Ver Catálogo
            </a>
            <a 
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')} 
                className="px-8 py-4 bg-transparent border border-slate-600 text-white rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-colors"
            >
                Conócenos
            </a>
          </div>
        </div>

        {/* Hero Carousel Image */}
        <div className="order-1 md:order-2 relative h-[400px] md:h-[600px] flex items-center justify-center animate-float">
            {/* Glowing Orb behind phone */}
            <div className="absolute w-[300px] h-[300px] bg-blue-500/30 rounded-full blur-[100px]"></div>
            
            {/* Carousel Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              {HERO_IMAGES.map((img, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${
                    index === currentSlide 
                      ? 'opacity-100 translate-x-0 rotate-[-10deg] scale-100' 
                      : 'opacity-0 translate-x-8 rotate-0 scale-95 pointer-events-none'
                  }`}
                >
                  <img 
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-contain drop-shadow-2xl"
                  />
                  {/* Dynamic Badge based on image label */}
                  {index === currentSlide && (
                    <div className="absolute top-10 left-10 md:left-0 bg-blue-600/90 backdrop-blur text-white px-4 py-2 rounded-lg shadow-lg border border-blue-400/30 animate-fade-in-up">
                      <span className="text-xs font-bold uppercase tracking-widest">{img.label}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Floating UI Elements decorations (Static) */}
            <div className="absolute top-20 right-10 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl animate-bounce delay-700 z-20">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">✓</div>
                    <div>
                        <p className="text-xs text-slate-300">Estado</p>
                        <p className="text-sm font-bold text-white">100% Verificado</p>
                    </div>
                </div>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
              {HERO_IMAGES.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'bg-blue-500 w-6' : 'bg-slate-600 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

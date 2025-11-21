
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, cartCount, onOpenCart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  const handleCartClick = (e: React.MouseEvent) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      onOpenCart();
  }

  // Determine text color: darker on white backgrounds, white on transparent dark header if needed
  const textColorClass = (scrolled || mobileMenuOpen) ? 'text-slate-900' : 'text-slate-900 md:text-white';
  const bgClass = scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out py-4 ${bgClass}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onNavClick(e, ''); 
            }}
            className={`flex items-center gap-2 z-50 relative group ${textColorClass}`}
          >
            {/* Logo Icon - Infinity + Cart */}
            <div className="relative w-10 h-10">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-blue-600">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <div className="absolute -top-1 -right-1">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-400 animate-pulse">
                        <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 12.75c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-xl tracking-tight">InfinityStore</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-600">Celulares</span>
            </div>
          </a>
          
          {/* Center Links - Desktop */}
          <div className={`hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide transition-colors duration-500 ${textColorClass}`}>
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-blue-500 transition-colors">Catálogo</a>
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-blue-500 transition-colors">Ofertas</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-blue-500 transition-colors">Nosotros</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:text-blue-500 transition-colors">Blog</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-blue-500 transition-colors">Contacto</a>
          </div>

          {/* Right Actions */}
          <div className={`flex items-center gap-6 z-50 relative transition-colors duration-500 ${textColorClass}`}>
            <button 
              onClick={handleCartClick}
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-blue-500 transition-colors hidden sm:flex"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full absolute -top-2 -right-2">{cartCount}</span>
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className={`block md:hidden focus:outline-none transition-colors duration-500 ${textColorClass}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
               {mobileMenuOpen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
               ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                 </svg>
               )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
          <div className="flex flex-col items-center space-y-8 text-2xl font-heading font-bold text-slate-900">
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-blue-600 transition-colors">Catálogo</a>
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-blue-600 transition-colors">Ofertas</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-blue-600 transition-colors">Nosotros</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:text-blue-600 transition-colors">Blog</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-blue-600 transition-colors">Contacto</a>
            <button 
                onClick={handleCartClick} 
                className="hover:text-blue-600 transition-colors text-xl uppercase tracking-widest mt-8 flex gap-2 items-center"
            >
                Carrito ({cartCount})
            </button>
          </div>
      </div>
    </>
  );
};

export default Navbar;

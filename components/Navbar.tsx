import React, { useState } from 'react';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, target: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, cartCount, onOpenCart }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-[#f4f6fb] shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO TIPO GOOGLE STUDIO */}
        <div
          className="flex flex-col leading-tight cursor-pointer"
          onClick={(e) => onNavClick(e as any, '')}
        >
          <span className="text-[18px] font-extrabold tracking-tight text-[#16336e]">
            InfinityStore
          </span>
          <span className="text-[11px] font-semibold tracking-[0.18em] text-[#1e80ff] uppercase">
            Celulares
          </span>
        </div>

        {/* MENÚ CENTRO – VERSIÓN DESKTOP */}
        <div className="hidden md:flex items-center space-x-6 text-[13px] text-slate-800">
          <a
            href="#products"
            className="hover:text-[#1e80ff] cursor-pointer"
            onClick={(e) => onNavClick(e, 'products')}
          >
            Catálogo
          </a>
          <a
            href="#offers"
            className="hover:text-[#1e80ff] cursor-pointer"
            onClick={(e) => onNavClick(e, 'products')} // puedes cambiar a secciones reales
          >
            Ofertas
          </a>
          <a
            href="#about"
            className="hover:text-[#1e80ff] cursor-pointer"
            onClick={(e) => onNavClick(e, 'about')}
          >
            Nosotros
          </a>
          <a
            href="#journal"
            className="hover:text-[#1e80ff] cursor-pointer"
            onClick={(e) => onNavClick(e, 'journal')}
          >
            Blog
          </a>
          <a
            href="#contact"
            className="hover:text-[#1e80ff] cursor-pointer"
            onClick={(e) => onNavClick(e, 'contact')}
          >
            Contacto
          </a>
        </div>

        {/* CARRITO A LA DERECHA */}
        <div className="flex items-center">
          <button
            onClick={onOpenCart}
            className="relative flex items-center justify-center w-8 h-8 rounded-full border border-[#1e80ff] text-[#1e80ff] bg-white hover:bg-[#e6f0ff] transition"
          >
            <span className="text-[16px]">🛒</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#1e80ff] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* BOTÓN MENÚ MOBILE */}
          <button
            className="ml-3 md:hidden text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MENÚ MOBILE (ABAJO DEL HEADER) */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-inner py-3 space-y-2 px-6 text-sm">
          <a
            href="#products"
            className="block"
            onClick={(e) => onNavClick(e, 'products')}
          >
            Catálogo
          </a>
          <a
            href="#offers"
            className="block"
            onClick={(e) => onNavClick(e, 'products')}
          >
            Ofertas
          </a>
          <a
            href="#about"
            className="block"
            onClick={(e) => onNavClick(e, 'about')}
          >
            Nosotros
          </a>
          <a
            href="#journal"
            className="block"
            onClick={(e) => onNavClick(e, 'journal')}
          >
            Blog
          </a>
          <a
            href="#contact"
            className="block"
            onClick={(e) => onNavClick(e, 'contact')}
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



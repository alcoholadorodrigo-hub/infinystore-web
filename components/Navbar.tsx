import React, { useState } from 'react';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, target: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, cartCount, onOpenCart }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow fixed top-0 left-0 w-full z-50 pr-4">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1
          className="text-2xl font-extrabold tracking-tight text-black cursor-pointer"
          onClick={(e) => onNavClick(e as any, '')}
        >
          InfinityStore
        </h1>

        {/* LINKS – versión desktop */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#home"
            className="hover:underline cursor-pointer"
            onClick={(e) => onNavClick(e, '')}
          >
            Inicio
          </a>
          <a
            href="#products"
            className="hover:underline cursor-pointer"
            onClick={(e) => onNavClick(e, 'products')}
          >
            Productos
          </a>
          <a
            href="#about"
            className="hover:underline cursor-pointer"
            onClick={(e) => onNavClick(e, 'about')}
          >
            Nosotros
          </a>
          <a
            href="#journal"
            className="hover:underline cursor-pointer"
            onClick={(e) => onNavClick(e, 'journal')}
          >
            Blog
          </a>
          <a
            href="#contact"
            className="hover:underline cursor-pointer"
            onClick={(e) => onNavClick(e, 'contact')}
          >
            Contacto
          </a>
        </div>

        {/* CARRITO – súper visible */}
        <div className="flex items-center">
          <button
            onClick={onOpenCart}
            className="mr-4 px-4 py-2 rounded-full bg-blue-600 text-white font-bold text-sm md:text-base shadow hover:bg-blue-700 transition"
          >
            🛒 Carrito ({cartCount})
          </button>

          {/* BOTÓN MENÚ MOBILE */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MENÚ MOBILE */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md py-4 space-y-4 px-6">
          <a
            href="#home"
            className="block"
            onClick={(e) => onNavClick(e, '')}
          >
            Inicio
          </a>
          <a
            href="#products"
            className="block"
            onClick={(e) => onNavClick(e, 'products')}
          >
            Productos
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



/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribeStatus('loading');
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <footer className="bg-slate-900 pt-20 pb-10 px-6 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
        <div className="md:col-span-4">
          <div className="flex items-center gap-2 mb-6 text-white">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-blue-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
             </svg>
             <h4 className="text-2xl font-heading font-bold tracking-tight">InfinityStore</h4>
          </div>
          <p className="max-w-xs leading-relaxed text-sm">
            Líderes en venta de celulares nuevos y seminuevos. 
            Tecnología innovadora al alcance de todos. 
            Calidad garantizada.
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-bold text-white mb-6 tracking-wide text-sm uppercase">Tienda</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-blue-400 transition-colors">Ver Todo</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-blue-400 transition-colors">Ofertas</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-blue-400 transition-colors">Nuevos</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-blue-400 transition-colors">Seminuevos</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-blue-400 transition-colors">Accesorios</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="font-bold text-white mb-6 tracking-wide text-sm uppercase">Compañía</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-blue-400 transition-colors">Nosotros</a></li>
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-blue-400 transition-colors">Garantía</a></li>
            <li><a href="#journal" onClick={(e) => onLinkClick(e, 'journal')} className="hover:text-blue-400 transition-colors">Blog Tech</a></li>
            <li><a href="#contact" onClick={(e) => onLinkClick(e, 'contact')} className="hover:text-blue-400 transition-colors">Contacto</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-bold text-white mb-6 tracking-wide text-sm uppercase">Ofertas Exclusivas</h4>
          <p className="text-xs mb-4">Suscríbete para recibir las mejores ofertas en smartphones.</p>
          <div className="flex flex-col gap-3">
            <div className="relative">
                <input 
                type="email" 
                placeholder="tu@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 transition-colors text-white placeholder-slate-500 disabled:opacity-50" 
                />
            </div>
            <button 
              onClick={handleSubscribe}
              disabled={subscribeStatus !== 'idle' || !email}
              className="w-full py-3 bg-blue-600 text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-blue-500 disabled:cursor-default disabled:bg-slate-700 disabled:text-slate-500 transition-colors"
            >
              {subscribeStatus === 'idle' && 'Suscribirse'}
              {subscribeStatus === 'loading' && 'Procesando...'}
              {subscribeStatus === 'success' && '¡Suscrito!'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-wider opacity-60">
        <p>© 2025 InfinityStore Celulares. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

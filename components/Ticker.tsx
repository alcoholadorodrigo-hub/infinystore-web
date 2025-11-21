
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const Ticker: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white py-2 overflow-hidden border-b border-slate-800 fixed top-0 left-0 w-full z-[60]">
      <div className="animate-marquee whitespace-nowrap flex gap-12 items-center text-xs font-bold uppercase tracking-widest">
        <span>6 Meses de Garantía en Seminuevos</span>
        <span className="text-blue-400">★</span>
        <span>Soporte Personalizado vía WhatsApp</span>
        <span className="text-blue-400">★</span>
        <span>Calidad Garantizada</span>
        <span className="text-blue-400">★</span>
        <span>Tecnología al mejor precio</span>
        <span className="text-blue-400">★</span>
        <span>6 Meses de Garantía en Seminuevos</span>
        <span className="text-blue-400">★</span>
        <span>Soporte Personalizado vía WhatsApp</span>
        <span className="text-blue-400">★</span>
        <span>Calidad Garantizada</span>
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Ticker;

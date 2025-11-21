
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';

interface ComparisonViewProps {
  products: Product[];
  onBack: () => void;
  onAddToCart: (product: Product) => void;
  onRemove: (id: string) => void;
}

const ComparisonView: React.FC<ComparisonViewProps> = ({ products, onBack, onAddToCart, onRemove }) => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50 px-4 md:px-8 animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex justify-between items-center mb-12">
            <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Volver a la tienda
            </button>
            <h1 className="text-2xl font-heading font-bold text-slate-900 hidden md:block">Comparación de Equipos</h1>
        </div>

        <div className="overflow-x-auto pb-12">
          <div className="min-w-[800px] grid" style={{ gridTemplateColumns: `200px repeat(${products.length}, 1fr)` }}>
            
            {/* Header Row (Product Images & Actions) */}
            <div className="p-4 flex items-end pb-8">
               <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Especificaciones</span>
            </div>
            
            {products.map(product => (
                <div key={product.id} className="p-4 flex flex-col items-center text-center relative border-l border-slate-200 bg-white rounded-t-2xl mx-2 shadow-sm">
                    <button 
                        onClick={() => onRemove(product.id)}
                        className="absolute top-2 right-2 text-slate-300 hover:text-red-500 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="w-32 h-32 mb-4 p-2">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2 text-lg leading-tight min-h-[3rem]">{product.name}</h3>
                    <span className="text-xl font-bold text-blue-600 mb-4">${product.price}</span>
                    <button 
                        onClick={() => onAddToCart(product)}
                        className="w-full py-2 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Agregar
                    </button>
                </div>
            ))}

            {/* Comparison Rows */}
            {[
                { label: 'Pantalla', key: 'screen', icon: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25' },
                { label: 'Procesador', key: 'processor', icon: 'M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z' },
                { label: 'Cámara', key: 'camera', icon: 'M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z' },
                { label: 'Batería', key: 'battery', icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' },
                { label: 'Sistema Op.', key: 'os', icon: 'M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z' },
                { label: 'Almacenamiento', key: 'storage', icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125' }
            ].map((row, idx) => (
                <React.Fragment key={row.key}>
                    <div className={`p-4 flex items-center gap-3 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d={row.icon} />
                           </svg>
                        </div>
                        <span className="font-bold text-slate-700 text-sm">{row.label}</span>
                    </div>
                    {products.map(product => (
                        <div key={product.id} className={`p-4 flex items-center justify-center text-center border-l border-slate-200 mx-2 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <span className="text-sm text-slate-600">
                                {(product.specs as any)?.[row.key] || 'N/A'}
                            </span>
                        </div>
                    ))}
                </React.Fragment>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonView;

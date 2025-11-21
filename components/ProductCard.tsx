
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
  onToggleCompare?: () => void;
  isCompareSelected?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, onToggleCompare, isCompareSelected }) => {
  const handleCompareClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (onToggleCompare) onToggleCompare();
  };

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => onClick(product)}>
      
      {/* Compare Checkbox (Top Right) */}
      {onToggleCompare && (
        <button 
            onClick={handleCompareClick}
            className={`absolute top-4 right-4 z-20 p-2 rounded-lg transition-all backdrop-blur-sm flex items-center gap-2 ${
                isCompareSelected 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-white/50 text-slate-500 hover:bg-blue-50 hover:text-blue-600'
            }`}
            title="Comparar"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
            </svg>
        </button>
      )}

      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden bg-slate-50 p-8 flex items-center justify-center">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
            <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-max ${
                product.category === 'Nuevos' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
            }`}>
                {product.category}
            </span>
            {product.isOffer && (
                 <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-rose-100 text-rose-600 w-max">
                    Oferta
                 </span>
            )}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300"></div>
      </div>
      
      {/* Info */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-heading font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">{product.name}</h3>
            {/* Rating */}
            <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-yellow-400">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-bold text-slate-700">{product.rating}</span>
            </div>
        </div>

        <p className="text-sm text-slate-500 mb-4 line-clamp-2">{product.tagline}</p>
        
        <div className="flex justify-between items-center border-t border-slate-100 pt-4">
             <div className="flex flex-col">
                 {product.originalPrice && (
                    <span className="text-xs text-slate-400 line-through">${product.originalPrice}</span>
                 )}
                 <span className="text-xl font-bold text-slate-900">${product.price}</span>
             </div>
             <button className="text-xs font-bold uppercase tracking-wider text-blue-600 group-hover:underline underline-offset-4">
                Ver Detalles
             </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

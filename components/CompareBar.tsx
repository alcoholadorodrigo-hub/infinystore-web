
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';

interface CompareBarProps {
  compareList: Product[];
  onRemove: (id: string) => void;
  onCompare: () => void;
  onClear: () => void;
}

const CompareBar: React.FC<CompareBarProps> = ({ compareList, onRemove, onCompare, onClear }) => {
  if (compareList.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] animate-fade-in-up p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-4 overflow-x-auto w-full sm:w-auto no-scrollbar pb-2 sm:pb-0">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 whitespace-nowrap mr-2">
            Comparar ({compareList.length}/3):
          </span>
          {compareList.map(product => (
            <div key={product.id} className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-3 py-1 pr-2 min-w-max">
              <img src={product.imageUrl} alt={product.name} className="w-6 h-6 object-contain mix-blend-multiply" />
              <span className="text-xs font-bold text-slate-900 max-w-[100px] truncate">{product.name}</span>
              <button 
                onClick={() => onRemove(product.id)}
                className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-slate-200 text-slate-400 transition-colors"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <div className="flex gap-3 w-full sm:w-auto">
            <button 
                onClick={onClear}
                className="px-4 py-3 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-red-500 transition-colors"
            >
                Limpiar
            </button>
            <button 
                onClick={onCompare}
                disabled={compareList.length < 2}
                className="flex-1 sm:flex-none px-8 py-3 bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-blue-500/20"
            >
                Ver Comparación
            </button>
        </div>

      </div>
    </div>
  );
};

export default CompareBar;

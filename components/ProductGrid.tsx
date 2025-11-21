
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import ProductCard from './ProductCard';

const categories = ['Todos', 'Ofertas', 'Nuevos', 'Seminuevos', 'Accesorios'];

interface ProductGridProps {
  onProductClick: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  compareListIds: string[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ onProductClick, onToggleCompare, compareListIds }) => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let products = PRODUCTS;
    
    // 1. Filter by Category
    if (activeCategory !== 'Todos') {
        if (activeCategory === 'Ofertas') {
            products = products.filter(p => p.isOffer);
        } else {
            products = products.filter(p => p.category === activeCategory);
        }
    }

    // 2. Filter by Search
    if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        products = products.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.tagline.toLowerCase().includes(query) ||
            p.features.some(f => f.toLowerCase().includes(query))
        );
    }

    return products;
  }, [activeCategory, searchQuery]);

  return (
    <section id="products" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs bg-blue-50 px-3 py-1 rounded-full">Explora Nuestra Tienda</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">Nuestros Dispositivos</h2>
          
          {/* Search & Filter Container */}
          <div className="w-full max-w-3xl flex flex-col gap-6 mt-4">
             
             {/* Search Bar */}
             <div className="relative w-full group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
                <input 
                    type="text" 
                    placeholder="Buscar iPhone, Samsung, 5G..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-slate-900 font-medium placeholder:text-slate-400 shadow-sm hover:shadow-md"
                />
             </div>

             {/* Categories */}
             <div className="flex flex-wrap justify-center gap-2">
                {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                    activeCategory === cat 
                        ? 'bg-slate-900 text-white border-slate-900 shadow-lg transform -translate-y-0.5' 
                        : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                >
                    {cat}
                </button>
                ))}
            </div>
          </div>
        </div>

        {/* Large Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard 
                key={product.id} 
                product={product} 
                onClick={onProductClick} 
                onToggleCompare={() => onToggleCompare(product)}
                isCompareSelected={compareListIds.includes(product.id)}
            />
          ))}
          {filteredProducts.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center py-24 text-slate-400 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mb-4 opacity-50">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                  <h3 className="text-lg font-bold text-slate-600">No encontramos resultados</h3>
                  <p>Intenta con otra búsqueda o categoría.</p>
              </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

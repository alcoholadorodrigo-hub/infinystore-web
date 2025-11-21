
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect, useMemo } from 'react';
import { Product, ProductColor } from '../types';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
  onProductClick?: (product: Product) => void;
  onToggleCompare?: (product: Product) => void;
  isInCompare?: boolean;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart, onProductClick, onToggleCompare, isInCompare }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [activeMedia, setActiveMedia] = useState<string>(product.imageUrl);
  
  // Construct media list (Images + Optional Video) limited to 5 items
  const mediaList = useMemo(() => {
    const list = [product.imageUrl, ...(product.gallery || [])];
    // Remove duplicates in case main image is in gallery
    const uniqueList = Array.from(new Set(list));
    
    // If video exists, insert it as the second item (or first if only 1 image)
    if (product.videoUrl) {
        if (uniqueList.length > 0) {
            uniqueList.splice(1, 0, product.videoUrl);
        } else {
            uniqueList.push(product.videoUrl);
        }
    }
    
    // Limit to 5 items
    return uniqueList.slice(0, 5);
  }, [product]);

  // Initial selection effect
  useEffect(() => {
    if (product.colors && product.colors.length > 0) {
        // Select first in-stock color preferably
        const firstInStock = product.colors.find(c => c.inStock !== false);
        setSelectedColor(firstInStock || product.colors[0]);
    }
    setSelectedSize('128GB');
    setActiveMedia(product.imageUrl);
  }, [product]);

  // Tech specs storage options
  const sizes = ['128GB', '256GB', '512GB'];
  const showSizes = true; // Always show storage for phones

  // Determine stock status based on selection
  const isColorStock = selectedColor?.inStock !== false;
  const isCombinationAvailable = isColorStock && selectedSize !== null;

  // Get related products
  const relatedProducts = PRODUCTS
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);
    
  const isVideo = (url: string) => url === product.videoUrl;

  return (
    <div className="pt-24 min-h-screen bg-slate-50 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        
        {/* Breadcrumb / Back */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Volver al Catálogo
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
          
          {/* Left: Main Image & Gallery */}
          <div className="flex flex-col gap-6">
            {/* Main Image View */}
            <div className="w-full aspect-square bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-0 flex items-center justify-center relative group">
               {selectedColor && !isVideo(activeMedia) && (
                  <div className="absolute top-4 right-4 flex flex-col items-end z-10">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Color Seleccionado</span>
                      <span className="text-sm font-bold text-slate-900">{selectedColor.name}</span>
                  </div>
               )}
               
               {/* Stock Badge */}
               {selectedColor && !isVideo(activeMedia) && (
                 <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border z-10 ${
                    isCombinationAvailable 
                        ? 'bg-green-50 border-green-200 text-green-700' 
                        : 'bg-red-50 border-red-200 text-red-700'
                 }`}>
                    {isCombinationAvailable ? 'Disponible' : 'Agotado'}
                 </div>
               )}

              {isVideo(activeMedia) ? (
                  <video 
                    src={activeMedia} 
                    controls 
                    autoPlay 
                    muted 
                    loop 
                    className="w-full h-full object-cover"
                  />
              ) : (
                  <div className="w-full h-full p-12">
                    <img 
                        src={activeMedia} 
                        alt={product.name} 
                        className={`w-full h-full object-contain transition-all duration-500 mix-blend-multiply ${!isCombinationAvailable ? 'grayscale opacity-70' : ''}`}
                    />
                  </div>
              )}
            </div>

            {/* Thumbnails (Up to 5) */}
            {mediaList.length > 1 && (
              <div className="grid grid-cols-5 gap-4">
                {mediaList.map((media, idx) => {
                  const isVid = isVideo(media);
                  return (
                    <button
                        key={idx}
                        onClick={() => setActiveMedia(media)}
                        className={`aspect-square rounded-xl bg-white border-2 overflow-hidden transition-all duration-300 relative ${
                        activeMedia === media 
                            ? 'border-blue-600 ring-2 ring-blue-100 ring-offset-2' 
                            : 'border-slate-200 hover:border-blue-300 opacity-70 hover:opacity-100'
                        }`}
                    >
                        {isVid ? (
                            <div className="w-full h-full bg-slate-900 flex items-center justify-center relative">
                                {/* Overlay Play Icon */}
                                <div className="absolute inset-0 flex items-center justify-center z-10">
                                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white ml-0.5">
                                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                {/* Use product main image as thumb background for video */}
                                <img src={product.imageUrl} className="w-full h-full object-cover opacity-50" alt="Video Thumbnail" />
                            </div>
                        ) : (
                            <div className="w-full h-full p-2">
                                <img 
                                src={media} 
                                alt={`${product.name} view ${idx + 1}`} 
                                className="w-full h-full object-contain mix-blend-multiply"
                                />
                            </div>
                        )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-center max-w-xl">
             <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest ${
                    product.category === 'Nuevos' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                }`}>
                    {product.category}
                </span>
                {product.isOffer && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest bg-rose-100 text-rose-600">
                        Oferta
                    </span>
                )}
                {/* Star Rating in Detail */}
                <div className="flex items-center gap-1 ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-bold text-slate-900">{product.rating}</span>
                    <span className="text-xs text-slate-400">({product.reviews} reseñas)</span>
                </div>
             </div>
             
             <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">{product.name}</h1>
             
             <div className="flex items-baseline gap-3 mb-8">
                <span className="text-3xl font-bold text-slate-900">${product.price}</span>
                {product.originalPrice && (
                    <span className="text-xl text-slate-400 line-through decoration-slate-400">${product.originalPrice}</span>
                )}
             </div>
             
             <p className="text-slate-600 leading-relaxed font-normal text-lg mb-8 border-b border-slate-200 pb-8">
               {product.longDescription || product.description}
             </p>

             {product.colors && product.colors.length > 0 && (
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-900">
                        Color: <span className="text-slate-500 font-normal normal-case ml-1">{selectedColor?.name}</span>
                      </span>
                      {!isColorStock && (
                          <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Sin Stock</span>
                      )}
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {product.colors.map((color) => {
                      const isOOS = color.inStock === false;
                      return (
                        <button 
                          key={color.name}
                          onClick={() => setSelectedColor(color)}
                          title={isOOS ? `${color.name} (Agotado)` : color.name}
                          className={`w-10 h-10 rounded-full border-2 transition-all duration-300 relative flex items-center justify-center group ${
                            selectedColor?.name === color.name 
                              ? 'border-blue-600 ring-2 ring-blue-200 ring-offset-2 scale-110' 
                              : 'border-slate-200 hover:scale-105'
                          } ${isOOS ? 'opacity-60' : ''}`}
                          style={{ backgroundColor: color.hex }}
                        >
                          {isOOS && (
                             <div className="absolute inset-0 flex items-center justify-center">
                                 <div className="w-full h-0.5 bg-slate-400 -rotate-45 transform origin-center"></div>
                             </div>
                          )}
                          {/* Tooltip for OOS */}
                          {isOOS && selectedColor?.name !== color.name && (
                             <div className="absolute bottom-full mb-2 px-2 py-1 bg-slate-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none">
                                Agotado
                             </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
             )}

             {showSizes && (
                <div className="mb-8">
                  <span className="block text-xs font-bold uppercase tracking-widest text-slate-900 mb-4">Almacenamiento</span>
                  <div className="flex gap-4">
                    {sizes.map(size => (
                      <button 
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-3 rounded-lg text-sm font-bold transition-all duration-300 border ${
                          selectedSize === size 
                            ? 'border-blue-600 bg-blue-600 text-white shadow-md' 
                            : 'border-slate-200 bg-white text-slate-600 hover:border-blue-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
             )}

             <div className="flex flex-col gap-4 mb-8">
                <div className="flex gap-4">
                    <button 
                        onClick={() => onAddToCart(product)}
                        disabled={!isCombinationAvailable}
                        className={`flex-1 py-4 rounded-xl uppercase tracking-widest text-sm font-bold transition-all shadow-lg transform ${
                            isCombinationAvailable 
                                ? 'bg-slate-900 text-white hover:bg-blue-600 hover:shadow-blue-500/30 hover:-translate-y-1 cursor-pointer' 
                                : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                        }`}
                    >
                        {isCombinationAvailable ? `Añadir al Carrito` : 'Agotado'}
                    </button>
                    {onToggleCompare && (
                        <button 
                            onClick={() => onToggleCompare(product)}
                            className={`px-4 py-4 rounded-xl border-2 transition-colors ${
                                isInCompare 
                                ? 'border-blue-600 bg-blue-50 text-blue-600' 
                                : 'border-slate-200 text-slate-500 hover:border-blue-600 hover:text-blue-600'
                            }`}
                            title="Comparar"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                            </svg>
                        </button>
                    )}
                </div>
               
               {!isCombinationAvailable && (
                  <p className="text-sm text-red-500 font-medium text-center bg-red-50 p-3 rounded-lg border border-red-100">
                      La combinación seleccionada no se encuentra disponible en este momento.
                  </p>
               )}
             </div>
             
             <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                 <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Especificaciones Técnicas</h4>
                 <div className="space-y-3">
                    {product.specs && (
                        <>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Pantalla</span>
                                <span className="font-medium text-slate-900 text-right">{product.specs.screen}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Procesador</span>
                                <span className="font-medium text-slate-900 text-right">{product.specs.processor}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Cámara</span>
                                <span className="font-medium text-slate-900 text-right max-w-[60%]">{product.specs.camera}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Batería</span>
                                <span className="font-medium text-slate-900 text-right">{product.specs.battery}</span>
                            </div>
                        </>
                    )}
                    {/* Fallback to generic features if detailed specs missing */}
                    {!product.specs && product.features.map((feature, idx) => (
                        <div key={idx} className="flex justify-between text-sm">
                             <span className="text-slate-500">Caract. {idx + 1}</span>
                             <span className="font-medium text-slate-900 text-right">{feature}</span>
                        </div>
                    ))}
                 </div>
             </div>

          </div>
        </div>
        
        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
            <div className="border-t border-slate-200 pt-16">
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-8 text-center">Productos Relacionados</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {relatedProducts.map(rp => (
                        <ProductCard 
                            key={rp.id} 
                            product={rp} 
                            onClick={(p) => onProductClick && onProductClick(p)} 
                        />
                    ))}
                </div>
            </div>
        )}

      </div>
    </div>
  );
};

export default ProductDetail;

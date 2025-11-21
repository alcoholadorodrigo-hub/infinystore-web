
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';
import { Product } from '../types';

interface CheckoutProps {
  items: Product[];
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onBack }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const shipping = 0; // Free shipping / Pick up
  const total = subtotal + shipping;

  const handleWhatsAppCheckout = () => {
    if (!termsAccepted) return;

    const phoneNumber = "5492614194014";
    const itemsList = items.map(i => `- ${i.name} ($${i.price})`).join('\n');
    
    const message = `Hola InfinityStore! Quiero finalizar mi pedido:\n\n${itemsList}\n\nTotal: $${total}\n\nAcepto los términos de entrega (Punto de encuentro a convenir).\nQuedo a la espera para coordinar.`;
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 bg-[#F5F2EB] animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Volver a la Tienda
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <div>
            <h1 className="text-3xl font-serif text-[#2C2A26] mb-4">Finalizar Compra</h1>
            <p className="text-sm text-[#5D5A53] mb-12">Completa tu pedido contactándonos directamente.</p>
            
            <div className="space-y-12">
              {/* Section 1: Contact */}
              <div>
                <h2 className="text-xl font-serif text-[#2C2A26] mb-6">Información de Contacto</h2>
                <div className="space-y-4">
                   <input type="email" placeholder="Email address" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors" />
                   <div className="flex items-center gap-2">
                     <input type="checkbox" id="newsletter" className="accent-[#2C2A26]" />
                     <label htmlFor="newsletter" className="text-sm text-[#5D5A53]">Quiero recibir novedades y ofertas</label>
                   </div>
                </div>
              </div>

              {/* Section 2: Location Info (Renamed slightly to fit context) */}
              <div>
                <h2 className="text-xl font-serif text-[#2C2A26] mb-6">Datos de Ubicación</h2>
                <p className="text-xs text-[#A8A29E] mb-4">Necesitamos estos datos para evaluar el punto de encuentro más cercano.</p>
                <div className="space-y-4">
                   <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="Nombre" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors" />
                      <input type="text" placeholder="Apellido" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors" />
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="Ciudad / Zona" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors" />
                      <input type="text" placeholder="Teléfono de contacto" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors" />
                   </div>
                </div>
              </div>

              {/* Terms and Conditions Section */}
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">
                  <h3 className="font-bold text-[#2C2A26] text-sm mb-3 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-orange-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                      Importante: Términos de Entrega
                  </h3>
                  <ul className="list-disc list-inside text-xs text-[#5D5A53] space-y-2 mb-4 leading-relaxed">
                      <li><strong>No realizamos envíos por correo postal.</strong></li>
                      <li>La entrega de los productos se coordina exclusivamente en un <strong>punto de encuentro a convenir</strong> con el vendedor (zonas seguras y públicas).</li>
                      <li>La compra se finaliza y confirma a través de <strong>WhatsApp</strong> con un asesor.</li>
                  </ul>
                  <div className="flex items-start gap-3 pt-2 border-t border-orange-100">
                      <div className="relative flex items-center">
                          <input 
                            type="checkbox" 
                            id="terms" 
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                            className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-slate-300 shadow-sm checked:border-blue-600 checked:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20" 
                          />
                           <svg className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                           </svg>
                      </div>
                      <label htmlFor="terms" className="text-sm font-medium text-[#2C2A26] cursor-pointer select-none leading-tight">
                          He leído y acepto los términos y condiciones de entrega y pago.
                      </label>
                  </div>
              </div>

              {/* WhatsApp Button (Replaces Payment) */}
              <div className="pt-6 border-t border-[#D6D1C7]">
                <button 
                    onClick={handleWhatsAppCheckout}
                    disabled={!termsAccepted}
                    className={`w-full py-4 text-white uppercase tracking-widest text-sm font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-3 ${
                        termsAccepted 
                        ? 'bg-[#25D366] hover:bg-[#128C7E] cursor-pointer transform hover:-translate-y-0.5' 
                        : 'bg-slate-300 cursor-not-allowed shadow-none opacity-70'
                    }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                    {termsAccepted ? 'Finalizar pedido por WhatsApp' : 'Acepta los términos para continuar'}
                </button>
                <p className="text-center text-[#A8A29E] text-xs mt-4">
                    Te redirigiremos a WhatsApp para coordinar el pago y envío con un asesor.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Summary */}
          <div className="lg:pl-12 lg:border-l border-[#D6D1C7]">
            <h2 className="text-xl font-serif text-[#2C2A26] mb-8">Resumen del Pedido</h2>
            
            <div className="space-y-6 mb-8">
               {items.map((item, idx) => (
                 <div key={idx} className="flex gap-4">
                    <div className="w-16 h-16 bg-[#EBE7DE] relative">
                       <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                       <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#2C2A26] text-white text-[10px] flex items-center justify-center rounded-full">1</span>
                    </div>
                    <div className="flex-1">
                       <h3 className="font-serif text-[#2C2A26] text-base">{item.name}</h3>
                       <p className="text-xs text-[#A8A29E]">{item.category}</p>
                    </div>
                    <span className="text-sm text-[#5D5A53]">${item.price}</span>
                 </div>
               ))}
            </div>

            <div className="border-t border-[#D6D1C7] pt-6 space-y-2">
              <div className="flex justify-between text-sm text-[#5D5A53]">
                 <span>Subtotal</span>
                 <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-sm text-[#5D5A53]">
                 <span>Envío (A convenir)</span>
                 <span>-</span>
              </div>
            </div>
            
            <div className="border-t border-[#D6D1C7] mt-6 pt-6">
               <div className="flex justify-between items-center">
                 <span className="font-serif text-xl text-[#2C2A26]">Total</span>
                 <div className="flex items-end gap-2">
                   <span className="text-xs text-[#A8A29E] mb-1">USD</span>
                   <span className="font-serif text-2xl text-[#2C2A26]">${total}</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

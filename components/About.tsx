/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-slate-900 text-white">
      
      {/* Introduction / Story */}
      <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-4 block">Nuestra Misión</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
            Tecnología que <br/> rompe límites.
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>
          <p className="text-lg text-slate-300 font-light leading-relaxed mb-6">
            InfinityStore nació con una idea simple: la tecnología de punta debería estar al alcance de todos. No creemos en barreras. Ya sea que busques el último lanzamiento del mercado o un dispositivo seminuevo de alta gama, nosotros somos tu puente hacia la innovación.
          </p>
          <p className="text-lg text-slate-300 font-light leading-relaxed">
            Nos especializamos en curar una selección de smartphones que definen el futuro. Nuestro compromiso con la calidad es absoluto: cada dispositivo usado pasa por pruebas exhaustivas para garantizar que funcione como el primer día.
          </p>
        </div>
        <div className="md:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl opacity-20 blur-lg"></div>
            <img 
                src="https://images.unsplash.com/photo-1556656793-02774a8c577a?auto=format&fit=crop&q=80&w=1000" 
                alt="InfinityStore Lab" 
                className="relative rounded-2xl shadow-2xl border border-slate-700"
            />
        </div>
      </div>

      {/* Stats / Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[400px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1592434134753-a70baf7979d5?auto=format&fit=crop&q=80&w=1000" 
             alt="Inside a smartphone" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-60"
           />
           <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
           <div className="absolute inset-0 flex flex-col justify-center p-12">
               <h3 className="text-3xl font-heading font-bold mb-4">Garantía Infinity</h3>
               <p className="text-slate-200 max-w-md">Tu tranquilidad es nuestra prioridad. Todos nuestros equipos seminuevos cuentan con 6 meses de garantía directa y certificación de funcionalidad al 100%.</p>
           </div>
        </div>
        
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-white text-slate-900">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-6">Sostenibilidad</span>
           <h3 className="text-4xl font-heading font-bold mb-6 leading-tight">
             El ciclo infinito.
           </h3>
           <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
             Al elegir un celular seminuevo, estás extendiendo la vida útil de la tecnología y reduciendo la huella de carbono. Es una decisión inteligente para tu bolsillo y vital para el planeta.
           </p>
           <ul className="space-y-4">
                <li className="flex items-center gap-3 font-medium text-slate-800">
                    <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                    Reducción de residuos electrónicos
                </li>
                <li className="flex items-center gap-3 font-medium text-slate-800">
                    <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                    Economía circular
                </li>
           </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
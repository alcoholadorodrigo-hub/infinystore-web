
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs bg-blue-50 px-3 py-1 rounded-full">Atención al Cliente</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mt-6">Ponte en Contacto</h2>
            <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto">
                ¿Tienes dudas sobre algún equipo o necesitas asesoramiento personalizado? 
                Estamos disponibles para ayudarte.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card Phone/Whatsapp */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center hover:shadow-lg hover:border-blue-200 transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Escríbenos</h3>
                <p className="text-slate-500 mb-6">Atención personalizada vía WhatsApp.</p>
                <a 
                    href="https://wa.me/5492614194014" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                    +54 9 261 419 4014
                </a>
            </div>

            {/* Card Email */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center hover:shadow-lg hover:border-blue-200 transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Envíanos un Correo</h3>
                <p className="text-slate-500 mb-6">Respondemos tus consultas a la brevedad.</p>
                <a 
                    href="mailto:alcoholadorodrigo@gmail.com" 
                    className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors break-all"
                >
                    alcoholadorodrigo@gmail.com
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

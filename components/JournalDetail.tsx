/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { JournalArticle } from '../types';

interface JournalDetailProps {
  article: JournalArticle;
  onBack: () => void;
}

const JournalDetail: React.FC<JournalDetailProps> = ({ article, onBack }) => {
  return (
    <div className="min-h-screen bg-white animate-fade-in-up">
       {/* Hero Image for Article */}
       <div className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden">
          <img 
             src={article.image} 
             alt={article.title} 
             className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
             <h1 className="text-4xl md:text-6xl font-heading font-bold text-white text-center px-6 drop-shadow-lg leading-tight max-w-4xl">
               {article.title}
             </h1>
          </div>
       </div>

       <div className="max-w-3xl mx-auto px-6 md:px-12 -mt-10 relative z-10 pb-32">
          <div className="bg-white p-8 md:p-12 shadow-2xl rounded-t-2xl">
             <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-6">
                <button 
                  onClick={onBack}
                  className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                  Volver
                </button>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{article.date}</span>
             </div>

             <div className="prose prose-slate prose-lg mx-auto">
               {article.content}
             </div>
             
             <div className="mt-16 pt-12 border-t border-slate-100 flex justify-center">
                 <span className="text-2xl font-heading font-bold italic text-slate-900">InfinityStore</span>
             </div>
          </div>
       </div>
    </div>
  );
};

export default JournalDetail;
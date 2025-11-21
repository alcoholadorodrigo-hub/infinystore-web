/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { JOURNAL_ARTICLES } from '../constants';
import { JournalArticle } from '../types';

interface JournalProps {
  onArticleClick: (article: JournalArticle) => void;
}

const Journal: React.FC<JournalProps> = ({ onArticleClick }) => {
  return (
    <section id="journal" className="bg-slate-50 py-24 px-6 md:px-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-6 border-b border-slate-200">
            <div>
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2">Blog de Tecnología</span>
                <h2 className="text-4xl font-heading font-bold text-slate-900">Noticias y Tips</h2>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {JOURNAL_ARTICLES.map((article) => (
                <div key={article.id} className="group cursor-pointer flex flex-col text-left bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300" onClick={() => onArticleClick(article)}>
                    <div className="w-full aspect-video overflow-hidden">
                        <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">{article.date}</span>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">{article.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                        <span className="text-xs font-bold text-blue-600 mt-auto uppercase tracking-wider group-hover:underline">Leer Artículo &rarr;</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
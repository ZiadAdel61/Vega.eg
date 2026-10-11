import React from 'react';
import { MessageSquare } from 'lucide-react';
import { companyContact } from '../data/companyData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="محادثة واتساب سريعة" className="fixed bottom-6 left-6 z-40 flex items-center group">
      <a
        href={companyContact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all duration-300"
        aria-label="تواصل فوري عبر الواتساب"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none" />
        <MessageSquare className="w-7 h-7 fill-slate-950 text-emerald-400" />
      </a>

      {/* Hover tooltip banner */}
      <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3 pointer-events-none">
        <div className="bg-vega-purple/95 text-white text-xs font-bold py-2 px-3.5 rounded-xl border border-vega-sand/30 shadow-xl whitespace-nowrap backdrop-blur-md">
          <span>تواصل مباشر عبر الواتساب</span>
        </div>
      </div>
    </aside>
  );
};

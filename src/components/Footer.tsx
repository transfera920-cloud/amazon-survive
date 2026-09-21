import React from 'react';
import { Compass, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-slate-800 bg-[#0c1014] text-slate-400 py-10 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-5xl mx-auto relative flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
        {/* Centered Brand Link */}
        <a
          href="https://amazon-hike.com/"
          className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors group"
        >
          <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 group-hover:border-amber-500/40 flex items-center justify-center text-amber-400 transition-colors">
            <Compass className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="text-left">
            <span className="text-base font-bold text-slate-200 group-hover:text-amber-400 block transition-colors">
              亞馬遜國家山岳協會
            </span>
            <span className="text-xs font-mono text-slate-400 tracking-wider block">
              Amazon National Alpine Association
            </span>
          </div>
        </a>

        {/* Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="sm:absolute sm:right-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>返回頂部</span>
        </button>
      </div>
    </footer>
  );
};


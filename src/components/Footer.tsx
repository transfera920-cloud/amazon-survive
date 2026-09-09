import React from 'react';
import { Compass, Shield, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-slate-800 bg-[#0c1014] text-slate-400 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Brand Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Compass className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-base font-bold text-slate-200">
                亞馬遜國家山岳協會
              </p>
              <p className="text-xs font-mono text-slate-400 tracking-wider">
                Amazon National Alpine Association
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>返回頂部</span>
          </button>
        </div>

        {/* Disclaimer Warning Card */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 leading-relaxed space-y-1">
          <div className="flex items-center gap-1.5 text-amber-400 font-semibold mb-1">
            <Shield className="w-4 h-4" />
            <span>教育用途聲明 (Educational Disclaimer)</span>
          </div>
          <p>
            本章教材僅供教育用途。實際山區事故應依現場狀況與專業救援單位指示行動。
          </p>
        </div>

        {/* Copyright & Meta */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono">
          <p>© 2026 亞馬遜國家山岳協會 · 第十一章 緊急應變與野外求生</p>
          <p>MOUNTAIN EDUCATION CURRICULUM SERIES</p>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, ArrowUp, BookOpen, ListOrdered } from 'lucide-react';
import { tocItems } from './TableOfContents.tsx';

interface NavbarProps {
  activeId?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeId }) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const progress = Math.min(100, Math.max(0, (totalScroll / windowHeight) * 100));
        setReadingProgress(progress);
      }
      setShowScrollTop(totalScroll > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
        {/* Reading Progress Indicator Bar */}
        <div
          className="h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(readingProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="章節閱讀進度"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          {/* Brand Left */}
          <a
            href="https://amazon-hike.com/"
            className="flex items-center gap-2.5 text-slate-200 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Compass className="w-4 h-4" />
            </div>
            <div className="leading-tight">
              <span className="text-xs sm:text-sm font-bold block tracking-wide">
                亞馬遜國家山岳協會
              </span>
              <span className="text-[10px] font-mono text-slate-400 hidden sm:block">
                AMAZON NATIONAL ALPINE ASSOCIATION
              </span>
            </div>
          </a>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <a
              href="#table-of-contents"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-medium transition-colors"
            >
              <ListOrdered className="w-3.5 h-3.5 text-amber-400" />
              <span>目錄</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
              aria-label="展開行動版導覽目錄"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-4 space-y-2 shadow-2xl max-h-[75vh] overflow-y-auto">
            <div className="pb-2 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono">章節快速跳轉 (10 個核心主題)</span>
              <span className="text-amber-400 font-bold">{Math.round(readingProgress)}% 閱讀完畢</span>
            </div>
            <div className="space-y-1 pt-1">
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium ${
                    activeId === item.id
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                      : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-amber-400 font-bold">{item.num}</span>
                    <span>{item.title}</span>
                  </div>
                </a>
              ))}
              <a
                href="#curriculum-relations"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-slate-400 hover:bg-slate-900 border-t border-slate-800/80 mt-2"
              >
                <span>本章與其他章節關係</span>
              </a>
              <a
                href="#key-takeaways"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-amber-300 hover:bg-slate-900 font-bold"
              >
                <span>重點整理與系統圖</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-all shadow-xl backdrop-blur cursor-pointer"
          aria-label="返回頁面頂部"
          title="返回頁首"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

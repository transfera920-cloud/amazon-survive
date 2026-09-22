import React from 'react';
import { Compass, ShieldAlert, ArrowDown, BookOpen } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToCurriculum = () => {
    const el = document.getElementById('s1');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative w-full border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-[#121619] pt-12 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Subtle Topographical SVG Background Texture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <path d="M0,200 C300,120 600,280 900,160 L1200,220 L1200,600 L0,600 Z" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M0,270 C320,180 580,340 880,210 L1200,300 L1200,600 L0,600 Z" fill="none" stroke="#64748b" strokeWidth="1" />
          <path d="M0,350 C360,250 620,410 860,300 L1200,390 L1200,600 L0,600 Z" fill="none" stroke="#475569" strokeWidth="1.2" />
          <path d="M0,440 C340,360 660,490 920,380 L1200,480 L1200,600 L0,600 Z" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Brand & Chapter Identification Hierarchy */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-800/80 mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Compass className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-amber-400/90 font-semibold font-mono">
                AMAZON NATIONAL ALPINE ASSOCIATION
              </p>
              <p className="text-sm font-bold tracking-wide text-slate-200">
                亞馬遜國家山岳協會 · 登山教育教材
              </p>
            </div>
          </div>
        </div>

        {/* Main Grid: Headline & Alpine Vector Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            {/* Auxiliary Keywords Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs sm:text-sm font-medium">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
              <span>登山事故｜應變現場｜生存｜台灣山區</span>
            </div>

            {/* Chapter Badge & Strict ONLY ONE H1 */}
            <div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800/90 border border-slate-700/70 text-slate-400 mb-2">
                第十一章
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                登山緊急應變與野外求生
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-medium text-slate-300 leading-relaxed">
              面對突發事故時，學習保護生命、降低風險並等待救援。
            </p>

            {/* Core Philosophy Callout Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border-l-4 border-amber-500 border-y border-r border-slate-800 text-slate-300 text-sm sm:text-base leading-relaxed shadow-lg">
              <span className="text-amber-400 font-bold block mb-1 font-mono text-xs uppercase tracking-wider">
                CORE PRINCIPLE ｜ 核心理念
              </span>
              事故發生後，最重要的不是繼續完成行程，而是<strong className="text-amber-200 font-semibold">保護生命、控制風險</strong>，並讓隊伍進入可以<strong className="text-amber-200 font-semibold">等待救援或安全撤離</strong>的狀態。
            </div>

            {/* Action Jump Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={scrollToCurriculum}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors shadow-lg shadow-amber-500/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>開始研讀本章教材</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href="#curriculum-relations"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-colors border border-slate-700"
              >
                <span>系列教材脈絡</span>
              </a>
            </div>
          </div>

          {/* Hero Native Inline SVG Visual: Mountain Emergency & Shelter Schematic */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-700/80 bg-slate-900/95 p-4 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span>ALPINE TOPOGRAPHY & RESCUE</span>
                <span className="text-amber-400">ELEV. 3200M</span>
              </div>

              {/* Native Vector SVG: Alpine Ridge & Survival Bivy Vector */}
              <svg
                viewBox="0 0 400 300"
                className="w-full h-auto py-2"
                role="img"
                aria-label="高山地形與緊急避難示意圖解"
              >
                <title>高山避難地形與救援訊號向量圖解</title>
                <defs>
                  <linearGradient id="mountain-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#334155" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                  <linearGradient id="ridge-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#475569" />
                    <stop offset="100%" stopColor="#1e293b" />
                  </linearGradient>
                </defs>

                {/* Sky and Star Accents */}
                <circle cx="80" cy="50" r="1.5" fill="#94a3b8" />
                <circle cx="220" cy="30" r="1" fill="#94a3b8" />
                <circle cx="340" cy="65" r="1.5" fill="#94a3b8" />

                {/* Distant Ridge Line */}
                <path
                  d="M 0 170 L 60 140 L 140 165 L 230 110 L 310 145 L 400 120 L 400 300 L 0 300 Z"
                  fill="url(#mountain-grad)"
                  stroke="#475569"
                  strokeWidth="1"
                />

                {/* Forefront Mountain Ridge with Lee-side (背風側) */}
                <path
                  d="M 0 210 L 90 160 L 180 185 L 260 135 L 340 190 L 400 170 L 400 300 L 0 300 Z"
                  fill="url(#ridge-grad)"
                  stroke="#64748b"
                  strokeWidth="1.2"
                />

                {/* Wind Vectors (迎風面) */}
                <g stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.7">
                  <path d="M 20 110 L 70 120" />
                  <path d="M 15 130 L 65 140" />
                  <path d="M 25 150 L 75 160" />
                </g>
                <text x="35" y="100" fill="#38bdf8" fontSize="10" fontWeight="bold">強風侵襲向</text>

                {/* Emergency Shelter Site (背風避難點) */}
                <g transform="translate(200, 195)">
                  {/* Pulse Rings */}
                  <circle cx="0" cy="0" r="18" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" />
                  <circle cx="0" cy="0" r="28" fill="none" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.3" />

                  {/* Shelter Tent / Bivy Vector */}
                  <polygon points="-14,8 0,-12 14,8" fill="#f59e0b" stroke="#fef08a" strokeWidth="1.5" />
                  <line x1="0" y1="-12" x2="0" y2="8" stroke="#78350f" strokeWidth="1.5" />

                  {/* Beacon Light */}
                  <circle cx="0" cy="-14" r="3" fill="#fef08a" />

                  <rect x="-45" y="14" width="90" height="20" rx="4" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
                  <text x="0" y="28" fill="#fef08a" fontSize="10" fontWeight="bold" textAnchor="middle">
                    安全背風待援點
                  </text>
                </g>

                {/* Hazard Ridge (危險稜線) */}
                <g transform="translate(260, 125)">
                  <circle cx="0" cy="0" r="4" fill="#ef4444" />
                  <text x="8" y="4" fill="#fca5a5" fontSize="10" fontWeight="bold">稜線迎雷暴露區 (撤離)</text>
                </g>

                {/* Ravine Downcut Warning (溪谷下切警告) */}
                <g transform="translate(320, 260)">
                  <path d="M -15 0 L 15 0" stroke="#ef4444" strokeWidth="2" />
                  <text x="0" y="18" fill="#f87171" fontSize="10" fontWeight="bold" textAnchor="middle">
                    ❌ 嚴禁盲目下切溪谷
                  </text>
                </g>
              </svg>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>背風防風 · 避免失溫</span>
                <span className="text-amber-400 font-mono font-medium">STANDARD PROTOCOL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

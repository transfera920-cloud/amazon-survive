import React from 'react';
import { BookMarked, ArrowRight, ShieldCheck, PhoneCall, HeartPulse } from 'lucide-react';

export const CurriculumRelations: React.FC = () => {
  return (
    <section id="curriculum-relations" aria-labelledby="heading-relations" className="scroll-mt-24">
      <div className="flex items-center gap-3 pb-3 mb-6 border-b border-slate-800">
        <span className="font-mono text-xs sm:text-sm font-bold px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
          CURRICULUM CONTEXT
        </span>
        <h2 id="heading-relations" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          本章與其他章節的關係
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 space-y-6">
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          亞馬遜國家山岳協會登山教育教材採取層層遞進之安全應變體系架構。理解本章在整體 16 章登山教育系列中的核心定位：
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Ch 9 */}
          <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-slate-400 px-2.5 py-1 rounded bg-slate-800">
                  Chapter 09
                </span>
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">第 9 章 登山風險管理</h3>
              <p className="text-xs text-amber-400/90 font-semibold mb-2">預防階段</p>
              <p className="text-sm text-slate-300">
                深入探討裝備準備、天候判讀、路線規劃與行前風險辨識，主軸在於<strong>預防事故發生</strong>。
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800 text-xs text-slate-400">
              前置防線 · 防患於未然
            </div>
          </div>

          {/* Ch 10 */}
          <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-slate-400 px-2.5 py-1 rounded bg-slate-800">
                  Chapter 10
                </span>
                <PhoneCall className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">第 10 章 求援與應變</h3>
              <p className="text-xs text-sky-400/90 font-semibold mb-2">通訊與求援啟動</p>
              <p className="text-sm text-slate-300">
                探討通訊裝備運用、座標傳遞、留守人機制與報案流程，主軸在於<strong>啟動外部救援</strong>。
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800 text-xs text-slate-400">
              對外樞紐 · 連接搜救能量
            </div>
          </div>

          {/* Ch 11 (Current) */}
          <div className="p-5 rounded-xl bg-slate-950/90 border-2 border-amber-500/80 flex flex-col justify-between space-y-4 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-slate-950 px-2.5 py-1 rounded bg-amber-400">
                  Chapter 11 · 本章
                </span>
                <HeartPulse className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-amber-200 mb-1">第 11 章 緊急應變與野外求生</h3>
              <p className="text-xs text-amber-400 font-bold mb-2">現場處置與維持生命</p>
              <p className="text-sm text-slate-200">
                事故現場如何維持生命與等待救援。本章是：<strong>事故發生後的現場生存與隊伍應變</strong>。
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800 text-xs text-amber-300 font-semibold">
              守護生命 · 現場自救與隊伍互持
            </div>
          </div>
        </div>

        {/* Narrative Connection Banner */}
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-slate-200 text-sm leading-relaxed">
          <strong className="text-amber-300">系列關聯總結：</strong>
          第 9 章致力於不讓事故發生；第 10 章致力於讓外部搜救力量知曉並啟動；而第 11 章則是當危機已經在現場降臨時，如何讓所有人<strong>活著支撐到搜救隊伍抵達</strong>。
        </div>
      </div>
    </section>
  );
};

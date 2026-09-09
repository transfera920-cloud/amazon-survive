import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { Svg11ComprehensiveSystem } from './SvgDiagrams.tsx';

export const KeyTakeaways: React.FC = () => {
  const takeaways = [
    {
      num: '01',
      title: '發生事故先控制狀況，不要慌亂。',
      desc: '以 STOP 原則停止移動、冷靜思考、細緻觀察並制定計畫，避免直覺恐慌導致次生災難。',
    },
    {
      num: '02',
      title: '保護生命比完成行程重要。',
      desc: '登山的終極目標是平安回家。果斷終止進程，將所有資源投注於傷情控制與維持生命。',
    },
    {
      num: '03',
      title: '等待救援也是一種能力。',
      desc: '有效等待需要高度紀律：嚴防失溫、小口節約補水、心理作息互持並以標準間隔發送信號。',
    },
    {
      num: '04',
      title: '野外環境包含動植物與自然危害。',
      desc: '不知不食原則杜絕有毒植物，野生動物保持距離避讓，極端天候遠離溪谷與山脊稜線。',
    },
    {
      num: '05',
      title: '正確應變可以降低事故傷害。',
      desc: '一位冷靜的領隊、有序清點分工的隊伍與原地穩定策略，往往決定了救援能否化險為夷。',
    },
  ];

  return (
    <section id="key-takeaways" aria-labelledby="heading-takeaways" className="scroll-mt-24 space-y-10">
      <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
        <span className="font-mono text-xs sm:text-sm font-bold px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
          SUMMARY
        </span>
        <h2 id="heading-takeaways" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          本章重點整理 (Key Takeaways)
        </h2>
      </div>

      {/* 5 Takeaways Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {takeaways.map((item, idx) => (
          <div
            key={item.num}
            className={`p-6 rounded-2xl border bg-slate-900/80 relative overflow-hidden flex flex-col justify-between ${
              idx === 4
                ? 'md:col-span-2 lg:col-span-2 border-amber-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/20'
                : 'border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-800/80">
              <span className="font-mono font-black text-2xl text-amber-400">
                {item.num}
              </span>
              <CheckCircle2 className="w-5 h-5 text-amber-400/80" />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* SVG 11: Comprehensive System Diagram */}
      <div className="pt-4">
        <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/30 mb-4 text-center sm:text-left">
          <h3 className="text-lg font-bold text-amber-300 flex items-center justify-center sm:justify-start gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            第十一章 完整事故應變閉環系統圖解
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            本圖總結全章核心架構，展示從事故發生到安全待援或撤離之完整動態反饋閉環。
          </p>
        </div>
        <Svg11ComprehensiveSystem />
      </div>
    </section>
  );
};

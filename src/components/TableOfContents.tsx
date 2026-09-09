import React from 'react';
import { ListOrdered, ChevronRight } from 'lucide-react';
import { TocItem } from '../types.ts';

export const tocItems: TocItem[] = [
  {
    id: 's1',
    num: '01',
    title: '事故發生後的第一時間處置',
    shortDesc: 'STOP 原則與行動優先順序',
  },
  {
    id: 's2',
    num: '02',
    title: '事故現場安全評估',
    shortDesc: '環境危險、人員狀況與移動決策',
  },
  {
    id: 's3',
    num: '03',
    title: '常見傷害與現場處置',
    shortDesc: '外傷出血、扭傷骨折、休克與失溫',
  },
  {
    id: 's4',
    num: '04',
    title: '迷途與失去方向時的應變',
    shortDesc: '冷靜停留、杜絕盲目下切溪谷',
  },
  {
    id: 's5',
    num: '05',
    title: '等待救援的生存策略',
    shortDesc: '保暖、水分、心理與提高被發現率',
  },
  {
    id: 's6',
    num: '06',
    title: '野生動物遭遇與防護',
    shortDesc: '黑熊、山豬、蜂類與蛇類應對',
  },
  {
    id: 's7',
    num: '07',
    title: '有毒植物與野外環境危害',
    shortDesc: '不知不食原則與接觸性危害處置',
  },
  {
    id: 's8',
    num: '08',
    title: '極端環境應變',
    shortDesc: '暴雨暴漲、雷擊防護與大雪低溫',
  },
  {
    id: 's9',
    num: '09',
    title: '野外求生基本能力',
    shortDesc: '避難位置、能源節制與物資配給',
  },
  {
    id: 's10',
    num: '10',
    title: '領隊與隊伍緊急應變',
    shortDesc: '秩序維持、分工照護與撤退方案',
  },
];

interface TableOfContentsProps {
  activeId?: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ activeId }) => {
  return (
    <nav
      id="table-of-contents"
      aria-label="章節目錄"
      className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 sm:p-6 shadow-xl backdrop-blur-sm"
    >
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <ListOrdered className="w-5 h-5 text-amber-400" aria-hidden="true" />
          <h2 className="text-base sm:text-lg font-bold text-white tracking-wide">
            本章核心目錄 (Table of Contents)
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
          共 10 個核心主題
        </span>
      </div>

      <p className="text-xs sm:text-sm text-slate-400 mb-5 leading-relaxed">
        點擊下方任一主題，可直接跳轉至對應教材內容與教育圖解。遵循標準急救與求生框架。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {tocItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`group flex items-start gap-3 p-3 rounded-xl border transition-all duration-200 ${
                isActive
                  ? 'border-amber-500/60 bg-amber-500/10 text-white shadow-md'
                  : 'border-slate-800/80 bg-slate-950/50 hover:bg-slate-800/50 hover:border-slate-700 text-slate-300'
              }`}
            >
              <span
                className={`inline-flex items-center justify-center w-7 h-7 shrink-0 rounded-md font-mono text-xs font-bold transition-colors ${
                  isActive
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-slate-800 text-amber-400 group-hover:bg-slate-700'
                }`}
              >
                {item.num}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-sm font-semibold truncate group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${
                      isActive ? 'text-amber-400' : 'text-slate-600'
                    }`}
                    aria-hidden="true"
                  />
                </div>
                <span className="text-xs text-slate-400 block truncate mt-0.5">
                  {item.shortDesc}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

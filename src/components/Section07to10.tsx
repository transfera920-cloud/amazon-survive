import React from 'react';
import { Shield, CloudRain, Zap, Snowflake, Tent, BatteryCharging, PackageCheck, Users } from 'lucide-react';
import {
  Svg07ToxicPlants,
  Svg08ExtremeEnvironment,
  Svg09ResourceManagement,
  Svg10LeaderResponse,
} from './SvgDiagrams.tsx';

export const Section07to10: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* 07 有毒植物與野外環境危害 */}
      <section id="s7" aria-labelledby="heading-s7" className="scroll-mt-24">
        <div className="flex items-center gap-3 pb-3 mb-6 border-b border-slate-800">
          <span className="font-mono text-xs sm:text-sm font-bold px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
            SECTION 07
          </span>
          <h2 id="heading-s7" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            有毒植物與野外環境危害
          </h2>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 一、不明植物一律不食用 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-red-300">
                一、不明植物一律不食用
              </h3>

              <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-800/80 text-sm">
                <p className="font-bold text-amber-300 mb-1">最基本的觀念：</p>
                <p className="text-base font-extrabold text-white">不知道就不要吃。</p>
              </div>

              <div>
                <p className="text-xs text-slate-400 font-mono mb-1.5">例如：</p>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  <li>• 不明野果</li>
                  <li>• 不明根莖</li>
                  <li>• 不明菌類</li>
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-1 text-xs sm:text-sm text-rose-200/90 leading-relaxed">
                <p className="font-bold text-rose-300">危險：辨識困難是常態，不是例外。</p>
                <p>許多有毒植物外觀與可食植物相似。飢餓時判斷力下降，風險更高。</p>
              </div>
            </div>

            {/* 二、接觸性危害 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-amber-300">
                二、接觸性危害
              </h3>

              <div>
                <p className="text-xs text-slate-400 font-mono mb-1.5">類型：</p>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  <li>• 刺激性植物，例如咬人貓、咬人狗等</li>
                  <li>• 過敏原植物</li>
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <p className="text-xs text-amber-400 font-mono font-bold mb-2">處置要則：</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>以清水沖洗患部</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>避免抓破皮膚</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>持續觀察紅腫與過敏症狀</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SVG 07 Diagram */}
          <Svg07ToxicPlants />
        </div>
      </section>

      {/* 08 極端環境應變 */}
      <section id="s8" aria-labelledby="heading-s8" className="scroll-mt-24">
        <div className="flex items-center gap-3 pb-3 mb-6 border-b border-slate-800">
          <span className="font-mono text-xs sm:text-sm font-bold px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
            SECTION 08
          </span>
          <h2 id="heading-s8" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            極端環境應變
          </h2>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 一、暴雨 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h3 className="text-lg font-bold text-sky-300 flex items-center gap-2">
                <CloudRain className="w-5 h-5 text-sky-400" />
                一、暴雨
              </h3>
              <p className="text-xs text-slate-400 font-mono">注意：</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span className="font-semibold text-rose-200">溪水暴漲的致命性最高</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>山坡崩塌與土石流風險</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>落石頻率上升</span>
                </li>
              </ul>
            </div>

            {/* 二、雷擊 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h3 className="text-lg font-bold text-amber-300 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-400" />
                二、雷擊
              </h3>
              <p className="text-xs text-slate-400 font-mono">防範要點：</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>避免停留於稜線、山頭</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>遠離孤立高樹與金屬結構</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>蹲低降低身體暴露，雙腳併攏</span>
                </li>
              </ul>
            </div>

            {/* 三、大雪與低溫 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h3 className="text-lg font-bold text-purple-300 flex items-center gap-2">
                <Snowflake className="w-5 h-5 text-purple-400" />
                三、大雪與低溫
              </h3>
              <p className="text-xs text-slate-400 font-mono">危害特徵：</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>失溫與凍傷風險大幅上升</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>路徑與地形被雪覆蓋，難以判讀</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>行進速度會顯著下降</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SVG 08 Diagram */}
          <Svg08ExtremeEnvironment />
        </div>
      </section>

      {/* 09 野外求生基本能力 */}
      <section id="s9" aria-labelledby="heading-s9" className="scroll-mt-24">
        <div className="flex items-center gap-3 pb-3 mb-6 border-b border-slate-800">
          <span className="font-mono text-xs sm:text-sm font-bold px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
            SECTION 09
          </span>
          <h2 id="heading-s9" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            野外求生基本能力
          </h2>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 一、建立避難位置 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h3 className="text-lg font-bold text-emerald-300 flex items-center gap-2">
                <Tent className="w-5 h-5 text-emerald-400" />
                一、建立避難位置
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>避風方向背風而立</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>避雨並防止地面水流灌入</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>遠離落石、崩塌、河道</span>
                </li>
              </ul>
            </div>

            {/* 二、能源管理 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h3 className="text-lg font-bold text-sky-300 flex items-center gap-2">
                <BatteryCharging className="w-5 h-5 text-sky-400" />
                二、能源管理
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>節省行動電源與電池</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>維持通訊設備待機</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>頭燈調整合適亮度</span>
                </li>
              </ul>
            </div>

            {/* 三、物資管理 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h3 className="text-lg font-bold text-amber-300 flex items-center gap-2">
                <PackageCheck className="w-5 h-5 text-amber-400" />
                三、物資管理
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>食物分配以「等待天數」估算</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>飲水節省並持續補充</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span className="font-semibold text-amber-200">保暖用品優先給傷患與體弱者</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SVG 09 Diagram */}
          <Svg09ResourceManagement />
        </div>
      </section>

      {/* 10 領隊與隊伍緊急應變 */}
      <section id="s10" aria-labelledby="heading-s10" className="scroll-mt-24">
        <div className="flex items-center gap-3 pb-3 mb-6 border-b border-slate-800">
          <span className="font-mono text-xs sm:text-sm font-bold px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
            SECTION 10
          </span>
          <h2 id="heading-s10" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            領隊與隊伍緊急應變
          </h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-400" />
              領隊在事故現場的角色
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <li className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-sm text-slate-300 flex items-start gap-2.5">
                <span className="text-amber-400 font-bold shrink-0">1.</span>
                <span>保持隊伍秩序，避免恐慌擴散</span>
              </li>
              <li className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-sm text-slate-300 flex items-start gap-2.5">
                <span className="text-amber-400 font-bold shrink-0">2.</span>
                <span>分配任務：通訊、照顧傷患、觀察環境</span>
              </li>
              <li className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-sm text-slate-300 flex items-start gap-2.5">
                <span className="text-amber-400 font-bold shrink-0">3.</span>
                <span>確實清點人員，避免遺漏走失者</span>
              </li>
              <li className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-sm text-slate-300 flex items-start gap-2.5">
                <span className="text-amber-400 font-bold shrink-0">4.</span>
                <span>安排隊員輪流照顧傷患與保暖</span>
              </li>
              <li className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-sm text-slate-300 flex items-start gap-2.5 sm:col-span-2">
                <span className="text-amber-400 font-bold shrink-0">5.</span>
                <span>建立主要與備援撤退方案</span>
              </li>
            </ul>

            {/* Core Leadership Concept */}
            <div className="mt-4 p-5 rounded-xl bg-slate-950 border border-amber-500/40 text-sm space-y-1.5">
              <p className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider">
                CORE LEADERSHIP CONCEPT ｜ 核心觀念
              </p>
              <p className="text-base font-bold text-amber-200">
                事故時，團隊合作比個人能力更重要。
              </p>
              <p className="text-slate-300">
                一位冷靜的領隊與有序的隊伍，往往決定救援是否來得及。
              </p>
            </div>
          </div>

          {/* SVG 10 Diagram */}
          <Svg10LeaderResponse />
        </div>
      </section>
    </div>
  );
};

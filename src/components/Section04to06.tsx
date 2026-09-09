import React from 'react';
import { Compass, ShieldCheck, Footprints, AlertTriangle } from 'lucide-react';
import { Svg04LostOrientation, Svg05SurvivalNeeds, Svg06WildlifeEncounter } from './SvgDiagrams.tsx';

export const Section04to06: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* 04 迷途與失去方向時的應變 */}
      <section id="s4" aria-labelledby="heading-s4" className="scroll-mt-24">
        <div className="flex items-center gap-3 pb-3 mb-6 border-b border-slate-800">
          <span className="font-mono text-xs sm:text-sm font-bold px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
            SECTION 04
          </span>
          <h2 id="heading-s4" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            迷途與失去方向時的應變
          </h2>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 常見錯誤 */}
            <div className="p-6 rounded-2xl bg-red-950/20 border border-red-900/60 space-y-4">
              <h3 className="text-lg font-bold text-red-300 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                常見錯誤
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>慌張亂走，加速消耗體力</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span className="font-semibold text-red-200">貿然下切溪谷或稜線</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span>不斷改變方向，失去參考</span>
                </li>
              </ul>
            </div>

            {/* 正確流程 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-emerald-800/60 space-y-4">
              <h3 className="text-lg font-bold text-emerald-300 flex items-center gap-2">
                <Compass className="w-5 h-5 text-emerald-400" />
                正確流程
              </h3>
              <ol className="space-y-2.5 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-emerald-400">1.</span>
                  <span className="font-semibold text-white">停止移動</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-emerald-400">2.</span>
                  <span>確認最後已知位置</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-emerald-400">3.</span>
                  <span>查看地圖與導航工具</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-emerald-400">4.</span>
                  <span>評估返回原路線的可行性</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-emerald-400">5.</span>
                  <span className="font-semibold text-amber-300">必要時停留原地等待救援</span>
                </li>
              </ol>
            </div>
          </div>

          {/* SVG 04 Diagram */}
          <Svg04LostOrientation />

          {/* Core Philosophy */}
          <div className="p-5 rounded-2xl bg-slate-900 border-l-4 border-amber-500 border-y border-r border-slate-800 space-y-2">
            <h3 className="text-base font-bold text-amber-300">核心：迷路不可怕，錯誤決策才危險</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              多數山難始於迷途後的錯誤下切。
            </p>
            <p className="text-base font-extrabold text-amber-200">
              停下來，比繼續走更安全。
            </p>
          </div>
        </div>
      </section>

      {/* 05 等待救援的生存策略 */}
      <section id="s5" aria-labelledby="heading-s5" className="scroll-mt-24">
        <div className="flex items-center gap-3 pb-3 mb-6 border-b border-slate-800">
          <span className="font-mono text-xs sm:text-sm font-bold px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
            SECTION 05
          </span>
          <h2 id="heading-s5" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            等待救援的生存策略
          </h2>
        </div>

        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-sm sm:text-base text-slate-300">
            當無法自行撤離時：<strong className="text-amber-300 font-bold">「有效地等待」本身就是一種技術。</strong>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 一、保暖 */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h3 className="text-base font-bold text-red-300">一、保暖</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-1.5">
                  <span className="text-red-400 font-bold">•</span>
                  <span>防風、防雨為第一優先</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-400 font-bold">•</span>
                  <span>保持乾燥，濕衣物盡快更換</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-400 font-bold">•</span>
                  <span>使用睡袋、緊急毯、保暖層</span>
                </li>
              </ul>
            </div>

            {/* 二、水分 */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h3 className="text-base font-bold text-sky-300">二、水分</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-1.5">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>尋找可取用的水源</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>節省飲水，小口多次補充</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>必要時煮沸或過濾處理</span>
                </li>
              </ul>
            </div>

            {/* 三、心理狀態 */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h3 className="text-base font-bold text-purple-300">三、心理狀態</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-1.5">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>保持冷靜，避免內耗</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>建立時間規劃與作息</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>與隊員互相支持，減少恐慌</span>
                </li>
              </ul>
            </div>

            {/* 四、提高被發現機率 */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h3 className="text-base font-bold text-emerald-300">四、提高被發現機率</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>以聲音固定間隔求救</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>夜間使用頭燈或閃光</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>展示鮮豔顏色的裝備</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>維持通訊設備電量</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SVG 05 Diagram */}
          <Svg05SurvivalNeeds />
        </div>
      </section>

      {/* 06 野生動物遭遇與防護 */}
      <section id="s6" aria-labelledby="heading-s6" className="scroll-mt-24">
        <div className="flex items-center gap-3 pb-3 mb-6 border-b border-slate-800">
          <span className="font-mono text-xs sm:text-sm font-bold px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
            SECTION 06
          </span>
          <h2 id="heading-s6" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            野生動物遭遇與防護
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-sm text-slate-400">
            以台灣山區常見情境為主。遵循「不主動干擾、保持安全距離、冷靜避退」原則。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 台灣黑熊 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Footprints className="w-5 h-5 text-amber-400" />
                台灣黑熊
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-red-950/30 border border-red-900/40">
                  <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">避免</p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li>• 主動接近</li>
                    <li>• 追逐拍攝</li>
                    <li>• 接近幼獸</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-900/40">
                  <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">應對</p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li>• 保持距離觀察</li>
                    <li>• 緩慢後退離開</li>
                    <li>• 避免突然奔跑</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 山豬等大型動物 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Footprints className="w-5 h-5 text-amber-400" />
                山豬等大型動物
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-red-950/30 border border-red-900/40">
                  <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">避免</p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li>• 靠近覓食中的個體</li>
                    <li>• 挑釁或投擲物品</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-900/40">
                  <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">應對</p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li>• 保持安全距離</li>
                    <li>• 尋找可避讓的地形</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 蜂類 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                蜂類（包括：虎頭蜂、黃蜂）
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-red-950/30 border border-red-900/40">
                  <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">避免</p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li>• 靠近蜂巢</li>
                    <li>• 在原地揮打驅趕</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-900/40">
                  <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">應對</p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li>• 保護頭部與頸部</li>
                    <li>• 以最快路線離開該區</li>
                    <li>• 避免香水與鮮豔衣物</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 蛇類 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                蛇類
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-red-950/30 border border-red-900/40">
                  <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">避免</p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li>• 徒手捕捉、翻弄</li>
                    <li>• 刻意接近拍攝</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-900/40">
                  <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">應對</p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li>• 保持距離繞行</li>
                    <li>• 以登山杖先探路</li>
                    <li>• 遭咬後記錄外觀並立即通報</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* SVG 06 Diagram */}
          <Svg06WildlifeEncounter />
        </div>
      </section>
    </div>
  );
};

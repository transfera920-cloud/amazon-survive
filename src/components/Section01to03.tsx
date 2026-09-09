import React from 'react';
import { AlertCircle, Shield, CheckCircle2, AlertTriangle, Thermometer } from 'lucide-react';
import { Svg01Stop, Svg02SiteAssessment, Svg03CommonInjuries } from './SvgDiagrams.tsx';

export const Section01to03: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* 01 事故發生後的第一時間處置 */}
      <section id="s1" aria-labelledby="heading-s1" className="scroll-mt-24">
        <div className="flex items-center gap-3 pb-3 mb-6 border-b border-slate-800">
          <span className="font-mono text-xs sm:text-sm font-bold px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
            SECTION 01
          </span>
          <h2 id="heading-s1" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            事故發生後的第一時間處置
          </h2>
        </div>

        {/* STOP Principle Card */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-amber-300 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-400" />
              STOP 原則
            </h3>
            <p className="text-slate-300 leading-relaxed">
              事故發生後，最危險的不是傷害本身，而是恐慌下做出的錯誤決定。
              以 STOP 原則穩定情緒，讓行動建立在事實而非直覺。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-950/70 border-t-2 border-red-500 border-x border-b border-slate-800/80">
                <span className="font-mono font-bold text-red-400 text-lg">S ｜ Stop</span>
                <p className="font-bold text-white text-base mt-1">停止移動</p>
                <p className="text-xs text-slate-400 mt-1">先不要再前進或撤退。</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border-t-2 border-sky-500 border-x border-b border-slate-800/80">
                <span className="font-mono font-bold text-sky-400 text-lg">T ｜ Think</span>
                <p className="font-bold text-white text-base mt-1">思考</p>
                <p className="text-xs text-slate-400 mt-1">思考目前的狀況、隊伍位置與剩餘資源。</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border-t-2 border-amber-500 border-x border-b border-slate-800/80">
                <span className="font-mono font-bold text-amber-400 text-lg">O ｜ Observe</span>
                <p className="font-bold text-white text-base mt-1">觀察</p>
                <p className="text-xs text-slate-400 mt-1">觀察：環境、天氣、地形、人員狀態。</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border-t-2 border-emerald-500 border-x border-b border-slate-800/80">
                <span className="font-mono font-bold text-emerald-400 text-lg">P ｜ Plan</span>
                <p className="font-bold text-white text-base mt-1">計畫</p>
                <p className="text-xs text-slate-400 mt-1">根據事實制定下一步應變計畫。</p>
              </div>
            </div>
          </div>

          {/* SVG 01 Diagram */}
          <Svg01Stop />

          {/* Action Priority */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-amber-400" />
              行動優先順序
            </h3>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
              <li className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 font-bold font-mono text-sm shrink-0">
                  1
                </span>
                <div>
                  <p className="font-bold text-slate-200">評估環境</p>
                  <p className="text-xs text-slate-400 mt-0.5">防範次生災害威脅</p>
                </div>
              </li>

              <li className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-red-500/20 text-red-400 font-bold font-mono text-sm shrink-0">
                  2
                </span>
                <div>
                  <p className="font-bold text-slate-200">確認生命安全</p>
                  <p className="text-xs text-slate-400 mt-0.5">意識與呼吸維持第一</p>
                </div>
              </li>

              <li className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 font-bold font-mono text-sm shrink-0">
                  3
                </span>
                <div>
                  <p className="font-bold text-slate-200">控制傷害</p>
                  <p className="text-xs text-slate-400 mt-0.5">止血固定與防失溫</p>
                </div>
              </li>

              <li className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 font-bold font-mono text-sm shrink-0">
                  4
                </span>
                <div>
                  <p className="font-bold text-slate-200">建立應變計畫</p>
                  <p className="text-xs text-slate-400 mt-0.5">通訊求援與團隊守候</p>
                </div>
              </li>
            </ol>

            <div className="mt-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 font-medium text-sm">
              <strong className="text-amber-300 font-bold block mb-0.5">核心：</strong>
              事故現場的第一目標不是繼續前進，而是保護生命並控制風險。
            </div>
          </div>
        </div>
      </section>

      {/* 02 事故現場安全評估 */}
      <section id="s2" aria-labelledby="heading-s2" className="scroll-mt-24">
        <div className="flex items-center gap-3 pb-3 mb-6 border-b border-slate-800">
          <span className="font-mono text-xs sm:text-sm font-bold px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
            SECTION 02
          </span>
          <h2 id="heading-s2" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            事故現場安全評估
          </h2>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 一、環境危險 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h3 className="text-lg font-bold text-rose-300 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-400" />
                一、環境危險
              </h3>
              <p className="text-xs text-slate-400 font-mono">評估重點：</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span>上方是否有落石或崩塌風險</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span>地形是否臨崖、臨河谷</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span>天氣是否轉為雷雨或低溫</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span>溪水是否可能暴漲</span>
                </li>
              </ul>
            </div>

            {/* 二、人員狀況 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h3 className="text-lg font-bold text-amber-300 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-400" />
                二、人員狀況
              </h3>
              <p className="text-xs text-slate-400 font-mono">評估重點：</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>意識反應</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>呼吸狀態</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>出血與明顯外傷</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>是否仍具行動能力</span>
                </li>
              </ul>
            </div>

            {/* 三、是否需要移動 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h3 className="text-lg font-bold text-sky-300 flex items-center gap-2">
                <Shield className="w-5 h-5 text-sky-400" />
                三、是否需要移動
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                判斷應留在原地等待救援，或移動到相對安全的位置。
              </p>
              <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                移動與否應基於：<strong className="text-amber-300">環境危險</strong>，而不是：<strong className="text-slate-400">「想快點下山」的心理壓力</strong>。
              </div>
            </div>
          </div>

          {/* SVG 02 Diagram */}
          <Svg02SiteAssessment />

          {/* Danger Warning Box */}
          <div className="p-5 rounded-2xl bg-red-950/40 border border-red-800/80 space-y-2">
            <h3 className="text-base font-bold text-red-300 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
              危險：錯誤移動可能造成二次事故
            </h3>
            <p className="text-sm text-red-200/90 leading-relaxed">
              傷患不當搬運、於危險地形強行撤離，可能使情況惡化。
            </p>
            <p className="text-sm font-bold text-amber-300">
              若不確定：先原地穩定。
            </p>
          </div>
        </div>
      </section>

      {/* 03 常見傷害與現場處置 */}
      <section id="s3" aria-labelledby="heading-s3" className="scroll-mt-24">
        <div className="flex items-center gap-3 pb-3 mb-6 border-b border-slate-800">
          <span className="font-mono text-xs sm:text-sm font-bold px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
            SECTION 03
          </span>
          <h2 id="heading-s3" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            常見傷害與現場處置
          </h2>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 一、外傷與出血 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h3 className="text-lg font-bold text-red-300">一、外傷與出血</h3>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>直接加壓止血</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>清潔傷口後包紮固定</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>持續觀察出血情形與意識</span>
                </li>
              </ul>
            </div>

            {/* 二、扭傷與骨折 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h3 className="text-lg font-bold text-blue-300">二、扭傷與骨折</h3>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>以現有裝備固定患部</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>減少患部移動</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>評估自行下撤或等待救援</span>
                </li>
              </ul>
            </div>

            {/* 三、休克觀察 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h3 className="text-lg font-bold text-amber-300">三、休克觀察</h3>
              <p className="text-xs text-slate-400 font-mono">注意徵象：</p>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>臉色蒼白、發紺</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>意識逐漸模糊</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>呼吸急促或無力</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>四肢冰冷</span>
                </li>
              </ul>
            </div>

            {/* 四、失溫 */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-cyan-800/60 space-y-3">
              <h3 className="text-lg font-bold text-cyan-300 flex items-center gap-2">
                <Thermometer className="w-5 h-5 text-cyan-400" />
                四、失溫
              </h3>

              <div>
                <p className="text-xs text-cyan-400 font-bold mb-1">常見原因：</p>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li>• 長時間淋雨</li>
                  <li>• 強風持續吹拂</li>
                  <li>• 衣物汗濕未更換</li>
                  <li>• 停止活動後熱量下降</li>
                </ul>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <p className="text-xs text-amber-300 font-bold mb-1">現場處置：</p>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li>• 立即防風保暖</li>
                  <li>• 更換濕透衣物</li>
                  <li>• 以睡袋、緊急毯包覆</li>
                  <li>• 補充熱飲或高熱量食物</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SVG 03 Diagram */}
          <Svg03CommonInjuries />

          {/* Hypothermia Crucial Callout */}
          <div className="p-5 rounded-2xl bg-slate-900 border-l-4 border-cyan-400 border-y border-r border-slate-800 space-y-2">
            <h3 className="text-base font-bold text-cyan-200">重點：失溫是台灣山區重要的致命風險之一</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              即使夏季，濕冷加上停止活動仍可能造成失溫。
            </p>
            <p className="text-sm font-bold text-amber-300">
              感覺冷就要處理，不要等。
            </p>
            <p className="text-xs text-slate-400 pt-1 border-t border-slate-800">
              注意：不要自行增加醫療診斷或治療內容。本章為野外急難應變教育教材，非臨床處方。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

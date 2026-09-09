import React from 'react';

/**
 * 11 Native Responsive Inline SVG Diagrams for Mountain Emergency & Wilderness Survival
 * Adheres strictly to:
 * - Pure SVG vectors and semantic text (no external images)
 * - Accessible roles, labels, titles, and descriptions
 * - Responsive viewBox, vector-effect, high-contrast dark theme colors
 */

// SVG 01: 事故第一時間 STOP 原則
export const Svg01Stop: React.FC = () => (
  <svg
    viewBox="0 0 800 520"
    className="w-full h-auto max-w-3xl mx-auto rounded-xl border border-slate-700/70 bg-slate-900/90 shadow-2xl p-2 sm:p-4 my-6"
    role="img"
    aria-label="事故第一時間處置 STOP 原則圖解"
  >
    <title>事故第一時間處置 STOP 原則與行動順序</title>
    <desc>中心展示 STOP 原則四要素，下方延伸事故現場行動優先順序</desc>

    {/* Background Grid Pattern */}
    <defs>
      <pattern id="grid-stop" width="30" height="30" patternUnits="userSpaceOnUse">
        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#334155" strokeWidth="0.5" strokeOpacity="0.4" />
      </pattern>
      <linearGradient id="grad-stop-center" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#b91c1c" />
      </linearGradient>
      <linearGradient id="grad-node" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
    </defs>

    <rect width="800" height="520" fill="#0f172a" rx="8" />
    <rect width="800" height="520" fill="url(#grid-stop)" rx="8" />

    {/* Title Header */}
    <text x="40" y="42" fill="#94a3b8" fontSize="13" fontWeight="bold" letterSpacing="1.5">
      PROCEDURE 01 ｜ FIRST RESPONSE
    </text>
    <text x="40" y="68" fill="#f8fafc" fontSize="18" fontWeight="bold">
      事故發生後的第一時間處置：STOP 原則框架
    </text>

    {/* Connection Lines from Center to S, T, O, P */}
    <line x1="400" y1="190" x2="220" y2="130" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 3" />
    <line x1="400" y1="190" x2="580" y2="130" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 3" />
    <line x1="400" y1="190" x2="220" y2="260" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 3" />
    <line x1="400" y1="190" x2="580" y2="260" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 3" />

    {/* Center Hexagon / Shield: STOP */}
    <g transform="translate(400, 190)">
      <circle r="60" fill="url(#grad-stop-center)" stroke="#fecaca" strokeWidth="2.5" />
      <circle r="48" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="6 4" />
      <text x="0" y="8" fill="#ffffff" fontSize="28" fontWeight="900" textAnchor="middle" letterSpacing="2">
        STOP
      </text>
      <text x="0" y="26" fill="#fecaca" fontSize="11" fontWeight="bold" textAnchor="middle">
        穩定情緒 · 回歸事實
      </text>
    </g>

    {/* S: Stop */}
    <g transform="translate(100, 95)">
      <rect width="180" height="75" rx="8" fill="url(#grad-node)" stroke="#475569" strokeWidth="1.5" />
      <rect x="0" y="0" width="8" height="75" rx="4" fill="#ef4444" />
      <text x="22" y="28" fill="#f87171" fontSize="18" fontWeight="bold">S ｜ Stop</text>
      <text x="22" y="48" fill="#f1f5f9" fontSize="14" fontWeight="bold">停止移動</text>
      <text x="22" y="65" fill="#94a3b8" fontSize="12">先不要再前進或撤退</text>
    </g>

    {/* T: Think */}
    <g transform="translate(520, 95)">
      <rect width="180" height="75" rx="8" fill="url(#grad-node)" stroke="#475569" strokeWidth="1.5" />
      <rect x="0" y="0" width="8" height="75" rx="4" fill="#38bdf8" />
      <text x="22" y="28" fill="#38bdf8" fontSize="18" fontWeight="bold">T ｜ Think</text>
      <text x="22" y="48" fill="#f1f5f9" fontSize="14" fontWeight="bold">思考狀況</text>
      <text x="22" y="65" fill="#94a3b8" fontSize="12">思考狀況、隊伍位置與資源</text>
    </g>

    {/* O: Observe */}
    <g transform="translate(100, 225)">
      <rect width="180" height="75" rx="8" fill="url(#grad-node)" stroke="#475569" strokeWidth="1.5" />
      <rect x="0" y="0" width="8" height="75" rx="4" fill="#fbbf24" />
      <text x="22" y="28" fill="#fbbf24" fontSize="18" fontWeight="bold">O ｜ Observe</text>
      <text x="22" y="48" fill="#f1f5f9" fontSize="14" fontWeight="bold">觀察環境</text>
      <text x="22" y="65" fill="#94a3b8" fontSize="12">環境、天氣、地形、人員狀態</text>
    </g>

    {/* P: Plan */}
    <g transform="translate(520, 225)">
      <rect width="180" height="75" rx="8" fill="url(#grad-node)" stroke="#475569" strokeWidth="1.5" />
      <rect x="0" y="0" width="8" height="75" rx="4" fill="#34d399" />
      <text x="22" y="28" fill="#34d399" fontSize="18" fontWeight="bold">P ｜ Plan</text>
      <text x="22" y="48" fill="#f1f5f9" fontSize="14" fontWeight="bold">制定計畫</text>
      <text x="22" y="65" fill="#94a3b8" fontSize="12">根據事實制定下一步應變計畫</text>
    </g>

    {/* Section Divider Line */}
    <line x1="40" y1="330" x2="760" y2="330" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />

    {/* Flow Label */}
    <text x="40" y="360" fill="#f59e0b" fontSize="13" fontWeight="bold" letterSpacing="1">
      ▼ 行動優先順序 (ACTION PRIORITY)
    </text>

    {/* 4 sequential steps */}
    {/* Step 1 */}
    <g transform="translate(40, 375)">
      <rect width="160" height="60" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="1" />
      <circle cx="24" cy="24" r="12" fill="#3b82f6" />
      <text x="24" y="28" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">1</text>
      <text x="46" y="28" fill="#f1f5f9" fontSize="14" fontWeight="bold">評估環境</text>
      <text x="46" y="46" fill="#94a3b8" fontSize="11">落石、崩塌、地形</text>
    </g>

    {/* Arrow 1 */}
    <path d="M 205 405 L 225 405" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />
    <polygon points="225,401 233,405 225,409" fill="#f59e0b" />

    {/* Step 2 */}
    <g transform="translate(238, 375)">
      <rect width="160" height="60" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="1" />
      <circle cx="24" cy="24" r="12" fill="#ef4444" />
      <text x="24" y="28" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">2</text>
      <text x="46" y="28" fill="#f1f5f9" fontSize="14" fontWeight="bold">確認生命安全</text>
      <text x="46" y="46" fill="#94a3b8" fontSize="11">意識呼吸生命徵象</text>
    </g>

    {/* Arrow 2 */}
    <polygon points="403,401 411,405 403,409" fill="#f59e0b" />

    {/* Step 3 */}
    <g transform="translate(416, 375)">
      <rect width="160" height="60" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="1" />
      <circle cx="24" cy="24" r="12" fill="#f59e0b" />
      <text x="24" y="28" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">3</text>
      <text x="46" y="28" fill="#f1f5f9" fontSize="14" fontWeight="bold">控制傷害</text>
      <text x="46" y="46" fill="#94a3b8" fontSize="11">加壓止血、固定保暖</text>
    </g>

    {/* Arrow 3 */}
    <polygon points="581,401 589,405 581,409" fill="#f59e0b" />

    {/* Step 4 */}
    <g transform="translate(594, 375)">
      <rect width="166" height="60" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="1" />
      <circle cx="24" cy="24" r="12" fill="#10b981" />
      <text x="24" y="28" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">4</text>
      <text x="46" y="28" fill="#f1f5f9" fontSize="14" fontWeight="bold">建立應變計畫</text>
      <text x="46" y="46" fill="#94a3b8" fontSize="11">通訊求救、分工守護</text>
    </g>

    {/* Bottom Core Statement Banner */}
    <rect x="40" y="455" width="720" height="42" rx="6" fill="#1e293b" stroke="#b45309" strokeWidth="1.2" />
    <text x="400" y="481" fill="#fef08a" fontSize="13" fontWeight="bold" textAnchor="middle">
      核心理念：事故現場的第一目標不是繼續前進，而是保護生命並控制風險。
    </text>
  </svg>
);

// SVG 02: 事故現場安全評估
export const Svg02SiteAssessment: React.FC = () => (
  <svg
    viewBox="0 0 800 500"
    className="w-full h-auto max-w-3xl mx-auto rounded-xl border border-slate-700/70 bg-slate-900/90 shadow-2xl p-2 sm:p-4 my-6"
    role="img"
    aria-label="事故現場安全評估三大維度圖解"
  >
    <title>事故現場安全評估與移動決策框架</title>
    <desc>三大評估區塊：環境危險、人員狀況、是否需要移動，並強調先原地穩定控制風險</desc>

    <rect width="800" height="500" fill="#0f172a" rx="8" />

    <text x="40" y="40" fill="#94a3b8" fontSize="13" fontWeight="bold" letterSpacing="1.5">
      ASSESSMENT 02 ｜ SITE SAFETY
    </text>
    <text x="40" y="66" fill="#f8fafc" fontSize="18" fontWeight="bold">
      事故現場安全評估三部曲
    </text>

    {/* Column 1: 環境危險 */}
    <g transform="translate(40, 95)">
      <rect width="220" height="270" rx="8" fill="#1e293b" stroke="#e11d48" strokeWidth="1.5" />
      <path d="M 0 0 L 220 0 L 220 38 L 0 38 Z" fill="#881337" />
      <text x="110" y="24" fill="#ffe4e6" fontSize="15" fontWeight="bold" textAnchor="middle">
        一、環境危險評估
      </text>
      
      {/* Item 1 */}
      <circle cx="24" cy="62" r="4" fill="#f43f5e" />
      <text x="36" y="66" fill="#f1f5f9" fontSize="13" fontWeight="bold">落石或崩塌風險</text>
      <text x="36" y="82" fill="#94a3b8" fontSize="11">上方山坡破碎帶或浮石</text>

      {/* Item 2 */}
      <circle cx="24" cy="112" r="4" fill="#f43f5e" />
      <text x="36" y="116" fill="#f1f5f9" fontSize="13" fontWeight="bold">臨崖、臨河谷地形</text>
      <text x="36" y="132" fill="#94a3b8" fontSize="11">立足點窄小、滑墜邊界</text>

      {/* Item 3 */}
      <circle cx="24" cy="162" r="4" fill="#f43f5e" />
      <text x="36" y="166" fill="#f1f5f9" fontSize="13" fontWeight="bold">天氣急轉低溫雷雨</text>
      <text x="36" y="182" fill="#94a3b8" fontSize="11">強風強降雨加速失溫</text>

      {/* Item 4 */}
      <circle cx="24" cy="212" r="4" fill="#f43f5e" />
      <text x="36" y="216" fill="#f1f5f9" fontSize="13" fontWeight="bold">溪水暴漲可能</text>
      <text x="36" y="232" fill="#94a3b8" fontSize="11">上游降雨幾十分鐘內暴漲</text>

      <rect x="15" y="245" width="190" height="1" fill="#334155" />
    </g>

    {/* Column 2: 人員狀況 */}
    <g transform="translate(290, 95)">
      <rect width="220" height="270" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
      <path d="M 0 0 L 220 0 L 220 38 L 0 38 Z" fill="#78350f" />
      <text x="110" y="24" fill="#fef3c7" fontSize="15" fontWeight="bold" textAnchor="middle">
        二、人員狀況評估
      </text>

      {/* Item 1 */}
      <circle cx="24" cy="62" r="4" fill="#fbbf24" />
      <text x="36" y="66" fill="#f1f5f9" fontSize="13" fontWeight="bold">意識反應狀態</text>
      <text x="36" y="82" fill="#94a3b8" fontSize="11">清醒、嗜睡、意識不清</text>

      {/* Item 2 */}
      <circle cx="24" cy="112" r="4" fill="#fbbf24" />
      <text x="36" y="116" fill="#f1f5f9" fontSize="13" fontWeight="bold">呼吸狀態與胸廓</text>
      <text x="36" y="132" fill="#94a3b8" fontSize="11">呼吸急促、喘鳴、微弱</text>

      {/* Item 3 */}
      <circle cx="24" cy="162" r="4" fill="#fbbf24" />
      <text x="36" y="166" fill="#f1f5f9" fontSize="13" fontWeight="bold">出血與明顯外傷</text>
      <text x="36" y="182" fill="#94a3b8" fontSize="11">大血管出血需即刻加壓</text>

      {/* Item 4 */}
      <circle cx="24" cy="212" r="4" fill="#fbbf24" />
      <text x="36" y="216" fill="#f1f5f9" fontSize="13" fontWeight="bold">是否具行動能力</text>
      <text x="36" y="232" fill="#94a3b8" fontSize="11">肢體骨折、嚴重扭傷無法負重</text>

      <rect x="15" y="245" width="190" height="1" fill="#334155" />
    </g>

    {/* Column 3: 是否需要移動 */}
    <g transform="translate(540, 95)">
      <rect width="220" height="270" rx="8" fill="#1e293b" stroke="#0ea5e9" strokeWidth="1.5" />
      <path d="M 0 0 L 220 0 L 220 38 L 0 38 Z" fill="#0369a1" />
      <text x="110" y="24" fill="#e0f2fe" fontSize="15" fontWeight="bold" textAnchor="middle">
        三、是否需要移動
      </text>

      <rect x="18" y="55" width="184" height="68" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
      <text x="110" y="80" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">選項 A：留在原地</text>
      <text x="110" y="100" fill="#94a3b8" fontSize="11" textAnchor="middle">環境尚穩固 · 避免搬運傷害</text>

      <text x="110" y="145" fill="#64748b" fontSize="12" fontWeight="bold" textAnchor="middle">OR 依環境危險判斷</text>

      <rect x="18" y="165" width="184" height="68" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
      <text x="110" y="190" fill="#fbbf24" fontSize="13" fontWeight="bold" textAnchor="middle">選項 B：相對安全處</text>
      <text x="110" y="210" fill="#94a3b8" fontSize="11" textAnchor="middle">僅避開落石/暴漲直接威脅</text>
    </g>

    {/* Warning Ribbon */}
    <g transform="translate(40, 385)">
      <rect width="720" height="85" rx="8" fill="#450a0a" stroke="#ef4444" strokeWidth="1.5" />
      <text x="30" y="30" fill="#fca5a5" fontSize="14" fontWeight="bold">
        ⚠️ 移動危險提醒：移動與否應基於「環境危險」，而不是「想快點下山」的心理壓力！
      </text>
      <text x="30" y="52" fill="#fecaca" fontSize="12">
        錯誤移動可能造成二次事故：傷患不當搬運、於危險地形強行撤離，可能使情況嚴重惡化。
      </text>
      <text x="30" y="70" fill="#fef08a" fontSize="12" fontWeight="bold">
        若無法確認安全：先在原地穩定，做好保暖與監控，切勿貿然拖行傷患。
      </text>
    </g>
  </svg>
);

// SVG 03: 常見傷害處置
export const Svg03CommonInjuries: React.FC = () => (
  <svg
    viewBox="0 0 800 480"
    className="w-full h-auto max-w-3xl mx-auto rounded-xl border border-slate-700/70 bg-slate-900/90 shadow-2xl p-2 sm:p-4 my-6"
    role="img"
    aria-label="登山四種常見傷害與現場處置流程圖"
  >
    <title>常見傷害現場處置：狀況與處置原則對照</title>
    <desc>整理外傷出血、扭傷骨折、休克觀察、失溫四項核心傷害的處置原則</desc>

    <rect width="800" height="480" fill="#0f172a" rx="8" />

    <text x="40" y="38" fill="#94a3b8" fontSize="13" fontWeight="bold" letterSpacing="1.5">
      TREATMENT 03 ｜ FIELD FIRST AID
    </text>
    <text x="40" y="64" fill="#f8fafc" fontSize="18" fontWeight="bold">
      常見傷害與現場處置要則（原教材規範）
    </text>

    {/* Card 1: 外傷與出血 */}
    <g transform="translate(40, 90)">
      <rect width="345" height="165" rx="8" fill="#1e293b" stroke="#e11d48" strokeWidth="1.2" />
      <rect x="0" y="0" width="345" height="34" rx="8" fill="#9f1239" />
      <text x="16" y="23" fill="#ffe4e6" fontSize="14" fontWeight="bold">01 ｜ 外傷與出血</text>
      
      <text x="16" y="60" fill="#fca5a5" fontSize="12" fontWeight="bold">【現場處置要則】</text>
      <text x="28" y="82" fill="#f1f5f9" fontSize="13">• 直接加壓止血（以乾淨敷料施壓）</text>
      <text x="28" y="106" fill="#f1f5f9" fontSize="13">• 清潔傷口後包紮固定</text>
      <text x="28" y="130" fill="#f1f5f9" fontSize="13">• 持續觀察出血情形與意識狀況</text>
      <text x="16" y="152" fill="#94a3b8" fontSize="11">防範大量失血導致意識下降</text>
    </g>

    {/* Card 2: 扭傷與骨折 */}
    <g transform="translate(415, 90)">
      <rect width="345" height="165" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.2" />
      <rect x="0" y="0" width="345" height="34" rx="8" fill="#1e40af" />
      <text x="16" y="23" fill="#dbeafe" fontSize="14" fontWeight="bold">02 ｜ 扭傷與骨折</text>

      <text x="16" y="60" fill="#93c5fd" fontSize="12" fontWeight="bold">【現場處置要則】</text>
      <text x="28" y="82" fill="#f1f5f9" fontSize="13">• 以現有裝備（登山杖/夾板/衣物）固定患部</text>
      <text x="28" y="106" fill="#f1f5f9" fontSize="13">• 減少患部移動，避免二度位移</text>
      <text x="28" y="130" fill="#f1f5f9" fontSize="13">• 評估自行下撤能力或等待救援</text>
      <text x="16" y="152" fill="#94a3b8" fontSize="11">不可強行行走導致骨折加劇</text>
    </g>

    {/* Card 3: 休克觀察 */}
    <g transform="translate(40, 275)">
      <rect width="345" height="175" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.2" />
      <rect x="0" y="0" width="345" height="34" rx="8" fill="#92400e" />
      <text x="16" y="23" fill="#fef3c7" fontSize="14" fontWeight="bold">03 ｜ 休克觀察徵象</text>

      <text x="16" y="60" fill="#fcd34d" fontSize="12" fontWeight="bold">【警戒觀察重點】</text>
      <text x="28" y="82" fill="#f1f5f9" fontSize="13">• 臉色蒼白、發紺（唇甲發紫）</text>
      <text x="28" y="104" fill="#f1f5f9" fontSize="13">• 意識逐漸模糊、反應遲緩</text>
      <text x="28" y="126" fill="#f1f5f9" fontSize="13">• 呼吸急促或無力淺快</text>
      <text x="28" y="148" fill="#f1f5f9" fontSize="13">• 四肢冰冷、脈搏弱而快速</text>
      <text x="16" y="167" fill="#f59e0b" fontSize="11">必須維持保暖與平躺，通報救援</text>
    </g>

    {/* Card 4: 失溫 */}
    <g transform="translate(415, 275)">
      <rect width="345" height="175" rx="8" fill="#1e293b" stroke="#06b6d4" strokeWidth="1.2" />
      <rect x="0" y="0" width="345" height="34" rx="8" fill="#155e75" />
      <text x="16" y="23" fill="#cffafe" fontSize="14" fontWeight="bold">04 ｜ 失溫（台灣山區致命風險）</text>

      <text x="16" y="58" fill="#67e8f9" fontSize="12" fontWeight="bold">【現場即刻處置 · 感覺冷就要處理】</text>
      <text x="28" y="78" fill="#f1f5f9" fontSize="13">• 立即防風保暖、遠離風口</text>
      <text x="28" y="100" fill="#f1f5f9" fontSize="13">• 更換濕透衣物，保持身體乾燥</text>
      <text x="28" y="122" fill="#f1f5f9" fontSize="13">• 以睡袋、緊急毯（太空毯）嚴密包覆</text>
      <text x="28" y="144" fill="#f1f5f9" fontSize="13">• 意識清醒者補充熱飲或高熱量食物</text>
      <text x="16" y="167" fill="#38bdf8" fontSize="11">夏季濕冷遇強風亦會致命，絕不可拖延</text>
    </g>
  </svg>
);

// SVG 04: 迷途應變流程
export const Svg04LostOrientation: React.FC = () => (
  <svg
    viewBox="0 0 800 500"
    className="w-full h-auto max-w-3xl mx-auto rounded-xl border border-slate-700/70 bg-slate-900/90 shadow-2xl p-2 sm:p-4 my-6"
    role="img"
    aria-label="登山迷途與失去方向時五大應變流程圖解"
  >
    <title>迷途應變五步流程：停下來比繼續走更安全</title>
    <desc>逐步展示停止移動、確認最後位置、查看地圖導航、評估返回原路、原地待援，並警示切勿下切溪谷</desc>

    <rect width="800" height="500" fill="#0f172a" rx="8" />

    <text x="40" y="38" fill="#94a3b8" fontSize="13" fontWeight="bold" letterSpacing="1.5">
      DECISION 04 ｜ LOST IN WILDERNESS
    </text>
    <text x="40" y="64" fill="#f8fafc" fontSize="18" fontWeight="bold">
      迷途與失去方向時的正確應變流程
    </text>

    {/* Vertical Flow Steps (Left half) */}
    {/* Step 1 */}
    <g transform="translate(40, 95)">
      <rect width="420" height="60" rx="8" fill="#1e293b" stroke="#ef4444" strokeWidth="1.5" />
      <circle cx="30" cy="30" r="16" fill="#ef4444" />
      <text x="30" y="35" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle">1</text>
      <text x="60" y="28" fill="#ffffff" fontSize="15" fontWeight="bold">停止移動 (Stop Immediately)</text>
      <text x="60" y="48" fill="#94a3b8" fontSize="12">不要慌張亂走，避免盲目消耗寶貴體力</text>
    </g>
    <path d="M 250 155 L 250 172" stroke="#64748b" strokeWidth="2" strokeDasharray="3 3" />

    {/* Step 2 */}
    <g transform="translate(40, 172)">
      <rect width="420" height="60" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
      <circle cx="30" cy="30" r="16" fill="#f59e0b" />
      <text x="30" y="35" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle">2</text>
      <text x="60" y="28" fill="#ffffff" fontSize="15" fontWeight="bold">確認最後已知位置</text>
      <text x="60" y="48" fill="#94a3b8" fontSize="12">回想最後見到的指標、標誌物或隊友位置</text>
    </g>
    <path d="M 250 232 L 250 249" stroke="#64748b" strokeWidth="2" strokeDasharray="3 3" />

    {/* Step 3 */}
    <g transform="translate(40, 249)">
      <rect width="420" height="60" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
      <circle cx="30" cy="30" r="16" fill="#0284c7" />
      <text x="30" y="35" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle">3</text>
      <text x="60" y="28" fill="#ffffff" fontSize="15" fontWeight="bold">查看地圖與導航工具</text>
      <text x="60" y="48" fill="#94a3b8" fontSize="12">使用離線軌跡圖、指北針，比對地貌特徵</text>
    </g>
    <path d="M 250 309 L 250 326" stroke="#64748b" strokeWidth="2" strokeDasharray="3 3" />

    {/* Step 4 */}
    <g transform="translate(40, 326)">
      <rect width="420" height="60" rx="8" fill="#1e293b" stroke="#a855f7" strokeWidth="1.5" />
      <circle cx="30" cy="30" r="16" fill="#9333ea" />
      <text x="30" y="35" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle">4</text>
      <text x="60" y="28" fill="#ffffff" fontSize="15" fontWeight="bold">評估返回原路線的可行性</text>
      <text x="60" y="48" fill="#94a3b8" fontSize="12">僅在路跡明確且安全前提下原路折返</text>
    </g>
    <path d="M 250 386 L 250 403" stroke="#64748b" strokeWidth="2" strokeDasharray="3 3" />

    {/* Step 5 */}
    <g transform="translate(40, 403)">
      <rect width="420" height="60" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
      <circle cx="30" cy="30" r="16" fill="#059669" />
      <text x="30" y="35" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle">5</text>
      <text x="60" y="28" fill="#ffffff" fontSize="15" fontWeight="bold">必要時停留原地等待救援</text>
      <text x="60" y="48" fill="#94a3b8" fontSize="12">無法確認方位時，停止前行，尋找避風處待援</text>
    </g>

    {/* Right Warning Callout: 不要貿然下切 */}
    <g transform="translate(485, 95)">
      <rect width="275" height="368" rx="8" fill="#1c1917" stroke="#b91c1c" strokeWidth="2" />
      <rect x="0" y="0" width="275" height="42" rx="8" fill="#7f1d1d" />
      <text x="137" y="26" fill="#fecaca" fontSize="14" fontWeight="bold" textAnchor="middle">
        ⚠️ 致命常見錯誤警戒
      </text>

      <g transform="translate(20, 60)">
        <text x="0" y="10" fill="#f87171" fontSize="13" fontWeight="bold">1. 絕不貿然下切溪谷或稜線</text>
        <text x="0" y="30" fill="#cbd5e1" fontSize="12" width="235">
          台灣溪谷多瀑布落差與絕壁，下切極易卡在峽谷無法攀爬折返。
        </text>

        <text x="0" y="90" fill="#f87171" fontSize="13" fontWeight="bold">2. 避免慌張盲目亂走</text>
        <text x="0" y="110" fill="#cbd5e1" fontSize="12">
          盲目鑽林會越走越深、加速體力失衡與脫水。
        </text>

        <text x="0" y="165" fill="#f87171" fontSize="13" fontWeight="bold">3. 避免不斷改變方向</text>
        <text x="0" y="185" fill="#cbd5e1" fontSize="12">
          毫無參考點下任意轉向將徹底喪失空間定位。
        </text>

        <rect x="-5" y="225" width="245" height="70" rx="6" fill="#450a0a" stroke="#ef4444" strokeWidth="1" />
        <text x="117" y="250" fill="#fef08a" fontSize="13" fontWeight="bold" textAnchor="middle">
          迷路不可怕，錯誤決策才危險
        </text>
        <text x="117" y="272" fill="#ffffff" fontSize="12" textAnchor="middle">
          停下來，比繼續走更安全！
        </text>
      </g>
    </g>
  </svg>
);

// SVG 05: 等待救援四大生存需求
export const Svg05SurvivalNeeds: React.FC = () => (
  <svg
    viewBox="0 0 800 520"
    className="w-full h-auto max-w-3xl mx-auto rounded-xl border border-slate-700/70 bg-slate-900/90 shadow-2xl p-2 sm:p-4 my-6"
    role="img"
    aria-label="等待救援四大生存需求平衡圖解"
  >
    <title>等待救援生存策略：保暖、水分、心理狀態與提高被發現機率</title>
    <desc>中心展示等待救援核心理念，四周四象限分別對應保暖、水分、心理狀態與提高被發現機率</desc>

    <rect width="800" height="520" fill="#0f172a" rx="8" />

    <text x="40" y="38" fill="#94a3b8" fontSize="13" fontWeight="bold" letterSpacing="1.5">
      SURVIVAL 05 ｜ WAITING FOR RESCUE
    </text>
    <text x="40" y="64" fill="#f8fafc" fontSize="18" fontWeight="bold">
      等待救援的四大生存需求平衡架構
    </text>

    {/* Center Core Circle */}
    <g transform="translate(400, 275)">
      {/* Outer Glow Ring */}
      <circle r="92" fill="#1e293b" stroke="#f59e0b" strokeWidth="2.5" />
      <circle r="76" fill="#0f172a" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 4" />
      <text x="0" y="-12" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="1">
        CORE SKILL
      </text>
      <text x="0" y="14" fill="#ffffff" fontSize="20" fontWeight="900" textAnchor="middle">
        等待救援
      </text>
      <text x="0" y="34" fill="#cbd5e1" fontSize="11" textAnchor="middle">
        有效地等待本身就是技術
      </text>
    </g>

    {/* Connecting Axes */}
    <line x1="180" y1="180" x2="330" y2="230" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />
    <line x1="620" y1="180" x2="470" y2="230" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />
    <line x1="180" y1="390" x2="330" y2="330" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />
    <line x1="620" y1="390" x2="470" y2="330" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />

    {/* Quadrant 1 (Top Left): 保暖 */}
    <g transform="translate(40, 95)">
      <rect width="280" height="150" rx="8" fill="#1e293b" stroke="#ef4444" strokeWidth="1.5" />
      <rect x="0" y="0" width="280" height="32" rx="8" fill="#991b1b" />
      <text x="16" y="21" fill="#fee2e2" fontSize="14" fontWeight="bold">一、保暖 (Warmth & Shelter)</text>

      <text x="20" y="58" fill="#f87171" fontSize="12" fontWeight="bold">第一優先：防風與防雨</text>
      <text x="20" y="80" fill="#f1f5f9" fontSize="13">• 保持乾燥，濕衣物盡快更換</text>
      <text x="20" y="104" fill="#f1f5f9" fontSize="13">• 使用睡袋、緊急毯隔絕地面濕冷</text>
      <text x="20" y="128" fill="#94a3b8" fontSize="12">• 增穿所有保暖層，減少體表散熱</text>
    </g>

    {/* Quadrant 2 (Top Right): 水分 */}
    <g transform="translate(480, 95)">
      <rect width="280" height="150" rx="8" fill="#1e293b" stroke="#0ea5e9" strokeWidth="1.5" />
      <rect x="0" y="0" width="280" height="32" rx="8" fill="#075985" />
      <text x="16" y="21" fill="#e0f2fe" fontSize="14" fontWeight="bold">二、水分 (Hydration Control)</text>

      <text x="20" y="58" fill="#38bdf8" fontSize="12" fontWeight="bold">水源管理與節約分配</text>
      <text x="20" y="80" fill="#f1f5f9" fontSize="13">• 尋找安全可取用之水源</text>
      <text x="20" y="104" fill="#f1f5f9" fontSize="13">• 節省飲水，小口多次補充</text>
      <text x="20" y="128" fill="#94a3b8" fontSize="12">• 必要時煮沸或過濾處理後再飲用</text>
    </g>

    {/* Quadrant 3 (Bottom Left): 心理狀態 */}
    <g transform="translate(40, 310)">
      <rect width="280" height="150" rx="8" fill="#1e293b" stroke="#a855f7" strokeWidth="1.5" />
      <rect x="0" y="0" width="280" height="32" rx="8" fill="#6b21a8" />
      <text x="16" y="21" fill="#f3e8ff" fontSize="14" fontWeight="bold">三、心理狀態 (Psychological)</text>

      <text x="20" y="58" fill="#c084fc" fontSize="12" fontWeight="bold">心態穩定與團隊互信</text>
      <text x="20" y="80" fill="#f1f5f9" fontSize="13">• 保持冷靜，避免恐慌內耗意志</text>
      <text x="20" y="104" fill="#f1f5f9" fontSize="13">• 建立時間規劃與輪流作息</text>
      <text x="20" y="128" fill="#94a3b8" fontSize="12">• 隊員互相支持打氣，杜絕怨懟</text>
    </g>

    {/* Quadrant 4 (Bottom Right): 提高被發現機率 */}
    <g transform="translate(480, 310)">
      <rect width="280" height="150" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
      <rect x="0" y="0" width="280" height="32" rx="8" fill="#065f46" />
      <text x="16" y="21" fill="#d1fae5" fontSize="14" fontWeight="bold">四、提高被發現機率 (Signaling)</text>

      <text x="20" y="58" fill="#34d399" fontSize="12" fontWeight="bold">訊號傳遞與能源節制</text>
      <text x="20" y="80" fill="#f1f5f9" fontSize="13">• 以哨音/聲音固定間隔發出求救訊號</text>
      <text x="20" y="104" fill="#f1f5f9" fontSize="13">• 夜間使用頭燈或反光材質照射</text>
      <text x="20" y="128" fill="#f1f5f9" fontSize="13">• 展示鮮豔顏色裝備、維持通訊電量</text>
    </g>

    {/* Bottom Insight */}
    <text x="400" y="495" fill="#fef08a" fontSize="12" textAnchor="middle">
      💡 關鍵認知：山難生存不是無休止地對抗大自然，而是透過四大需求保護隊員生命，爭取搜救抵達的關鍵窗口。
    </text>
  </svg>
);

// SVG 06: 野生動物遭遇與防護
export const Svg06WildlifeEncounter: React.FC = () => (
  <svg
    viewBox="0 0 800 480"
    className="w-full h-auto max-w-3xl mx-auto rounded-xl border border-slate-700/70 bg-slate-900/90 shadow-2xl p-2 sm:p-4 my-6"
    role="img"
    aria-label="台灣山區四種常見野生動物遭遇防護要則圖解"
  >
    <title>野生動物遭遇與防護：避免行為與正確應對原則</title>
    <desc>四種台灣常見野生動物：台灣黑熊、山豬等大型動物、蜂類、蛇類之避免與應對原則對照</desc>

    <rect width="800" height="480" fill="#0f172a" rx="8" />

    <text x="40" y="38" fill="#94a3b8" fontSize="13" fontWeight="bold" letterSpacing="1.5">
      WILDLIFE 06 ｜ ANIMAL ENCOUNTER
    </text>
    <text x="40" y="64" fill="#f8fafc" fontSize="18" fontWeight="bold">
      台灣山區野生動物遭遇：避免 vs 應對
    </text>

    {/* Grid of 4 animals */}
    {/* Animal 1: 台灣黑熊 */}
    <g transform="translate(40, 90)">
      <rect width="345" height="170" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1.2" />
      <rect x="0" y="0" width="345" height="34" rx="8" fill="#1e293b" />
      <circle cx="20" cy="17" r="5" fill="#f59e0b" />
      <text x="34" y="22" fill="#f8fafc" fontSize="15" fontWeight="bold">台灣黑熊 (Formosan Black Bear)</text>

      {/* 避免 */}
      <rect x="14" y="44" width="40" height="20" rx="4" fill="#7f1d1d" />
      <text x="34" y="58" fill="#fee2e2" fontSize="11" fontWeight="bold" textAnchor="middle">避免</text>
      <text x="62" y="58" fill="#fca5a5" fontSize="12">主動接近 · 追逐拍攝 · 接近幼獸</text>

      {/* 應對 */}
      <rect x="14" y="74" width="40" height="20" rx="4" fill="#065f46" />
      <text x="34" y="88" fill="#d1fae5" fontSize="11" fontWeight="bold" textAnchor="middle">應對</text>
      <text x="62" y="88" fill="#86efac" fontSize="12">保持距離冷靜觀察</text>
      <text x="62" y="108" fill="#f1f5f9" fontSize="12">• 面對黑熊緩慢後退離開</text>
      <text x="62" y="128" fill="#f1f5f9" fontSize="12">• 絕對避免突然尖叫奔跑或挑釁</text>
    </g>

    {/* Animal 2: 山豬等大型動物 */}
    <g transform="translate(415, 90)">
      <rect width="345" height="170" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1.2" />
      <rect x="0" y="0" width="345" height="34" rx="8" fill="#1e293b" />
      <circle cx="20" cy="17" r="5" fill="#f59e0b" />
      <text x="34" y="22" fill="#f8fafc" fontSize="15" fontWeight="bold">山豬等大型動物 (Wild Boar)</text>

      {/* 避免 */}
      <rect x="14" y="44" width="40" height="20" rx="4" fill="#7f1d1d" />
      <text x="34" y="58" fill="#fee2e2" fontSize="11" fontWeight="bold" textAnchor="middle">避免</text>
      <text x="62" y="58" fill="#fca5a5" fontSize="12">靠近覓食中個體 · 挑釁或投擲物品</text>

      {/* 應對 */}
      <rect x="14" y="74" width="40" height="20" rx="4" fill="#065f46" />
      <text x="34" y="88" fill="#d1fae5" fontSize="11" fontWeight="bold" textAnchor="middle">應對</text>
      <text x="62" y="88" fill="#86efac" fontSize="12">保持安全距離，勿切斷其逃生退路</text>
      <text x="62" y="108" fill="#f1f5f9" fontSize="12">• 尋找可避讓之地形或大樹掩護</text>
      <text x="62" y="128" fill="#f1f5f9" fontSize="12">• 靜待其離開，勿做出攻擊姿態</text>
    </g>

    {/* Animal 3: 蜂類 */}
    <g transform="translate(40, 275)">
      <rect width="345" height="170" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1.2" />
      <rect x="0" y="0" width="345" height="34" rx="8" fill="#1e293b" />
      <circle cx="20" cy="17" r="5" fill="#ef4444" />
      <text x="34" y="22" fill="#f8fafc" fontSize="15" fontWeight="bold">蜂類 (虎頭蜂、黃蜂等)</text>

      {/* 避免 */}
      <rect x="14" y="44" width="40" height="20" rx="4" fill="#7f1d1d" />
      <text x="34" y="58" fill="#fee2e2" fontSize="11" fontWeight="bold" textAnchor="middle">避免</text>
      <text x="62" y="58" fill="#fca5a5" fontSize="12">靠近蜂巢 · 在原地揮打驅趕激怒巡邏蜂</text>

      {/* 應對 */}
      <rect x="14" y="74" width="40" height="20" rx="4" fill="#065f46" />
      <text x="34" y="88" fill="#d1fae5" fontSize="11" fontWeight="bold" textAnchor="middle">應對</text>
      <text x="62" y="88" fill="#86efac" fontSize="12">以外套或衣物保護頭部與頸部</text>
      <text x="62" y="108" fill="#f1f5f9" fontSize="12">• 以最快路線壓低身體離開該區域</text>
      <text x="62" y="128" fill="#f1f5f9" fontSize="12">• 登山避免噴香水、穿著鮮豔衣物</text>
    </g>

    {/* Animal 4: 蛇類 */}
    <g transform="translate(415, 275)">
      <rect width="345" height="170" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1.2" />
      <rect x="0" y="0" width="345" height="34" rx="8" fill="#1e293b" />
      <circle cx="20" cy="17" r="5" fill="#38bdf8" />
      <text x="34" y="22" fill="#f8fafc" fontSize="15" fontWeight="bold">蛇類 (Venomous Snakes)</text>

      {/* 避免 */}
      <rect x="14" y="44" width="40" height="20" rx="4" fill="#7f1d1d" />
      <text x="34" y="58" fill="#fee2e2" fontSize="11" fontWeight="bold" textAnchor="middle">避免</text>
      <text x="62" y="58" fill="#fca5a5" fontSize="12">徒手捕捉、翻弄草叢 · 刻意靠近拍攝</text>

      {/* 應對 */}
      <rect x="14" y="74" width="40" height="20" rx="4" fill="#065f46" />
      <text x="34" y="88" fill="#d1fae5" fontSize="11" fontWeight="bold" textAnchor="middle">應對</text>
      <text x="62" y="88" fill="#86efac" fontSize="12">保持安全距離繞行</text>
      <text x="62" y="108" fill="#f1f5f9" fontSize="12">• 行經草叢以登山杖先探路「打草驚蛇」</text>
      <text x="62" y="128" fill="#f1f5f9" fontSize="12">• 遭咬後記住外觀特徵並立即通報求救</text>
    </g>
  </svg>
);

// SVG 07: 植物與環境危害
export const Svg07ToxicPlants: React.FC = () => (
  <svg
    viewBox="0 0 800 440"
    className="w-full h-auto max-w-3xl mx-auto rounded-xl border border-slate-700/70 bg-slate-900/90 shadow-2xl p-2 sm:p-4 my-6"
    role="img"
    aria-label="有毒植物與野外環境危害因應原則圖解"
  >
    <title>植物與環境危害：不明植物絕不食用與接觸性危害處置</title>
    <desc>兩大核心原則：不明植物一律不食用；接觸性危害（咬人貓咬人狗）清水沖洗與持續觀察</desc>

    <rect width="800" height="440" fill="#0f172a" rx="8" />

    <text x="40" y="38" fill="#94a3b8" fontSize="13" fontWeight="bold" letterSpacing="1.5">
      HAZARD 07 ｜ FLORA & CONTACT RISKS
    </text>
    <text x="40" y="64" fill="#f8fafc" fontSize="18" fontWeight="bold">
      有毒植物與野外接觸危害因應原則
    </text>

    {/* Section 1: 不明植物一律不食用 */}
    <g transform="translate(40, 95)">
      <rect width="345" height="240" rx="8" fill="#1e293b" stroke="#ef4444" strokeWidth="1.5" />
      <rect x="0" y="0" width="345" height="38" rx="8" fill="#7f1d1d" />
      <text x="172" y="24" fill="#fee2e2" fontSize="14" fontWeight="bold" textAnchor="middle">
        一、不明植物一律不食用
      </text>

      {/* Core Slogan */}
      <rect x="20" y="55" width="305" height="40" rx="6" fill="#450a0a" stroke="#ef4444" strokeWidth="1" />
      <text x="172" y="80" fill="#fef08a" fontSize="15" fontWeight="900" textAnchor="middle">
        最基本觀念：不知道就不要吃！
      </text>

      <g transform="translate(20, 110)">
        <text x="0" y="10" fill="#f87171" fontSize="13" fontWeight="bold">嚴格禁止攝取：</text>
        <text x="12" y="30" fill="#f1f5f9" fontSize="13">• 不明野果、漿果</text>
        <text x="12" y="52" fill="#f1f5f9" fontSize="13">• 不明野生根莖植物</text>
        <text x="12" y="74" fill="#f1f5f9" fontSize="13">• 不明菌類（毒菇致命性極高）</text>
        <text x="0" y="105" fill="#cbd5e1" fontSize="11">
          ⚠️ 辨識困難是常態，飢餓時判斷力下降，誤食毒素將引發神經與器官衰竭。
        </text>
      </g>
    </g>

    {/* Section 2: 接觸性危害 */}
    <g transform="translate(415, 95)">
      <rect width="345" height="240" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
      <rect x="0" y="0" width="345" height="38" rx="8" fill="#78350f" />
      <text x="172" y="24" fill="#fef3c7" fontSize="14" fontWeight="bold" textAnchor="middle">
        二、接觸性危害處置
      </text>

      <g transform="translate(20, 55)">
        <text x="0" y="12" fill="#fbbf24" fontSize="13" fontWeight="bold">常見刺激性植物類型：</text>
        <text x="12" y="32" fill="#f1f5f9" fontSize="13">• 刺激性植物：咬人貓、咬人狗等焮毛</text>
        <text x="12" y="54" fill="#f1f5f9" fontSize="13">• 野外過敏原植物汁液接觸</text>

        {/* Action Steps */}
        <rect x="0" y="75" width="305" height="90" rx="6" fill="#0f172a" stroke="#d97706" strokeWidth="1" />
        <text x="15" y="98" fill="#fde68a" fontSize="13" fontWeight="bold">現場處置三部曲：</text>
        <text x="25" y="120" fill="#f1f5f9" fontSize="13">1. 立即以大量清水輕柔沖洗患部</text>
        <text x="25" y="140" fill="#f1f5f9" fontSize="13">2. 避免抓破皮膚造成傷口感染二度傷害</text>
        <text x="25" y="160" fill="#f1f5f9" fontSize="13">3. 持續觀察局部紅腫與全身過敏症狀</text>
      </g>
    </g>

    {/* Bottom summary banner */}
    <rect x="40" y="360" width="720" height="50" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1" />
    <text x="400" y="390" fill="#94a3b8" fontSize="13" textAnchor="middle">
      自然環境不是超市，野外求生依靠物資管理與體溫維持，切勿嘗試以不明植物充飢。
    </text>
  </svg>
);

// SVG 08: 極端環境應變
export const Svg08ExtremeEnvironment: React.FC = () => (
  <svg
    viewBox="0 0 800 480"
    className="w-full h-auto max-w-3xl mx-auto rounded-xl border border-slate-700/70 bg-slate-900/90 shadow-2xl p-2 sm:p-4 my-6"
    role="img"
    aria-label="暴雨、雷擊、大雪低溫三種極端環境應變原則圖解"
  >
    <title>極端環境應變：主要危害與對應因應措施</title>
    <desc>並列暴雨、雷擊與大雪低溫三種高山極端天候，逐一列出核心風險與防範重點</desc>

    <rect width="800" height="480" fill="#0f172a" rx="8" />

    <text x="40" y="38" fill="#94a3b8" fontSize="13" fontWeight="bold" letterSpacing="1.5">
      ENVIRONMENT 08 ｜ EXTREME WEATHER
    </text>
    <text x="40" y="64" fill="#f8fafc" fontSize="18" fontWeight="bold">
      高山極端環境應變要則
    </text>

    {/* Column 1: 暴雨 */}
    <g transform="translate(40, 95)">
      <rect width="220" height="340" rx="8" fill="#1e293b" stroke="#0ea5e9" strokeWidth="1.5" />
      <rect x="0" y="0" width="220" height="42" rx="8" fill="#0369a1" />
      <text x="110" y="27" fill="#e0f2fe" fontSize="16" fontWeight="bold" textAnchor="middle">
        一、暴雨 (Heavy Rain)
      </text>

      <g transform="translate(15, 60)">
        <text x="0" y="12" fill="#38bdf8" fontSize="13" fontWeight="bold">致命主要危害：</text>
        <text x="0" y="36" fill="#fca5a5" fontSize="13" fontWeight="bold">• 溪水暴漲致命性最高</text>
        <text x="10" y="56" fill="#cbd5e1" fontSize="11">切勿強渡過溪</text>

        <text x="0" y="86" fill="#fca5a5" fontSize="13" fontWeight="bold">• 山坡崩塌與土石流</text>
        <text x="10" y="106" fill="#cbd5e1" fontSize="11">遠離順向坡與落石區</text>

        <text x="0" y="136" fill="#fca5a5" fontSize="13" fontWeight="bold">• 落石頻率顯著上升</text>
        <text x="10" y="156" fill="#cbd5e1" fontSize="11">戴安全帽、遠離岩壁底部</text>

        <rect x="0" y="180" width="190" height="85" rx="6" fill="#0f172a" stroke="#0284c7" strokeWidth="1" />
        <text x="95" y="204" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">應變防範要點</text>
        <text x="10" y="226" fill="#f1f5f9" fontSize="11">盡速脫離低窪溪床</text>
        <text x="10" y="244" fill="#f1f5f9" fontSize="11">在安全地勢高處建立避難</text>
      </g>
    </g>

    {/* Column 2: 雷擊 */}
    <g transform="translate(290, 95)">
      <rect width="220" height="340" rx="8" fill="#1e293b" stroke="#eab308" strokeWidth="1.5" />
      <rect x="0" y="0" width="220" height="42" rx="8" fill="#854d0e" />
      <text x="110" y="27" fill="#fef9c3" fontSize="16" fontWeight="bold" textAnchor="middle">
        二、雷擊 (Lightning)
      </text>

      <g transform="translate(15, 60)">
        <text x="0" y="12" fill="#facc15" fontSize="13" fontWeight="bold">雷擊避險禁忌：</text>
        <text x="0" y="36" fill="#f87171" fontSize="13" fontWeight="bold">• 避免停留於稜線、山頭</text>
        <text x="10" y="56" fill="#cbd5e1" fontSize="11">空曠高處為直接擊中點</text>

        <text x="0" y="86" fill="#f87171" fontSize="13" fontWeight="bold">• 遠離孤立高樹金屬結構</text>
        <text x="10" y="106" fill="#cbd5e1" fontSize="11">側擊與跨步電壓致命</text>

        <rect x="0" y="140" width="190" height="125" rx="6" fill="#0f172a" stroke="#ca8a04" strokeWidth="1" />
        <text x="95" y="165" fill="#fef08a" fontSize="12" fontWeight="bold" textAnchor="middle">標準避雷防護姿勢</text>
        <text x="10" y="190" fill="#f1f5f9" fontSize="12">• 蹲低降低身體暴露</text>
        <text x="10" y="212" fill="#f1f5f9" fontSize="12">• 雙腳併攏減少跨步電壓</text>
        <text x="10" y="234" fill="#f1f5f9" fontSize="12">• 坐於睡墊或背包絕緣</text>
        <text x="10" y="254" fill="#94a3b8" fontSize="11">金屬登山杖卸除置於遠處</text>
      </g>
    </g>

    {/* Column 3: 大雪與低溫 */}
    <g transform="translate(540, 95)">
      <rect width="220" height="340" rx="8" fill="#1e293b" stroke="#a855f7" strokeWidth="1.5" />
      <rect x="0" y="0" width="220" height="42" rx="8" fill="#581c87" />
      <text x="110" y="27" fill="#f3e8ff" fontSize="16" fontWeight="bold" textAnchor="middle">
        三、大雪低溫 (Snow)
      </text>

      <g transform="translate(15, 60)">
        <text x="0" y="12" fill="#c084fc" fontSize="13" fontWeight="bold">雪季環境威脅：</text>
        <text x="0" y="36" fill="#fca5a5" fontSize="13" fontWeight="bold">• 失溫與凍傷風險劇增</text>
        <text x="10" y="56" fill="#cbd5e1" fontSize="11">風寒效應使體感極速探底</text>

        <text x="0" y="86" fill="#fca5a5" fontSize="13" fontWeight="bold">• 路徑與地形被雪覆蓋</text>
        <text x="10" y="106" fill="#cbd5e1" fontSize="11">標記消失，極易判讀失誤</text>

        <text x="0" y="136" fill="#fca5a5" fontSize="13" fontWeight="bold">• 行進速度顯著下降</text>
        <text x="10" y="156" fill="#cbd5e1" fontSize="11">體力消耗倍增，慎防摸黑</text>

        <rect x="0" y="180" width="190" height="85" rx="6" fill="#0f172a" stroke="#7e22ce" strokeWidth="1" />
        <text x="95" y="204" fill="#d8b4fe" fontSize="12" fontWeight="bold" textAnchor="middle">應變防範要點</text>
        <text x="10" y="226" fill="#f1f5f9" fontSize="11">嚴格執行防風保暖層</text>
        <text x="10" y="244" fill="#f1f5f9" fontSize="11">提早紮營，避免強行登頂</text>
      </g>
    </g>
  </svg>
);

// SVG 09: 野外求生資源管理
export const Svg09ResourceManagement: React.FC = () => (
  <svg
    viewBox="0 0 800 460"
    className="w-full h-auto max-w-3xl mx-auto rounded-xl border border-slate-700/70 bg-slate-900/90 shadow-2xl p-2 sm:p-4 my-6"
    role="img"
    aria-label="野外求生三大核心資源管理架構圖解"
  >
    <title>野外求生基本能力：避難位置、能源管理與物資管理</title>
    <desc>中心為等待救援核心，由三大管理支柱：避難位置、能源管理、物資管理環繞支撐</desc>

    <rect width="800" height="460" fill="#0f172a" rx="8" />

    <text x="40" y="38" fill="#94a3b8" fontSize="13" fontWeight="bold" letterSpacing="1.5">
      CAPABILITY 09 ｜ RESOURCE CONTROL
    </text>
    <text x="40" y="64" fill="#f8fafc" fontSize="18" fontWeight="bold">
      野外求生基本能力：三大核心資源管理
    </text>

    {/* Center circle */}
    <g transform="translate(400, 250)">
      <circle r="75" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
      <circle r="60" fill="#0f172a" stroke="#475569" strokeWidth="1" strokeDasharray="4 3" />
      <text x="0" y="-8" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="1">
        CORE GOAL
      </text>
      <text x="0" y="16" fill="#ffffff" fontSize="18" fontWeight="bold" textAnchor="middle">
        等待救援
      </text>
      <text x="0" y="34" fill="#94a3b8" fontSize="10" textAnchor="middle">
        管理有限資源維持隊伍狀態
      </text>
    </g>

    {/* Pillar 1: 建立避難位置 */}
    <g transform="translate(40, 95)">
      <rect width="215" height="230" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
      <rect x="0" y="0" width="215" height="34" rx="8" fill="#065f46" />
      <text x="107" y="22" fill="#d1fae5" fontSize="14" fontWeight="bold" textAnchor="middle">
        一、建立避難位置
      </text>

      <g transform="translate(15, 55)">
        <text x="0" y="15" fill="#34d399" fontSize="13" fontWeight="bold">• 避風方向：</text>
        <text x="10" y="35" fill="#f1f5f9" fontSize="12">背風而立，降低風寒散熱</text>

        <text x="0" y="65" fill="#34d399" fontSize="13" fontWeight="bold">• 避雨防濕：</text>
        <text x="10" y="85" fill="#f1f5f9" fontSize="12">防止地面水流倒灌入避難點</text>

        <text x="0" y="115" fill="#34d399" fontSize="13" fontWeight="bold">• 地形安全：</text>
        <text x="10" y="135" fill="#f1f5f9" fontSize="12">遠離落石、崩塌與暴漲河道</text>
      </g>
    </g>
    <line x1="255" y1="210" x2="325" y2="235" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />

    {/* Pillar 2: 能源管理 (Top Right) */}
    <g transform="translate(545, 95)">
      <rect width="215" height="230" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
      <rect x="0" y="0" width="215" height="34" rx="8" fill="#0369a1" />
      <text x="107" y="22" fill="#e0f2fe" fontSize="14" fontWeight="bold" textAnchor="middle">
        二、能源管理
      </text>

      <g transform="translate(15, 55)">
        <text x="0" y="15" fill="#38bdf8" fontSize="13" fontWeight="bold">• 電量保存：</text>
        <text x="10" y="35" fill="#f1f5f9" fontSize="12">節省行動電源與手持電池</text>

        <text x="0" y="65" fill="#38bdf8" fontSize="13" fontWeight="bold">• 通訊優先：</text>
        <text x="10" y="85" fill="#f1f5f9" fontSize="12">手機飛航待機，定時開機通聯</text>

        <text x="0" y="115" fill="#38bdf8" fontSize="13" fontWeight="bold">• 照明節約：</text>
        <text x="10" y="135" fill="#f1f5f9" fontSize="12">頭燈調整合適低流明亮度</text>
      </g>
    </g>
    <line x1="545" y1="210" x2="475" y2="235" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />

    {/* Pillar 3: 物資管理 (Bottom Center) */}
    <g transform="translate(260, 345)">
      <rect width="280" height="95" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
      <rect x="0" y="0" width="280" height="28" rx="8" fill="#92400e" />
      <text x="140" y="19" fill="#fef3c7" fontSize="13" fontWeight="bold" textAnchor="middle">
        三、物資管理 (Food & Water Distribution)
      </text>

      <g transform="translate(15, 38)">
        <text x="0" y="14" fill="#f1f5f9" fontSize="12">• 食物分配以「等待天數」謹慎估算</text>
        <text x="0" y="32" fill="#f1f5f9" fontSize="12">• 飲水節省並維持小口持續補充</text>
        <text x="0" y="50" fill="#fbbf24" fontSize="12" fontWeight="bold">• 保暖用品優先給予傷患與體弱者</text>
      </g>
    </g>
    <line x1="400" y1="325" x2="400" y2="345" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
  </svg>
);

// SVG 10: 領隊與隊伍緊急應變
export const Svg10LeaderResponse: React.FC = () => (
  <svg
    viewBox="0 0 800 500"
    className="w-full h-auto max-w-3xl mx-auto rounded-xl border border-slate-700/70 bg-slate-900/90 shadow-2xl p-2 sm:p-4 my-6"
    role="img"
    aria-label="領隊在事故現場五大指揮任務與隊伍協同圖解"
  >
    <title>領隊在事故現場的角色：維持秩序與分工管理</title>
    <desc>以中心領隊為核心，向外輻射五大職責：維持秩序、分配任務、清點人員、照顧傷患、建立撤退方案</desc>

    <rect width="800" height="500" fill="#0f172a" rx="8" />

    <text x="40" y="38" fill="#94a3b8" fontSize="13" fontWeight="bold" letterSpacing="1.5">
      LEADERSHIP 10 ｜ TEAM EMERGENCY MANAGEMENT
    </text>
    <text x="40" y="64" fill="#f8fafc" fontSize="18" fontWeight="bold">
      領隊在事故現場的角色與團隊分工架構
    </text>

    {/* Center Leader Node */}
    <g transform="translate(400, 240)">
      <circle r="72" fill="#1e293b" stroke="#f59e0b" strokeWidth="2.5" />
      <circle r="56" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" />
      <text x="0" y="-10" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="1">
        COMMAND
      </text>
      <text x="0" y="14" fill="#ffffff" fontSize="22" fontWeight="900" textAnchor="middle">
        領隊
      </text>
      <text x="0" y="34" fill="#cbd5e1" fontSize="11" textAnchor="middle">
        冷靜建立秩序與分工
      </text>
    </g>

    {/* 5 Outer Responsibilities */}
    {/* Ray 1: 維持秩序 (Top Left) */}
    <g transform="translate(60, 90)">
      <rect width="210" height="65" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.2" />
      <text x="16" y="26" fill="#60a5fa" fontSize="14" fontWeight="bold">1. 保持隊伍秩序</text>
      <text x="16" y="48" fill="#cbd5e1" fontSize="12">抑制焦慮，避免恐慌情緒蔓延擴散</text>
    </g>
    <line x1="270" y1="125" x2="340" y2="200" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />

    {/* Ray 2: 分配任務 (Top Right) */}
    <g transform="translate(530, 90)">
      <rect width="210" height="65" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.2" />
      <text x="16" y="26" fill="#34d399" fontSize="14" fontWeight="bold">2. 分配具體任務</text>
      <text x="16" y="48" fill="#cbd5e1" fontSize="12">明確分派通訊、照護傷患、環境觀測</text>
    </g>
    <line x1="530" y1="125" x2="460" y2="200" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />

    {/* Ray 3: 確實清點人員 (Mid-Left) */}
    <g transform="translate(40, 225)">
      <rect width="210" height="65" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.2" />
      <text x="16" y="26" fill="#fbbf24" fontSize="14" fontWeight="bold">3. 確實清點人員</text>
      <text x="16" y="48" fill="#cbd5e1" fontSize="12">定時唱名清點，絕不遺漏走失者</text>
    </g>
    <line x1="250" y1="255" x2="328" y2="245" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />

    {/* Ray 4: 照顧傷患與保暖 (Mid-Right) */}
    <g transform="translate(550, 225)">
      <rect width="210" height="65" rx="8" fill="#1e293b" stroke="#ec4899" strokeWidth="1.2" />
      <text x="16" y="26" fill="#f472b6" fontSize="14" fontWeight="bold">4. 照顧傷患與保暖</text>
      <text x="16" y="48" fill="#cbd5e1" fontSize="12">安排隊員輪流看護、集中保暖衣物</text>
    </g>
    <line x1="550" y1="255" x2="472" y2="245" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="3 3" />

    {/* Ray 5: 建立撤退方案 (Bottom Center) */}
    <g transform="translate(270, 360)">
      <rect width="260" height="65" rx="8" fill="#1e293b" stroke="#a855f7" strokeWidth="1.2" />
      <text x="16" y="26" fill="#c084fc" fontSize="14" fontWeight="bold">5. 建立主/備援撤退方案</text>
      <text x="16" y="48" fill="#cbd5e1" fontSize="12">規劃下撤路線與原地待援安全界線</text>
    </g>
    <line x1="400" y1="360" x2="400" y2="312" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 3" />

    {/* Core Statement Banner */}
    <rect x="40" y="440" width="720" height="42" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="1" />
    <text x="400" y="466" fill="#fef08a" fontSize="13" fontWeight="bold" textAnchor="middle">
      核心觀念：事故時團隊合作比個人能力更重要。一位冷靜的領隊與有序的隊伍，決定救援是否來得及。
    </text>
  </svg>
);

// SVG 11: 本章完整應變系統 (閉環總結圖)
export const Svg11ComprehensiveSystem: React.FC = () => (
  <svg
    viewBox="0 0 840 680"
    className="w-full h-auto max-w-4xl mx-auto rounded-xl border border-amber-500/40 bg-slate-950 shadow-2xl p-2 sm:p-4 my-8"
    role="img"
    aria-label="第十一章緊急應變與野外求生完整閉環應變系統圖解"
  >
    <title>登山事故應變與野外求生完整閉環系統架構</title>
    <desc>從事故發生起，依序經歷 STOP 原則、現場安全評估、保護生命、控制傷害、決定移動或停留、建立通訊求救、保暖水分物資管理、等待救援或安全撤離，並持續重新評估形成完整防護閉環</desc>

    <defs>
      <linearGradient id="sys-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
    </defs>

    <rect width="840" height="680" fill="#0b0f17" rx="10" />

    {/* Header */}
    <text x="40" y="40" fill="#f59e0b" fontSize="13" fontWeight="bold" letterSpacing="2">
      CHAPTER 11 COMPLETE SYSTEM ｜ EMERGENCY RESPONSE & SURVIVAL
    </text>
    <text x="40" y="68" fill="#ffffff" fontSize="20" fontWeight="bold">
      登山事故現場緊急應變與求生完整閉環系統
    </text>

    {/* Step 1: 事故發生 */}
    <g transform="translate(60, 100)">
      <rect width="180" height="52" rx="8" fill="#991b1b" stroke="#ef4444" strokeWidth="1.5" />
      <text x="90" y="32" fill="#ffffff" fontSize="15" fontWeight="900" textAnchor="middle">
        01 ｜ 事故發生
      </text>
    </g>

    {/* Arrow 1 -> 2 */}
    <path d="M 240 126 L 285 126" stroke="#f59e0b" strokeWidth="2" />
    <polygon points="285,122 293,126 285,130" fill="#f59e0b" />

    {/* Step 2: STOP 原則 */}
    <g transform="translate(295, 100)">
      <rect width="210" height="52" rx="8" fill="url(#sys-grad)" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="105" y="24" fill="#fbbf24" fontSize="14" fontWeight="bold" textAnchor="middle">
        02 ｜ STOP 原則
      </text>
      <text x="105" y="42" fill="#cbd5e1" fontSize="11" textAnchor="middle">
        停止 · 思考 · 觀察 · 計畫
      </text>
    </g>

    {/* Arrow 2 -> 3 */}
    <path d="M 505 126 L 550 126" stroke="#f59e0b" strokeWidth="2" />
    <polygon points="550,122 558,126 550,130" fill="#f59e0b" />

    {/* Step 3: 現場安全評估 */}
    <g transform="translate(560, 100)">
      <rect width="220" height="52" rx="8" fill="url(#sys-grad)" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="110" y="24" fill="#38bdf8" fontSize="14" fontWeight="bold" textAnchor="middle">
        03 ｜ 現場安全評估
      </text>
      <text x="110" y="42" fill="#cbd5e1" fontSize="11" textAnchor="middle">
        環境危險 · 人員狀況 · 避二次事故
      </text>
    </g>

    {/* Downward Turn 1 */}
    <path d="M 670 152 L 670 195" stroke="#f59e0b" strokeWidth="2" />
    <polygon points="666,195 670,203 674,195" fill="#f59e0b" />

    {/* Step 4: 保護生命 */}
    <g transform="translate(560, 205)">
      <rect width="220" height="52" rx="8" fill="url(#sys-grad)" stroke="#ef4444" strokeWidth="1.5" />
      <text x="110" y="24" fill="#f87171" fontSize="14" fontWeight="bold" textAnchor="middle">
        04 ｜ 保護生命 (Life Safety)
      </text>
      <text x="110" y="42" fill="#cbd5e1" fontSize="11" textAnchor="middle">
        意識確認 · 呼吸暢通 · 終止進行程
      </text>
    </g>

    {/* Leftward arrow 4 -> 5 */}
    <path d="M 560 231 L 515 231" stroke="#f59e0b" strokeWidth="2" />
    <polygon points="515,227 507,231 515,235" fill="#f59e0b" />

    {/* Step 5: 控制傷害 */}
    <g transform="translate(295, 205)">
      <rect width="210" height="52" rx="8" fill="url(#sys-grad)" stroke="#ec4899" strokeWidth="1.5" />
      <text x="105" y="24" fill="#f472b6" fontSize="14" fontWeight="bold" textAnchor="middle">
        05 ｜ 控制傷害 (First Aid)
      </text>
      <text x="105" y="42" fill="#cbd5e1" fontSize="11" textAnchor="middle">
        止血固定 · 失溫防制 · 休克警戒
      </text>
    </g>

    {/* Leftward arrow 5 -> 6 */}
    <path d="M 295 231 L 250 231" stroke="#f59e0b" strokeWidth="2" />
    <polygon points="250,227 242,231 250,235" fill="#f59e0b" />

    {/* Step 6: 決定移動／停留 */}
    <g transform="translate(60, 205)">
      <rect width="180" height="52" rx="8" fill="url(#sys-grad)" stroke="#eab308" strokeWidth="1.5" />
      <text x="90" y="24" fill="#facc15" fontSize="14" fontWeight="bold" textAnchor="middle">
        06 ｜ 決定移動／停留
      </text>
      <text x="90" y="42" fill="#cbd5e1" fontSize="11" textAnchor="middle">
        依環境客觀風險 · 絕非下山焦慮
      </text>
    </g>

    {/* Downward Turn 2 */}
    <path d="M 150 257 L 150 300" stroke="#f59e0b" strokeWidth="2" />
    <polygon points="146,300 150,308 154,300" fill="#f59e0b" />

    {/* Step 7: 建立通訊與求救 */}
    <g transform="translate(60, 310)">
      <rect width="210" height="52" rx="8" fill="url(#sys-grad)" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="105" y="24" fill="#38bdf8" fontSize="14" fontWeight="bold" textAnchor="middle">
        07 ｜ 建立通訊與求救
      </text>
      <text x="105" y="42" fill="#cbd5e1" fontSize="11" textAnchor="middle">
        座標回報 · 狀況通聯 · 節省電力
      </text>
    </g>

    {/* Rightward arrow 7 -> 8 */}
    <path d="M 270 336 L 315 336" stroke="#f59e0b" strokeWidth="2" />
    <polygon points="315,332 323,336 315,340" fill="#f59e0b" />

    {/* Step 8: 保暖／水分／物資管理 */}
    <g transform="translate(325, 310)">
      <rect width="220" height="52" rx="8" fill="url(#sys-grad)" stroke="#10b981" strokeWidth="1.5" />
      <text x="110" y="24" fill="#34d399" fontSize="14" fontWeight="bold" textAnchor="middle">
        08 ｜ 保暖／水分／物資管理
      </text>
      <text x="110" y="42" fill="#cbd5e1" fontSize="11" textAnchor="middle">
        背風避難 · 水分節省 · 糧食天數
      </text>
    </g>

    {/* Rightward arrow 8 -> 9 */}
    <path d="M 545 336 L 590 336" stroke="#f59e0b" strokeWidth="2" />
    <polygon points="590,332 598,336 590,340" fill="#f59e0b" />

    {/* Step 9: 等待救援或安全撤離 */}
    <g transform="translate(600, 310)">
      <rect width="180" height="52" rx="8" fill="url(#sys-grad)" stroke="#a855f7" strokeWidth="1.5" />
      <text x="90" y="24" fill="#c084fc" fontSize="14" fontWeight="bold" textAnchor="middle">
        09 ｜ 等待救援 / 撤離
      </text>
      <text x="90" y="42" fill="#cbd5e1" fontSize="11" textAnchor="middle">
        定時求救 · 團隊秩序分工
      </text>
    </g>

    {/* Downward Turn 3 */}
    <path d="M 690 362 L 690 410" stroke="#f59e0b" strokeWidth="2" />
    <polygon points="686,410 690,418 694,410" fill="#f59e0b" />

    {/* Step 10: 持續重新評估 */}
    <g transform="translate(560, 420)">
      <rect width="220" height="56" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
      <text x="110" y="26" fill="#fbbf24" fontSize="15" fontWeight="bold" textAnchor="middle">
        10 ｜ 持續重新評估
      </text>
      <text x="110" y="45" fill="#fef08a" fontSize="12" textAnchor="middle">
        天候 · 傷情 · 資源動態更新
      </text>
    </g>

    {/* Closed Loop Feedback Path Back to STOP & Assessment */}
    <path
      d="M 560 448 L 100 448 L 100 170"
      fill="none"
      stroke="#f59e0b"
      strokeWidth="2"
      strokeDasharray="6 4"
    />
    <polygon points="96,170 100,160 104,170" fill="#f59e0b" />

    <text x="320" y="472" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="middle">
      ◄── 閉環反饋：環境與人員狀況隨時在改變，必須週而復始持續觀測與再評估 ──┘
    </text>

    {/* Core System Summary Panel */}
    <g transform="translate(60, 505)">
      <rect width="720" height="145" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.2" />
      <rect x="0" y="0" width="720" height="30" rx="8" fill="#1e293b" />
      <text x="360" y="20" fill="#e2e8f0" fontSize="13" fontWeight="bold" textAnchor="middle">
        本章應變核心總結原則 (SYSTEM ESSENTIALS)
      </text>

      <g transform="translate(30, 45)">
        <text x="0" y="15" fill="#fef08a" fontSize="13" fontWeight="bold">1. 停止移動比盲目摸索重要：</text>
        <text x="215" y="15" fill="#cbd5e1" fontSize="13">恐慌做出的直覺決定往往是次生事故的主因。</text>

        <text x="0" y="42" fill="#fef08a" fontSize="13" fontWeight="bold">2. 生命安全高於行程成就：</text>
        <text x="215" y="42" fill="#cbd5e1" fontSize="13">山永遠都在，果斷放棄登頂，讓隊伍進入安全待援狀態。</text>

        <text x="0" y="69" fill="#fef08a" fontSize="13" fontWeight="bold">3. 團隊合作高於個人逞強：</text>
        <text x="215" y="69" fill="#cbd5e1" fontSize="13">領隊指揮若定、隊員恪守分工，互相支撐等待救援抵達。</text>
      </g>
    </g>
  </svg>
);

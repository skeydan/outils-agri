// Hand-drawn SVG portraits for the « Engrais verts » tab, one per drawing key
// used in data/engraisverts.js. Plain strings, inserted as trusted markup.
// The palette follows the CSS tokens (leaf, soil, flower colours), so the
// drawings work in both themes.

export const GREEN_MANURE_DRAWINGS = {
  'ev-phacelie': `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="92" width="160" height="28" class="soil"/>
    <rect x="0" y="92" width="160" height="4" class="soil-d"/>
    <g class="s2">
      <path d="M80 92 V38"/><path d="M56 92 V52"/><path d="M104 92 V52"/>
      <path d="M80 38 q-10 -8 -4 -16"/><path d="M56 52 q-8 -10 -2 -18"/><path d="M104 52 q8 -10 2 -18"/>
    </g>
    <g class="leaf">
      <path d="M80 72 q-16 -10 -20 0 q12 8 20 0"/><path d="M80 64 q16 -10 20 0 q-12 8 -20 0"/>
      <path d="M56 76 q-14 -8 -18 0 q10 8 18 0"/><path d="M104 76 q14 -8 18 0 q-10 8 -18 0"/>
      <path d="M80 84 q-12 -8 -16 0 q10 6 16 0"/>
    </g>
    <g class="fl-p">
      <circle cx="70" cy="18" r="4"/><circle cx="62" cy="24" r="3.5"/><circle cx="56" cy="32" r="3"/>
      <circle cx="98" cy="20" r="4"/><circle cx="106" cy="27" r="3.5"/><circle cx="110" cy="36" r="3"/>
      <circle cx="82" cy="14" r="3.5"/><circle cx="78" cy="24" r="3"/>
    </g>
    <g class="s2">
      <path d="M80 92 q-12 10 -24 16"/><path d="M80 92 q-4 12 -4 20"/>
      <path d="M80 92 q12 10 22 14"/><path d="M56 92 q-8 8 -16 10"/>
      <path d="M104 92 q8 8 16 10"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">C/N 10–15 · mycorhizes</text>
  </svg>`,

  'ev-vesce-commune': `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="94" width="160" height="26" class="soil"/>
    <rect x="0" y="94" width="160" height="4" class="soil-d"/>
    <g class="s2">
      <path d="M34 94 q14 -30 52 -46 q26 -12 34 -34"/>
      <path d="M62 78 q-10 -10 -6 -22"/>
    </g>
    <g class="leaf">
      <path d="M44 88 q-12 -8 -18 0 q10 8 18 0"/><path d="M60 76 q-12 -8 -18 0 q10 8 18 0"/>
      <path d="M78 62 q-12 -8 -18 0 q10 8 18 0"/><path d="M94 50 q-12 -8 -18 0 q10 8 18 0"/>
      <path d="M56 82 q14 -8 18 0 q-10 8 -18 0"/><path d="M74 68 q14 -8 18 0 q-10 8 -18 0"/>
      <path d="M90 56 q14 -8 18 0 q-10 8 -18 0"/>
    </g>
    <g class="s2">
      <path d="M112 40 q10 -10 18 -6 q-8 2 -6 10 q2 6 10 4"/>
      <path d="M100 44 q-4 -14 4 -20 q2 12 10 14"/>
    </g>
    <g class="fl-p">
      <path d="M112 34 q-8 0 -10 8 q8 2 10 -8"/><path d="M120 38 q8 2 8 10 q-8 0 -8 -10"/>
      <path d="M114 46 q0 8 8 10 q4 -8 -8 -10"/>
    </g>
    <g class="metal-d">
      <circle cx="58" cy="101" r="2"/><circle cx="66" cy="106" r="2"/><circle cx="74" cy="100" r="2"/>
      <circle cx="48" cy="108" r="2"/>
    </g>
    <g class="s2">
      <path d="M40 94 q-6 10 -14 14"/><path d="M54 94 q0 12 -2 20"/>
      <path d="M70 94 q8 10 6 20"/><path d="M84 94 q12 8 12 18"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">nodosités · azote</text>
  </svg>`,

  'ev-vesce-velue': `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="94" width="160" height="26" class="soil"/>
    <rect x="0" y="94" width="160" height="4" class="soil-d"/>
    <g class="s2">
      <path d="M30 94 q18 -34 58 -50 q28 -12 36 -30"/>
      <path d="M72 70 q-12 -10 -8 -24"/>
      <path d="M30 94 q28 2 44 -18"/>
    </g>
    <g class="leaf">
      <path d="M38 88 q-12 -8 -18 0 q10 8 18 0"/><path d="M54 76 q-12 -8 -18 0 q10 8 18 0"/>
      <path d="M72 62 q-12 -8 -18 0 q10 8 18 0"/><path d="M90 50 q-12 -8 -18 0 q10 8 18 0"/>
      <path d="M50 82 q14 -8 18 0 q-10 8 -18 0"/><path d="M68 68 q14 -8 18 0 q-10 8 -18 0"/>
      <path d="M86 56 q14 -8 18 0 q-10 8 -18 0"/>
    </g>
    <g class="s2" stroke-dasharray="1 3">
      <path d="M30 94 q-8 -16 -4 -28"/><path d="M46 82 q-8 -12 -6 -22"/>
      <path d="M62 70 q-8 -12 -6 -22"/><path d="M78 58 q-6 -10 -4 -18"/>
      <path d="M94 48 q-6 -10 -4 -16"/>
    </g>
    <g class="s2">
      <path d="M114 34 q10 -10 18 -4 q-8 2 -6 10 q2 6 10 4"/>
    </g>
    <g class="fl-p">
      <path d="M112 28 q-8 0 -10 8 q8 2 10 -8"/><path d="M120 32 q8 2 8 10 q-8 0 -8 -10"/>
      <path d="M114 40 q0 8 8 10 q4 -8 -8 -10"/>
    </g>
    <g class="metal-d">
      <circle cx="52" cy="101" r="2"/><circle cx="60" cy="106" r="2"/><circle cx="68" cy="100" r="2"/>
      <circle cx="44" cy="107" r="2"/>
    </g>
    <g class="s2">
      <path d="M36 94 q-6 10 -14 14"/><path d="M54 94 q0 12 -4 20"/>
      <path d="M72 94 q8 10 6 20"/><path d="M88 94 q12 8 14 18"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">poils · nodosités</text>
  </svg>`,

  'ev-consoude': `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="62" width="160" height="58" class="soil"/>
    <rect x="0" y="62" width="160" height="5" class="soil-d"/>
    <g class="s2">
      <path d="M80 62 V18"/><path d="M66 62 V30"/><path d="M94 62 V30"/>
    </g>
    <g class="leaf">
      <path d="M78 52 q-28 -8 -34 10 q26 6 34 -10"/>
      <path d="M82 44 q28 -10 36 8 q-26 8 -36 -8"/>
      <path d="M78 34 q-24 -8 -30 8 q22 6 30 -8"/>
      <path d="M82 26 q24 -8 30 6 q-22 6 -30 -6"/>
      <path d="M76 20 q-14 -8 -20 2 q14 6 20 -2"/>
    </g>
    <g class="fl-p">
      <path d="M64 18 q-6 0 -6 6 q0 6 6 6 q6 0 6 -6 q0 -6 -6 -6"/>
      <path d="M80 12 q-6 0 -6 6 q0 6 6 6 q6 0 6 -6 q0 -6 -6 -6"/>
      <path d="M96 18 q-6 0 -6 6 q0 6 6 6 q6 0 6 -6 q0 -6 -6 -6"/>
    </g>
    <g class="s2">
      <path d="M80 62 v40"/><path d="M80 76 q-14 10 -18 24"/>
      <path d="M80 86 q14 10 18 22"/>
      <path d="M80 70 q-8 6 -10 14"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">pivot jusqu’à 1,8 m · K</text>
  </svg>`,

  'ev-tournesol': `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="86" width="160" height="34" class="soil"/>
    <rect x="0" y="86" width="160" height="5" class="soil-d"/>
    <g class="s2">
      <path d="M80 86 V28"/><path d="M80 58 q-18 -12 -28 -4"/><path d="M80 50 q18 -12 28 -4"/>
    </g>
    <g class="leaf">
      <path d="M80 66 q-30 -12 -38 4 q28 10 38 -4"/>
      <path d="M80 56 q30 -12 38 4 q-28 10 -38 -4"/>
      <path d="M80 44 q-22 -10 -28 2 q20 8 28 -2"/>
    </g>
    <g class="fl-y">
      <path d="M80 8 l5 10 l10 -6 l-2 12 l12 1 l-8 8 l8 8 l-12 1 l2 12 l-10 -6 l-5 10 l-5 -10 l-10 6 l2 -12 l-12 -1 l8 -8 l-8 -8 l12 -1 l-2 -12 l10 6 z"/>
    </g>
    <circle cx="80" cy="26" r="9" class="soil-d"/>
    <circle cx="80" cy="26" r="4" class="wood"/>
    <g class="s2">
      <path d="M80 86 q-10 12 -16 26"/><path d="M80 86 q10 12 16 26"/>
      <path d="M80 86 v28"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">pivot · biomasse</text>
  </svg>`,

  'ev-topinambour': `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="74" width="160" height="46" class="soil"/>
    <rect x="0" y="74" width="160" height="5" class="soil-d"/>
    <g class="s2">
      <path d="M62 74 V32"/><path d="M98 74 V28"/><path d="M62 58 q-18 -10 -26 -2"/><path d="M98 54 q18 -10 26 -2"/>
    </g>
    <g class="leaf">
      <path d="M62 64 q-26 -12 -34 2 q24 10 34 -2"/>
      <path d="M62 48 q24 -12 32 2 q-24 10 -32 -2"/>
      <path d="M98 60 q-26 -12 -34 2 q24 10 34 -2"/>
      <path d="M98 44 q26 -12 34 2 q-24 10 -34 -2"/>
    </g>
    <g class="fl-y">
      <circle cx="62" cy="24" r="8"/><circle cx="98" cy="20" r="8"/>
      <circle cx="50" cy="30" r="6"/><circle cx="110" cy="26" r="6"/>
    </g>
    <circle cx="62" cy="24" r="3" class="soil-d"/><circle cx="98" cy="20" r="3" class="soil-d"/>
    <g class="wood">
      <path d="M48 90 q10 -14 22 -2 q10 -12 22 0 q10 -10 20 2 q-8 12 -22 6 q-10 10 -22 0 q-12 6 -20 -6"/>
      <path d="M58 104 q8 -10 18 -2 q8 -8 16 0 q-8 10 -16 4 q-10 6 -18 -2"/>
    </g>
    <g class="s2">
      <path d="M62 74 q-4 8 -4 16"/><path d="M98 74 q4 8 4 16"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">tubercules · inuline</text>
  </svg>`,

  'ev-raifort': `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="80" width="160" height="40" class="soil"/>
    <rect x="0" y="80" width="160" height="5" class="soil-d"/>
    <g class="leaf">
      <path d="M58 70 q-30 -18 -38 0 q16 18 38 8"/>
      <path d="M102 70 q30 -18 38 0 q-16 18 -38 8"/>
      <path d="M62 58 q-22 -20 -30 -6 q14 18 30 10"/>
      <path d="M98 58 q22 -20 30 -6 q-14 18 -30 10"/>
      <path d="M66 44 q-18 -18 -24 -4 q12 14 24 8"/>
      <path d="M94 44 q18 -18 24 -4 q-12 14 -24 8"/>
    </g>
    <g class="s2">
      <path d="M80 80 V34"/><path d="M80 46 q-8 -8 -14 -6"/><path d="M80 46 q8 -8 14 -6"/>
    </g>
    <g class="fl-w">
      <circle cx="78" cy="20" r="4"/><circle cx="90" cy="24" r="4"/><circle cx="70" cy="28" r="4"/>
      <circle cx="84" cy="32" r="3.5"/><circle cx="96" cy="34" r="3.5"/>
    </g>
    <g class="wood">
      <path d="M80 80 q-12 14 -8 30 q8 8 18 0 q4 -16 -6 -30 z"/>
    </g>
    <g class="s2">
      <path d="M72 100 q8 4 16 0"/><path d="M70 108 q10 4 20 0"/>
      <path d="M80 80 q-18 8 -24 20"/><path d="M80 80 q18 8 24 20"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">sinigrine · biofumigation</text>
  </svg>`,

  'ev-ray-grass': `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="90" width="160" height="30" class="soil"/>
    <rect x="0" y="90" width="160" height="4" class="soil-d"/>
    <g class="s2">
      <path d="M80 90 V44"/><path d="M66 90 q-8 -24 -22 -34"/>
      <path d="M94 90 q8 -24 22 -34"/><path d="M72 90 q-4 -26 -12 -44"/>
      <path d="M88 90 q4 -26 12 -44"/>
    </g>
    <g class="leaf">
      <path d="M80 88 q-10 -30 -16 -34 q2 20 10 34"/>
      <path d="M80 88 q10 -30 16 -34 q-2 20 -10 34"/>
      <path d="M80 88 q-16 -20 -28 -22 q10 16 24 24"/>
      <path d="M80 88 q16 -20 28 -22 q-10 16 -24 24"/>
    </g>
    <g class="fl-y">
      <path d="M76 42 l3 -8 l3 8 z"/><path d="M70 48 l3 -8 l3 8 z"/><path d="M82 48 l3 -8 l3 8 z"/>
      <path d="M76 34 l3 -8 l3 8 z"/><path d="M70 40 l3 -8 l3 8 z"/><path d="M82 40 l3 -8 l3 8 z"/>
    </g>
    <g class="s2">
      <path d="M80 90 q-12 10 -20 20"/><path d="M80 90 q0 12 0 20"/>
      <path d="M80 90 q12 10 20 20"/><path d="M66 90 q-6 10 -12 14"/>
      <path d="M94 90 q6 10 12 14"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">racines fibreuses · nitrates</text>
  </svg>`,

  'ev-moutarde-blanche': `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="88" width="160" height="32" class="soil"/>
    <rect x="0" y="88" width="160" height="5" class="soil-d"/>
    <g class="s2">
      <path d="M80 88 V46"/><path d="M80 62 q-18 -10 -28 -2"/><path d="M80 56 q18 -10 28 -2"/>
      <path d="M80 46 q-12 -10 -18 -18"/><path d="M80 46 q12 -10 18 -18"/>
    </g>
    <g class="leaf">
      <path d="M80 72 q-26 -12 -34 2 q24 10 34 -2"/>
      <path d="M80 64 q26 -12 34 2 q-24 10 -34 -2"/>
      <path d="M80 54 q-18 -10 -24 0 q16 8 24 0"/>
      <path d="M80 50 q18 -10 24 0 q-16 8 -24 0"/>
    </g>
    <g class="fl-y">
      <path d="M62 24 q-8 0 -8 6 q0 6 8 6 q8 0 8 -6 q0 -6 -8 -6"/>
      <path d="M80 16 q-8 0 -8 6 q0 6 8 6 q8 0 8 -6 q0 -6 -8 -6"/>
      <path d="M98 24 q-8 0 -8 6 q0 6 8 6 q8 0 8 -6 q0 -6 -8 -6"/>
      <path d="M72 38 q-7 0 -7 5 q0 5 7 5 q7 0 7 -5 q0 -5 -7 -5"/>
      <path d="M90 38 q-7 0 -7 5 q0 5 7 5 q7 0 7 -5 q0 -5 -7 -5"/>
    </g>
    <g class="s2">
      <path d="M80 88 q-8 10 -10 22"/><path d="M80 88 q8 10 10 22"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">glucosinolates · couvert rapide</text>
  </svg>`,

  'ev-seigle': `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="90" width="160" height="30" class="soil"/>
    <rect x="0" y="90" width="160" height="4" class="soil-d"/>
    <g class="s2">
      <path d="M80 90 V20"/><path d="M66 90 q-8 -30 -22 -40"/>
      <path d="M94 90 q8 -30 22 -40"/><path d="M73 90 q-4 -30 -10 -50"/>
      <path d="M87 90 q4 -30 10 -50"/>
    </g>
    <g class="leaf">
      <path d="M80 88 q-10 -34 -18 -38 q2 24 12 38"/>
      <path d="M80 88 q10 -34 18 -38 q-2 24 -12 38"/>
      <path d="M80 88 q-16 -22 -28 -24 q10 18 24 26"/>
      <path d="M80 88 q16 -22 28 -24 q-10 18 -24 26"/>
    </g>
    <g class="fl-y">
      <path d="M74 26 l4 -14 l4 14 z"/><path d="M70 34 l4 -14 l4 14 z"/><path d="M78 34 l4 -14 l4 14 z"/>
      <path d="M86 34 l4 -14 l4 14 z"/><path d="M82 26 l4 -14 l4 14 z"/>
      <path d="M70 46 l4 -12 l4 12 z"/><path d="M78 46 l4 -12 l4 12 z"/><path d="M86 46 l4 -12 l4 12 z"/>
    </g>
    <g class="s2">
      <path d="M80 90 q-12 10 -20 20"/><path d="M80 90 q0 12 0 20"/>
      <path d="M80 90 q12 10 20 20"/><path d="M64 90 q-6 10 -12 14"/>
      <path d="M96 90 q6 10 12 14"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">C/N 26–37 · paille &gt; 80</text>
  </svg>`,

  'ev-sarrasin': `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="86" width="160" height="34" class="soil"/>
    <rect x="0" y="86" width="160" height="5" class="soil-d"/>
    <g class="s2">
      <path d="M80 86 V38"/><path d="M80 60 q-18 -12 -28 -4"/><path d="M80 52 q18 -12 28 -4"/>
      <path d="M80 38 q-10 -8 -14 -16"/><path d="M80 38 q10 -8 14 -16"/>
    </g>
    <g class="leaf">
      <path d="M80 70 l-20 -6 l8 -14 l22 4 l4 14 z"/>
      <path d="M80 58 l18 -10 l8 12 l-16 12 l-18 -6 z"/>
      <path d="M62 50 l-14 -8 l8 -10 l16 4 l2 10 z"/>
      <path d="M98 44 l12 -10 l8 8 l-10 12 l-14 2 z"/>
    </g>
    <g class="fl-w">
      <circle cx="66" cy="20" r="3"/><circle cx="58" cy="26" r="3"/><circle cx="64" cy="32" r="3"/>
      <circle cx="94" cy="20" r="3"/><circle cx="102" cy="26" r="3"/><circle cx="96" cy="32" r="3"/>
      <circle cx="80" cy="16" r="3"/>
    </g>
    <g class="s2">
      <path d="M80 86 q-10 12 -14 24"/><path d="M80 86 q10 12 14 24"/>
      <path d="M80 86 v26"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">phosphore · allélopathie</text>
  </svg>`,

  'ev-trefle-incarnat': `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="92" width="160" height="28" class="soil"/>
    <rect x="0" y="92" width="160" height="4" class="soil-d"/>
    <g class="s2">
      <path d="M80 92 V56"/><path d="M80 72 q-16 -8 -24 0"/><path d="M80 66 q16 -8 24 0"/>
      <path d="M64 82 q-12 -6 -18 0"/><path d="M96 82 q12 -6 18 0"/>
    </g>
    <g class="leaf">
      <path d="M80 62 q-12 -12 -18 -2 q-2 12 18 2"/>
      <path d="M82 62 q12 -12 18 -2 q2 12 -18 2"/>
      <path d="M80 62 q0 -16 6 -16 q6 0 4 16"/>
      <path d="M64 76 q-12 -10 -18 -2 q0 12 18 2"/>
      <path d="M66 76 q12 -10 18 -2 q0 12 -18 2"/>
      <path d="M96 76 q-12 -10 -18 -2 q0 12 18 2"/>
      <path d="M98 76 q12 -10 18 -2 q0 12 -18 2"/>
    </g>
    <g class="fl-r">
      <path d="M80 22 q-10 4 -10 14 q0 10 10 12 q10 -2 10 -12 q0 -10 -10 -14 z"/>
      <path d="M58 34 q-7 4 -6 12 q2 8 8 8 q6 -2 6 -10 q0 -8 -8 -10 z"/>
      <path d="M102 34 q7 4 6 12 q-2 8 -8 8 q-6 -2 -6 -10 q0 -8 8 -10 z"/>
    </g>
    <g class="metal-d">
      <circle cx="72" cy="100" r="2"/><circle cx="88" cy="102" r="2"/><circle cx="80" cy="108" r="2"/>
    </g>
    <g class="s2">
      <path d="M80 92 q-8 10 -12 20"/><path d="M80 92 v20"/>
      <path d="M80 92 q8 10 12 20"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">nodosités · C/N 11–16</text>
  </svg>`,
};

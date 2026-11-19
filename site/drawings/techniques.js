// Small hand-drawn SVG icons for the « Techniques » tab, one per drawing key
// used in data/techniques.js.

export const TECHNIQUE_DRAWINGS = {
  't-sous-solage': `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="40" width="160" height="70" class="soil"/>
    <rect x="0" y="40" width="160" height="8" class="soil-d"/>
    <rect x="0" y="76" width="160" height="7" class="soil-d" opacity=".7"/>
    <g class="s">
      <path d="M40 14 h76 v20 h-76 z" class="metal"/>
      <path d="M58 34 v44"/><path d="M80 34 v52"/><path d="M102 34 v44"/>
    </g>
    <g class="s2 metal">
      <path d="M54 74 l8 0 l-4 8 z"/><path d="M76 82 l8 0 l-4 8 z"/><path d="M98 74 l8 0 l-4 8 z"/>
    </g>
    <g class="s2" stroke-dasharray="2 4">
      <path d="M66 90 l-8 12"/><path d="M90 96 l8 10"/><path d="M120 50 l12 20"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">sans retourner</text>
  </svg>`,

  't-labour': `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="62" width="160" height="48" class="soil"/>
    <rect x="0" y="62" width="160" height="6" class="soil-d"/>
    <g class="s">
      <path d="M28 28 h40 v18 h-40 z" class="metal"/>
      <path d="M68 36 h34 v22 h-34 z" class="metal"/>
      <path d="M102 58 q10 14 24 10 q10 -8 2 -22 q-10 6 -26 12z" class="soil-d"/>
    </g>
    <g class="s2">
      <path d="M36 46 l-8 26"/><path d="M48 46 l-2 30"/>
    </g>
    <path d="M118 56 q18 18 34 6" class="s2" stroke-dasharray="4 4"/>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">retourne la couche arable</text>
  </svg>`,

  't-travail-du-sol': `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="70" width="160" height="40" class="soil"/>
    <rect x="0" y="70" width="160" height="5" class="soil-d"/>
    <g class="s">
      <path d="M22 34 v-14 h20 v14" class="s2"/>
      <path d="M22 34 v20"/><path d="M32 34 v20"/><path d="M42 34 v20"/>
    </g>
    <g class="s">
      <path d="M64 62 q16 -12 32 0 l-4 8 h-24 z" class="metal"/>
      <path d="M70 62 v-16 h8 v16" class="s2"/>
    </g>
    <g class="s">
      <path d="M112 30 l20 20 l-8 8 l-20 -20 z" class="wood"/>
      <path d="M104 58 v18 h14 v-18" class="s2"/>
    </g>
    <g class="leaf">
      <path d="M20 92 q10 -12 20 0"/><path d="M68 94 q10 -12 20 0"/><path d="M116 92 q10 -12 20 0"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">préparer et entretenir</text>
  </svg>`,

  't-compost': `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <g class="s">
      <path d="M40 44 h80 l-6 60 h-68 z" class="metal"/>
      <path d="M36 44 h88" class="s2"/>
      <path d="M48 60 h64 M44 76 h72 M46 92 h68" class="s2"/>
    </g>
    <g class="soil">
      <path d="M46 60 h12 v14 h-12 z"/><path d="M66 60 h14 v14 h-14 z"/><path d="M88 60 h18 v14 h-18 z"/>
      <rect x="46" y="78" width="60" height="10" class="soil-d" opacity=".7"/>
    </g>
    <g class="s2">
      <path d="M64 30 q-6 -10 2 -18 q8 8 2 18"/>
      <path d="M84 30 q-6 -10 2 -18 q8 8 2 18"/>
      <path d="M74 26 q-4 -8 1 -14 q6 6 1 14"/>
    </g>
    <g class="s">
      <path d="M124 44 v26" class="metal"/><circle cx="124" cy="76" r="7" class="metal-d"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">40–45 °C puis 60–70 °C</text>
  </svg>`,

  't-faux-semis': `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="74" width="160" height="36" class="soil"/>
    <rect x="0" y="74" width="160" height="5" class="soil-d"/>
    <g class="s2">
      <path d="M24 74 h112" stroke-dasharray="4 4"/>
    </g>
    <g class="leaf">
      <path d="M40 74 q-6 -14 4 -18 q6 8 -4 18"/>
      <path d="M66 76 q-6 -16 4 -20 q7 8 -4 20"/>
      <path d="M94 74 q-6 -14 4 -18 q6 8 -4 18"/>
      <path d="M120 76 q-6 -16 4 -20 q7 8 -4 20"/>
    </g>
    <g class="s2">
      <path d="M36 82 l20 -8"/><path d="M100 80 l20 -8"/>
    </g>
    <g class="s">
      <path d="M20 28 l14 14 M34 28 l-14 14" class="warn"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">laisser lever, puis détruire</text>
  </svg>`,

  't-engrais-verts': `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="78" width="160" height="32" class="soil"/>
    <g class="s2">
      <path d="M48 78 v-34"/><path d="M80 78 v-44"/><path d="M112 78 v-34"/>
    </g>
    <g class="leaf">
      <path d="M48 52 q-16 -6 -18 12 q16 2 18 -12"/>
      <path d="M48 62 q16 -8 18 10 q-16 4 -18 -10"/>
      <path d="M80 42 q-16 -8 -18 10 q16 4 18 -10"/>
      <path d="M80 54 q16 -10 18 8 q-16 6 -18 -8"/>
      <path d="M112 52 q-16 -6 -18 12 q16 2 18 -12"/>
      <path d="M112 62 q16 -8 18 10 q-16 4 -18 -10"/>
    </g>
    <g class="s2">
      <path d="M48 78 q-8 12 -2 20"/><path d="M80 78 q8 12 2 20"/><path d="M112 78 q-8 12 -2 20"/>
    </g>
    <g class="metal-d">
      <circle cx="52" cy="92" r="2"/><circle cx="58" cy="88" r="2"/><circle cx="84" cy="92" r="2"/><circle cx="90" cy="88" r="2"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">racines · nodosités</text>
  </svg>`,

  't-broyat': `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <g class="s">
      <path d="M80 14 v46"/><path d="M80 34 l-18 -12"/><path d="M80 30 l18 -12"/>
    </g>
    <g class="leaf">
      <path d="M62 22 q-18 -6 -20 12 q18 2 20 -12"/>
      <path d="M98 18 q18 -8 20 10 q-18 4 -20 -10"/>
      <path d="M60 40 q-18 -4 -20 14 q18 0 20 -14"/>
      <path d="M100 36 q18 -6 20 12 q-18 2 -20 -12"/>
    </g>
    <g class="soil">
      <path d="M20 92 q10 -16 22 -4 q8 -14 22 -2 q10 -12 24 0 q8 -10 22 2 q10 -8 18 4 l-4 12 h-104 z"/>
    </g>
    <g class="soil-d">
      <path d="M36 94 l8 -4 M64 92 l10 -4 M92 94 l8 -4 M118 92 l10 -4" class="s2"/>
    </g>
    <path d="M0 108 h160" class="s2"/>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">paillis au pied des arbres</text>
  </svg>`,

  't-goutte': `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="82" width="160" height="28" class="soil"/>
    <g class="s2">
      <path d="M10 30 h140" class="water-s" stroke-width="4"/>
      <path d="M58 30 v-8 q20 0 20 8" class="s2"/>
    </g>
    <g class="water">
      <circle cx="52" cy="30" r="3"/><circle cx="84" cy="30" r="3"/><circle cx="116" cy="30" r="3"/>
      <path d="M84 36 q-4 10 0 16 q4 -6 0 -16"/>
    </g>
    <g class="s2">
      <path d="M84 82 v-30"/>
    </g>
    <g class="leaf">
      <path d="M84 54 q-16 -8 -18 10 q16 4 18 -10"/>
      <path d="M84 64 q16 -8 18 10 q-16 4 -18 -10"/>
    </g>
    <g class="s2">
      <path d="M84 82 q-10 14 -2 20"/><path d="M84 82 q10 14 2 20"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">1 bar suffit</text>
  </svg>`,
};

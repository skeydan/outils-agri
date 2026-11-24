// Hand-drawn SVG sketches for the glossary, one per drawing key used in
// data/glossary.js. Plain strings: the page inserts them as trusted markup.
// Colours come from the CSS tokens (steel, wood, leaf, soil, water…), so the
// drawings follow the light and dark theme. To add a tool: add its key here
// and reference it from the entry.

export const TOOL_DRAWINGS = {
  'sous-soleuse': `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="86" width="160" height="34" class="soil"/>
    <rect x="0" y="86" width="160" height="7" class="soil-d"/>
    <rect x="0" y="104" width="160" height="5" class="soil-d" opacity=".55"/>
    <g class="s">
      <path d="M18 78 h34 v-12 h18 v12 h10"/>
      <circle cx="30" cy="82" r="9" class="metal"/><circle cx="30" cy="82" r="3" class="metal-d"/>
      <circle cx="60" cy="82" r="12" class="metal"/><circle cx="60" cy="82" r="4" class="metal-d"/>
      <path d="M62 64 l8 -10 h8 l-2 10" class="metal"/>
    </g>
    <g class="s">
      <path d="M88 64 v34"/><path d="M104 64 v40"/><path d="M120 64 v34"/>
    </g>
    <g class="s2 metal">
      <path d="M84 98 l8 0 l-4 8 z"/><path d="M100 104 l8 0 l-4 8 z"/><path d="M116 98 l8 0 l-4 8 z"/>
    </g>
    <path d="M0 96 h160" class="s2 dash" stroke-dasharray="3 3"/>
    <path d="M12 70 h136" class="s2"/>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">sans retourner le sol</text>
  </svg>`,

  decompacteur: `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="78" width="160" height="42" class="soil"/>
    <rect x="0" y="78" width="160" height="6" class="soil-d"/>
    <rect x="0" y="100" width="160" height="4" class="soil-d" opacity=".5"/>
    <g class="s">
      <path d="M20 66 h110 v8 h-110 z" class="metal"/>
      <path d="M40 66 v-10 h30 v10" class="s2"/>
      <path d="M52 74 v22"/><path d="M76 74 v28"/><path d="M100 74 v22"/>
      <circle cx="132" cy="82" r="11" class="metal"/><circle cx="132" cy="82" r="4" class="metal-d"/>
    </g>
    <g class="s2 metal">
      <path d="M47 90 l10 0 l-5 7 z"/><path d="M71 96 l10 0 l-5 7 z"/><path d="M95 90 l10 0 l-5 7 z"/>
    </g>
    <path d="M0 88 h160" class="s2 dash" stroke-dasharray="3 3"/>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">ameublit jusqu’à la semelle</text>
  </svg>`,

  fissurateur: `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="76" width="160" height="44" class="soil"/>
    <rect x="0" y="76" width="160" height="6" class="soil-d"/>
    <g class="s">
      <path d="M18 58 h124 v9 h-124 z" class="metal"/>
      <path d="M46 67 l-6 34"/><path d="M78 67 l-3 40"/><path d="M110 67 l6 34"/>
    </g>
    <g class="s2" stroke-dasharray="2 4">
      <path d="M40 92 l-10 8"/><path d="M75 100 l-8 9"/><path d="M116 92 l10 8"/>
      <path d="M59 84 l8 6"/><path d="M99 84 l-8 6"/>
    </g>
    <path d="M0 86 h160" class="s2 dash" stroke-dasharray="3 3"/>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">fend le sol sans le soulever</text>
  </svg>`,

  grelinette: `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="92" width="160" height="28" class="soil"/>
    <rect x="0" y="92" width="160" height="5" class="soil-d"/>
    <g class="s">
      <path d="M38 16 l-14 44"/><path d="M122 16 l14 44"/>
      <path d="M32 60 h96" class="metal"/>
      <path d="M50 60 q0 16 4 28"/><path d="M70 60 q0 18 3 30"/>
      <path d="M90 60 q0 18 -3 30"/><path d="M110 60 q0 16 -4 28"/>
    </g>
    <g class="s2 metal">
      <path d="M52 88 q2 6 0 10"/><path d="M70 90 q2 6 0 10"/><path d="M88 90 q-2 6 0 10"/><path d="M106 88 q-2 6 0 10"/>
    </g>
    <path d="M36 54 h88" class="s2"/>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">deux manches, 3 à 5 dents</text>
  </svg>`,

  rotavator: `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="84" width="160" height="36" class="soil"/>
    <rect x="0" y="84" width="160" height="5" class="soil-d"/>
    <g class="s">
      <path d="M22 62 h50 v-12 h20 v12 h22" class="metal"/>
      <circle cx="38" cy="72" r="12" class="metal"/><circle cx="38" cy="72" r="4" class="metal-d"/>
      <path d="M96 74 q18 -12 34 0 l-4 12 h-26 z"/>
      <path d="M104 78 l0 22"/><path d="M116 78 l0 22"/><path d="M128 78 l0 22"/>
    </g>
    <g class="s2 metal">
      <path d="M100 96 l-8 6"/><path d="M110 100 l-8 6"/><path d="M122 96 l8 6"/><path d="M132 100 l8 6"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">lames rotatives, prise de force</text>
  </svg>`,

  broyeur: `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <g class="s">
      <path d="M30 52 h70 l10 20 h-90 z" class="metal"/>
      <path d="M46 52 l8 -22 h22 l-6 22" class="s2"/>
      <path d="M100 72 v16 h-60 v-16" class="s2"/>
      <circle cx="66" cy="62" r="10" class="metal-d"/>
      <path d="M66 52 l6 8"/><path d="M66 72 l-6 -8"/>
    </g>
    <g class="leaf">
      <path d="M22 30 q10 -10 20 -2"/><path d="M18 38 q12 -6 20 2"/>
    </g>
    <g class="s2">
      <path d="M34 28 l-14 -8"/><path d="M34 40 l-16 4"/>
    </g>
    <g class="soil-d">
      <path d="M104 92 l6 -4 l4 5 l6 -4 l4 5 l6 -4 l4 5 l-30 1 z" opacity=".8"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">branches → broyat</text>
  </svg>`,

  gyrobroyeur: `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="88" width="160" height="32" class="soil"/>
    <g class="s">
      <path d="M18 64 h116 l6 14 h-128 z" class="metal"/>
      <path d="M44 64 v-12 h16 v12" class="s2"/>
      <path d="M100 64 l8 -14 h8"/>
      <path d="M28 78 q52 12 104 0" class="s2"/>
      <path d="M52 78 l0 8"/><path d="M76 82 l0 8"/><path d="M100 82 l0 8"/><path d="M124 78 l0 8"/>
    </g>
    <g class="leaf">
      <path d="M20 94 q10 -10 20 0"/><path d="M132 94 q10 -10 20 0"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">herbe haute, broussailles</text>
  </svg>`,

  tronconneuse: `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <g class="s">
      <path d="M22 48 h38 v-10 h18 v26 h-44 v-8 z" class="metal"/>
      <path d="M48 44 h16 v8 h-16 z" class="metal-d"/>
      <path d="M78 55 h50 v8 h-50 z" class="metal"/>
      <path d="M126 55 q8 4 0 8" class="s2"/>
    </g>
    <g class="s2 metal-d">
      <path d="M84 63 l4 0"/><path d="M96 63 l4 0"/><path d="M108 63 l4 0"/><path d="M120 63 l4 0"/>
    </g>
    <g class="wood">
      <path d="M18 88 h96 v12 h-96 z"/>
    </g>
    <g class="s2">
      <path d="M28 88 v12"/><path d="M44 88 v12"/><path d="M60 88 v12"/><path d="M76 88 v12"/><path d="M92 88 v12"/>
    </g>
    <path d="M34 38 q8 -10 16 0" class="s2"/>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">chaîne coupante</text>
  </svg>`,

  rateau: `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <g class="s">
      <path d="M36 18 l66 62" class="wood" stroke-width="5"/>
      <path d="M96 72 l26 16" class="metal" stroke-width="5"/>
      <path d="M104 60 v34"/><path d="M113 66 v30"/><path d="M122 72 v24"/><path d="M131 78 v18"/>
    </g>
    <g class="leaf">
      <path d="M20 92 q6 -10 14 -6 q-2 10 -14 6"/><path d="M36 98 q6 -10 14 -6 q-2 10 -14 6"/>
    </g>
    <g class="s2">
      <path d="M18 84 q20 8 30 30"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">Harke = Rechen</text>
  </svg>`,

  tournevis: `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <g class="s">
      <path d="M22 74 l34 -34 l14 14 l-34 34 z" class="wood" stroke-width="2"/>
      <path d="M52 44 l26 -26 l10 10 l-26 26 z" class="metal"/>
      <path d="M88 18 l6 -6 l10 10 l-6 6 z" class="metal-d"/>
      <path d="M70 52 l26 -26" class="s2"/>
    </g>
    <g class="s">
      <path d="M112 30 h20 v8 h-20 z" class="metal"/>
      <path d="M118 38 v30 h8 v-30" class="s2"/>
      <path d="M116 68 h12" class="s2"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">Schraubenzieher</text>
  </svg>`,

  'goutte-a-goutte': `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <g class="s2">
      <path d="M12 34 h136" class="water-s" stroke-width="5"/>
    </g>
    <g class="water">
      <circle cx="52" cy="40" r="3"/><circle cx="84" cy="40" r="3"/><circle cx="116" cy="40" r="3"/>
      <path d="M52 46 q-4 8 0 12 q4 -4 0 -12"/>
      <path d="M84 46 q-4 8 0 12 q4 -4 0 -12"/>
      <path d="M116 46 q-4 8 0 12 q4 -4 0 -12"/>
    </g>
    <g class="leaf">
      <path d="M52 92 q-14 -18 0 -30 q14 12 0 30"/>
      <path d="M84 94 q-14 -18 0 -30 q14 12 0 30"/>
      <path d="M116 92 q-14 -18 0 -30 q14 12 0 30"/>
    </g>
    <g class="s2">
      <path d="M52 92 v16"/><path d="M84 94 v14"/><path d="M116 92 v16"/>
    </g>
    <rect x="0" y="108" width="160" height="12" class="soil"/>
    <text x="80" y="20" class="lbl-s" text-anchor="middle">rampe · goutteurs</text>
  </svg>`,

  'vanne-electrique': `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <g class="s">
      <path d="M8 66 h40 v22 h-40 z" class="metal"/>
      <path d="M112 66 h40 v22 h-40 z" class="metal"/>
      <path d="M48 72 h64 v10 h-64 z" class="metal-d"/>
      <path d="M70 72 v-20 h20 v20" class="metal"/>
    </g>
    <g class="s2">
      <path d="M80 52 v-14" class="metal"/>
      <path d="M66 30 h28 v8 h-28 z" class="metal-d"/>
      <path d="M66 24 q14 6 28 0"/>
    </g>
    <g class="water">
      <path d="M12 77 h30" stroke="var(--water)" stroke-width="4" fill="none"/>
      <path d="M118 77 h26" stroke="var(--water)" stroke-width="4" fill="none"/>
    </g>
    <path d="M70 44 q-10 -12 -18 -6 M90 44 q10 -12 18 -6" class="s2"/>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">solénoïde · ouvre / ferme</text>
  </svg>`,

  borne: `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="92" width="160" height="28" class="soil"/>
    <g class="s">
      <path d="M60 92 v-38 h40 v38" class="metal"/>
      <path d="M56 54 h48 v8 h-48 z" class="metal"/>
      <path d="M66 44 h28 v10 h-28 z" class="metal-d"/>
      <circle cx="80" cy="34" r="9" class="metal"/>
      <path d="M80 25 v-14 M80 25 l10 6 M80 25 l-10 6" class="s2"/>
      <path d="M100 70 h24 v8 h-24" class="metal"/>
      <path d="M124 74 q8 0 10 8" class="s2"/>
    </g>
    <g class="water">
      <path d="M60 80 h-34" stroke="var(--water)" stroke-width="4" fill="none"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">raccordement sous pression</text>
  </svg>`,

  forage: `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="22" width="160" height="26" class="soil"/>
    <rect x="0" y="48" width="160" height="30" class="soil-d"/>
    <rect x="0" y="78" width="160" height="26" class="water" opacity=".55"/>
    <rect x="0" y="104" width="160" height="16" class="soil-d"/>
    <g class="s">
      <path d="M62 22 v82 M98 22 v82" class="metal"/>
      <path d="M56 22 h48" class="metal"/>
      <rect x="74" y="26" width="12" height="26" class="metal-d"/>
      <path d="M80 52 v28" class="s2"/>
      <circle cx="80" cy="60" r="5" class="metal"/>
      <path d="M62 34 h-8 v8" class="s2"/>
    </g>
    <g class="water">
      <circle cx="74" cy="64" r="2"/><circle cx="86" cy="70" r="2"/>
    </g>
    <path d="M0 18 h160" class="s2"/>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">forage tubé + pompe</text>
  </svg>`,

  nappe: `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="34" width="160" height="20" class="soil"/>
    <rect x="0" y="54" width="160" height="18" class="soil-d"/>
    <rect x="0" y="72" width="160" height="22" class="water" opacity=".55"/>
    <rect x="0" y="94" width="160" height="26" class="soil-d"/>
    <g class="s">
      <path d="M34 20 l8 0 l-4 42" class="wood"/>
      <path d="M30 20 h16" class="wood"/>
      <path d="M60 14 v96 M88 14 v96" class="s2 metal"/>
      <path d="M52 14 h44" class="metal"/>
      <path d="M74 46 v18" class="s2"/>
    </g>
    <g class="water">
      <path d="M0 78 q20 -4 40 0 t40 0 t40 0 t40 0" fill="none" stroke="var(--water)" stroke-width="2.5"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">nappe libre peu profonde</text>
  </svg>`,

  beche: `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="94" width="160" height="26" class="soil"/>
    <rect x="0" y="94" width="160" height="5" class="soil-d"/>
    <g class="s">
      <path d="M60 16 h40" class="wood" stroke-width="7" stroke-linecap="round"/>
      <path d="M80 18 v52" class="wood" stroke-width="6"/>
      <path d="M67 70 h26 l-4 22 q-5 4 -9 0 l-9 -22 z" class="metal"/>
      <path d="M80 72 l0 14" class="metal-d"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">lame plate · on l’enfonce au pied</text>
  </svg>`,

  'scie-a-onglet': `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <g class="s">
      <path d="M16 90 h128 v8 h-128 z" class="metal"/>
      <path d="M40 90 v-30 h10 v30" class="metal-d"/>
      <path d="M45 60 l-10 -16 h9 l8 12" class="metal"/>
      <path d="M45 64 q22 -22 46 0" class="metal"/>
      <circle cx="70" cy="62" r="17" class="metal-d"/><circle cx="70" cy="62" r="11" class="metal"/>
      <path d="M60 32 h18 v8 h-18 z" class="metal-d"/>
    </g>
    <g class="wood">
      <path d="M96 90 h48 v9 h-48 z"/>
    </g>
    <path d="M100 90 v9 M112 90 v9 M124 90 v9 M136 90 v9" class="s2"/>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">lame circulaire · coupe en onglet</text>
  </svg>`,

  equerre: `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <g class="s">
      <path d="M28 84 h92 v15 h-92 z" class="metal"/>
      <path d="M104 84 h17 v-80 h-15 z" class="metal-d"/>
    </g>
    <g class="s2">
      <path d="M42 84 v-9"/><path d="M56 84 v-9"/><path d="M70 84 v-9"/><path d="M84 84 v-9"/>
      <path d="M110 70 h9"/><path d="M110 52 h9"/><path d="M110 34 h9"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">angle droit · Winkel</text>
  </svg>`,

  visseuse: `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <g class="s">
      <path d="M44 50 h60 v18 h-60 z" class="metal-d"/>
      <path d="M104 52 h12 v14 h-12 z" class="metal"/>
      <path d="M116 59 h10" class="s2" stroke-width="4"/>
      <path d="M40 62 h12 v24 h-12 z" class="metal"/>
      <path d="M40 86 h20 v12 h-20 z" class="wood"/>
      <path d="M64 44 q8 -7 16 0" class="s2"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">sans fil · couple limité</text>
  </svg>`,

  griffe: `<svg viewBox="0 0 160 120" role="img" aria-hidden="true">
    <rect x="0" y="96" width="160" height="24" class="soil"/>
    <rect x="0" y="96" width="160" height="5" class="soil-d"/>
    <g class="s">
      <path d="M58 20 h44" class="wood" stroke-width="7" stroke-linecap="round"/>
      <path d="M80 24 v34" class="wood" stroke-width="6"/>
      <path d="M62 58 h36 v7 h-36 z" class="metal"/>
      <path d="M64 65 q-2 16 -6 26" class="metal" stroke-width="3"/>
      <path d="M80 65 q0 18 0 28" class="metal" stroke-width="3"/>
      <path d="M96 65 q2 16 6 26" class="metal" stroke-width="3"/>
    </g>
    <g class="s2 metal">
      <path d="M58 91 q-3 4 0 6"/><path d="M80 93 q0 5 0 6"/><path d="M102 91 q3 4 0 6"/>
    </g>
    <text x="80" y="116" class="lbl-s" text-anchor="middle">3 à 5 griffes · ameublit en surface</text>
  </svg>`,
};

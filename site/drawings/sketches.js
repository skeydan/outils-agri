// The three large thematic sketches of the « Esquisses » tab, keyed by the
// `drawing` field in data/sketches.js. Numbered badges match the legend built
// by tabs/sketches.js. Plain strings: trusted markup, inserted as is.

const badge = (x, y, n) =>
  `<circle cx="${x}" cy="${y}" r="14" class="badge"/><text x="${x}" y="${y + 5}" class="badge-t" text-anchor="middle">${n}</text>`;

export const SKETCH_DRAWINGS = {
  'sk-sans-retourner': `<svg viewBox="0 0 960 520" role="img" aria-label="Sous-soleuse, grelinette et engrais verts sur un sol non retourné">
    <rect x="30" y="310" width="440" height="180" class="soil"/>
    <rect x="30" y="310" width="440" height="10" class="soil-d"/>
    <rect x="30" y="398" width="440" height="18" class="soil-d"/>
    <path d="M30 310 h440" class="s"/>
    <g class="s">
      <path d="M96 262 h104 v-34 h44 v34 h16" class="metal"/>
      <path d="M96 262 v42 h104 v-42" class="metal"/>
      <circle cx="124" cy="306" r="24" class="metal"/><circle cx="124" cy="306" r="8" class="metal-d"/>
      <circle cx="196" cy="306" r="15" class="metal"/><circle cx="196" cy="306" r="5" class="metal-d"/>
      <path d="M260 278 h96 v14 h-96 z" class="metal"/>
      <path d="M280 292 v118"/><path d="M320 292 v126"/><path d="M360 292 v118"/>
    </g>
    <g class="s2 metal">
      <path d="M276 392 l8 0 l-4 10 z"/><path d="M316 400 l8 0 l-4 10 z"/><path d="M356 392 l8 0 l-4 10 z"/>
    </g>
    <g class="s2" stroke-dasharray="2 5">
      <path d="M296 360 l-12 20"/><path d="M340 372 l12 18"/><path d="M380 356 l-10 18"/>
    </g>
    ${badge(320, 360, 1)}
    ${badge(110, 408, 2)}
    <g class="s2" stroke-dasharray="0">
      <path d="M230 446 q12 -12 24 0 q12 12 24 0"/>
    </g>
    ${badge(255, 432, 5)}
    <text x="250" y="486" class="lbl-s" text-anchor="middle">le sol reste en place</text>

    <g class="s">
      <path d="M540 310 h380 v180 h-380 z" class="soil"/>
      <path d="M540 310 h380" class="s"/>
    </g>
    <g class="s">
      <path d="M646 196 l-26 92"/><path d="M744 196 l26 92"/>
      <path d="M636 288 h118" class="metal"/>
      <path d="M664 288 q0 34 4 58"/><path d="M694 288 q0 38 2 62"/>
      <path d="M724 288 q0 38 -2 62"/><path d="M752 288 q0 34 -4 58"/>
    </g>
    <g class="s2 metal">
      <path d="M666 342 q2 10 0 18"/><path d="M694 346 q2 10 0 18"/><path d="M722 346 q-2 10 0 18"/><path d="M750 342 q-2 10 0 18"/>
    </g>
    ${badge(700, 258, 3)}
    <text x="700" y="486" class="lbl-s" text-anchor="middle">planche ameublie sans bêcher</text>

    <g class="s2">
      <path d="M800 310 v-54"/><path d="M840 310 v-66"/><path d="M880 310 v-54"/>
    </g>
    <g class="leaf">
      <path d="M800 264 q-22 -10 -24 16 q22 4 24 -16"/>
      <path d="M800 282 q22 -12 24 14 q-22 6 -24 -14"/>
      <path d="M840 250 q-22 -10 -24 16 q22 4 24 -16"/>
      <path d="M840 270 q22 -12 24 14 q-22 6 -24 -14"/>
      <path d="M880 264 q-22 -10 -24 16 q22 4 24 -16"/>
    </g>
    <g class="s2">
      <path d="M800 310 q-10 22 -2 38"/><path d="M840 310 q10 22 2 38"/><path d="M880 310 q-10 22 -2 38"/>
    </g>
    ${badge(840, 224, 4)}
    <text x="840" y="486" class="lbl-s" text-anchor="middle">couverture entre deux cultures</text>
  </svg>`,

  'sk-faux-semis': `<svg viewBox="0 0 960 520" role="img" aria-label="Les quatre temps du faux semis">
    <g>
      <rect x="40" y="380" width="200" height="110" class="soil"/>
      <rect x="40" y="380" width="200" height="12" class="soil-d" opacity=".7"/>
      <g class="s">
        <path d="M60 340 h160 v10 h-160 z" class="metal"/>
        <path d="M76 350 v18"/><path d="M104 350 v18"/><path d="M132 350 v18"/><path d="M160 350 v18"/><path d="M188 350 v18"/>
        <path d="M60 326 v-18 h16 v18" class="s2"/>
      </g>
      <path d="M40 392 h200" class="s2" stroke-dasharray="4 3"/>
      ${badge(220, 366, 1)}
      <text x="140" y="512" class="lbl" text-anchor="middle">1. travailler la surface</text>
    </g>
    <g>
      <rect x="280" y="380" width="220" height="110" class="soil"/>
      <g class="leaf">
        <path d="M310 380 q-8 -22 6 -28 q8 14 -6 28"/>
        <path d="M348 382 q-8 -26 6 -32 q9 16 -6 32"/>
        <path d="M390 380 q-8 -22 6 -28 q8 14 -6 28"/>
        <path d="M430 382 q-8 -26 6 -32 q9 16 -6 32"/>
        <path d="M468 380 q-8 -22 6 -28 q8 14 -6 28"/>
      </g>
      ${badge(330, 330, 2)}
      <text x="390" y="512" class="lbl" text-anchor="middle">2. laisser lever</text>
    </g>
    <g>
      <rect x="540" y="380" width="200" height="110" class="soil"/>
      <g class="s">
        <path d="M560 338 h160 v10 h-160 z" class="metal"/>
        <path d="M576 348 v16"/><path d="M604 348 v16"/><path d="M632 348 v16"/><path d="M660 348 v16"/><path d="M688 348 v16"/>
      </g>
      <g class="leaf" opacity=".45">
        <path d="M590 380 q-8 -20 4 -24 q6 12 -4 24"/>
        <path d="M650 382 q-8 -22 4 -26 q6 14 -4 26"/>
      </g>
      <g class="s2">
        <path d="M586 366 l14 14 M600 366 l-14 14"/>
      </g>
      ${badge(716, 364, 3)}
      <text x="640" y="512" class="lbl" text-anchor="middle">3. détruire les plantules</text>
    </g>
    <g>
      <rect x="780" y="380" width="140" height="110" class="soil"/>
      <g class="s2">
        <path d="M800 380 v-34"/><path d="M840 380 v-42"/><path d="M880 380 v-34"/>
      </g>
      <g class="leaf">
        <path d="M800 346 q-16 -8 -18 12 q16 4 18 -12"/>
        <path d="M800 360 q16 -8 18 12 q-16 4 -18 -12"/>
        <path d="M840 338 q-16 -8 -18 12 q16 4 18 -12"/>
        <path d="M840 354 q16 -8 18 12 q-16 4 -18 -12"/>
        <path d="M880 346 q-16 -8 -18 12 q16 4 18 -12"/>
      </g>
      ${badge(720, 300, 4)}
      <path d="M700 300 q40 -34 80 0" class="s2" stroke-dasharray="4 4"/>
      <text x="850" y="512" class="lbl" text-anchor="middle">4. semer la culture</text>
    </g>
    <g class="s2">
      <path d="M244 430 h30" marker-end="url(#ar-fs)"/>
      <path d="M504 430 h30" marker-end="url(#ar-fs)"/>
      <path d="M744 430 h30" marker-end="url(#ar-fs)"/>
    </g>
    <defs>
      <marker id="ar-fs" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--ink-2)"/>
      </marker>
    </defs>
    <g class="s2" stroke-dasharray="5 4">
      <path d="M120 458 q360 44 720 0" marker-end="url(#ar-fs)"/>
    </g>
    <text x="480" y="478" class="lbl-s" text-anchor="middle">trois à quatre semaines, puis un passage supplémentaire si besoin</text>
    ${badge(480, 458, 5)}
  </svg>`,

  'sk-irrigation': `<svg viewBox="0 0 960 520" role="img" aria-label="Du forage à la rampe de goutteurs">
    <rect x="0" y="170" width="960" height="60" class="soil"/>
    <rect x="0" y="230" width="960" height="120" class="soil-d"/>
    <rect x="0" y="350" width="960" height="110" class="water" opacity=".55"/>
    <rect x="0" y="460" width="960" height="60" class="soil-d"/>
    <path d="M0 170 h960" class="s"/>

    <g class="s">
      <path d="M96 170 v250 M144 170 v250" class="metal"/>
      <path d="M88 170 h64" class="metal"/>
      <rect x="112" y="176" width="16" height="46" class="metal-d"/>
      <path d="M120 222 v108" class="s2"/>
      <circle cx="120" cy="250" r="7" class="metal"/>
      <path d="M120 170 v-40 h56" class="metal"/>
      <rect x="96" y="118" width="48" height="52" class="metal"/>
      <path d="M104 132 h32 M104 146 h32 M104 160 h32" class="s2"/>
    </g>
    ${badge(120, 300, 1)}
    ${badge(220, 404, 2)}
    ${badge(120, 96, 3)}

    <g class="s2">
      <path d="M176 130 h180" class="water-s" stroke-width="6"/>
    </g>
    <g class="s">
      <rect x="356" y="106" width="88" height="48" class="metal"/>
      <rect x="386" y="78" width="28" height="28" class="metal-d"/>
      <path d="M386 92 h-18 M414 92 h18" class="s2"/>
      <circle cx="400" cy="130" r="10" class="metal-d"/>
    </g>
    ${badge(400, 56, 4)}
    <g class="s2">
      <path d="M444 130 h150" class="water-s" stroke-width="6"/>
    </g>
    <g class="s">
      <path d="M594 170 v-40 h56 v40" class="metal"/>
      <path d="M590 130 h64 v10 h-64 z" class="metal"/>
      <circle cx="622" cy="112" r="12" class="metal"/>
      <path d="M622 100 v-16 M622 100 l14 8 M622 100 l-14 8" class="s2"/>
      <path d="M650 150 h34 v10 h-34" class="metal"/>
    </g>
    ${badge(622, 84, 5)}
    <g class="s2">
      <path d="M684 156 h60" class="water-s" stroke-width="6"/>
    </g>

    <g class="s2">
      <path d="M744 156 h176" class="water-s" stroke-width="5"/>
    </g>
    <g class="s">
      <path d="M744 170 v-26 M744 144 h176" class="metal-d"/>
    </g>
    <g class="water">
      <circle cx="784" cy="156" r="4"/><circle cx="824" cy="156" r="4"/><circle cx="864" cy="156" r="4"/><circle cx="904" cy="156" r="4"/>
      <path d="M784 166 q-4 12 0 18 q4 -6 0 -18"/>
      <path d="M824 166 q-4 12 0 18 q4 -6 0 -18"/>
      <path d="M864 166 q-4 12 0 18 q4 -6 0 -18"/>
      <path d="M904 166 q-4 12 0 18 q4 -6 0 -18"/>
    </g>
    <g class="s2">
      <path d="M784 230 v-32"/><path d="M824 230 v-32"/><path d="M864 230 v-32"/><path d="M904 230 v-32"/>
    </g>
    <g class="leaf">
      <path d="M784 200 q-18 -10 -20 12 q18 4 20 -12"/>
      <path d="M784 214 q18 -10 20 12 q-18 4 -20 -12"/>
      <path d="M824 200 q-18 -10 -20 12 q18 4 20 -12"/>
      <path d="M824 214 q18 -10 20 12 q-18 4 -20 -12"/>
      <path d="M864 200 q-18 -10 -20 12 q18 4 20 -12"/>
      <path d="M864 214 q18 -10 20 12 q-18 4 -20 -12"/>
      <path d="M904 200 q-18 -10 -20 12 q18 4 20 -12"/>
    </g>
    ${badge(784, 122, 6)}

    <text x="110" y="326" class="lbl-s" text-anchor="middle">forage tubé</text>
    <text x="250" y="416" class="lbl-s" text-anchor="middle">nappe phréatique</text>
    <text x="800" y="270" class="lbl-s" text-anchor="middle">l’eau va à la racine</text>
    <g class="s2">
      <path d="M80 470 h14 M100 478 h14 M120 470 h14" class="water-s"/>
    </g>
    <text x="480" y="498" class="lbl-s" text-anchor="middle">pompe → vanne → borne → goutteurs</text>
  </svg>`,
};

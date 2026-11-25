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

  'sk-sous-soleuse': `<svg viewBox="0 80 960 440" role="img" aria-label="Un tracteur tire une sous-soleuse ; la semelle est fendue derrière l’outil et intacte devant">
    <rect x="20" y="250" width="920" height="210" class="soil"/>
    <rect x="20" y="250" width="920" height="8" class="soil-d"/>
    <rect x="20" y="350" width="920" height="22" class="soil-d"/>
    <path d="M20 250 h920" class="s"/>

    <g class="metal">
      <path d="M262 196 h66 v-36 h56 v36 h86 v48 h-208 z"/>
      <path d="M334 160 v-30 h42 v30" class="s"/>
      <path d="M300 196 v-46 h22 v46" class="s2"/>
      <path d="M270 170 v-28" class="s2"/>
    </g>
    <circle cx="300" cy="216" r="44" class="metal"/>
    <circle cx="300" cy="216" r="16" class="metal-d"/>
    <circle cx="468" cy="226" r="32" class="metal"/>
    <circle cx="468" cy="226" r="11" class="metal-d"/>

    <g class="s">
      <path d="M238 242 h24" class="metal"/>
      <path d="M196 242 h76 v12 h-76 z" class="metal"/>
      <path d="M204 254 v116"/><path d="M234 254 v126"/><path d="M264 254 v116"/>
    </g>
    <g class="metal-d">
      <path d="M198 366 l8 0 l-4 12 z"/><path d="M228 376 l8 0 l-4 12 z"/><path d="M258 366 l8 0 l-4 12 z"/>
    </g>

    <g class="s2">
      <path d="M60 356 l16 12 l-7 16"/><path d="M60 356 l-10 18"/>
      <path d="M108 356 l14 14 l-6 18"/><path d="M108 356 l-8 20"/>
      <path d="M156 356 l16 12 l-8 18"/><path d="M156 356 l-10 16"/>
      <path d="M108 400 q10 14 22 22"/><path d="M156 398 q-8 16 -2 28"/>
    </g>
    <g class="s2 water-s" stroke-dasharray="4 7">
      <path d="M82 256 v128"/><path d="M130 256 v150"/><path d="M178 256 v132"/>
    </g>
    <g class="water">
      <path d="M78 384 l4 12 l4 -12"/><path d="M126 406 l4 12 l4 -12"/><path d="M174 388 l4 12 l4 -12"/>
    </g>

    <g class="s2">
      <path d="M560 120 h90" marker-end="url(#ar-ss)"/>
    </g>
    <text x="605" y="108" class="lbl-s" text-anchor="middle">avancement</text>

    <g class="s2">
      <path d="M892 250 v122"/>
      <path d="M886 250 h12"/><path d="M886 350 h12"/><path d="M886 372 h12"/>
    </g>
    <text x="878" y="316" class="lbl-s" text-anchor="end">≈ 50 cm</text>

    ${badge(350, 120, 1)}
    ${badge(160, 268, 2)}
    ${badge(650, 334, 3)}
    ${badge(96, 430, 4)}
    <text x="130" y="500" class="lbl-s" text-anchor="middle">déjà fissuré</text>
    <text x="700" y="500" class="lbl-s" text-anchor="middle">semelle encore intacte</text>
    <defs>
      <marker id="ar-ss" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--ink-2)"/>
      </marker>
    </defs>
  </svg>`,

  'sk-decompacteur': `<svg viewBox="0 80 960 440" role="img" aria-label="Diagnostic du tassement et comparaison des profondeurs du décompacteur et de la sous-soleuse">
    <rect x="20" y="240" width="540" height="230" class="soil"/>
    <rect x="20" y="240" width="540" height="8" class="soil-d"/>
    <rect x="20" y="330" width="540" height="18" class="soil-d"/>
    <path d="M20 240 h540" class="s"/>

    <g class="metal">
      <path d="M250 188 h60 v-34 h50 v34 h70 v44 h-180 z"/>
      <path d="M316 154 v-28 h36 v28" class="s"/>
    </g>
    <circle cx="282" cy="208" r="38" class="metal"/>
    <circle cx="282" cy="208" r="13" class="metal-d"/>
    <circle cx="410" cy="218" r="27" class="metal"/>
    <circle cx="410" cy="218" r="9" class="metal-d"/>

    <g class="s">
      <path d="M178 232 h64 v11 h-64 z" class="metal"/>
      <path d="M242 236 h8" class="metal"/>
      <path d="M190 243 v91"/><path d="M216 243 v99"/><path d="M242 243 v91"/>
    </g>
    <g class="metal-d">
      <path d="M184 334 l8 0 l-4 10 z"/><path d="M210 342 l8 0 l-4 10 z"/><path d="M236 334 l8 0 l-4 10 z"/>
    </g>

    <g class="s">
      <path d="M454 240 v172 h76 v-172"/>
      <path d="M454 300 h76" class="s2" stroke-dasharray="5 4"/>
      <path d="M454 346 h76" class="s2" stroke-dasharray="5 4"/>
      <path d="M466 386 h52" class="metal-d"/>
    </g>
    <text x="492" y="496" class="lbl-s" text-anchor="middle">fosse d’observation</text>

    <g class="s2">
      <path d="M540 339 h-32" marker-end="url(#ar-dc)"/>
    </g>
    <text x="440" y="322" class="lbl-s" text-anchor="end">zone tassée</text>

    ${badge(340, 130, 1)}
    ${badge(120, 332, 2)}
    ${badge(492, 218, 3)}

    <g class="s2">
      <path d="M620 140 v320"/>
      <path d="M614 140 h12"/><path d="M614 243 h12"/><path d="M614 326 h12"/>
      <path d="M614 347 h12"/><path d="M614 430 h12"/>
    </g>
    <g class="lbl-s" text-anchor="end">
      <text x="606" y="144">0</text><text x="606" y="247">25</text>
      <text x="606" y="330">45</text><text x="606" y="351">50</text><text x="606" y="434">70</text>
    </g>
    <text x="606" y="124" class="lbl-s" text-anchor="end">cm</text>

    <g class="s2" stroke-dasharray="4 5">
      <path d="M626 243 h300"/><path d="M626 326 h300"/><path d="M626 347 h300"/><path d="M626 430 h300"/>
    </g>
    <g class="metal">
      <rect x="690" y="140" width="18" height="186"/>
      <rect x="812" y="140" width="20" height="290"/>
    </g>
    <g class="metal-d">
      <path d="M686 326 l13 -18 l13 18 z"/><path d="M808 430 l14 -20 l14 20 z"/>
    </g>
    <text x="700" y="476" class="lbl-s" text-anchor="middle">décompacteur</text>
    <text x="700" y="492" class="lbl-s" text-anchor="middle">25–45 cm</text>
    <text x="824" y="476" class="lbl-s" text-anchor="middle">sous-soleuse</text>
    <text x="824" y="492" class="lbl-s" text-anchor="middle">50–70 cm</text>
    ${badge(864, 120, 4)}

    <text x="760" y="516" class="lbl-s" text-anchor="middle">profondeurs indicatives, selon les constructeurs</text>
    <defs>
      <marker id="ar-dc" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--ink-2)"/>
      </marker>
    </defs>
  </svg>`,

  'sk-broyeur': `<svg viewBox="0 150 960 370" role="img" aria-label="Les branches passent au broyeur et deviennent du paillis ou du compost">
    <g class="s">
      <path d="M30 352 h250"/>
    </g>
    <g class="wood">
      <path d="M54 348 l30 -72"/><path d="M84 276 l-24 -44"/><path d="M84 276 l30 -30"/>
      <path d="M72 300 l-26 -16"/><path d="M92 286 l26 -8"/>
    </g>
    <g class="leaf">
      <path d="M58 226 q-20 -8 -24 12 q20 6 24 -12"/><path d="M58 244 q20 -8 24 12 q-20 6 -24 -12"/>
      <path d="M112 240 q-18 -10 -24 8 q18 8 24 -8"/><path d="M44 278 q-18 -6 -22 12 q18 4 22 -12"/>
    </g>
    ${badge(64, 196, 1)}

    <g class="metal">
      <path d="M156 210 h84 l-14 46 h-56 z"/>
      <path d="M156 256 h84 v62 h-84 z"/>
      <path d="M240 278 h44 v16 h-44 z"/>
    </g>
    <g class="s2">
      <path d="M162 226 h72"/><path d="M168 310 h60"/>
    </g>
    <circle cx="174" cy="334" r="15" class="metal"/>
    <circle cx="222" cy="334" r="15" class="metal"/>
    <g class="metal-d">
      <circle cx="260" cy="306" r="4"/><circle cx="272" cy="316" r="3"/><circle cx="284" cy="304" r="4"/>
      <circle cx="270" cy="330" r="3"/><circle cx="286" cy="328" r="4"/>
    </g>
    <g class="s2">
      <path d="M120 232 q20 -14 34 -4" marker-end="url(#ar-br)"/>
    </g>
    ${badge(198, 182, 2)}
    <text x="150" y="452" class="lbl" text-anchor="middle">branches</text>

    <g class="s">
      <path d="M384 344 h144 l-18 -46 h-108 z"/>
      <path d="M360 344 h-24"/><path d="M528 344 h24"/>
    </g>
    <g class="metal">
      <path d="M378 300 h120 l-12 34 h-96 z"/>
    </g>
    <g class="s2">
      <circle cx="404" cy="316" r="3"/><circle cx="422" cy="306" r="3"/><circle cx="442" cy="318" r="3"/>
      <circle cx="460" cy="308" r="3"/><circle cx="478" cy="318" r="3"/>
    </g>
    <circle cx="430" cy="356" r="18" class="metal"/>
    <circle cx="430" cy="356" r="6" class="metal-d"/>
    ${badge(486, 272, 3)}
    <text x="450" y="452" class="lbl" text-anchor="middle">broyat</text>

    <g class="s">
      <path d="M712 360 v-56"/>
    </g>
    <g class="leaf">
      <path d="M712 304 q-24 -12 -28 14 q24 6 28 -14"/><path d="M712 322 q24 -12 28 14 q-24 6 -28 -14"/>
      <path d="M712 286 q-18 -14 -8 -28 q16 10 8 28"/>
    </g>
    <g class="s2">
      <path d="M680 356 h64"/><path d="M670 368 h84"/>
    </g>
    <g class="soil-d">
      <ellipse cx="712" cy="372" rx="58" ry="9" opacity=".55"/>
    </g>
    <g class="wood">
      <circle cx="660" cy="370" r="3"/><circle cx="680" cy="362" r="2.5"/>
      <circle cx="748" cy="364" r="3"/><circle cx="766" cy="372" r="2.5"/>
    </g>
    <text x="712" y="408" class="lbl-s" text-anchor="middle">paillis</text>

    <g class="s">
      <path d="M826 374 q6 -58 44 -64 q38 6 44 64 z" class="soil-d"/>
      <path d="M838 350 q32 -18 64 0" class="s2"/>
      <path d="M846 330 q26 -12 48 0" class="s2"/>
    </g>
    <g class="s2">
      <path d="M846 300 q-6 -12 4 -18"/><path d="M870 296 q-6 -12 4 -18"/><path d="M892 302 q-6 -12 4 -18"/>
    </g>
    <text x="870" y="408" class="lbl-s" text-anchor="middle">compost</text>
    ${badge(790, 236, 4)}

    <g class="s2">
      <path d="M304 330 h26" marker-end="url(#ar-br)"/>
      <path d="M616 330 h26" marker-end="url(#ar-br)"/>
    </g>
    <text x="480" y="500" class="lbl-s" text-anchor="middle">un seul matériau, deux usages : couvrir ou composter</text>
    <defs>
      <marker id="ar-br" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--ink-2)"/>
      </marker>
    </defs>
  </svg>`,

  'sk-rotavator': `<svg viewBox="0 130 960 390" role="img" aria-label="Le rotavator émiette la couche superficielle et laisse une couche compacte sous la zone travaillée">
    <rect x="20" y="300" width="920" height="180" class="soil"/>
    <rect x="20" y="300" width="920" height="7" class="soil-d"/>
    <rect x="20" y="340" width="920" height="18" class="soil-d"/>
    <path d="M20 300 h920" class="s"/>

    <g class="s2">
      <circle cx="70" cy="318" r="4"/><circle cx="96" cy="326" r="3"/><circle cx="124" cy="316" r="5"/>
      <circle cx="150" cy="328" r="3"/><circle cx="178" cy="318" r="4"/><circle cx="206" cy="326" r="3"/>
      <circle cx="234" cy="316" r="5"/><circle cx="262" cy="328" r="3"/><circle cx="290" cy="318" r="4"/>
    </g>
    <g class="s2">
      <path d="M566 320 l14 -10 l16 6"/><path d="M602 330 l12 -8 l16 4"/>
      <path d="M646 318 l12 -8 l14 6"/><path d="M688 330 l14 -10 l16 6"/>
      <path d="M734 318 l12 -6 l14 4"/><path d="M780 330 l12 -8 l14 4"/>
      <path d="M826 318 l12 -8 l16 6"/>
    </g>

    <g class="metal">
      <path d="M286 222 q40 -22 140 -22 q46 0 54 22 v66 q-52 26 -194 0 z"/>
    </g>
    <g class="s2">
      <path d="M520 246 h78"/><path d="M520 232 h78"/>
    </g>
    <circle cx="538" cy="239" r="7" class="metal"/>
    <circle cx="582" cy="239" r="7" class="metal"/>
    <g class="s2">
      <circle cx="388" cy="286" r="30"/>
      <path d="M388 256 v-12"/><path d="M418 286 h12"/><path d="M388 316 v12"/><path d="M358 286 h-12"/>
      <path d="M410 264 l10 -10"/><path d="M410 308 l10 10"/><path d="M366 308 l-10 10"/><path d="M366 264 l-10 -10"/>
    </g>
    <g class="metal-d">
      <path d="M380 312 l-10 24 l16 -6 z"/><path d="M398 312 l10 24 l-16 -6 z"/>
      <path d="M370 280 l-24 10 l16 10 z"/><path d="M406 280 l24 10 l-16 10 z"/>
    </g>

    <g class="metal">
      <path d="M598 252 h62 v-40 h54 v40 h62 v56 h-178 z"/>
      <path d="M662 212 v-28 h38 v28" class="s"/>
    </g>
    <circle cx="632" cy="270" r="38" class="metal"/>
    <circle cx="632" cy="270" r="13" class="metal-d"/>
    <circle cx="772" cy="280" r="27" class="metal"/>
    <circle cx="772" cy="280" r="9" class="metal-d"/>

    <g class="s2">
      <path d="M516 170 h110" marker-end="url(#ar-rt)"/>
    </g>
    <text x="571" y="158" class="lbl-s" text-anchor="middle">avancement</text>

    <g class="s2">
      <path d="M40 358 h250" stroke-dasharray="5 5"/>
      <path d="M520 358 h400" stroke-dasharray="5 5"/>
    </g>
    ${badge(388, 182, 1)}
    ${badge(450, 320, 2)}
    ${badge(110, 318, 3)}
    ${badge(560, 344, 4)}
    <text x="120" y="500" class="lbl-s" text-anchor="middle">lit de semence, en surface</text>
    <text x="740" y="500" class="lbl-s" text-anchor="middle">sous la zone fraisée, le sol reste en place</text>
    <defs>
      <marker id="ar-rt" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--ink-2)"/>
      </marker>
    </defs>
  </svg>`,

  'sk-goutte-bulbe': `<svg viewBox="0 0 960 520" role="img" aria-label="Gros plan du bulbe mouillé sous un goutteur">
    <rect x="40" y="170" width="880" height="310" class="soil"/>
    <rect x="40" y="170" width="880" height="7" class="soil-d"/>
    <path d="M40 170 h880" class="s"/>

    <path d="M400 172 C328 202 314 300 338 362 C362 424 438 424 462 362 C486 300 472 202 400 172 Z" class="water" opacity=".55"/>
    <path d="M400 172 C328 202 314 300 338 362 C362 424 438 424 462 362 C486 300 472 202 400 172 Z" class="s2 water-s" stroke-dasharray="5 5"/>

    <g class="metal">
      <rect x="80" y="146" width="800" height="12" rx="6"/>
      <rect x="386" y="146" width="28" height="24" class="metal-d"/>
    </g>
    <g class="s2">
      <path d="M400 170 v32" class="water-s"/>
    </g>
    <g class="water">
      <circle cx="400" cy="210" r="4"/><circle cx="400" cy="226" r="3.5"/>
      <path d="M400 240 q-4 10 0 16 q4 -6 0 -16"/>
    </g>

    <g class="s">
      <path d="M400 170 v-96"/>
      <path d="M400 126 q-24 -12 -30 8 q24 8 30 -8"/>
      <path d="M400 100 q24 -12 30 8 q-24 8 -30 -8"/>
      <path d="M400 144 q-20 -12 -26 4 q20 8 26 -4"/>
    </g>
    <g class="leaf">
      <path d="M400 74 q-10 -18 2 -26 q12 14 -2 26"/>
    </g>

    <g class="s2">
      <path d="M400 170 q-26 26 -34 60"/><path d="M400 170 q26 26 34 60"/>
      <path d="M400 170 q-10 40 -18 70"/><path d="M400 170 q12 44 16 76"/>
      <path d="M366 230 q-14 16 -18 34"/><path d="M434 230 q14 16 18 34"/>
      <path d="M382 240 q-8 22 -4 42"/><path d="M416 244 q8 22 4 42"/>
      <path d="M400 240 q-4 30 0 56"/>
    </g>

    <g class="s2">
      <path d="M770 170 v180"/>
      <path d="M764 170 h12"/><path d="M764 230 h12"/><path d="M764 290 h12"/><path d="M764 350 h12"/>
    </g>
    <g class="lbl-s" text-anchor="end">
      <text x="756" y="174">0</text><text x="756" y="234">20</text><text x="756" y="294">40</text><text x="756" y="354">60 cm</text>
    </g>

    ${badge(452, 128, 1)}
    ${badge(330, 250, 2)}
    ${badge(436, 330, 3)}
    ${badge(700, 300, 4)}
    <text x="400" y="404" class="lbl-s" text-anchor="middle">bulbe mouillé</text>
    <text x="700" y="420" class="lbl-s" text-anchor="middle">sol resté sec</text>
    <text x="480" y="498" class="lbl-s" text-anchor="middle">l’eau descend et s’élargit autour du point de chute</text>
  </svg>`,

  'sk-labour': `<svg viewBox="0 90 960 430" role="img" aria-label="Le labour retourne la bande de terre, enfouit les résidus et forme une semelle à la profondeur du soc">
    <text x="280" y="120" class="lbl" text-anchor="middle">pendant le labour</text>
    <rect x="20" y="260" width="520" height="200" class="soil"/>
    <rect x="20" y="260" width="520" height="7" class="soil-d"/>
    <path d="M20 260 h520" class="s"/>

    <g class="leaf">
      <path d="M58 260 q-8 -22 4 -28 q8 14 -4 28"/><path d="M92 260 q-8 -24 4 -30 q8 16 -4 30"/>
      <path d="M126 260 q-8 -20 4 -26 q8 12 -4 26"/>
    </g>

    <g class="metal">
      <path d="M40 196 h104 v-34 h44 v34 h32 v46 h-180 z"/>
      <path d="M96 162 v-28 h34 v28" class="s"/>
      <path d="M62 162 v-22" class="s2"/>
    </g>
    <circle cx="76" cy="244" r="28" class="metal"/>
    <circle cx="76" cy="244" r="9" class="metal-d"/>
    <circle cx="190" cy="250" r="20" class="metal"/>
    <circle cx="190" cy="250" r="7" class="metal-d"/>

    <g class="s">
      <path d="M220 238 h28" class="metal-d"/>
      <path d="M248 238 l44 16"/>
    </g>
    <g class="metal">
      <path d="M292 254 q38 -4 44 28 q-22 8 -38 -8 z"/>
      <path d="M292 254 l14 30 l-24 -6 z"/>
    </g>

    <g class="s">
      <path d="M300 272 q30 -38 70 -22 l10 26 q-40 -2 -64 28 z" class="soil-d"/>
    </g>
    <g class="leaf">
      <path d="M312 294 q-8 14 2 18 q8 -8 -2 -18"/>
      <path d="M342 304 q-8 14 2 18 q8 -8 -2 -18"/>
      <path d="M372 292 q-8 14 2 18 q8 -8 -2 -18"/>
    </g>
    <g class="s2">
      <path d="M318 238 q34 -44 78 -16" marker-end="url(#ar-lab)"/>
    </g>

    <g class="s2">
      <path d="M398 270 q62 6 122 0"/><path d="M398 282 q62 8 122 0"/>
    </g>
    <g class="leaf">
      <path d="M462 260 q-8 -16 2 -20 q6 10 -2 20"/><path d="M494 260 q-8 -16 2 -20 q6 10 -2 20"/>
    </g>
    <text x="370" y="340" class="lbl-s" text-anchor="middle">bande retournée</text>
    ${badge(300, 210, 1)}
    ${badge(352, 306, 2)}

    <text x="750" y="120" class="lbl" text-anchor="middle">après le passage</text>
    <rect x="560" y="260" width="380" height="200" class="soil"/>
    <rect x="560" y="260" width="380" height="7" class="soil-d"/>
    <rect x="560" y="326" width="380" height="18" class="soil-d"/>
    <path d="M560 260 h380" class="s"/>
    <g class="s2">
      <path d="M580 292 q26 -8 46 4 q26 -10 46 2 q26 -8 46 4 q26 -8 46 2 q26 -8 46 4 q26 -8 46 2 q26 -8 46 4"/>
    </g>
    <g class="leaf" opacity=".85">
      <path d="M600 322 q-10 -14 2 -18 q8 10 -2 18"/>
      <path d="M648 324 q-10 -14 2 -18 q8 10 -2 18"/>
      <path d="M700 322 q-10 -14 2 -18 q8 10 -2 18"/>
      <path d="M752 324 q-10 -14 2 -18 q8 10 -2 18"/>
      <path d="M808 322 q-10 -14 2 -18 q8 10 -2 18"/>
    </g>
    <g class="s2" stroke-dasharray="6 5">
      <path d="M560 326 h380"/>
    </g>
    ${badge(760, 304, 3)}
    ${badge(640, 334, 4)}
    <text x="750" y="500" class="lbl-s" text-anchor="middle">toujours à la même profondeur, la semelle se forme</text>
    <defs>
      <marker id="ar-lab" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--ink-2)"/>
      </marker>
    </defs>
  </svg>`,

  'sk-compost': `<svg viewBox="0 210 960 310" role="img" aria-label="Le tas de compost chauffe, se retourne et mûrit">
    <text x="150" y="468" class="lbl" text-anchor="middle">1. le tas chauffe</text>
    <g class="s">
      <path d="M36 378 q10 -84 54 -104 q44 -20 76 4 q34 26 34 100 z" class="soil-d"/>
      <path d="M58 340 q44 -34 96 -12" class="s2"/>
      <path d="M54 316 q40 -24 84 -8" class="s2"/>
      <path d="M64 364 q38 -18 80 -4" class="s2"/>
    </g>
    <g class="s2">
      <path d="M80 248 q-8 -16 6 -22"/><path d="M116 240 q-8 -18 6 -24"/><path d="M154 246 q-8 -16 6 -22"/>
    </g>
    <g class="s">
      <path d="M196 270 v86"/>
      <circle cx="196" cy="362" r="9" class="metal-d"/>
      <path d="M188 270 h16"/>
    </g>
    <text x="210" y="286" class="lbl-s">60 °C</text>
    ${badge(46, 282, 1)}

    <text x="486" y="468" class="lbl" text-anchor="middle">2. deux paliers, des retournements</text>
    <g class="s2">
      <path d="M350 420 h270"/>
      <path d="M350 420 v-160"/>
      <path d="M342 420 v-160" class="s"/>
      <path d="M344 260 h12"/><path d="M344 300 h12"/><path d="M344 360 h12"/>
    </g>
    <g class="lbl-s" text-anchor="end">
      <text x="336" y="264">70</text><text x="336" y="304">45</text><text x="336" y="364">20</text>
    </g>
    <text x="330" y="250" class="lbl-s" text-anchor="end">°C</text>
    <g class="s2" stroke-dasharray="4 5">
      <path d="M350 300 h270"/><path d="M350 270 h270"/>
    </g>
    <g class="s">
      <path d="M356 416 C380 410 392 300 420 300 C448 300 458 380 486 380 C514 380 520 280 550 280 C580 280 592 400 604 416"/>
    </g>
    <g class="s2">
      <path d="M448 326 q-10 16 2 26" marker-end="url(#ar-cp)"/>
      <path d="M548 296 q-10 16 2 26" marker-end="url(#ar-cp)"/>
    </g>
    <text x="486" y="500" class="lbl-s" text-anchor="middle">temps</text>
    ${badge(420, 286, 2)}
    ${badge(486, 368, 3)}

    <text x="800" y="468" class="lbl" text-anchor="middle">3. compost mûr</text>
    <g class="s">
      <path d="M704 390 q8 -70 54 -82 q46 12 54 82 z" class="soil-d"/>
      <path d="M700 390 h116" class="s2"/>
    </g>
    <g transform="rotate(-12 885 356)">
      <rect x="850" y="330" width="70" height="50" class="wood"/>
      <g class="s2">
        <path d="M856 342 h58"/><path d="M856 352 h58"/><path d="M856 362 h58"/><path d="M856 372 h58"/>
        <path d="M862 336 v40"/><path d="M874 336 v40"/><path d="M886 336 v40"/><path d="M898 336 v40"/>
      </g>
    </g>
    <g class="wood">
      <circle cx="866" cy="410" r="4"/><circle cx="884" cy="418" r="3"/><circle cx="902" cy="408" r="4"/>
    </g>
    <g class="leaf">
      <path d="M730 306 q-8 -20 4 -26 q8 12 -4 26"/>
      <path d="M730 306 q-18 -10 -22 8 q18 6 22 -8"/>
    </g>
    ${badge(800, 336, 4)}
    <text x="800" y="500" class="lbl-s" text-anchor="middle">six mois à un an</text>
    <defs>
      <marker id="ar-cp" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--ink-2)"/>
      </marker>
    </defs>
  </svg>`,

  'sk-sous-solage': `<svg viewBox="0 120 960 400" role="img" aria-label="Avant et après un sous-solage sur sol sec">
    <text x="240" y="150" class="lbl" text-anchor="middle">avant</text>
    <rect x="20" y="250" width="440" height="210" class="soil"/>
    <rect x="20" y="250" width="440" height="7" class="soil-d"/>
    <rect x="20" y="346" width="440" height="20" class="soil-d"/>
    <path d="M20 250 h440" class="s"/>
    <g class="s2">
      <path d="M50 250 l18 12 l-8 14"/><path d="M90 250 l-10 16"/><path d="M300 250 l16 12 l-6 14"/>
      <path d="M350 250 l-8 16"/>
    </g>
    <g class="water" opacity=".55">
      <path d="M120 250 q30 -12 60 0 q30 12 60 0 v6 q-30 10 -60 0 q-30 -10 -60 0 z"/>
    </g>
    <g class="s2 water-s" stroke-dasharray="4 6">
      <path d="M160 256 v84"/><path d="M210 256 v84"/><path d="M260 256 v84"/>
    </g>
    <g class="water">
      <path d="M156 334 l4 8 l4 -8"/><path d="M206 334 l4 8 l4 -8"/><path d="M256 334 l4 8 l4 -8"/>
    </g>
    <g class="s">
      <path d="M340 250 v-38"/>
      <path d="M340 220 q-16 -8 -20 8 q16 6 20 -8"/><path d="M340 232 q16 -8 20 8 q-16 6 -20 -8"/>
      <path d="M340 250 q-10 40 -2 92 q10 -8 8 -58"/>
      <path d="M338 342 q-12 4 -18 -2"/>
    </g>
    ${badge(58, 292, 1)}
    ${badge(140, 356, 2)}
    <text x="240" y="500" class="lbl-s" text-anchor="middle">l’eau stagne, les racines s’arrêtent</text>

    <text x="720" y="150" class="lbl" text-anchor="middle">après</text>
    <rect x="500" y="250" width="440" height="210" class="soil"/>
    <rect x="500" y="250" width="440" height="7" class="soil-d"/>
    <rect x="500" y="346" width="440" height="20" class="soil-d"/>
    <path d="M500 250 h440" class="s"/>
    <g class="s2">
      <path d="M530 250 l18 12 l-8 14"/><path d="M570 250 l-10 16"/><path d="M800 250 l16 12 l-6 14"/>
      <path d="M850 250 l-8 16"/>
    </g>
    <g class="s2">
      <path d="M580 310 l10 22 l-8 16 l12 24"/>
      <path d="M660 300 l-8 26 l10 18 l-6 30"/>
      <path d="M740 312 l10 20 l-6 20 l10 22"/>
      <path d="M820 304 l-8 24 l8 18 l-6 26"/>
    </g>
    <g class="s2 water-s" stroke-dasharray="4 6">
      <path d="M590 256 v96 l4 30"/><path d="M668 256 v84 l-2 28"/><path d="M748 256 v92 l2 28"/>
    </g>
    <g class="water">
      <path d="M586 380 l4 10 l4 -10"/><path d="M662 366 l4 10 l4 -10"/><path d="M746 374 l4 10 l4 -10"/>
    </g>
    <g class="s">
      <path d="M700 250 v-38"/>
      <path d="M700 220 q-16 -8 -20 8 q16 6 20 -8"/><path d="M700 232 q16 -8 20 8 q-16 6 -20 -8"/>
      <path d="M700 250 q8 46 2 96 q10 -10 8 -56"/>
      <path d="M702 342 q12 4 18 -2"/>
    </g>
    ${badge(628, 370, 3)}
    ${badge(588, 430, 4)}
    <text x="720" y="500" class="lbl-s" text-anchor="middle">les fissures rétablissent la descente de l’eau</text>
  </svg>`,

  'sk-cycle-couvert': `<svg viewBox="0 180 960 340" role="img" aria-label="Le cycle d’un engrais vert, du semis à l’enfouissement">
    <text x="120" y="430" class="lbl" text-anchor="middle">1. semer</text>
    <rect x="20" y="360" width="200" height="100" class="soil"/>
    <rect x="20" y="360" width="200" height="6" class="soil-d"/>
    <path d="M20 360 h200" class="s"/>
    <g class="s">
      <path d="M54 300 l44 -20 l18 30 l-44 20 z" class="wood"/>
      <path d="M98 280 q12 14 2 26" class="s2"/>
    </g>
    <g class="metal-d">
      <circle cx="82" cy="352" r="2.5"/><circle cx="96" cy="356" r="2.5"/><circle cx="110" cy="350" r="2.5"/>
      <circle cx="124" cy="356" r="2.5"/><circle cx="138" cy="352" r="2.5"/>
    </g>
    <text x="58" y="252" class="lbl-s">semences</text>
    <g class="leaf">
      <path d="M86 360 q-6 -14 4 -18 q6 10 -4 18"/><path d="M126 360 q-6 -14 4 -18 q6 10 -4 18"/>
      <path d="M160 360 q-6 -14 4 -18 q6 10 -4 18"/>
    </g>
    ${badge(186, 314, 1)}

    <text x="360" y="430" class="lbl" text-anchor="middle">2. couvrir</text>
    <rect x="260" y="360" width="200" height="100" class="soil"/>
    <rect x="260" y="360" width="200" height="6" class="soil-d"/>
    <path d="M260 360 h200" class="s"/>
    <g class="s2">
      <path d="M290 360 v-96"/><path d="M330 360 v-120"/><path d="M370 360 v-104"/>
      <path d="M410 360 v-128"/><path d="M440 360 v-92"/>
      <path d="M290 264 q6 -12 10 -18"/><path d="M330 240 q12 -12 20 -20"/><path d="M410 232 q12 -10 20 -16"/>
    </g>
    <g class="leaf">
      <path d="M290 300 q-14 -8 -18 4 q14 8 18 -4"/><path d="M290 280 q14 -8 18 4 q-14 8 -18 -4"/>
      <path d="M330 276 q-14 -8 -18 4 q14 8 18 -4"/><path d="M330 256 q14 -8 18 4 q-14 8 -18 -4"/>
      <path d="M370 292 q-14 -8 -18 4 q14 8 18 -4"/><path d="M410 268 q-14 -8 -18 4 q14 8 18 -4"/>
      <path d="M410 248 q14 -8 18 4 q-14 8 -18 -4"/>
    </g>
    <g class="fl-p">
      <circle cx="300" cy="246" r="4"/><circle cx="292" cy="238" r="3"/><circle cx="308" cy="238" r="3"/>
      <circle cx="350" cy="220" r="4"/><circle cx="342" cy="212" r="3"/><circle cx="358" cy="212" r="3"/>
      <circle cx="430" cy="216" r="4"/><circle cx="422" cy="208" r="3"/><circle cx="438" cy="208" r="3"/>
    </g>
    <g class="metal-d">
      <circle cx="286" cy="382" r="2"/><circle cx="298" cy="390" r="2"/><circle cx="326" cy="400" r="2"/>
      <circle cx="338" cy="388" r="2"/>
    </g>
    ${badge(438, 286, 2)}

    <text x="600" y="430" class="lbl" text-anchor="middle">3. détruire</text>
    <rect x="500" y="360" width="200" height="100" class="soil"/>
    <rect x="500" y="360" width="200" height="6" class="soil-d"/>
    <path d="M500 360 h200" class="s"/>
    <g class="metal">
      <path d="M518 300 h164 v18 h-164 z"/>
      <path d="M530 318 v18"/><path d="M550 318 v22"/><path d="M570 318 v18"/><path d="M590 318 v22"/>
      <path d="M610 318 v18"/><path d="M630 318 v22"/><path d="M650 318 v18"/><path d="M670 318 v22"/>
    </g>
    <g class="s2">
      <path d="M534 360 q-4 -22 4 -34"/><path d="M566 360 q-4 -26 4 -38"/><path d="M600 360 q-4 -22 4 -34"/>
      <path d="M634 360 q-4 -26 4 -38"/><path d="M666 360 q-4 -22 4 -34"/>
    </g>
    <g class="leaf" opacity=".6">
      <path d="M580 366 q-10 -10 0 -14 q8 8 0 14"/><path d="M646 366 q-10 -10 0 -14 q8 8 0 14"/>
    </g>
    ${badge(688, 288, 3)}

    <text x="840" y="430" class="lbl" text-anchor="middle">4. enfouir ou pailler</text>
    <rect x="740" y="360" width="200" height="100" class="soil"/>
    <rect x="740" y="360" width="200" height="6" class="soil-d"/>
    <path d="M740 360 h200" class="s"/>
    <g class="s2">
      <path d="M760 378 q14 -6 26 2"/><path d="M800 372 q16 -4 26 4"/><path d="M850 380 q14 -6 26 2"/>
      <path d="M780 396 q18 -6 32 2"/><path d="M870 394 q16 -4 28 4"/>
    </g>
    <g class="leaf">
      <path d="M800 360 q-8 -20 4 -26 q8 12 -4 26"/>
      <path d="M800 336 q-18 -10 -22 8 q18 6 22 -8"/>
      <path d="M800 336 q18 -10 22 8 q-18 6 -22 -8"/>
    </g>
    ${badge(876, 318, 4)}

    <g class="s2">
      <path d="M224 330 h32" marker-end="url(#ar-cy)"/>
      <path d="M464 330 h32" marker-end="url(#ar-cy)"/>
      <path d="M704 330 h32" marker-end="url(#ar-cy)"/>
    </g>
    <g class="s2" stroke-dasharray="6 5">
      <path d="M900 474 q-6 26 -40 26 h-720 q-34 0 -40 -30" marker-end="url(#ar-cy)"/>
    </g>
    <text x="490" y="512" class="lbl-s" text-anchor="middle">le cycle recommence avec la culture suivante</text>
    <defs>
      <marker id="ar-cy" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--ink-2)"/>
      </marker>
    </defs>
  </svg>`,
};

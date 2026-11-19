// The techniques behind the « Techniques » tab. Same shape as the glossary:
// id, three terms, a drawing key (drawings/techniques.js), a French and an
// English explanation, and at least one source id. Add an entry here and it
// appears; no other file has to change.

export const TECHNIQUES = [
  {
    id: 'sous-solage',
    term: { fr: 'Sous-solage', de: 'Untergrundlockerung', en: 'Subsoiling' },
    drawing: 't-sous-solage',
    body: {
      fr: 'Le sous-solage fend le sol en profondeur, sous la couche labourée, sans le retourner. Il rétablit la circulation de l’eau et de l’air, et casse les semelles de labour ou les compactions. Il se pratique avec une sous-soleuse, de préférence sur un sol sec, et coûte beaucoup d’énergie.',
      en: 'Subsoiling cracks the soil deep down, below the plough layer, without turning it over. It restores water and air movement and breaks plough pans or compaction. It is done with a subsoiler, preferably on dry soil, and takes a lot of power.',
    },
    sources: ['wiki-sous-soleuse'],
  },
  {
    id: 'labour',
    term: { fr: 'Labour', de: 'Pflügen', en: 'Ploughing' },
    drawing: 't-labour',
    body: {
      fr: 'Le labour retourne la couche arable avec une charrue pour préparer un lit de semence et enfouir résidus et amendements. C’est le travail du sol le plus profond et le plus énergivore. Répété à la même profondeur, il peut créer une semelle compacte que le sous-solage devra ensuite casser.',
      en: 'Ploughing turns the topsoil over with a plough to prepare a seedbed and bury residues and amendments. It is the deepest and most energy-hungry tillage operation. Repeated at the same depth, it can create a compact pan that subsoiling then has to break.',
    },
    sources: ['wiki-labour'],
  },
  {
    id: 'travail-du-sol',
    term: { fr: 'Travail du sol', de: 'Bodenbearbeitung', en: 'Tillage' },
    drawing: 't-travail-du-sol',
    body: {
      fr: 'Le travail du sol regroupe toutes les opérations qui préparent ou entretiennent la couche cultivée : labour, déchaumage, hersage, fraisage, buttage. On distingue le travail profond, le travail superficiel et, depuis peu, les méthodes sans retournement qui laissent la structure en place.',
      en: 'Tillage covers every operation that prepares or maintains the cultivated layer: ploughing, stubble work, harrowing, rotary tilling, ridging. Deep tillage, shallow tillage and the more recent no-inversion methods that keep the structure in place are distinguished.',
    },
    sources: ['wiki-travail-sol'],
  },
  {
    id: 'composter',
    term: { fr: 'Composter', de: 'Kompostieren', en: 'Composting' },
    drawing: 't-compost',
    body: {
      fr: 'Composter, c’est laisser des déchets végétaux et de cuisine se décomposer à l’air, en tas ou en bac, jusqu’à obtenir un amendement riche en humus. Les micro-organismes font monter la température vers 40–45 °C, puis 60–70 °C. Un compost mûr demande en général de six mois à un an.',
      en: 'Composting lets plant and kitchen waste break down in air, in a heap or a bin, into a humus-rich amendment. Micro-organisms raise the temperature to about 40–45 °C, then 60–70 °C. A mature compost usually takes six months to a year.',
    },
    sources: ['wiki-compost'],
  },
  {
    id: 'faux-semis',
    term: { fr: 'Faux semis', de: 'Falsches Saatbett', en: 'Stale seedbed' },
    unsure: ['de'],
    drawing: 't-faux-semis',
    body: {
      fr: 'Le faux semis consiste à travailler la surface (1 à 5 cm) comme pour semer, puis à laisser germer les graines d’adventices et à détruire les plantules avant la vraie culture. On sème ou on plante trois à quatre semaines plus tard. L’opération peut être répétée, ce qui réduit le stock de graines du sol.',
      en: 'A stale seedbed means working the surface (1–5 cm) as if sowing, then letting weed seeds germinate and destroying the seedlings before the real crop. Sowing or planting follows three to four weeks later. The operation can be repeated, which reduces the soil’s seed bank.',
    },
    sources: ['wiki-faux-semis'],
  },
  {
    id: 'engrais-verts',
    term: { fr: 'Engrais verts', de: 'Gründüngung', en: 'Green manure / cover crop' },
    alt: { en: 'cover crop' },
    drawing: 't-engrais-verts',
    body: {
      fr: 'Un engrais vert est une culture semée pour couvrir le sol entre deux cultures principales, puis enfouie ou laissée en paillis. Il limite l’érosion, améliore la structure et capture les nutriments. Les légumineuses (trèfle, vesce, luzerne) fixent l’azote de l’air grâce à des bactéries vivant sur leurs racines.',
      en: 'A green manure is a crop sown to cover the soil between two main crops, then buried or left as mulch. It limits erosion, improves structure and catches nutrients. Legumes (clover, vetch, lucerne) fix nitrogen from the air with bacteria living on their roots.',
    },
    sources: ['wiki-engrais-vert'],
  },
  {
    id: 'broyat',
    term: { fr: 'Broyat', de: 'Mulch / Holzhackschnitzel', en: 'Mulch / wood chips' },
    drawing: 't-broyat',
    body: {
      fr: 'Le broyat est le matériau obtenu en broyant branches et déchets verts. Étendu sur le sol, il forme un paillis qui limite l’évaporation, freine les adventices et protège la surface de l’érosion. Il peut aussi être incorporé au compost ou laissé au pied des arbres et des haies.',
      en: 'Mulch or wood chips come from shredding branches and green waste. Spread on the soil, they form a mulch that limits evaporation, slows weeds and protects the surface from erosion. They can also go into the compost or be left around trees and hedges.',
    },
    sources: ['wiki-paillage', 'wiki-broyeur'],
  },
  {
    id: 'goutte-a-goutte-technique',
    term: { fr: 'Irrigation goutte-à-goutte', de: 'Tröpfchenbewässerung', en: 'Drip irrigation' },
    drawing: 't-goutte',
    body: {
      fr: 'L’irrigation goutte-à-goutte apporte l’eau directement aux racines, à faible débit, par des goutteurs régulièrement espacés. La technique moderne naît en Israël en 1959. Enterrée, elle permettrait jusqu’à 30 % d’économie d’eau et d’azote, et se contente d’une pression d’un bar au lieu d’environ cinq pour l’aspersion.',
      en: 'Drip irrigation brings water straight to the roots, at a low rate, through regularly spaced emitters. The modern technique was born in Israel in 1959. Buried, it can save up to 30% of water and nitrogen, and needs only one bar of pressure instead of about five for sprinkling.',
    },
    sources: ['wiki-goutte'],
  },
];

export const TECH_SOURCE_ORDER = [
  'wiki-sous-soleuse',
  'wiki-labour',
  'wiki-travail-sol',
  'wiki-compost',
  'wiki-faux-semis',
  'wiki-engrais-vert',
  'wiki-paillage',
  'wiki-broyeur',
  'wiki-goutte',
];

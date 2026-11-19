// The three large thematic sketches of the « Esquisses » tab. Each one has
// its drawing key (drawings/sketches.js), a numbered legend that matches the
// badges in the drawing, explanatory paragraphs naming the visible tools, and
// the sources of every factual statement.

export const SKETCHES = [
  {
    id: 'sans-retourner',
    title: {
      fr: 'Préparer un sol sans le retourner',
      en: 'Preparing the soil without turning it over',
    },
    lead: {
      fr: 'Trois gestes complémentaires gardent les couches du sol en place : fendre en profondeur, ameublir en surface, couvrir entre deux cultures.',
      en: 'Three complementary moves keep the soil layers in place: crack deep down, loosen the surface, cover between two crops.',
    },
    drawing: 'sk-sans-retourner',
    legend: [
      { n: 1, term: 'Sous-soleuse', note: { fr: 'fend la semelle de labour', en: 'cracks the plough pan' } },
      { n: 2, term: 'Semelle compacte', note: { fr: 'la couche à casser', en: 'the layer to break' } },
      { n: 3, term: 'Grelinette', note: { fr: 'ameublit sans retourner', en: 'loosens without turning' } },
      { n: 4, term: 'Engrais vert', note: { fr: 'couvre et nourrit le sol', en: 'covers and feeds the soil' } },
      { n: 5, term: 'Vers de terre', note: { fr: 'la vie du sol reste en place', en: 'soil life stays in place' } },
    ],
    body: {
      fr: [
        'La sous-soleuse passe en premier, sur un sol plutôt sec. Ses dents descendent à environ 50 cm, sous la couche labourée, et fendent la semelle compacte sans la remonter à la surface [1]. Le passage demande de la puissance et ne se justifie que si une compaction est vraiment installée.',
        'La grelinette prend le relais en surface. On enfonce ses 3 à 5 dents, puis on tire les deux manches vers soi : la terre est soulevée et émiettée, mais les couches ne sont pas inversées [2]. C’est le geste du jardinier ou du maraîcher, à l’échelle d’une planche.',
        'Entre deux cultures, un engrais vert couvre le sol. Ses racines travaillent la porosité, les légumineuses fixent l’azote, et la couverture limite l’érosion et les adventices [3]. Enfoui ou laissé en paillis, il rend au sol une partie de ce qu’il a pris.',
      ],
      en: [
        'The subsoiler goes first, on rather dry soil. Its tines reach about 50 cm, below the plough layer, and crack the compact pan without bringing it back to the surface [1]. The pass needs power and is only justified when compaction is really there.',
        'The broadfork takes over at the surface. Push its 3 to 5 tines in, then pull the two handles towards you: the soil is lifted and crumbled, but the layers are not inverted [2]. This is the gardener’s or market gardener’s move, on the scale of one bed.',
        'Between two crops, a green manure covers the soil. Its roots improve porosity, legumes fix nitrogen, and the cover limits erosion and weeds [3]. Buried or left as mulch, it gives back part of what it took.',
      ],
    },
    sources: ['wiki-sous-soleuse', 'wiki-grelinette', 'wiki-engrais-vert'],
  },
  {
    id: 'faux-semis',
    title: {
      fr: 'Le faux semis en action',
      en: 'The stale seedbed in action',
    },
    lead: {
      fr: 'On prépare une fausse culture pour faire lever les adventices, puis on les détruit avant de semer la vraie.',
      en: 'A false seedbed is prepared to make weeds come up, then they are destroyed before the real crop is sown.',
    },
    drawing: 'sk-faux-semis',
    legend: [
      { n: 1, term: 'Travail superficiel', note: { fr: '1 à 5 cm, comme pour semer', en: '1–5 cm, as if sowing' } },
      { n: 2, term: 'Levée des adventices', note: { fr: 'trois à quatre semaines', en: 'three to four weeks' } },
      { n: 3, term: 'Herse étrille', note: { fr: 'détruit les plantules', en: 'kills the seedlings' } },
      { n: 4, term: 'Semis de la culture', note: { fr: 'le stock de graines a baissé', en: 'the seed bank is lower' } },
      { n: 5, term: 'Passage répété', note: { fr: 'facultatif, si le temps le permet', en: 'optional, if time allows' } },
    ],
    body: {
      fr: [
        'Le premier passage travaille la surface sur 1 à 5 cm, comme un semis, avec une herse ou un outil rotatif [4]. Les graines d’adventices présentes dans cette couche se retrouvent à la lumière et à l’humidité dont elles ont besoin pour germer.',
        'On attend ensuite trois à quatre semaines, le temps que la levée se produise [4]. C’est la période la plus importante : sans levée, le faux semis ne sert à rien. La température et l’humidité décident du résultat, et toutes les espèces ne germent pas au même rythme.',
        'Avant le semis, une herse étrille ou un passage thermique détruit les jeunes plantules [5]. On peut répéter l’opération pour épuiser le stock de graines, au prix de passages supplémentaires [4]. La vraie culture est ensuite semée dans un sol plus propre [4].',
      ],
      en: [
        'The first pass works the surface to 1–5 cm, as for sowing, with a harrow or a rotary tool [4]. Weed seeds in that layer come to the light and moisture they need to germinate.',
        'Wait three to four weeks for the flush to appear [4]. This is the key period: without germination, the stale seedbed does nothing. Temperature and moisture decide the result, and species do not all germinate at the same pace.',
        'Before sowing, a tine harrow or a thermal pass kills the young seedlings [5]. The operation can be repeated to exhaust the seed bank, at the cost of extra passes [4]. The real crop is then sown into a cleaner soil [4].',
      ],
    },
    sources: ['wiki-faux-semis', 'wiki-herse'],
  },
  {
    id: 'irrigation',
    title: {
      fr: 'L’irrigation goutte-à-goutte, du captage au goutteur',
      en: 'Drip irrigation, from the borehole to the emitter',
    },
    lead: {
      fr: 'Le trajet de l’eau, du forage qui atteint la nappe jusqu’au goutteur au pied de chaque plante.',
      en: 'The water’s path, from the borehole that reaches the water table to the emitter at each plant.',
    },
    drawing: 'sk-irrigation',
    legend: [
      { n: 1, term: 'Forage', note: { fr: 'atteint la nappe', en: 'reaches the water table' } },
      { n: 2, term: 'Nappe phréatique', note: { fr: 'la réserve sous le sol', en: 'the reserve below ground' } },
      { n: 3, term: 'Pompe', note: { fr: 'remonte l’eau', en: 'lifts the water' } },
      { n: 4, term: 'Vanne électrique', note: { fr: 'ouvre le secteur à arroser', en: 'opens the sector to water' } },
      { n: 5, term: 'Borne d’irrigation', note: { fr: 'raccord en bord de parcelle', en: 'connection at the field edge' } },
      { n: 6, term: 'Rampe de goutteurs', note: { fr: 'l’eau arrive à la racine', en: 'water reaches the root' } },
    ],
    body: {
      fr: [
        'Le forage descend jusqu’à la nappe phréatique, la nappe libre la plus proche de la surface [6, 7]. Il est tubé, et une pompe y remonte l’eau vers la surface [8]. Un forage permet d’irriguer sans réseau collectif, dans le respect des règles locales de prélèvement.',
        'L’eau passe ensuite par une vanne électrique, commandée par un programmateur : elle ouvre le secteur à arroser pendant un temps donné, puis le referme [9]. La borne d’irrigation est le point de raccordement en bord de parcelle, avec sa vanne et parfois un régulateur de pression ou un compteur [10].',
        'La rampe de goutteurs apporte enfin l’eau à la base de chaque plante, goutte par goutte et à faible débit [11]. Le système travaille à une pression d’un bar, contre environ cinq pour l’aspersion, et limite ruissellement et évaporation [11].',
      ],
      en: [
        'The borehole goes down to the water table, the free aquifer closest to the surface [6, 7]. It is cased, and a pump lifts the water to the surface [8]. A borehole allows irrigation without a collective network, subject to local abstraction rules.',
        'The water then passes an electric valve driven by a timer: it opens the sector to be watered for a set time, then closes it [9]. The irrigation hydrant is the connection point at the field edge, with its valve and sometimes a pressure regulator or a meter [10].',
        'The drip line finally brings water to the foot of each plant, drop by drop and at a low rate [11]. The system runs at one bar of pressure, against about five for sprinkling, and limits runoff and evaporation [11].',
      ],
    },
    sources: ['wiki-forage', 'wiki-nappe', 'wiki-pompe', 'wiki-electrovanne', 'afnor-borne', 'wiki-goutte'],
  },
];

export const SKETCH_SOURCE_ORDER = [
  'wiki-sous-soleuse',
  'wiki-grelinette',
  'wiki-engrais-vert',
  'wiki-faux-semis',
  'wiki-herse',
  'wiki-forage',
  'wiki-nappe',
  'wiki-pompe',
  'wiki-electrovanne',
  'afnor-borne',
  'wiki-goutte',
];

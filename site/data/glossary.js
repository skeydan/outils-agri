// The glossary behind the « Outils et machines » tab.
//
// Adding an entry: append an object below. It needs an id (unique), the three
// terms (fr, de, en), one or more categories, a drawing key (see
// drawings/tools.js), a French and an English explanation, and at least one
// source id listed in SOURCES. Put the field names that still need checking
// in `unsure`; they are shown with a « ? » and a tooltip.
//
// `alt` holds a second accepted term. `note` is a short remark shown under the
// explanation. An entry may belong to several categories (the grelinette is
// both a soil tool and a hand tool), but it is written once.

export const CATEGORIES = [
  { id: 'sol', title: { fr: 'Travail du sol', en: 'Soil working' } },
  { id: 'broyage', title: { fr: 'Broyage et fauche', en: 'Shredding and mowing' } },
  { id: 'main', title: { fr: 'Outils à main', en: 'Hand tools' } },
  { id: 'eau', title: { fr: 'Irrigation et eau', en: 'Irrigation and water' } },
];

export const ENTRIES = [
  {
    id: 'sous-soleuse',
    term: { fr: 'Sous-soleuse', de: 'Tiefenlockerer', en: 'Subsoiler' },
    alt: { de: 'Untergrundlockerer', en: 'ripper' },
    categories: ['sol'],
    drawing: 'sous-soleuse',
    body: {
      fr: 'Machine tractée à dents droites et puissantes. Elle descend à environ 50 cm, sous la couche labourée, et fend le sol sans le retourner. On l’utilise pour casser une semelle de labour ou une zone compactée, de préférence par temps sec. Elle demande beaucoup de puissance de traction.',
      en: 'A trailed machine with strong straight tines. It reaches about 50 cm, below the plough layer, and cracks the soil without turning it over. It is used to break a plough pan or deep compaction, preferably in dry weather, and needs a lot of pulling power.',
    },
    sources: ['wiki-sous-soleuse'],
  },
  {
    id: 'decompacteur',
    term: { fr: 'Décompacteur', de: 'Untergrundlockerer', en: 'Decompactor' },
    unsure: ['de'],
    categories: ['sol'],
    drawing: 'decompacteur',
    body: {
      fr: 'Un décompacteur ameublit le sol sur 25 à 45 cm, à la profondeur où s’est formée la semelle de labour. Ses dents sont moins profondes que celles d’une sous-soleuse. Les constructeurs emploient aussi ameublisseur, fissurateur ou ripper, avec des limites qui se recouvrent.',
      en: 'A decompactor loosens the soil to 25–45 cm, at the depth where a plough pan forms. Its tines go less deep than a subsoiler’s. Manufacturers also say loosener, fissurer or ripper, and the boundaries overlap.',
    },
    note: {
      fr: 'Le nom allemand recouvre toute la famille des engins de décompaction profonde ; à vérifier selon la machine.',
      en: 'The German name covers the whole family of deep-loosening machines; check it against the actual machine.',
    },
    sources: ['tracteur-decompacteur', 'wiki-sous-soleuse'],
  },
  {
    id: 'fissurateur',
    term: { fr: 'Fissurateur', de: 'Fissurator', en: 'Soil fissurer' },
    unsure: ['de', 'en'],
    categories: ['sol'],
    drawing: 'fissurateur',
    body: {
      fr: 'Un fissurateur fend le sol avec des dents fines, sans le soulever, sur environ 25 à 40 cm. Il travaille plus légèrement qu’une sous-soleuse et sert plutôt en prévention, pour entretenir la porosité. Le terme anglais n’est pas fixé : les constructeurs parlent aussi de soil loosener.',
      en: 'A fissurer cracks the soil with thin tines, without lifting it, to about 25–40 cm. It works more lightly than a subsoiler and is used preventively, to keep the soil porous. The English name is not settled: manufacturers also say soil loosener.',
    },
    sources: ['tracteur-decompacteur', 'wiki-sous-soleuse'],
  },
  {
    id: 'grelinette',
    term: { fr: 'Grelinette', de: 'Breitgabel', en: 'Broadfork' },
    alt: { fr: 'biobêche, aérofourche', de: 'Grabgabel' },
    unsure: ['de'],
    categories: ['sol', 'main'],
    drawing: 'grelinette',
    body: {
      fr: 'Fourche à main de 3 à 5 dents courbes, à deux manches latéraux. On l’enfonce verticalement, puis on tire les manches vers soi pour soulever et émietter la terre sans la retourner. Inventée par André Grelin, elle est brevetée en 1964. On l’utilise au jardin et en maraîchage pour préparer une planche sans bêcher.',
      en: 'A hand fork with 3 to 5 curved tines and two side handles. Push it in vertically, then pull the handles towards you to lift and crumble the soil without turning it over. Invented by André Grelin, patented in 1964. Used in gardens and market gardens to prepare a bed without digging.',
    },
    note: {
      fr: 'Le même outil figure aussi dans « Outils à main » : il sert aux deux usages.',
      en: 'The same tool also appears under “Hand tools”: it serves both uses.',
    },
    sources: ['wiki-grelinette', 'wiki-broadfork'],
  },
  {
    id: 'rotavator',
    term: { fr: 'Rotavator', de: 'Bodenfräse', en: 'Rotary tiller' },
    alt: { fr: 'fraise rotative' },
    categories: ['sol'],
    drawing: 'rotavator',
    body: {
      fr: 'Fraise rotative entraînée par la prise de force du tracteur. Ses lames tournent et émiettent la couche superficielle du sol en un seul passage. Il prépare rapidement un lit de semence ; un usage répété peut toutefois dégrader la structure et tasser le sol sous la zone fraisée.',
      en: 'A rotary tiller driven by the tractor’s power take-off. Its blades turn and crumble the topsoil in one pass. It prepares a seedbed quickly; repeated use can however damage structure and compact the soil below the tilled layer.',
    },
    sources: ['wiki-motoculteur', 'wiki-rotary-tiller'],
  },
  {
    id: 'broyeur',
    term: { fr: 'Broyeur de végétaux', de: 'Häcksler', en: 'Shredder / chipper' },
    categories: ['broyage'],
    drawing: 'broyeur',
    body: {
      fr: 'Le broyeur réduit branches, tailles et déchets verts en copeaux ou en broyat. Il existe des modèles à disque ou à rotor, portés par un tracteur ou tirés, et des broyeurs de jardin. Le broyat obtenu sert de paillis ou entre au compost.',
      en: 'A shredder turns branches, prunings and green waste into chips or mulch. There are disc and rotor models, tractor-mounted or trailed, and garden shredders. The output is used as mulch or goes to the compost.',
    },
    sources: ['wiki-broyeur'],
  },
  {
    id: 'gyrobroyeur',
    term: { fr: 'Gyrobroyeur', de: 'Schlegelmäher', en: 'Flail mower' },
    unsure: ['de'],
    categories: ['broyage'],
    drawing: 'gyrobroyeur',
    body: {
      fr: 'Broyeur à axe horizontal animé par la prise de force. Des marteaux ou des lames fixés à un rotor coupent l’herbe haute, les refus et les jeunes broussailles. Il laisse un couvert haché sur place et sert à l’entretien des prairies, des vergers et des bords de champ.',
      en: 'A horizontal-shaft mower driven by the power take-off. Flails or blades on a rotor cut tall grass, rough growth and young scrub. It leaves the cut material on the ground and is used on pastures, orchards and field margins.',
    },
    sources: ['wiki-gyrobroyeur'],
  },
  {
    id: 'tronconneuse',
    term: { fr: 'Tronçonneuse', de: 'Kettensäge', en: 'Chainsaw' },
    categories: ['broyage'],
    drawing: 'tronconneuse',
    body: {
      fr: 'La tronçonneuse coupe le bois avec une chaîne à dents entraînée le long d’un guide. Elle sert à abattre, ébrancher et débiter les arbres, et à entretenir haies et bosquets. Elle se tient à deux mains, avec un équipement de protection (casque, visière, gants, jambières).',
      en: 'A chainsaw cuts wood with a toothed chain running along a guide bar. It is used to fell, prune and cut up trees, and to maintain hedges and copses. Hold it with both hands and wear protective gear (helmet, visor, gloves, leg protection).',
    },
    sources: ['wiki-tronconneuse'],
  },
  {
    id: 'rateau',
    term: { fr: 'Râteau', de: 'Harke / Rechen', en: 'Rake' },
    categories: ['main'],
    drawing: 'rateau',
    body: {
      fr: 'Outil à main fait d’un manche et d’une barre portant des dents. Il rassemble les feuilles et les déchets, nivele la surface et prépare un lit de semence fin. En allemand, Harke et Rechen désignent le même outil : ce sont deux synonymes, avec des usages régionaux.',
      en: 'A hand tool made of a handle and a toothed bar. It gathers leaves and debris, levels the surface and prepares a fine seedbed. In German, Harke and Rechen name the same tool: two synonyms with regional use.',
    },
    note: {
      fr: 'Harke et Rechen sont synonymes en allemand ; les deux sont acceptés.',
      en: 'Harke and Rechen are synonyms in German; both are accepted.',
    },
    sources: ['wiki-harke'],
  },
  {
    id: 'tournevis',
    term: { fr: 'Tournevis', de: 'Schraubenzieher', en: 'Screwdriver' },
    alt: { de: 'Schraubendreher' },
    categories: ['main'],
    drawing: 'tournevis',
    body: {
      fr: 'Le tournevis sert à visser et dévisser les vis, et à faire levier sur de petites pièces. La tige porte une empreinte adaptée à la tête de vis (plate, cruciforme, Torx…). En allemand, Schraubenzieher et Schraubendreher sont synonymes ; le premier est le mot courant.',
      en: 'A screwdriver drives and removes screws, and can lever small parts. The tip matches the screw head (slotted, cross, Torx…). In German, Schraubenzieher and Schraubendreher are synonyms; the first is the everyday word.',
    },
    sources: ['wiki-tournevis', 'wiki-schraubenzieher'],
  },
  {
    id: 'goutte-a-goutte-outil',
    term: { fr: 'Goutte-à-goutte', de: 'Tröpfchenbewässerung', en: 'Drip irrigation' },
    alt: { fr: 'rampe de goutteurs' },
    categories: ['eau'],
    drawing: 'goutte-a-goutte',
    body: {
      fr: 'Système d’irrigation localisée : des goutteurs posés sur une rampe apportent l’eau à la base des plantes, goutte par goutte, à faible débit. La technique moderne est développée en Israël par Simcha Blass à la fin des années 1950. Elle limite le ruissellement et l’évaporation, et peut être enterrée près des racines.',
      en: 'A localised irrigation system: emitters on a line bring water to the foot of each plant, drop by drop, at a low rate. The modern technique was developed in Israel by Simcha Blass in the late 1950s. It limits runoff and evaporation, and can be buried near the roots.',
    },
    sources: ['wiki-goutte'],
  },
  {
    id: 'vanne-electrique',
    term: { fr: 'Vanne électrique', de: 'Elektrisches Ventil', en: 'Electric valve' },
    alt: { fr: 'électrovanne', en: 'solenoid valve' },
    categories: ['eau'],
    drawing: 'vanne-electrique',
    body: {
      fr: 'Une vanne électrique s’ouvre ou se ferme par un petit électroaimant, le solénoïde, commandé par un programmateur ou un capteur. Sur un réseau d’irrigation, elle découpe le réseau en secteurs arrosés à tour de rôle. Une vanne d’arrêt générale coupe l’ensemble.',
      en: 'An electric valve opens or closes through a small electromagnet, the solenoid, driven by a timer or a sensor. On an irrigation network it divides the network into sectors watered in turn. A main stop valve shuts the whole system.',
    },
    sources: ['wiki-electrovanne'],
  },
  {
    id: 'borne-irrigation',
    term: { fr: 'Borne d’irrigation', de: 'Bewässerungshydrant', en: 'Irrigation hydrant' },
    alt: { de: 'Hydrant', en: 'standpipe' },
    categories: ['eau'],
    drawing: 'borne',
    body: {
      fr: 'Point de raccordement d’un réseau collectif sous pression, en bord de parcelle. Elle comprend une vanne d’entrée et, selon les modèles, un régulateur de pression, un limiteur de débit et un compteur. La norme européenne EN 14267 fixe cette terminologie et les prescriptions techniques.',
      en: 'A connection point on a collective pressurised network, at the edge of a field. It has an inlet valve and, depending on the model, a pressure regulator, a flow limiter and a meter. European standard EN 14267 fixes this terminology and the technical requirements.',
    },
    sources: ['afnor-borne'],
  },
  {
    id: 'forage',
    term: { fr: 'Forage', de: 'Bohrung', en: 'Borehole / drilling' },
    alt: { de: 'Bohrloch' },
    categories: ['eau'],
    drawing: 'forage',
    body: {
      fr: 'Un forage est un trou creusé dans le sol, souvent tubé, pour atteindre une nappe d’eau. On y descend une pompe qui remonte l’eau vers la surface. Au jardin ou en agriculture, il permet d’irriguer sans dépendre d’un réseau collectif, dans le respect des règles locales de prélèvement.',
      en: 'A borehole is a hole drilled into the ground, often cased, to reach a water table. A pump is lowered into it to bring water to the surface. In a garden or on a farm it allows irrigation without a collective network, subject to local abstraction rules.',
    },
    sources: ['wiki-forage'],
  },
  {
    id: 'nappe-phreatique',
    term: { fr: 'Nappe phréatique', de: 'Grundwasser', en: 'Groundwater table' },
    alt: { de: 'Grundwasserspiegel', en: 'phreatic zone' },
    categories: ['eau'],
    drawing: 'nappe',
    body: {
      fr: 'La nappe phréatique est la nappe d’eau libre la plus proche de la surface. Elle remplit les interstices d’un aquifère peu profond, alimente les puits et les sources, et peut être polluée depuis la surface. Contrairement à une nappe captive, elle n’est pas enfermée sous une couche imperméable.',
      en: 'The water table is the free aquifer closest to the surface. It fills the pores of a shallow aquifer, feeds wells and springs, and can be polluted from the surface. Unlike a confined aquifer, it is not trapped under an impermeable layer.',
    },
    sources: ['wiki-nappe'],
  },
  {
    id: 'beche',
    term: { fr: 'Bêche', de: 'Spaten', en: 'Spade' },
    categories: ['sol', 'main'],
    drawing: 'beche',
    body: {
      fr: 'Outil à main pour creuser et retourner la terre : une lame plate en acier au bout d’un manche, que l’on enfonce avec le pied puis bascule. À la différence de la pelle, qui déplace de la matière, la bêche découpe et retourne le sol sur place. Elle sert à préparer une planche, un trou de plantation ou à incorporer du compost.',
      en: 'A hand tool for digging and turning soil: a flat steel blade at the end of a handle, driven in with the foot and levered back. Unlike a shovel, which moves material, a spade cuts and turns the soil in place. It prepares a bed, a planting hole, or works in compost.',
    },
    sources: ['wiki-beche', 'wiki-spaten'],
  },
  {
    id: 'scie-a-onglet',
    term: { fr: 'Scie à onglet', de: 'Gehrungssäge', en: 'Miter saw' },
    alt: { de: 'Kapp- und Gehrungssäge' },
    categories: ['main'],
    drawing: 'scie-a-onglet',
    body: {
      fr: 'Scie destinée à couper du bois à un angle précis. Deux formes existent : la scie à onglet manuelle, utilisée avec une boîte à onglets qui guide la lame, et la scie à onglet électrique, à lame circulaire montée sur un bras pivotant. Elle sert aux encadrements, plinthes et assemblages d’angle.',
      en: 'A saw for cutting wood at a precise angle. Two forms exist: the manual miter saw, used with a miter box that guides the blade, and the power miter saw, with a circular blade on a pivoting arm. It is used for frames, skirting boards and angled joints.',
    },
    sources: ['wiki-scie-a-onglet', 'wiki-miter-saw', 'wiki-gehrungssaege'],
  },
  {
    id: 'equerre',
    term: { fr: 'Équerre', de: 'Winkel', en: 'Square' },
    alt: { en: 'try square', de: 'Anschlagwinkel' },
    categories: ['main'],
    drawing: 'equerre',
    body: {
      fr: 'Instrument formé de deux branches ajustées à angle droit, pour tracer ou vérifier un angle droit. La branche épaisse, le talon, s’appuie sur le chant de la pièce, l’autre sert de règle. Les modèles gradués permettent aussi de mesurer et de reporter des cotes.',
      en: 'An instrument made of two arms set at a right angle, for drawing or checking a square corner. The thick arm, the stock, rests against the edge of the piece; the other is a rule. Graduated models also measure and transfer dimensions.',
    },
    sources: ['wiki-equerre', 'wiki-winkel'],
  },
  {
    id: 'visseuse',
    term: { fr: 'Visseuse', de: 'Akkuschrauber', en: 'Cordless screwdriver' },
    alt: { en: 'power screwdriver', de: 'Schrauber' },
    categories: ['main'],
    drawing: 'visseuse',
    body: {
      fr: 'Outil électrique portatif, le plus souvent sans fil, pour visser et dévisser rapidement. Un mandrin tient l’embout adapté à la tête de vis, et un coupleur limite le serrage pour ne pas abîmer la vis ni la pièce. Contrairement au tournevis, c’est le moteur qui fait le travail.',
      en: 'A portable power tool, usually cordless, for driving and removing screws quickly. A chuck holds the bit that matches the screw head, and a clutch limits the torque so the screw and the piece are not damaged. Unlike a hand screwdriver, the motor does the work.',
    },
    note: {
      fr: 'Sans fil, c’est l’Akkuschrauber ; la visseuse filaire se dit Elektroschrauber.',
      en: 'Cordless, it is an Akkuschrauber; a corded screwdriver is an Elektroschrauber.',
    },
    sources: ['wiki-visseuse', 'wiki-akkuschrauber'],
  },
];

// Source ids used by this tab, in the order they are numbered at the bottom.
export const SOURCE_ORDER = [
  'wiki-sous-soleuse',
  'tracteur-decompacteur',
  'wiki-grelinette',
  'wiki-broadfork',
  'wiki-motoculteur',
  'wiki-rotary-tiller',
  'wiki-broyeur',
  'wiki-gyrobroyeur',
  'wiki-tronconneuse',
  'wiki-harke',
  'wiki-tournevis',
  'wiki-schraubenzieher',
  'wiki-goutte',
  'wiki-electrovanne',
  'afnor-borne',
  'wiki-forage',
  'wiki-nappe',
  'wiki-beche',
  'wiki-spaten',
  'wiki-scie-a-onglet',
  'wiki-miter-saw',
  'wiki-gehrungssaege',
  'wiki-equerre',
  'wiki-winkel',
  'wiki-visseuse',
  'wiki-akkuschrauber',
];

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
  {
    id: 'scene-sous-soleuse',
    title: {
      fr: 'La sous-soleuse au champ : fendre la semelle sans retourner',
      en: 'The subsoiler in the field: cracking the pan without turning',
      de: 'Der Tiefenlockerer auf dem Feld: die Pflugsohle aufbrechen, ohne zu wenden',
    },
    lead: {
      fr: 'Le tracteur tire une sous-soleuse à dents. Derrière le passage, la semelle compacte est fendue ; devant, elle reste intacte. La surface, elle, n’est pas retournée.',
      en: 'The tractor pulls a tined subsoiler. Behind the pass, the compact pan is cracked; ahead of it, it is still intact. The surface itself is not turned over.',
      de: 'Der Traktor zieht einen Tiefenlockerer mit Zinken. Hinter dem Durchgang ist die Pflugsohle aufgebrochen, davor noch intakt. Die Oberfläche wird nicht gewendet.',
    },
    drawing: 'sk-sous-soleuse',
    legend: [
      {
        n: 1,
        term: { fr: 'Tracteur', de: 'Traktor', en: 'Tractor' },
        note: { fr: 'tire l’outil', en: 'pulls the implement', de: 'zieht das Gerät' },
      },
      {
        n: 2,
        term: { fr: 'Sous-soleuse', de: 'Tiefenlockerer', en: 'Subsoiler' },
        note: { fr: 'dents droites, sans retournement', en: 'straight tines, no inversion', de: 'gerade Zinken, kein Wenden' },
      },
      {
        n: 3,
        term: { fr: 'Semelle compacte', de: 'Pflugsohle', en: 'Plough pan' },
        note: { fr: 'la couche à fendre', en: 'the layer to crack', de: 'die zu brechende Schicht' },
      },
      {
        n: 4,
        term: { fr: 'Fissures', de: 'Risse', en: 'Cracks' },
        note: { fr: 'l’eau et les racines passent', en: 'water and roots get through', de: 'Wasser und Wurzeln kommen durch' },
      },
    ],
    body: {
      fr: [
        'La sous-soleuse descend à environ 50 cm, sous la couche labourée, et fend le sol sans le retourner [1]. Ses dents droites traversent la semelle compacte et laissent la surface en place ; le passage demande beaucoup de puissance de traction et ne se justifie que si le tassement est réel [1].',
        'Les constructeurs annoncent des profondeurs de travail qui vont jusqu’à 60–70 cm pour les sous-soleuses, et les noms se recouvrent avec ceux des décompacteurs [12]. La profondeur utile est celle de la couche à casser : descendre plus bas coûte de l’énergie sans profit.',
        'Le dessin montre le résultat d’un seul passage. À gauche, derrière les dents, la semelle est fendue et l’eau peut rejoindre les couches profondes ; à droite, devant l’outil, elle reste continue. La surface n’a pas été retournée, et les résidus restent en place.',
      ],
      en: [
        'The subsoiler reaches about 50 cm, below the plough layer, and cracks the soil without turning it over [1]. Its straight tines cross the compact pan and leave the surface in place; the pass takes a lot of pulling power and is only justified when compaction is really there [1].',
        'Manufacturers quote working depths of up to 60–70 cm for subsoilers, and the names overlap with those of decompactors [12]. The useful depth is that of the layer to break: going deeper costs energy without benefit.',
        'The drawing shows the result of a single pass. On the left, behind the tines, the pan is cracked and water can reach the deep layers; on the right, ahead of the tool, it is still continuous. The surface has not been turned over, and the residues stay in place.',
      ],
    },
    sources: ['wiki-sous-soleuse', 'tracteur-decompacteur'],
  },
  {
    id: 'scene-decompacteur',
    title: {
      fr: 'Le décompacteur : diagnostiquer avant de fissurer',
      en: 'The decompactor: diagnose before you crack',
      de: 'Der Untergrundlockerer: erst prüfen, dann lockern',
    },
    lead: {
      fr: 'Un décompacteur travaille moins profond qu’une sous-soleuse, à la hauteur où s’est formée la semelle. Avant de le passer, il faut vérifier que le tassement existe.',
      en: 'A decompactor works less deep than a subsoiler, at the height where the pan has formed. Before the pass, check that the compaction really exists.',
      de: 'Ein Untergrundlockerer arbeitet weniger tief als ein Tiefenlockerer, in der Höhe der entstandenen Sohle. Vor dem Einsatz muss die Verdichtung tatsächlich nachgewiesen sein.',
    },
    drawing: 'sk-decompacteur',
    legend: [
      {
        n: 1,
        term: { fr: 'Décompacteur', de: 'Untergrundlockerer', en: 'Decompactor' },
        note: { fr: 'dents jusqu’à 25–45 cm', en: 'tines to 25–45 cm', de: 'Zinken bis 25–45 cm' },
      },
      {
        n: 2,
        term: { fr: 'Zone tassée', de: 'Verdichtete Schicht', en: 'Compacted layer' },
        note: { fr: 'le diagnostic à faire', en: 'what the diagnosis must find', de: 'was die Diagnose finden muss' },
      },
      {
        n: 3,
        term: { fr: 'Fosse d’observation', de: 'Profilgrube', en: 'Inspection pit' },
        note: { fr: 'regarder le profil du sol', en: 'look at the soil profile', de: 'das Bodenprofil ansehen' },
      },
      {
        n: 4,
        term: { fr: 'Comparaison', de: 'Vergleich', en: 'Comparison' },
        note: { fr: 'décompacteur puis sous-soleuse', en: 'decompactor, then subsoiler', de: 'erst flach, dann tief lockern' },
      },
    ],
    body: {
      fr: [
        'Le décompacteur ameublit le sol sur 25 à 45 cm, à la profondeur où se forme la semelle de labour ; ses dents sont moins profondes que celles d’une sous-soleuse [12]. Les constructeurs emploient aussi ameublisseur, fissurateur ou ripper, avec des limites qui se recouvrent [12].',
        'Avant de passer l’outil, on ouvre une fosse pour regarder le profil et repérer la couche compacte [12]. Un sol sans tassement ne gagne rien à être fissuré : le passage coûte de l’énergie et peut casser des galeries et des racines.',
        'Le schéma de droite compare les deux profondeurs : le décompacteur reste dans la couche cultivée, la sous-soleuse descend sous elle [12]. Le choix dépend donc de l’endroit où le tassement s’est installé, pas de la puissance disponible.',
      ],
      en: [
        'The decompactor loosens the soil to 25–45 cm, at the depth where the plough pan forms; its tines go less deep than a subsoiler’s [12]. Manufacturers also say loosener, fissurer or ripper, and the boundaries overlap [12].',
        'Before the pass, a pit is opened to look at the profile and locate the compact layer [12]. A soil without compaction gains nothing from being cracked: the pass costs energy and can break burrows and roots.',
        'The diagram on the right compares the two depths: the decompactor stays in the cultivated layer, the subsoiler goes below it [12]. The choice therefore depends on where the compaction sits, not on the power available.',
      ],
    },
    sources: ['tracteur-decompacteur', 'wiki-sous-soleuse'],
  },
  {
    id: 'scene-broyeur',
    title: {
      fr: 'Du branchage au paillis : la chaîne du broyat',
      en: 'From branches to mulch: the chip chain',
      de: 'Vom Ast zum Mulch: die Häckselkette',
    },
    lead: {
      fr: 'Les branches deviennent des copeaux, les copeaux deviennent un paillis ou un compost. Chaque étape a son usage.',
      en: 'Branches become chips, chips become mulch or compost. Each step has its use.',
      de: 'Aus Ästen werden Hackschnitzel, aus Hackschnitzeln Mulch oder Kompost. Jeder Schritt hat seinen Nutzen.',
    },
    drawing: 'sk-broyeur',
    legend: [
      {
        n: 1,
        term: { fr: 'Branches', de: 'Äste', en: 'Branches' },
        note: { fr: 'tailles et déchets verts', en: 'prunings and green waste', de: 'Schnittgut und Grünabfall' },
      },
      {
        n: 2,
        term: { fr: 'Broyeur', de: 'Häcksler', en: 'Shredder' },
        note: { fr: 'réduit en copeaux', en: 'reduces to chips', de: 'zerkleinert zu Hackschnitzeln' },
      },
      {
        n: 3,
        term: { fr: 'Broyat', de: 'Häckselgut', en: 'Wood chips' },
        note: { fr: 'le matériau obtenu', en: 'the material obtained', de: 'das gewonnene Material' },
      },
      {
        n: 4,
        term: { fr: 'Paillis ou compost', de: 'Mulch oder Kompost', en: 'Mulch or compost' },
        note: { fr: 'deux débouchés', en: 'two destinations', de: 'zwei Verwendungen' },
      },
    ],
    body: {
      fr: [
        'Le broyeur réduit branches, tailles et déchets verts en copeaux ou en broyat ; il existe des modèles à disque ou à rotor, portés ou tirés [13]. Le broyat obtenu sert de paillis ou entre au compost [13].',
        'Étendu sur le sol, le paillis limite l’évaporation, freine les adventices et protège la surface de l’érosion [14]. Il peut aussi être laissé au pied des arbres et des haies, ou incorporé au compost [13, 14].',
        'Le dessin suit la chaîne : les branches entrent, le broyat sort, puis se partage entre le paillis et le tas de compost. Rien n’est perdu, mais le broyat ligneux se décompose lentement et ne doit pas être enfoui en couche épaisse.',
      ],
      en: [
        'The shredder turns branches, prunings and green waste into chips or mulch; there are disc and rotor models, mounted or trailed [13]. The output is used as mulch or goes to the compost [13].',
        'Spread on the soil, the mulch limits evaporation, slows weeds and protects the surface from erosion [14]. It can also be left around trees and hedges, or added to the compost [13, 14].',
        'The drawing follows the chain: branches go in, chips come out, then split between the mulch and the compost heap. Nothing is lost, but woody chips break down slowly and should not be buried in a thick layer.',
      ],
    },
    sources: ['wiki-broyeur', 'wiki-paillage'],
  },
  {
    id: 'scene-rotavator',
    title: {
      fr: 'Le rotavator et le lit de semence',
      en: 'The rotavator and the seedbed',
      de: 'Die Bodenfräse und das Saatbett',
    },
    lead: {
      fr: 'Les lames tournent, émiettent la couche superficielle et préparent un lit de semence en un passage. Sous la zone fraisée, le sol n’est pas remué.',
      en: 'The blades turn, crumble the top layer and prepare a seedbed in one pass. Below the tilled zone, the soil is not moved.',
      de: 'Die Messer drehen sich, zerkleinern die oberste Schicht und bereiten in einem Durchgang ein Saatbett. Unter der gefrästen Zone wird der Boden nicht bewegt.',
    },
    drawing: 'sk-rotavator',
    legend: [
      {
        n: 1,
        term: { fr: 'Rotavator', de: 'Bodenfräse', en: 'Rotary tiller' },
        note: { fr: 'lames entraînées par la prise de force', en: 'blades driven by the PTO', de: 'vom Zapfwellenantrieb getriebene Messer' },
      },
      {
        n: 2,
        term: { fr: 'Couche fraisée', de: 'Gefräste Schicht', en: 'Tilled layer' },
        note: { fr: 'quelques centimètres émiettés', en: 'a few centimetres, crumbled', de: 'einige Zentimeter, krümelig' },
      },
      {
        n: 3,
        term: { fr: 'Lit de semence', de: 'Saatbett', en: 'Seedbed' },
        note: { fr: 'fin, nivelé, prêt à semer', en: 'fine, level, ready to sow', de: 'fein, eben, saatfertig' },
      },
      {
        n: 4,
        term: { fr: 'Couche compactée', de: 'Verdichtete Schicht', en: 'Compacted layer' },
        note: { fr: 'sous la zone travaillée', en: 'below the worked zone', de: 'unter dem bearbeiteten Bereich' },
      },
    ],
    body: {
      fr: [
        'Le rotavator est une fraise rotative entraînée par la prise de force : ses lames tournent et émiettent la couche superficielle en un seul passage [15]. Il prépare rapidement un lit de semence fin et nivelé [15].',
        'Le travail reste superficiel : sous la profondeur des lames, le sol n’est pas remué et garde sa structure [16]. Un usage répété peut dégrader la structure et tasser le sol sous la zone fraisée [15, 16].',
        'Le dessin sépare les deux zones : au-dessus, les mottes sont brisées et les graines trouvent un lit fin ; au-dessous, la couche compacte reste en place. Le rotavator ne corrige donc pas un tassement profond, qui demande un outil de décompaction [17].',
      ],
      en: [
        'The rotavator is a rotary tiller driven by the power take-off: its blades turn and crumble the top layer in a single pass [15]. It quickly prepares a fine, level seedbed [15].',
        'The work stays shallow: below the depth of the blades, the soil is not moved and keeps its structure [16]. Repeated use can damage structure and compact the soil below the tilled layer [15, 16].',
        'The drawing separates the two zones: above, clods are broken and seeds find a fine bed; below, the compact layer stays in place. The rotavator therefore does not fix deep compaction, which needs a loosening tool [17].',
      ],
    },
    sources: ['wiki-motoculteur', 'wiki-rotary-tiller', 'wiki-travail-sol'],
  },
  {
    id: 'scene-goutte-bulbe',
    title: {
      fr: 'Le bulbe du goutteur, en gros plan',
      en: 'The emitter’s wetting bulb, up close',
      de: 'Der Feuchtkegel des Tropfers in Nahaufnahme',
    },
    lead: {
      fr: 'Sous chaque goutteur, l’eau ne remplit pas tout le sol : elle forme un bulbe mouillé, dont la taille dépend du débit et du sol.',
      en: 'Below each emitter, water does not fill the whole soil: it forms a wetting bulb whose size depends on the flow rate and the soil.',
      de: 'Unter jedem Tropfer füllt das Wasser nicht den ganzen Boden: Es bildet einen Feuchtkegel, dessen Größe von Durchfluss und Boden abhängt.',
    },
    drawing: 'sk-goutte-bulbe',
    legend: [
      {
        n: 1,
        term: { fr: 'Goutteur', de: 'Tropfer', en: 'Emitter' },
        note: { fr: 'l’eau tombe goutte à goutte', en: 'water falls drop by drop', de: 'Wasser fällt tropfenweise' },
      },
      {
        n: 2,
        term: { fr: 'Bulbe mouillé', de: 'Feuchtkegel', en: 'Wetting bulb' },
        note: { fr: 'le volume réellement arrosé', en: 'the volume actually watered', de: 'das tatsächlich bewässerte Volumen' },
      },
      {
        n: 3,
        term: { fr: 'Racines', de: 'Wurzeln', en: 'Roots' },
        note: { fr: 'elles explorent le bulbe', en: 'they explore the bulb', de: 'sie durchziehen den Feuchtkegel' },
      },
      {
        n: 4,
        term: { fr: 'Sol resté sec', de: 'Trockener Boden', en: 'Dry soil' },
        note: { fr: 'hors du bulbe', en: 'outside the bulb', de: 'außerhalb des Feuchtkegels' },
      },
    ],
    body: {
      fr: [
        'Le goutteur apporte l’eau à la base de la plante, goutte par goutte et à faible débit [11]. L’eau ne s’étale pas uniformément : elle descend et s’élargit en un bulbe autour du point de chute, dont la forme dépend du sol et du débit [11].',
        'Le système travaille à une pression d’un bar, contre environ cinq pour l’aspersion, et limite ruissellement et évaporation [11]. Mais le bulbe ne couvre qu’une partie du volume du sol : entre deux rangs, le sol peut rester sec, et les racines s’installent là où l’eau arrive.',
        'Le gros plan complète l’esquisse du trajet de l’eau : le forage, la pompe et la rampe amènent l’eau jusqu’ici, et c’est ce petit volume qui décide de l’irrigation utile.',
      ],
      en: [
        'The emitter brings water to the foot of the plant, drop by drop and at a low rate [11]. Water does not spread evenly: it goes down and widens into a bulb around the delivery point, whose shape depends on the soil and the flow rate [11].',
        'The system runs at one bar of pressure, against about five for sprinkling, and limits runoff and evaporation [11]. But the bulb covers only part of the soil volume: between two rows, the soil can stay dry, and roots settle where the water arrives.',
        'The close-up completes the sketch of the water’s path: the borehole, the pump and the drip line bring the water here, and this small volume decides what the irrigation actually achieves.',
      ],
    },
    sources: ['wiki-goutte'],
  },
  {
    id: 'scene-labour',
    title: {
      fr: 'Le labour : retourner, enfouir, et la semelle qui se forme',
      en: 'Ploughing: turn, bury, and the pan that forms',
      de: 'Das Pflügen: wenden, einarbeiten und die entstehende Pflugsohle',
    },
    lead: {
      fr: 'La charrue retourne la couche arable et enfouit les résidus. Répétée à la même profondeur, elle finit par créer une semelle compacte.',
      en: 'The plough turns the topsoil over and buries the residues. Repeated at the same depth, it ends up creating a compact pan.',
      de: 'Der Pflug wendet die Ackerkrume und vergräbt die Rückstände. Bei gleicher Tiefe entsteht mit der Zeit eine verdichtete Pflugsohle.',
    },
    drawing: 'sk-labour',
    legend: [
      {
        n: 1,
        term: { fr: 'Charrue', de: 'Pflug', en: 'Plough' },
        note: { fr: 'retourne la bande de terre', en: 'turns the furrow slice', de: 'wendet die Erdscholle' },
      },
      {
        n: 2,
        term: { fr: 'Résidus enfouis', de: 'Eingearbeitete Rückstände', en: 'Buried residues' },
        note: { fr: 'sous la surface', en: 'below the surface', de: 'unter der Oberfläche' },
      },
      {
        n: 3,
        term: { fr: 'Semelle de labour', de: 'Pflugsohle', en: 'Plough pan' },
        note: { fr: 'à la profondeur du soc', en: 'at share depth', de: 'in der Tiefe des Schars' },
      },
      {
        n: 4,
        term: { fr: 'Profondeur répétée', de: 'Gleiche Tiefe', en: 'Same depth' },
        note: { fr: 'la cause de la semelle', en: 'the cause of the pan', de: 'die Ursache der Sohle' },
      },
    ],
    body: {
      fr: [
        'Le labour retourne la couche arable avec une charrue pour préparer un lit de semence et enfouir résidus et amendements [18]. C’est le travail du sol le plus profond et le plus énergivore [18].',
        'Répété à la même profondeur, il peut créer une semelle compacte que le sous-solage devra ensuite casser [18, 1]. La semelle se forme au niveau où le soc passe et où le poids des roues s’applique, juste sous la couche remuée.',
        'Le dessin montre les deux temps : la bande de terre est soulevée, retournée, et les résidus passent dessous ; à droite, le profil après passage garde une ligne compacte à la profondeur du soc.',
      ],
      en: [
        'Ploughing turns the topsoil over with a plough to prepare a seedbed and bury residues and amendments [18]. It is the deepest and most energy-hungry tillage operation [18].',
        'Repeated at the same depth, it can create a compact pan that subsoiling then has to break [18, 1]. The pan forms at the level where the share passes and the wheel load is applied, just below the loosened layer.',
        'The drawing shows the two stages: the furrow slice is lifted, turned, and the residues go underneath; on the right, the profile after the pass keeps a compact line at share depth.',
      ],
    },
    sources: ['wiki-labour', 'wiki-sous-soleuse'],
  },
  {
    id: 'scene-compost',
    title: {
      fr: 'Le compost : monter en température, retourner, mûrir',
      en: 'Compost: heat up, turn, mature',
      de: 'Kompost: erhitzen, umsetzen, reifen',
    },
    lead: {
      fr: 'Un tas de déchets végétaux chauffe, se retourne pour rester aéré, puis mûrit en un amendement sombre.',
      en: 'A heap of plant waste heats up, is turned to stay aerated, then matures into a dark amendment.',
      de: 'Ein Haufen Pflanzenabfall erhitzt sich, wird zum Belüften umgesetzt und reift zu einem dunklen Bodenverbesserer.',
    },
    drawing: 'sk-compost',
    legend: [
      {
        n: 1,
        term: { fr: 'Tas', de: 'Haufen', en: 'Heap' },
        note: { fr: 'déchets verts et bruns mélangés', en: 'green and brown waste mixed', de: 'grüner und brauner Abfall gemischt' },
      },
      {
        n: 2,
        term: { fr: 'Montée en température', de: 'Temperaturanstieg', en: 'Heating' },
        note: { fr: '40–45 °C puis 60–70 °C', en: '40–45 °C, then 60–70 °C', de: '40–45 °C, dann 60–70 °C' },
      },
      {
        n: 3,
        term: { fr: 'Retournements', de: 'Umsetzen', en: 'Turnings' },
        note: { fr: 'pour aérer le tas', en: 'to aerate the heap', de: 'um den Haufen zu belüften' },
      },
      {
        n: 4,
        term: { fr: 'Compost mûr', de: 'Reifer Kompost', en: 'Mature compost' },
        note: { fr: 'six mois à un an', en: 'six months to a year', de: 'sechs Monate bis ein Jahr' },
      },
    ],
    body: {
      fr: [
        'Le compostage est une décomposition aérobie : les micro-organismes font monter la température vers 40–45 °C, puis 60–70 °C [19]. Ces températures assainissent partiellement le tas et accélèrent la transformation.',
        'Pour garder l’air, on retourne le tas : chaque retournement le refroidit, puis la montée en température reprend [19]. Un compost mûr demande en général de six mois à un an, et donne un amendement riche en humus [19].',
        'Le dessin résume le cycle : le tas chauffe, la courbe montre les deux paliers, les flèches indiquent les retournements, et la pile finale est sombre, émiettée, prête à être épandue.',
      ],
      en: [
        'Composting is aerobic decomposition: micro-organisms raise the temperature to about 40–45 °C, then 60–70 °C [19]. These temperatures partly sanitise the heap and speed up the transformation.',
        'To keep air in, the heap is turned: each turning cools it, then the temperature rises again [19]. A mature compost usually takes six months to a year, and gives a humus-rich amendment [19].',
        'The drawing sums up the cycle: the heap heats, the curve shows the two plateaus, the arrows mark the turnings, and the final pile is dark and crumbly, ready to be spread.',
      ],
    },
    sources: ['wiki-compost'],
  },
  {
    id: 'scene-sous-solage',
    title: {
      fr: 'Le sous-solage sur sol sec : avant et après',
      en: 'Subsoiling on dry soil: before and after',
      de: 'Untergrundlockerung auf trockenem Boden: vorher und nachher',
    },
    lead: {
      fr: 'Sur un sol sec, les dents fendent la semelle et laissent des fissures ouvertes. L’eau et les racines retrouvent un chemin vers le bas.',
      en: 'On dry soil, the tines crack the pan and leave open fissures. Water and roots find a path downwards again.',
      de: 'Auf trockenem Boden brechen die Zinken die Sohle auf und hinterlassen offene Risse. Wasser und Wurzeln finden wieder einen Weg nach unten.',
    },
    drawing: 'sk-sous-solage',
    legend: [
      {
        n: 1,
        term: { fr: 'Sol sec', de: 'Trockener Boden', en: 'Dry soil' },
        note: { fr: 'il se fissure au lieu de se compacter', en: 'it cracks instead of smearing', de: 'er reißt, statt zu verschmieren' },
      },
      {
        n: 2,
        term: { fr: 'Semelle continue', de: 'Durchgehende Sohle', en: 'Continuous pan' },
        note: { fr: 'avant le passage', en: 'before the pass', de: 'vor dem Durchgang' },
      },
      {
        n: 3,
        term: { fr: 'Fissures verticales', de: 'Senkrechte Risse', en: 'Vertical cracks' },
        note: { fr: 'après le passage', en: 'after the pass', de: 'nach dem Durchgang' },
      },
      {
        n: 4,
        term: { fr: 'Infiltration', de: 'Versickerung', en: 'Infiltration' },
        note: { fr: 'l’eau descend', en: 'water goes down', de: 'Wasser dringt nach unten' },
      },
    ],
    body: {
      fr: [
        'Le sous-solage se pratique de préférence sur un sol sec : les dents fendent alors la semelle au lieu de la compacter davantage [1]. L’outil descend sous la couche labourée, à environ 50 cm, et ne retourne pas le sol [1].',
        'Avant le passage, la semelle continue bloque l’eau et les racines ; après, des fissures verticales la traversent et rétablissent la circulation [1]. Le résultat se lit dans le profil : la couche compacte est rompue, mais les couches restent dans leur ordre.',
        'Le dessin oppose les deux états : à gauche, l’eau stagne au-dessus de la semelle ; à droite, elle descend par les fissures. La surface craquelée rappelle que le sol sec est le moment favorable.',
      ],
      en: [
        'Subsoiling is done preferably on dry soil: the tines then crack the pan instead of compacting it further [1]. The tool goes below the plough layer, to about 50 cm, and does not turn the soil over [1].',
        'Before the pass, the continuous pan blocks water and roots; after it, vertical cracks cross it and restore movement [1]. The result shows in the profile: the compact layer is broken, but the layers stay in their order.',
        'The drawing sets the two states against each other: on the left, water stands above the pan; on the right, it goes down through the cracks. The cracked surface recalls that dry soil is the right moment.',
      ],
    },
    sources: ['wiki-sous-soleuse', 'tracteur-decompacteur'],
  },
  {
    id: 'cycle-couvert',
    title: {
      fr: 'Le cycle du couvert : semer, couvrir, détruire, enfouir',
      en: 'The cover crop cycle: sow, cover, kill, incorporate',
      de: 'Der Gründüngungszyklus: säen, bedecken, abtöten, einarbeiten',
    },
    lead: {
      fr: 'Un engrais vert occupe l’interculture : il est semé, il couvre et travaille le sol, puis il est détruit et rendu au sol.',
      en: 'A green manure fills the between-crop period: it is sown, covers and works the soil, then is killed and returned to the soil.',
      de: 'Eine Gründüngung füllt die Zwischenzeit: Sie wird gesät, bedeckt und lockert den Boden, dann wird sie abgetötet und dem Boden zurückgegeben.',
    },
    drawing: 'sk-cycle-couvert',
    legend: [
      {
        n: 1,
        term: { fr: 'Semis', de: 'Aussaat', en: 'Sowing' },
        note: { fr: 'entre deux cultures', en: 'between two crops', de: 'zwischen zwei Kulturen' },
      },
      {
        n: 2,
        term: { fr: 'Couverture', de: 'Bedeckung', en: 'Cover' },
        note: { fr: 'le sol est protégé', en: 'the soil is protected', de: 'der Boden ist geschützt' },
      },
      {
        n: 3,
        term: { fr: 'Destruction', de: 'Abtötung', en: 'Termination' },
        note: { fr: 'fauche, gel ou roulage', en: 'mowing, frost or rolling', de: 'Mahd, Frost oder Walzen' },
      },
      {
        n: 4,
        term: { fr: 'Enfouissement', de: 'Einarbeitung', en: 'Incorporation' },
        note: { fr: 'ou paillis de surface', en: 'or surface mulch', de: 'oder Mulch an der Oberfläche' },
      },
    ],
    body: {
      fr: [
        'Un engrais vert est semé entre deux cultures pour couvrir le sol et recycler les éléments nutritifs [3]. Les légumineuses fixent l’azote de l’air ; les autres espèces captent les nitrates et produisent de la biomasse [3, 20].',
        'La destruction intervient avant que le couvert ne graine : fauche, gel ou roulage selon l’espèce et la saison [20]. Les résidus sont ensuite enfouis ou laissés en paillis [3].',
        'Le devenir de l’azote dépend du rapport C/N : au-dessus de 30, la décomposition immobilise l’azote ; en dessous de 20, elle le libère vite [21]. Le cycle se referme quand la culture suivante reprend la place, et un nouveau semis peut commencer.',
      ],
      en: [
        'A green manure is sown between two crops to cover the soil and recycle nutrients [3]. Legumes fix atmospheric nitrogen; other species catch nitrates and produce biomass [3, 20].',
        'Termination happens before the cover sets seed: mowing, frost or rolling, depending on the species and the season [20]. The residues are then incorporated or left as mulch [3].',
        'What happens to the nitrogen depends on the C/N ratio: above 30, decomposition immobilises nitrogen; below 20, it releases it quickly [21]. The cycle closes when the next crop takes over, and a new sowing can begin.',
      ],
    },
    sources: ['wiki-engrais-vert', 'bc-cover-crops', 'acsess-cn'],
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
  'tracteur-decompacteur',
  'wiki-broyeur',
  'wiki-paillage',
  'wiki-motoculteur',
  'wiki-rotary-tiller',
  'wiki-travail-sol',
  'wiki-labour',
  'wiki-compost',
  'bc-cover-crops',
  'acsess-cn',
];

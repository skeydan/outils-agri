// The plants behind the « Engrais verts » tab.
//
// Same shape as the glossary, with a few agronomic fields:
//   id, term {fr, de, en}, scientific, family {fr, en}, drawing
//   cn            the C/N ratio, as a short string (omit when not documented)
//   nitrogen      what the plant does with nitrogen (fixes / catches / none)
//   sowing        when and how it is installed
//   services      keys from SERVICES below
//   character     a short portrait, French and English
//   chemistry     what happens in the soil and in the plant, French and English
//   sources       ids listed in EV_SOURCE_ORDER
//
// The sunflower and the Jerusalem artichoke are two distinct species of the
// same genus Helianthus: the first is the annual oilseed, the second the
// perennial tuber crop. They are written once each, with a cross-reference.

export const SERVICES = [
  { id: 'couvert', label: { fr: 'Couverture du sol', en: 'Soil cover' } },
  { id: 'azote', label: { fr: 'Fixation d’azote', en: 'Nitrogen fixation' } },
  { id: 'piege-azote', label: { fr: 'Piège à nitrates', en: 'Nitrate catch crop' } },
  { id: 'structure', label: { fr: 'Structure et racines', en: 'Structure and roots' } },
  { id: 'adventices', label: { fr: 'Étouffement des adventices', en: 'Weed suppression' } },
  { id: 'biofumigation', label: { fr: 'Biofumigation', en: 'Biofumigation' } },
  { id: 'pollinisateurs', label: { fr: 'Pollinisateurs', en: 'Pollinators' } },
  { id: 'mycorhizes', label: { fr: 'Mycorhizes', en: 'Mycorrhizae' } },
  { id: 'mineraux', label: { fr: 'Minéraux', en: 'Minerals' } },
  { id: 'biomasse', label: { fr: 'Biomasse', en: 'Biomass' } },
];

export const PLANTS = [
  {
    id: 'phacelie',
    term: { fr: 'Phacélie', de: 'Rainfarn-Phazelie', en: 'Phacelia' },
    scientific: 'Phacelia tanacetifolia',
    family: { fr: 'Boraginacées', en: 'Boraginaceae' },
    drawing: 'ev-phacelie',
    cn: '10–15',
    nitrogen: { fr: 'Aucune fixation', en: 'No fixation' },
    sowing: { fr: 'Avril à août', en: 'April to August' },
    services: ['couvert', 'adventices', 'pollinisateurs', 'mycorhizes', 'piege-azote'],
    character: {
      fr: 'Couvert d’été à croissance rapide et floraison longue : elle couvre le sol, gêne les adventices et nourrit abeilles et syrphes. Semis d’avril à août, en surface ; c’est une annuelle.',
      en: 'A fast summer cover with a long flowering period: it covers the soil, slows weeds and feeds bees and hoverflies. Sown from April to August, shallow; it is an annual.',
    },
    chemistry: {
      fr: 'Comme tout engrais vert, elle est semée entre deux cultures pour couvrir le sol et recycler les éléments nutritifs [1]. Ce n’est pas une légumineuse : elle ne fixe pas l’azote de l’air, mais son C/N bas (10–15) et sa croissance rapide donnent un couvert qui se décompose vite [2, 7]. Elle forme des associations mycorhiziennes à arbuscules, contrairement aux brassicacées, et sa racine pivotante profonde améliore l’exploration du sol [2, 7]. Sa couverture dense gêne les adventices, mais elle peut se ressemer et devenir envahissante [8].',
      en: 'As any green manure, it is sown between two crops to cover the soil and recycle nutrients [1]. It is not a legume: it does not fix atmospheric nitrogen, but its low C/N (10–15) and fast growth make a cover that breaks down quickly [2, 7]. It forms arbuscular mycorrhizal associations, unlike brassicas, and its deep taproot improves soil exploration [2, 7]. Its dense cover suppresses weeds, but it can self-seed and become invasive [8].',
    },
    sources: ['wiki-engrais-vert', 'bc-cover-crops', 'inlivingcover-phacelia', 'wiki-phacelie'],
  },
  {
    id: 'vesce-commune',
    term: { fr: 'Vesce commune', de: 'Futterwicke', en: 'Common vetch' },
    scientific: 'Vicia sativa',
    family: { fr: 'Fabacées (légumineuses)', en: 'Fabaceae (legumes)' },
    drawing: 'ev-vesce-commune',
    cn: '10–15',
    nitrogen: { fr: 'Fixe 50–100 lb N/acre', en: 'Fixes 50–100 lb N/acre' },
    sowing: { fr: 'Printemps, ou automne en climat doux', en: 'Spring, or autumn in mild climates' },
    services: ['azote', 'couvert', 'structure'],
    character: {
      fr: 'Légumineuse annuelle à port grimpant, semée au printemps ou à l’automne. Elle fixe l’azote et produit une biomasse riche, mais elle est moins rustique que la vesce velue.',
      en: 'An annual climbing legume, sown in spring or autumn. It fixes nitrogen and produces nitrogen-rich biomass, but it is less winter-hardy than hairy vetch.',
    },
    chemistry: {
      fr: 'Ses nodosités abritent des rhizobiums qui fixent l’azote de l’air ; le guide de la Colombie-Britannique estime sa contribution à 50–100 lb N/acre, soit environ 55–110 kg N/ha [2]. Son C/N est bas, comme celui des légumineuses en végétation (environ 10–15), et l’azote est libéré rapidement après enfouissement [4, 5]. Son système racinaire est fibreux et de profondeur moyenne ; elle se sème au printemps, ou à l’automne dans les climats doux [2]. Laissée grainer, elle se ressème abondamment à cause de ses graines dures [2, 9].',
      en: 'Its nodules host rhizobia that fix atmospheric nitrogen; the British Columbia guide puts its contribution at 50–100 lb N/acre, about 55–110 kg N/ha [2]. Its C/N is low, as for growing legumes (about 10–15), and nitrogen is released quickly after incorporation [4, 5]. Its root system is fibrous and of medium depth; it is sown in spring, or in autumn in mild climates [2]. Left to seed, it volunteers abundantly because of its hard seeds [2, 9].',
    },
    sources: ['bc-cover-crops', 'ucanr-cn', 'acsess-cn', 'wiki-vicia-sativa'],
  },
  {
    id: 'vesce-velue',
    term: { fr: 'Vesce velue', de: 'Zottige Wicke', en: 'Hairy vetch' },
    scientific: 'Vicia villosa',
    family: { fr: 'Fabacées (légumineuses)', en: 'Fabaceae (legumes)' },
    drawing: 'ev-vesce-velue',
    cn: '8–15',
    nitrogen: { fr: 'Fixe 90–200 lb N/acre', en: 'Fixes 90–200 lb N/acre' },
    sowing: { fr: '30–45 jours avant les gelées', en: '30–45 days before killing frost' },
    services: ['azote', 'couvert', 'adventices'],
    character: {
      fr: 'Légumineuse d’hiver la plus rustique du duo : semée 30 à 45 jours avant les premières gelées, elle couvre le sol au printemps et fixe beaucoup d’azote.',
      en: 'The hardier winter legume of the pair: sown 30–45 days before the first killing frost, it covers the soil in spring and fixes a lot of nitrogen.',
    },
    chemistry: {
      fr: 'C’est la légumineuse de couvert la plus performante pour l’azote : le guide de la Colombie-Britannique donne 90–200 lb N/acre (environ 100–225 kg N/ha) et SARE cite jusqu’à 200 lb/acre [2, 6]. Son C/N très bas (8–15) rend cet azote vite disponible, avec un risque de lessivage s’il n’est pas repris par une culture [4, 5]. Ses tiges et ses feuilles sont velues, ses racines portent des nodosités ; elle est plus résistante au froid que la vesce commune [2, 10]. Elle peut devenir volubile et étouffer la culture suivante si on la laisse grainer [2].',
      en: 'This is the strongest nitrogen-fixing cover legume: the British Columbia guide gives 90–200 lb N/acre (about 100–225 kg N/ha) and SARE cites up to 200 lb/acre [2, 6]. Its very low C/N (8–15) makes that nitrogen quickly available, with a leaching risk if no crop takes it up [4, 5]. Its stems and leaves are hairy and its roots bear nodules; it is hardier than common vetch [2, 10]. It can become vine-like and smother the next crop if allowed to seed [2].',
    },
    sources: ['bc-cover-crops', 'sare-mccp', 'ucanr-cn', 'acsess-cn', 'wiki-vicia-villosa'],
  },
  {
    id: 'consoude',
    term: { fr: 'Consoude', de: 'Echter Beinwell', en: 'Common comfrey' },
    scientific: 'Symphytum officinale',
    family: { fr: 'Boraginacées', en: 'Boraginaceae' },
    drawing: 'ev-consoude',
    nitrogen: { fr: 'Aucune fixation', en: 'No fixation' },
    sowing: { fr: 'Plantation de rhizomes', en: 'Rhizome planting' },
    services: ['mineraux', 'biomasse', 'couvert'],
    note: {
      fr: 'Vivace de service, non semée : on la fauche plusieurs fois par an et on l’utilise en paillis ou en purin.',
      en: 'A perennial service plant, not sown: it is cut several times a year and used as mulch or liquid feed.',
    },
    character: {
      fr: 'Vivace de bord de fossé à grandes feuilles, cultivée pour son feuillage : on la fauche plusieurs fois par an et on l’utilise en paillis ou en purin. Ce n’est pas un engrais vert semé, mais une plante de service.',
      en: 'A ditch-side perennial with large leaves, grown for its foliage: cut several times a year and used as mulch or liquid feed. It is not a sown green manure but a service plant.',
    },
    chemistry: {
      fr: 'Sa racine pivotante descend jusqu’à 1,8 m et explore des couches que les cultures annuelles n’atteignent pas [11]. Ses feuilles sont riches en potassium ; un essai contrôlé a montré qu’un paillis de consoude augmente le potassium et l’azote disponible du sol, sans gain de rendement visible sur une seule saison [12]. Elle n’est pas légumineuse et ne fixe pas l’azote de l’air. Elle contient des alcaloïdes pyrrolizidiniques toxiques pour le foie : on ne la consomme pas et on ne la donne pas au bétail [11].',
      en: 'Its taproot goes down to 1.8 m and explores layers that annual crops do not reach [11]. Its leaves are rich in potassium; a controlled trial showed that comfrey mulch raises soil potassium and available nitrogen, without a visible yield gain in a single season [12]. It is not a legume and does not fix atmospheric nitrogen. It contains liver-toxic pyrrolizidine alkaloids: it is not eaten and not fed to livestock [11].',
    },
    sources: ['wiki-consoude', 'howard-comfrey'],
  },
  {
    id: 'tournesol',
    term: { fr: 'Tournesol', de: 'Sonnenblume', en: 'Sunflower' },
    scientific: 'Helianthus annuus',
    family: { fr: 'Astéracées', en: 'Asteraceae' },
    drawing: 'ev-tournesol',
    nitrogen: { fr: 'Aucune fixation', en: 'No fixation' },
    sowing: { fr: 'Après les gelées, en été', en: 'After last frost, summer' },
    services: ['structure', 'adventices', 'biomasse', 'pollinisateurs'],
    note: {
      fr: 'Le tournesol (Helianthus annuus) est l’annuel à graines ; le topinambour (Helianthus tuberosus) est le vivace à tubercules. Ce sont deux espèces distinctes du même genre.',
      en: 'The sunflower (Helianthus annuus) is the annual seed crop; the Jerusalem artichoke (Helianthus tuberosus) is the perennial tuber crop. They are two distinct species of the same genus.',
    },
    character: {
      fr: 'Annuel d’été à grande tige et fleur jaune, semé après les gelées. Il produit beaucoup de biomasse et une racine pivotante qui perce les couches compactées ; à ne pas confondre avec l’hélianthe tubéreux (topinambour).',
      en: 'A summer annual with a tall stem and yellow flower, sown after the last frost. It produces a lot of biomass and a taproot that penetrates compacted layers; not to be confused with the tuberous helianthus (Jerusalem artichoke).',
    },
    chemistry: {
      fr: 'Sa racine pivotante perce les couches compactées et va chercher l’eau et les éléments en profondeur [14]. Ce n’est pas une légumineuse : il ne fixe pas l’azote. Ses exsudats racinaires et ses résidus ont un effet allélopathique, attribué à des composés phénoliques, qui freine certaines adventices [13, 14]. Sa biomasse peut devenir ligneuse à maturité et gêner le semis suivant ; il vaut mieux la broyer ou la détruire plusieurs semaines avant [14].',
      en: 'Its taproot penetrates compacted layers and reaches water and nutrients deep in the soil [14]. It is not a legume: it does not fix nitrogen. Its root exudates and residues have an allelopathic effect, attributed to phenolic compounds, that suppresses some weeds [13, 14]. Its biomass can become woody at maturity and hinder the next sowing; it is better to shred or kill it several weeks before [14].',
    },
    sources: ['wiki-tournesol', 'southern-sunflower'],
  },
  {
    id: 'topinambour',
    term: { fr: 'Topinambour (hélianthe tubéreux)', de: 'Topinambur', en: 'Jerusalem artichoke' },
    scientific: 'Helianthus tuberosus',
    family: { fr: 'Astéracées', en: 'Asteraceae' },
    drawing: 'ev-topinambour',
    nitrogen: { fr: 'Aucune fixation', en: 'No fixation' },
    sowing: { fr: 'Plantation de tubercules', en: 'Tuber planting' },
    services: ['biomasse', 'adventices', 'structure'],
    note: {
      fr: 'Le tournesol (Helianthus annuus) est l’annuel à graines ; le topinambour (Helianthus tuberosus) est le vivace à tubercules : deux espèces distinctes du même genre. Sa persistance et son pouvoir envahissant demandent un encadrement strict.',
      en: 'The sunflower (Helianthus annuus) is the annual seed crop; the Jerusalem artichoke (Helianthus tuberosus) is the perennial tuber crop: two distinct species of the same genus. Its persistence and invasiveness need strict control.',
    },
    character: {
      fr: 'Vivace tubéreuse du même genre que le tournesol : biomasse considérable et tubercules riches en inuline, mais plante envahissante, peu adaptée à un couvert annuel. À réserver aux parcelles où l’on peut contenir ses rhizomes.',
      en: 'A tuberous perennial of the same genus as the sunflower: huge biomass and inulin-rich tubers, but an invasive plant, poorly suited to an annual cover. Reserve it for plots where its rhizomes can be contained.',
    },
    chemistry: {
      fr: 'Ses tubercules stockent 8 à 13 % d’inuline, un glucide de réserve non amylacé [15]. La plante peut produire 18 à 28 t/ha de feuillage en vert et 16 à 20 t/ha de tubercules [15]. Elle est décrite comme allélopathique et très compétitive ; en Europe centrale, elle compte parmi les plantes invasives les plus expansives, ce qui la rend difficile à insérer dans une rotation [15]. Elle ne fixe pas l’azote ; sa biomasse ligneuse se décompose lentement.',
      en: 'Its tubers store 8–13% inulin, a non-starchy storage carbohydrate [15]. The plant can produce 18–28 t/ha of green foliage and 16–20 t/ha of tubers [15]. It is described as allelopathic and highly competitive; in central Europe it is one of the most expansive invasive plants, which makes it hard to fit into a rotation [15]. It does not fix nitrogen; its woody biomass decomposes slowly.',
    },
    sources: ['wiki-topinambour'],
  },
  {
    id: 'raifort',
    term: { fr: 'Raifort', de: 'Meerrettich', en: 'Horseradish' },
    scientific: 'Armoracia rusticana',
    family: { fr: 'Brassicacées', en: 'Brassicaceae' },
    drawing: 'ev-raifort',
    nitrogen: { fr: 'Aucune fixation', en: 'No fixation' },
    sowing: { fr: 'Plantation de racines', en: 'Root planting' },
    services: ['biofumigation', 'structure'],
    note: {
      fr: 'Rarement utilisée en couvert à grande échelle : sa persistance et ses rejets souterrains demandent un encadrement strict.',
      en: 'Rarely used as a large-scale cover: its persistence and underground shoots need strict control.',
    },
    character: {
      fr: 'Brassicacée vivace à grosse racine blanche et grandes feuilles, rarement semée comme engrais vert : on l’utilise surtout en biofumigation localisée, en contenant ses racines.',
      en: 'A perennial brassica with a thick white root and large leaves, rarely sown as a green manure: it is used mainly for localised biofumigation, with its roots kept in check.',
    },
    chemistry: {
      fr: 'Ses racines contiennent de la sinigrine et de la gluconasturtiine ; quand les tissus sont broyés, la myrosinase les transforme en allyl-isothiocyanate, un composé volatil aux propriétés nématicides [16]. C’est le principe de la biofumigation : broyer finement la plante et l’incorporer immédiatement, avant que les isothiocyanates ne s’évaporent [17]. La plante est vivace et peut devenir invasive par ses rejets souterrains ; ce n’est pas un couvert annuel facile à détruire [16]. Elle ne fixe pas l’azote.',
      en: 'Its roots contain sinigrin and gluconasturtiin; when tissues are crushed, myrosinase turns them into allyl isothiocyanate, a volatile compound with nematicidal properties [16]. This is the principle of biofumigation: chop the plant finely and incorporate it immediately, before the isothiocyanates evaporate [17]. The plant is perennial and can become invasive through underground shoots; it is not an annual cover that is easy to destroy [16]. It does not fix nitrogen.',
    },
    sources: ['wiki-raifort', 'biofumigation-review'],
  },
  {
    id: 'ray-grass',
    term: { fr: 'Ray-grass', de: 'Weidelgras', en: 'Ryegrass' },
    scientific: 'Lolium spp.',
    family: { fr: 'Poacées (graminées)', en: 'Poaceae (grasses)' },
    drawing: 'ev-ray-grass',
    cn: '12–28',
    nitrogen: { fr: 'Aucune fixation', en: 'No fixation' },
    sowing: { fr: 'Automne ou printemps', en: 'Autumn or spring' },
    services: ['couvert', 'piege-azote', 'adventices', 'structure'],
    character: {
      fr: 'Graminée fourragère à croissance rapide, semée à l’automne ou au printemps : elle couvre vite, retient les nitrates et étouffe les adventices. Annuelle (ray-grass d’Italie) ou vivace selon l’espèce.',
      en: 'A fast-growing forage grass, sown in autumn or spring: it covers quickly, holds nitrates and smothers weeds. Annual (Italian ryegrass) or perennial depending on the species.',
    },
    chemistry: {
      fr: 'Ses racines fibreuses et denses explorent la couche arable et capturent l’azote minéral avant qu’il ne soit lessivé ; le guide de la Colombie-Britannique lui donne une bonne note de piégeage et une concentration en azote de 0,8 à 3,6 % [2]. Son C/N varie de 12 à 28 selon l’espèce et la date de semis, ce qui va de la libération rapide à une immobilisation modérée [3]. Il ne fixe pas l’azote : celui qu’il restitue vient de celui qu’il a capté [2]. Le ray-grass d’Italie est souvent tué par l’hiver, mais peut se ressemer [2, 18].',
      en: 'Its dense fibrous roots explore the topsoil and capture mineral nitrogen before it leaches; the British Columbia guide gives it a good catch-crop rating and a nitrogen concentration of 0.8–3.6% [2]. Its C/N ranges from 12 to 28 depending on species and sowing date, from rapid release to moderate immobilisation [3]. It does not fix nitrogen: what it returns is what it caught [2]. Italian ryegrass is often winter-killed but can volunteer [2, 18].',
    },
    sources: ['bc-cover-crops', 'perennia-cn', 'wiki-lolium'],
  },
  {
    id: 'moutarde-blanche',
    term: { fr: 'Moutarde blanche', de: 'Weißer Senf', en: 'White mustard' },
    scientific: 'Sinapis alba',
    family: { fr: 'Brassicacées', en: 'Brassicaceae' },
    drawing: 'ev-moutarde-blanche',
    cn: '15–20',
    nitrogen: { fr: 'Aucune fixation', en: 'No fixation' },
    sowing: { fr: 'Printemps ou fin d’été', en: 'Spring or late summer' },
    services: ['couvert', 'biofumigation', 'adventices', 'piege-azote'],
    character: {
      fr: 'Brassicacée annuelle à croissance très rapide, semée au printemps ou en fin d’été : elle couvre le sol en quelques semaines, étouffe les adventices et peut servir à la biofumigation.',
      en: 'A very fast-growing annual brassica, sown in spring or late summer: it covers the soil within weeks, smothers weeds and can be used for biofumigation.',
    },
    chemistry: {
      fr: 'Comme les autres brassicacées, elle contient des glucosinolates et de la myrosinase ; le broyage libère des isothiocyanates, des biocides volatils utilisés contre les nématodes et les pathogènes du sol [17, 19]. Sa biomasse tendre et son C/N bas, souvent inférieur à 20, se décomposent vite et libèrent l’azote qu’elle a capté [3, 5]. Elle ne forme pas de mycorhizes à arbuscules, comme les brassicacées, et ne fixe pas l’azote [2]. Un semis trop tardif à l’automne réduit l’effet biofumigant [2].',
      en: 'Like other brassicas, it contains glucosinolates and myrosinase; crushing releases isothiocyanates, volatile biocides used against nematodes and soil pathogens [17, 19]. Its tender biomass and low C/N, often below 20, break down quickly and release the nitrogen it caught [3, 5]. It does not form arbuscular mycorrhizae, as with brassicas, and does not fix nitrogen [2]. Sowing too late in autumn reduces the biofumigant effect [2].',
    },
    sources: ['bc-cover-crops', 'acsess-cn', 'biofumigation-review', 'wiki-white-mustard'],
  },
  {
    id: 'seigle',
    term: { fr: 'Seigle', de: 'Roggen', en: 'Rye' },
    scientific: 'Secale cereale',
    family: { fr: 'Poacées (graminées)', en: 'Poaceae (grasses)' },
    drawing: 'ev-seigle',
    cn: '26–37',
    nitrogen: { fr: 'Aucune fixation', en: 'No fixation' },
    sowing: { fr: 'Automne', en: 'Autumn' },
    services: ['couvert', 'piege-azote', 'adventices', 'biomasse', 'structure'],
    character: {
      fr: 'Céréale d’hiver très rustique, semée à l’automne : elle produit une grosse biomasse, couvre le sol tout l’hiver, piège les nitrates et étouffe les adventices. À détruire tôt au printemps pour éviter l’immobilisation d’azote.',
      en: 'A very hardy winter cereal, sown in autumn: it produces large biomass, covers the soil all winter, catches nitrates and smothers weeds. Kill it early in spring to avoid nitrogen immobilisation.',
    },
    chemistry: {
      fr: 'Céréale d’hiver rustique [21], le seigle a un système racinaire fibreux et vigoureux qui capture l’azote minéral en profondeur et limite le lessivage [2]. Son C/N monte avec l’âge : environ 26 en végétation, 37 à l’épiaison, plus de 80 pour la paille [4] ; au-delà de 30, la décomposition immobilise l’azote au détriment de la culture suivante [5]. Il libère aussi des benzoxazinoïdes allélopathiques (DIBOA, BOA) qui freinent la germination des adventices, mais peuvent gêner certaines cultures [20]. Il ne fixe pas l’azote.',
      en: 'A hardy winter cereal [21], rye has vigorous fibrous roots that capture mineral nitrogen deep in the soil and limit leaching [2]. Its C/N rises with age: about 26 while vegetative, 37 at heading, over 80 for straw [4]; above 30, decomposition immobilises nitrogen at the expense of the next crop [5]. It also releases allelopathic benzoxazinoids (DIBOA, BOA) that slow weed germination but can affect some crops [20]. It does not fix nitrogen.',
    },
    sources: ['bc-cover-crops', 'perennia-cn', 'ucanr-cn', 'acsess-cn', 'iastate-rye', 'wiki-rye'],
  },
  {
    id: 'sarrasin',
    term: { fr: 'Sarrasin', de: 'Buchweizen', en: 'Buckwheat' },
    scientific: 'Fagopyrum esculentum',
    family: { fr: 'Polygonacées', en: 'Polygonaceae' },
    drawing: 'ev-sarrasin',
    cn: '≈ 30',
    nitrogen: { fr: 'Aucune fixation', en: 'No fixation' },
    sowing: { fr: 'Été', en: 'Summer' },
    services: ['couvert', 'adventices', 'mineraux', 'pollinisateurs'],
    character: {
      fr: 'Annuel d’été à croissance très rapide, semé en été : il couvre vite, étouffe les adventices et mobilise le phosphore. Il ne passe pas l’hiver.',
      en: 'A very fast-growing summer annual, sown in summer: it covers quickly, smothers weeds and mobilises phosphorus. It does not overwinter.',
    },
    chemistry: {
      fr: 'Ses racines exsudent des substances qui solubilisent le phosphore peu disponible, et ses résidus le restituent à la culture suivante ; le guide de la Colombie-Britannique le classe parmi les plantes qui « scavengent » le phosphore [2]. Il est allélopathique, ce qui renforce l’étouffement des adventices [2, 22]. Contrairement à l’idée répandue, son C/N n’est pas très bas : environ 30 pour les parties aériennes et 40–50 pour les racines, avec une décomposition lente et un risque d’immobilisation [23]. Il ne forme pas de mycorhizes et ne fixe pas l’azote [2].',
      en: 'Its roots exude substances that solubilise poorly available phosphorus, and its residues return it to the next crop; the British Columbia guide lists it as a phosphorus scavenger [2]. It is allelopathic, which strengthens weed suppression [2, 22]. Contrary to a common idea, its C/N is not very low: about 30 for shoots and 40–50 for roots, with slow decomposition and an immobilisation risk [23]. It does not form mycorrhizae and does not fix nitrogen [2].',
    },
    sources: ['bc-cover-crops', 'wiki-buckwheat', 'saadat-buckwheat'],
  },
  {
    id: 'trefle-incarnat',
    term: { fr: 'Trèfle incarnat', de: 'Inkarnatklee', en: 'Crimson clover' },
    scientific: 'Trifolium incarnatum',
    family: { fr: 'Fabacées (légumineuses)', en: 'Fabaceae (legumes)' },
    drawing: 'ev-trefle-incarnat',
    cn: '11–16',
    nitrogen: { fr: 'Fixe 70–130 lb N/acre', en: 'Fixes 70–130 lb N/acre' },
    sowing: { fr: 'Fin d’été ou automne', en: 'Late summer or autumn' },
    services: ['azote', 'couvert', 'pollinisateurs', 'structure'],
    character: {
      fr: 'Légumineuse annuelle d’hiver, semée en fin d’été ou à l’automne : elle fixe l’azote, fleurit rouge au printemps et attire les pollinisateurs. Plus précoce et plus facile à détruire que la vesce velue.',
      en: 'A winter annual legume, sown in late summer or autumn: it fixes nitrogen, flowers crimson in spring and attracts pollinators. It is earlier and easier to kill than hairy vetch.',
    },
    chemistry: {
      fr: 'Ses nodosités fixent l’azote de l’air ; le guide de la Colombie-Britannique donne 70 à 130 lb N/acre, soit environ 78–146 kg N/ha [2]. Son C/N bas (11–16 selon l’année) libère cet azote rapidement au printemps [5]. Il est facile à détruire à la fauche au stade bouton et peut se ressemer [2]. Comme les autres légumineuses, il laisse des nodosités sur ses racines et améliore la structure par son pivot [2, 24].',
      en: 'Its nodules fix atmospheric nitrogen; the British Columbia guide gives 70–130 lb N/acre, about 78–146 kg N/ha [2]. Its low C/N (11–16 depending on the year) releases that nitrogen quickly in spring [5]. It is easy to kill by mowing at the bud stage and can volunteer [2]. Like other legumes, it leaves nodules on its roots and improves structure with its taproot [2, 24].',
    },
    sources: ['bc-cover-crops', 'acsess-cn', 'wiki-crimson-clover'],
  },
];

// Source ids used by this tab, in the order they are numbered at the bottom.
export const EV_SOURCE_ORDER = [
  'wiki-engrais-vert',
  'bc-cover-crops',
  'perennia-cn',
  'ucanr-cn',
  'acsess-cn',
  'sare-mccp',
  'inlivingcover-phacelia',
  'wiki-phacelie',
  'wiki-vicia-sativa',
  'wiki-vicia-villosa',
  'wiki-consoude',
  'howard-comfrey',
  'wiki-tournesol',
  'southern-sunflower',
  'wiki-topinambour',
  'wiki-raifort',
  'biofumigation-review',
  'wiki-lolium',
  'wiki-white-mustard',
  'iastate-rye',
  'wiki-rye',
  'wiki-buckwheat',
  'saadat-buckwheat',
  'wiki-crimson-clover',
];

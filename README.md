# outils-agri

A small illustrated reference of farm tools, machines and techniques, in
French, with the terms also given in German and English. Three tabs, hand-drawn
SVG sketches, light and dark, works on phones. A static site: no backend, no
build step, no tracking (language and theme are kept in the browser’s local
storage, nothing else). Every factual statement and number comes from a
source cited at the bottom of its tab.

Planned address: <https://agri.divergences.xyz> (GitHub Pages).

## What is on the page

A tab bar at the top with three tabs:

- **Outils et machines** (`#outils`): a glossary of **20 tools and machines**
  (22 cards, because the grelinette and the bêche each belong to two
  categories), grouped into four categories:
  - **Travail du sol** (6): sous-soleuse, décompacteur, fissurateur,
    grelinette, rotavator, bêche.
  - **Broyage et fauche** (3): broyeur de végétaux, gyrobroyeur, tronçonneuse.
  - **Outils à main** (8): grelinette, râteau (Harke/Rechen), tournevis,
    bêche, scie à onglet, équerre, visseuse, griffe (Krail).
  - **Irrigation et eau** (5): goutte-à-goutte, vanne électrique, borne
    d’irrigation, forage, nappe phréatique.

  Each card has a hand-drawn SVG sketch, an explanation in French (and a
  shorter English version), the three terms **FR / DE / EN**, and its source.
  A `?` marks a German or English equivalent that still needs checking; the
  list is in the report of the build and in the data file.
- **Techniques** (`#techniques`): 8 techniques — sous-solage, labour, travail
  du sol, composter, faux semis, engrais verts, broyat, irrigation
  goutte-à-goutte — each with its own sketch, explanation and three terms.
- **Esquisses thématiques** (`#esquisses`): 3 large drawings, each with a
  numbered legend and a text naming the tools in play:
  1. *Préparer un sol sans le retourner* — sous-soleuse, semelle compacte,
     grelinette, engrais vert, vers de terre.
  2. *Le faux semis en action* — travail superficiel, levée des adventices,
     herse étrille, semis de la culture, passage répété.
  3. *L’irrigation goutte-à-goutte, du captage au goutteur* — forage, nappe
     phréatique, pompe, vanne électrique, borne d’irrigation, rampe de
     goutteurs.

The interface is French/English (browser language, with a switch). The
explanations are French; English versions are provided for the glossary and
technique cards, and the sketch texts are translated too. Terms are always
shown in the three languages.

## Adding an entry

Everything is data-driven. Add an object to `site/data/glossary.js` (or
`site/data/techniques.js`) with:

```js
{
  id: 'unique-id',
  term: { fr: '…', de: '…', en: '…' },
  unsure: ['de'],              // optional, shows a « ? »
  categories: ['sol'],         // glossary only
  drawing: 'tool-drawing-key', // a key in site/drawings/tools.js
  body: { fr: '…', en: '…' },
  sources: ['source-id'],
}
```

Then add the drawing to `site/drawings/tools.js` and, if the source is new,
add it to `site/data/sources.js` and to the tab’s `SOURCE_ORDER`. No rendering
code changes. `npm test` checks that every entry has three terms, both
explanations, a drawing and a listed source.

## URLs

The tab is in the hash, so any tab can be linked and the back button works:

```
#outils         the glossary (default)
#techniques     the techniques
#esquisses      the large sketches
```

Citations (`[3]`) scroll to the source list of the tab without changing the
URL. The source ids are namespaced per tab (`#src-outils-…`,
`#src-techniques-…`, `#src-esquisses-…`), so the three tabs can cite the same
document without clashing.

## Run locally

Any static file server works:

```bash
python3 -m http.server 9417 --directory site     # or: npm run serve
# open http://localhost:9417/
```

or with Docker (the same image as for deployment):

```bash
docker build -t outils-agri .
docker run --rm -p 9418:8080 outils-agri
# open http://localhost:9418/   (the container listens on $PORT, default 8080)
```

All paths inside the site are relative, so it also works from a sub-path.

## Tests

```bash
npm test               # unit tests, plain Node (no dependencies)
npm i && npm run e2e   # browser checks with Playwright, BASE=http://localhost:9417 by default
```

- `tests/glossary.test.mjs`: every glossary entry has its three terms, a
  French and an English explanation, a hand-drawn SVG and at least one
  source; ids and categories are valid; the four categories have the expected
  entries; every listed source exists, is https, and is cited.
- `tests/content.test.mjs`: same checks for the techniques; every sketch has
  a drawing, a numbered legend (1..n), both texts and sources; every `[n]`
  citation in a sketch points to a source number that exists.
- `tests/router.test.mjs`: parsing and writing the hash, default sections,
  fallbacks for unknown routes and citation hashes.
- `scripts/e2e.mjs`: screenshots of the three tabs (desktop and phone, light
  and dark, French and English, into `/tmp/agri-shots`); the tab bar and hash
  routing; three terms and a source on every glossary card; the three
  sketches and their legends; citations; language and theme switches. Fails on
  any console error or warning or any horizontal overflow.

## Layout

```
site/
  index.html              the page: header, tab bar, three empty panels, footer
  app.js                  tab list, tab bar, hash routing, language and theme shell
  assets/router.js        parse and write the hash (pure, tested)
  assets/site.js          language and theme
  assets/site.css         shared tokens and layout
  assets/ui.js            small DOM helpers
  css/agri.css            cards, term tables, sketches, SVG colours
  data/glossary.js        the 19 tools and 4 categories
  data/techniques.js      the 8 techniques
  data/sketches.js        the 3 large sketches (titles, legends, texts)
  data/sources.js         every source, by id
  drawings/tools.js       one hand-drawn SVG per tool
  drawings/techniques.js  one hand-drawn SVG per technique
  drawings/sketches.js    the three large drawings
  tabs/glossary.js        renders the glossary
  tabs/techniques.js      renders the techniques
  tabs/sketches.js        renders the sketches
  tabs/common.js          source numbering, citations, term block, source list
deploy/default.conf.template   nginx config
tests/                    node:test unit tests
scripts/e2e.mjs           browser checks
```

## Deploy

Published at <https://agri.divergences.xyz/>: every push to `main` publishes
`site/` on GitHub Pages (`.github/workflows/publish.yml`, no build step).

The repository is local for now. To deploy, the owner:

1. creates the GitHub repository `outils-agri`;
2. adds it as a remote and pushes `main`;
3. in **Settings > Pages**, sets **Source** to *GitHub Actions* and the
   custom domain to `agri.divergences.xyz` (the workflow’s comment and the
   `CNAME`-less Pages setting carry the domain);
4. adds the DNS record at the registrar.

The Docker image is an alternative: nginx with a strict content security
policy (`deploy/default.conf.template`), listening on `$PORT` (default 8080).

## Sources and respect

Texts and drawings are original; no external images are used. Facts come from
the documents listed at the bottom of each tab: French and German Wikipedia
pages, the AFNOR catalogue entry for EN 14267 (irrigation hydrants), and one
trade article on decompactors. Numbers were copied as published (50 cm for
subsoiling, 25–45 cm for a decompactor, 1–5 cm and three to four weeks for a
stale seedbed, 40–45 °C then 60–70 °C for compost, one bar and up to 30% water
saving for drip irrigation).

German and English equivalents marked with `?`:

- **Décompacteur** — DE `Untergrundlockerer` (the German name covers the whole
  deep-loosening family; check against the machine).
- **Fissurateur** — DE `Fissurator` and EN `soil fissurer` (neither is a
  settled standard term; manufacturers also say *soil loosener*).
- **Grelinette** — DE `Breitgabel` (standard for broadfork, but not confirmed
  in a German agricultural source; `Grabgabel` is given as an alternative).
- **Gyrobroyeur** — DE `Schlegelmäher` (usual trade name; the German Wikipedia
  page does not exist under that title).
- **Faux semis** — DE `Falsches Saatbett` (descriptive translation; check
  regional usage).

The râteau card points out that **Harke** and **Rechen** are synonyms in
German. The grelinette is written once and shown in two categories.

Colours are checked for contrast in both themes; the SVG palette (steel,
wood, leaf, soil, water) has dark-theme variants.

## Licence and credits

Code: MIT, see [LICENSE](LICENSE). Text, data and our own drawings:
[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), unless
stated otherwise. No third-party image is included.

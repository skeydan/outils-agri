// Tab « Esquisses thématiques » : three large drawings, each with a numbered
// legend and a text that names the visible tools. Data in data/sketches.js.

import { SKETCHES, SKETCH_SOURCE_ORDER } from '../data/sketches.js';
import { SKETCH_DRAWINGS } from '../drawings/sketches.js';
import { h } from '../assets/ui.js';
import { lang, onLangChange } from '../assets/site.js';
import { sourceNumbers, citeHtml, sourceList } from './common.js';

export const STR = {
  's.title': { en: 'Thematic sketches', fr: 'Esquisses thématiques' },
  's.lead': {
    en: 'Three drawings showing a process from start to finish, with the tools that take part in it. The numbered legend under each drawing names them.',
    fr: 'Trois dessins qui montrent un processus de bout en bout, avec les outils qui y participent. La légende numérotée sous chaque dessin les nomme.',
  },
  's.legend': { en: 'In the drawing', fr: 'Dans le dessin' },
  's.sources': { en: 'Sources of this tab', fr: 'Sources de cet onglet' },
};

const t = (k) => STR[k]?.[lang()] ?? STR[k]?.en ?? k;
const nums = sourceNumbers(SKETCH_SOURCE_ORDER, 'esquisses');

let root = null;

function sketch(s) {
  const fig = h('figure', { class: 'sketch' });
  const art = h('div', { class: 'sketch-art' });
  art.innerHTML = SKETCH_DRAWINGS[s.drawing] ?? '';
  fig.append(
    h('h2', { id: `sk-${s.id}` }, s.title[lang()] ?? s.title.fr),
    h('p', { class: 'lead small' }, s.lead[lang()] ?? s.lead.fr),
    art,
  );
  const legend = h('ol', { class: 'sketch-legend', 'aria-label': t('s.legend') });
  for (const item of s.legend) {
    legend.append(h('li', {},
      h('span', { class: 'legend-n' }, String(item.n)),
      h('strong', {}, item.term),
      ' — ',
      h('span', { class: 'muted' }, item.note[lang()] ?? item.note.fr)));
  }
  fig.append(legend);
  const text = h('div', { class: 'sketch-text' });
  for (const para of (s.body[lang()] ?? s.body.fr)) {
    const p = h('p');
    p.innerHTML = citeHtml(para, nums);
    text.append(p);
  }
  fig.append(text);
  return fig;
}

function render() {
  if (!root) return;
  const wrap = document.createDocumentFragment();
  wrap.append(
    h('h1', { text: t('s.title') }),
    h('p', { class: 'lead', text: t('s.lead') }),
  );
  for (const s of SKETCHES) wrap.append(sketch(s));
  wrap.append(sourceList(SKETCH_SOURCE_ORDER, lang(), t('s.sources'), 'esquisses'));
  root.replaceChildren(...wrap.childNodes);
}

export function init() {
  root = document.getElementById('sketches-root');
  onLangChange(render);
  render();
}

export function show() {}

export function title() {
  return t('s.title');
}

// Tab « Esquisses thématiques » : large drawings, each with a numbered legend
// and a text that names the visible tools. Data in data/sketches.js. A legend
// term is either a plain string (older sketches) or {fr, de, en}.

import { SKETCHES, SKETCH_SOURCE_ORDER } from '../data/sketches.js';
import { SKETCH_DRAWINGS } from '../drawings/sketches.js';
import { h } from '../assets/ui.js';
import { lang, onLangChange } from '../assets/site.js';
import { sourceNumbers, citeHtml, sourceList } from './common.js';

export const STR = {
  's.title': { en: 'Thematic sketches', fr: 'Esquisses thématiques', de: 'Thematische Skizzen' },
  's.lead': {
    en: 'Twelve drawings showing a process, a machine or a technique in context, with the tools that take part in it. The numbered legend under each drawing names them.',
    fr: 'Douze dessins qui montrent un processus, une machine ou une technique en contexte, avec les outils qui y participent. La légende numérotée sous chaque dessin les nomme.',
    de: 'Zwölf Zeichnungen, die einen Ablauf, eine Maschine oder eine Technik im Zusammenhang zeigen, mit den beteiligten Geräten. Die nummerierte Legende unter jeder Zeichnung benennt sie.',
  },
  's.legend': { en: 'In the drawing', fr: 'Dans le dessin', de: 'Im Bild' },
  's.sources': { en: 'Sources of this tab', fr: 'Sources de cet onglet', de: 'Quellen dieses Tabs' },
};

const t = (k) => STR[k]?.[lang()] ?? STR[k]?.en ?? k;
const label = (v) => (typeof v === 'string' ? v : v?.[lang()] ?? v?.fr ?? '');
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
      h('strong', {}, label(item.term)),
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

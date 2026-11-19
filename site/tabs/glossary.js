// Tab « Outils et machines » : the glossary, grouped by category. Data lives
// in data/glossary.js (entries) and drawings/tools.js (sketches); this module
// only renders, so adding an entry never touches the code.

import { CATEGORIES, ENTRIES, SOURCE_ORDER } from '../data/glossary.js';
import { TOOL_DRAWINGS } from '../drawings/tools.js';
import { h } from '../assets/ui.js';
import { lang, onLangChange } from '../assets/site.js';
import { sourceNumbers, citeHtml, termBlock, sourceList, entrySources } from './common.js';

export const STR = {
  'g.title': { en: 'Farm tools and machines', fr: 'Outils et machines agricoles' },
  'g.lead': {
    en: 'A glossary of tools, machines and water equipment, grouped by use. Each entry has a hand-drawn sketch, a plain explanation, and the French, German and English terms.',
    fr: 'Un glossaire des outils, machines et équipements d’eau, classés par usage. Chaque entrée a un croquis dessiné à la main, une explication simple, et les termes français, allemand et anglais.',
  },
  'g.count': { en: 'entries', fr: 'entrées' },
  'g.entry': { en: 'entry', fr: 'entrée' },
  'g.source': { en: 'Source', fr: 'Source' },
  'g.sources': { en: 'Sources of this tab', fr: 'Sources de cet onglet' },
  'g.unsure': {
    en: 'Equivalent to be checked',
    fr: 'Équivalent à vérifier',
  },
  'g.unsureNote': {
    en: 'A “?” marks a German or English term that still needs checking with a native speaker or a machine manual.',
    fr: 'Un « ? » signale un terme allemand ou anglais qui reste à vérifier auprès d’un locuteur ou d’un manuel de machine.',
  },
  'g.also': { en: 'Also', fr: 'Aussi' },
  'g.note': { en: 'Note', fr: 'À noter' },
};

const t = (k) => STR[k]?.[lang()] ?? STR[k]?.en ?? k;
const nums = sourceNumbers(SOURCE_ORDER, 'outils');

let root = null;

function card(entry, catId) {
  const art = h('figure', { class: 'entry-art' });
  art.innerHTML = TOOL_DRAWINGS[entry.drawing] ?? '';
  const body = entry.body[lang()] ?? entry.body.fr;
  const el = h('article', { class: 'card entry', id: `e-${catId}-${entry.id}` },
    art,
    h('h3', {}, entry.term.fr),
    termBlock(entry, lang(), { unsure: t('g.unsure') }),
    h('p', { class: 'entry-body' }),
  );
  el.querySelector('.entry-body').innerHTML = citeHtml(body, nums);
  if (entry.note) {
    el.append(h('p', { class: 'note' }, `${t('g.note')} : ${entry.note[lang()] ?? entry.note.fr}`));
  }
  el.append(entrySources(entry.sources, nums, t('g.source')));
  return el;
}

function render() {
  if (!root) return;
  const wrap = document.createDocumentFragment();
  wrap.append(
    h('h1', { text: t('g.title') }),
    h('p', { class: 'lead', text: t('g.lead') }),
    h('p', { class: 'small muted', text: t('g.unsureNote') }),
  );
  for (const cat of CATEGORIES) {
    const entries = ENTRIES.filter((e) => e.categories.includes(cat.id));
    if (!entries.length) continue;
    const sec = h('section', { class: 'category', 'aria-labelledby': `cat-${cat.id}` });
    sec.append(
      h('div', { class: 'category-head' },
        h('h2', { id: `cat-${cat.id}` }, cat.title[lang()] ?? cat.title.fr),
        h('span', { class: 'count' }, `${entries.length} ${entries.length === 1 ? t('g.entry') : t('g.count')}`)),
      h('div', { class: 'cards' }, ...entries.map((e) => card(e, cat.id))),
    );
    wrap.append(sec);
  }
  wrap.append(sourceList(SOURCE_ORDER, lang(), t('g.sources'), 'outils'));
  root.replaceChildren(...wrap.childNodes);
}

export function init() {
  root = document.getElementById('glossary-root');
  onLangChange(render);
  render();
}

export function show() {}

export function title() {
  return t('g.title');
}

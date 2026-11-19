// Tab « Techniques » : one card per technique, from data/techniques.js.
// Same rendering pattern as the glossary.

import { TECHNIQUES, TECH_SOURCE_ORDER } from '../data/techniques.js';
import { TECHNIQUE_DRAWINGS } from '../drawings/techniques.js';
import { h } from '../assets/ui.js';
import { lang, onLangChange } from '../assets/site.js';
import { sourceNumbers, citeHtml, termBlock, sourceList, entrySources } from './common.js';

export const STR = {
  't.title': { en: 'Techniques', fr: 'Techniques' },
  't.lead': {
    en: 'What each operation does to the soil, when it is used, and what it changes. The terms are given in French, German and English.',
    fr: 'Ce que chaque opération fait au sol, quand on l’utilise et ce qu’elle change. Les termes sont donnés en français, en allemand et en anglais.',
  },
  't.count': { en: 'techniques', fr: 'techniques' },
  't.source': { en: 'Source', fr: 'Source' },
  't.sources': { en: 'Sources of this tab', fr: 'Sources de cet onglet' },
  't.unsure': { en: 'Equivalent to be checked', fr: 'Équivalent à vérifier' },
  't.note': { en: 'Note', fr: 'À noter' },
};

const t = (k) => STR[k]?.[lang()] ?? STR[k]?.en ?? k;
const nums = sourceNumbers(TECH_SOURCE_ORDER, 'techniques');

let root = null;

function card(entry) {
  const art = h('figure', { class: 'entry-art' });
  art.innerHTML = TECHNIQUE_DRAWINGS[entry.drawing] ?? '';
  const body = entry.body[lang()] ?? entry.body.fr;
  const el = h('article', { class: 'card entry', id: `tech-${entry.id}` },
    art,
    h('h2', {}, entry.term.fr),
    termBlock(entry, lang(), { unsure: t('t.unsure') }),
    h('p', { class: 'entry-body' }),
  );
  el.querySelector('.entry-body').innerHTML = citeHtml(body, nums);
  if (entry.note) {
    el.append(h('p', { class: 'note' }, `${t('t.note')} : ${entry.note[lang()] ?? entry.note.fr}`));
  }
  el.append(entrySources(entry.sources, nums, t('t.source')));
  return el;
}

function render() {
  if (!root) return;
  const wrap = document.createDocumentFragment();
  wrap.append(
    h('h1', { text: t('t.title') }),
    h('p', { class: 'lead', text: t('t.lead') }),
  );
  wrap.append(h('section', { class: 'category', 'aria-label': t('t.title') },
    h('div', { class: 'category-head' }, h('span', { class: 'count' }, `${TECHNIQUES.length} ${t('t.count')}`)),
    h('div', { class: 'cards' }, ...TECHNIQUES.map(card))));
  wrap.append(sourceList(TECH_SOURCE_ORDER, lang(), t('t.sources'), 'techniques'));
  root.replaceChildren(...wrap.childNodes);
}

export function init() {
  root = document.getElementById('techniques-root');
  onLangChange(render);
  render();
}

export function show() {}

export function title() {
  return t('t.title');
}

// Tab « Engrais verts » : one card per plant, from data/engraisverts.js.
// Same rendering pattern as the glossary, with a small agronomic portrait
// (C/N, nitrogen, sowing) and the chemistry that drives the cover.

import { PLANTS, SERVICES, EV_SOURCE_ORDER } from '../data/engraisverts.js';
import { GREEN_MANURE_DRAWINGS } from '../drawings/engraisverts.js';
import { h } from '../assets/ui.js';
import { lang, onLangChange } from '../assets/site.js';
import { sourceNumbers, citeHtml, termBlock, sourceList, entrySources } from './common.js';

export const STR = {
  'ev.title': { en: 'Green manures', fr: 'Engrais verts', de: 'Gründüngung' },
  'ev.lead': {
    en: 'Twelve cover crops and service plants: what each one does in the soil, its C/N ratio, its nitrogen, and when to sow it. The terms are given in French, German and English.',
    fr: 'Douze engrais verts et plantes de service : ce que chacun fait au sol, son rapport C/N, son azote et quand le semer. Les termes sont donnés en français, en allemand et en anglais.',
    de: 'Zwölf Gründüngungspflanzen: ihre Wirkung im Boden, ihr C/N-Verhältnis, ihr Stickstoff und der Aussaattermin.',
  },
  'ev.note': {
    en: 'The sunflower (Helianthus annuus) and the Jerusalem artichoke (Helianthus tuberosus) are two distinct species of the same genus: the first is the annual seed crop, the second the perennial tuber crop.',
    fr: 'Le tournesol (Helianthus annuus) et le topinambour (Helianthus tuberosus) sont deux espèces distinctes du même genre : le premier est l’annuel à graines, le second le vivace à tubercules.',
    de: 'Die Sonnenblume (Helianthus annuus) und die Topinambur (Helianthus tuberosus) sind zwei verschiedene Arten derselben Gattung: die erste ist einjährig, die zweite mehrjährig mit Knollen.',
  },
  'ev.count': { en: 'plants', fr: 'plantes', de: 'Pflanzen' },
  'ev.family': { en: 'Family', fr: 'Famille', de: 'Familie' },
  'ev.cn': { en: 'C/N', fr: 'C/N', de: 'C/N' },
  'ev.nitrogen': { en: 'Nitrogen', fr: 'Azote', de: 'Stickstoff' },
  'ev.sowing': { en: 'Sowing / planting', fr: 'Semis / plantation', de: 'Aussaat / Pflanzung' },
  'ev.services': { en: 'Services', fr: 'Services', de: 'Leistungen' },
  'ev.character': { en: 'Portrait', fr: 'Portrait', de: 'Porträt' },
  'ev.chemistry': { en: 'Chemistry', fr: 'Chimie', de: 'Chemie' },
  'ev.source': { en: 'Source', fr: 'Source', de: 'Quelle' },
  'ev.sources': { en: 'Sources of this tab', fr: 'Sources de cet onglet', de: 'Quellen dieses Tabs' },
  'ev.unsure': { en: 'Equivalent to be checked', fr: 'Équivalent à vérifier', de: 'Zu prüfende Entsprechung' },
  'ev.noteLabel': { en: 'Note', fr: 'À noter', de: 'Hinweis' },
};

const t = (k) => STR[k]?.[lang()] ?? STR[k]?.en ?? k;
const nums = sourceNumbers(EV_SOURCE_ORDER, 'engraisverts');
const serviceById = new Map(SERVICES.map((s) => [s.id, s]));

let root = null;

function facts(plant) {
  const dl = h('dl', { class: 'ev-facts' });
  const row = (label, value) => {
    if (!value) return;
    dl.append(h('dt', {}, label), h('dd', {}, value));
  };
  row(t('ev.family'), plant.family[lang()] ?? plant.family.fr);
  row(t('ev.cn'), plant.cn);
  row(t('ev.nitrogen'), plant.nitrogen[lang()] ?? plant.nitrogen.fr);
  row(t('ev.sowing'), plant.sowing[lang()] ?? plant.sowing.fr);
  return dl;
}

function serviceList(ids) {
  const ul = h('ul', { class: 'ev-services', 'aria-label': t('ev.services') });
  for (const id of ids) {
    const s = serviceById.get(id);
    if (s) ul.append(h('li', {}, s.label[lang()] ?? s.label.en));
  }
  return ul;
}

function card(plant) {
  const art = h('figure', { class: 'entry-art' });
  art.innerHTML = GREEN_MANURE_DRAWINGS[plant.drawing] ?? '';
  const el = h('article', { class: 'card entry ev-entry', id: `ev-${plant.id}` },
    art,
    h('h2', {}, plant.term.fr),
    h('p', { class: 'scientific' }, plant.scientific),
    termBlock(plant, lang(), { unsure: t('ev.unsure') }),
    serviceList(plant.services),
    facts(plant),
    h('p', { class: 'character' }, plant.character[lang()] ?? plant.character.fr),
    h('h3', { class: 'chem-h' }, t('ev.chemistry')),
    h('p', { class: 'chem' }),
  );
  el.querySelector('.chem').innerHTML = citeHtml(plant.chemistry[lang()] ?? plant.chemistry.fr, nums);
  if (plant.note) {
    el.append(h('p', { class: 'note' }, `${t('ev.noteLabel')} : ${plant.note[lang()] ?? plant.note.fr}`));
  }
  el.append(entrySources(plant.sources, nums, t('ev.source')));
  return el;
}

function render() {
  if (!root) return;
  const wrap = document.createDocumentFragment();
  wrap.append(
    h('h1', { text: t('ev.title') }),
    h('p', { class: 'lead', text: t('ev.lead') }),
    h('p', { class: 'small muted', text: t('ev.note') }),
  );
  wrap.append(h('section', { class: 'category', 'aria-label': t('ev.title') },
    h('div', { class: 'category-head' },
      h('span', { class: 'count' }, `${PLANTS.length} ${t('ev.count')}`)),
    h('div', { class: 'cards ev-cards' }, ...PLANTS.map(card))));
  wrap.append(sourceList(EV_SOURCE_ORDER, lang(), t('ev.sources'), 'engraisverts'));
  root.replaceChildren(...wrap.childNodes);
}

export function init() {
  root = document.getElementById('engraisverts-root');
  onLangChange(render);
  render();
}

export function show() {}

export function title() {
  return t('ev.title');
}

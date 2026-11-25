// The single page: language and theme shell, the tab bar and hash routing.
//
// To add a tab: add an entry to TABS (id, label, sections, module), a
// <div class="tab-panel" data-tab-panel="<id>"> in index.html with one
// [data-section-panel] element per section, and a module exporting
//   STR                      its strings {key: {en, fr}} (prefix the keys)
//   init({ setParams })      once, after the shell has picked the language
//   show(section, params)    each time the route enters or changes in the tab
//   title(section)           optional, the document title for a section

import { initShell, lang, onLangChange } from './assets/site.js';
import { parseHash, formatHash, resolveRoute } from './assets/router.js';
import * as glossary from './tabs/glossary.js';
import * as techniques from './tabs/techniques.js';
import * as engraisverts from './tabs/engraisverts.js';
import * as sketches from './tabs/sketches.js';

const TABS = [
  { id: 'outils', label: { en: 'Tools & machines', fr: 'Outils et machines' }, sections: ['main'], module: glossary },
  { id: 'techniques', label: { en: 'Techniques', fr: 'Techniques' }, sections: ['main'], module: techniques },
  {
    id: 'engraisverts',
    label: { en: 'Green manures', fr: 'Engrais verts', de: 'Gründüngung' },
    sections: ['main'],
    module: engraisverts,
  },
  { id: 'esquisses', label: { en: 'Thematic sketches', fr: 'Esquisses thématiques' }, sections: ['main'], module: sketches },
];

const SHELL_STR = {
  'shell.home': { en: 'outils-agri', fr: 'outils-agri' },
  'shell.tabs': { en: 'Tabs', fr: 'Onglets' },
  footer: {
    en: 'Independent personal project, no tracking. Texts and drawings are original; facts come from the sources listed at the bottom of each tab; language and theme are kept in the browser, nothing else.',
    fr: 'Projet personnel indépendant, sans pistage. Textes et dessins originaux ; les faits viennent des sources citées en bas de chaque onglet ; la langue et le thème sont enregistrés dans le navigateur, rien d’autre.',
  },
};

let current = null; // { tab, section, params }

// ---------------------------------------------------------------- tab bar
function buildTabs() {
  const nav = document.getElementById('tabs');
  nav.replaceChildren(...TABS.map((t) => {
    const a = document.createElement('a');
    a.href = formatHash({ tab: t.id });
    a.dataset.tab = t.id;
    a.textContent = t.label[lang()] ?? t.label.en;
    if (current?.tab === t.id) a.setAttribute('aria-current', 'page');
    return a;
  }));
}

// ---------------------------------------------------------------- routing
function show(route, { scroll = false } = {}) {
  const prev = current;
  current = route;
  const tab = TABS.find((t) => t.id === route.tab);
  document.querySelectorAll('[data-tab-panel]').forEach((p) => { p.hidden = p.dataset.tabPanel !== route.tab; });
  const panel = document.querySelector(`[data-tab-panel="${route.tab}"]`);
  panel.querySelectorAll('[data-section-panel]').forEach((p) => { p.hidden = p.dataset.sectionPanel !== route.section; });
  document.querySelectorAll('#tabs a').forEach((a) => {
    if (a.dataset.tab === route.tab) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  tab.module.show(route.section, route.params);
  setTitle();
  document.documentElement.dataset.route = `${route.tab}/${route.section}`; // for the browser checks
  const moved = !prev || prev.tab !== route.tab || prev.section !== route.section;
  if (scroll && moved) window.scrollTo(0, 0);
}

function setTitle() {
  const tab = TABS.find((t) => t.id === current.tab);
  const name = tab.module.title?.(current.section) ?? tab.label[lang()] ?? tab.label.en;
  document.title = `${name} · outils-agri`;
}

window.addEventListener('hashchange', () => {
  const route = resolveRoute(parseHash(location.hash), TABS);
  if (route) show(route, { scroll: true });
});

// Citations ("[3]") jump to the source list without touching the route.
document.addEventListener('click', (e) => {
  const a = e.target.closest?.('a[href^="#src-"]');
  if (!a) return;
  const target = document.getElementById(a.getAttribute('href').slice(1));
  if (!target) return;
  e.preventDefault();
  document.querySelectorAll('.is-target').forEach((n) => n.classList.remove('is-target'));
  target.classList.add('is-target');
  target.scrollIntoView({ block: 'center' });
});

// ---------------------------------------------------------------- start
const dict = { ...SHELL_STR };
for (const t of TABS) Object.assign(dict, t.module.STR);
initShell(dict);

/** Write the parameters of the current view in the URL, without a history entry. */
function setParams(tabId, params) {
  if (!current || current.tab !== tabId) return;
  current = { ...current, params };
  history.replaceState(null, '', formatHash({ tab: tabId, params }));
}

for (const t of TABS) t.module.init({ setParams: (params) => setParams(t.id, params) });
onLangChange(() => { buildTabs(); if (current) setTitle(); });
show(resolveRoute(parseHash(location.hash), TABS, { fallback: true }));
// The first load gets an explicit hash, so the default view can be shared.
{
  const first = TABS.find((t) => t.id === current.tab).sections[0];
  history.replaceState(null, '', formatHash({ tab: current.tab, section: current.section === first ? null : current.section }));
}
buildTabs();

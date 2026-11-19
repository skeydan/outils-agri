// Shared rendering helpers for the three tabs: source numbering, citation
// links, the FR–DE–EN term block and the source list at the bottom.

import { SOURCES } from '../data/sources.js';
import { h } from '../assets/ui.js';

/** Number a tab's sources from 1 and allow lookups in both directions. */
export function sourceNumbers(order, prefix) {
  const byId = new Map();
  const byNum = new Map();
  order.forEach((id, i) => { byId.set(id, i + 1); byNum.set(i + 1, id); });
  return { byId, byNum, prefix };
}

/** Replace [n] and [n, m] in our own trusted texts with links to #src-… . */
export function citeHtml(text, nums) {
  return String(text).replace(/\[([\d\s,]+)\]/g, (whole, inner) => {
    const parts = inner.split(',').map((s) => s.trim()).filter(Boolean);
    const links = parts.map((n) => {
      const id = nums.byNum.get(Number(n));
      return id ? `<a class="src" href="#src-${nums.prefix}-${id}">${n}</a>` : n;
    });
    return `[${links.join(', ')}]`;
  });
}

/** The FR / DE / EN line of an entry, with « ? » on terms still to check. */
export function termBlock(entry, lang, labels) {
  const dl = h('dl', { class: 'terms' });
  for (const code of ['fr', 'de', 'en']) {
    const dd = h('dd', { lang: code });
    dd.append(entry.term[code]);
    const alts = entry.alt?.[code];
    if (alts) dd.append(h('span', { class: 'alt' }, ` · ${alts}`));
    if (entry.unsure?.includes(code)) {
      const q = h('span', {
        class: 'unsure',
        title: labels.unsure,
        'aria-label': labels.unsure,
      }, '?');
      dd.append(q);
    }
    dl.append(h('div', { class: 'term' }, h('dt', {}, code.toUpperCase()), dd));
  }
  return dl;
}

/** The numbered source list of a tab. */
export function sourceList(order, lang, heading, prefix) {
  const wrap = h('section', { class: 'sources card', id: `sources-${prefix}`, 'aria-labelledby': `sources-h-${prefix}` });
  wrap.append(h('h2', { id: `sources-h-${prefix}` }, heading));
  const ol = h('ol');
  order.forEach((id, i) => {
    const s = SOURCES[id];
    if (!s) return;
    const li = h('li', { id: `src-${prefix}-${id}` },
      h('span', { class: 'src-n' }, `[${i + 1}] `),
      h('a', { href: s.url, rel: 'noopener' }, s.title));
    if (s.note) li.append(' — ', h('span', { class: 'muted' }, s.note));
    ol.append(li);
  });
  wrap.append(ol);
  return wrap;
}

/** A short "Source: [1], [2]" line under an entry. */
export function entrySources(ids, nums, label) {
  const p = h('p', { class: 'entry-src small muted' }, `${label} `);
  ids.forEach((id, i) => {
    const n = nums.byId.get(id);
    if (!n) return;
    if (i) p.append(', ');
    p.append(h('a', { class: 'src', href: `#src-${nums.prefix}-${id}` }, `[${n}]`));
  });
  return p;
}

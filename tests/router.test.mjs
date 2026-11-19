// Hash routing of the single page (site/assets/router.js), with the tabs of
// outils-agri.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseHash, formatHash, resolveRoute } from '../site/assets/router.js';

const TABS = [
  { id: 'outils', sections: ['main'] },
  { id: 'techniques', sections: ['main'] },
  { id: 'esquisses', sections: ['main'] },
];

test('parse: tab, section and parameters', () => {
  assert.deepEqual(parseHash('#outils'), { tab: 'outils', section: null, params: {} });
  assert.deepEqual(parseHash('#techniques/main'), { tab: 'techniques', section: 'main', params: {} });
  assert.deepEqual(parseHash('#outils?q=sol'), { tab: 'outils', section: null, params: { q: 'sol' } });
});

test('parse: empty hash, odd input and citation hashes', () => {
  assert.deepEqual(parseHash(''), { tab: null, section: null, params: {} });
  assert.equal(parseHash('#src-wiki-grelinette').tab, 'src-wiki-grelinette');
  assert.equal(parseHash('#Outils/<b>').tab, null);
  assert.equal(parseHash('#outils?note=a%20b').params.note, 'a b');
});

test('format: default section left out, parameters encoded', () => {
  assert.equal(formatHash({ tab: 'outils' }), '#outils');
  assert.equal(formatHash({ tab: 'outils', section: 'main' }), '#outils/main');
  assert.equal(formatHash({ tab: 'outils', params: { note: 'a&b' } }), '#outils?note=a%26b');
});

test('format and parse round-trip', () => {
  for (const r of [
    { tab: 'outils', section: null, params: {} },
    { tab: 'esquisses', section: 'main', params: {} },
    { tab: 'techniques', section: null, params: { q: 'eau' } },
  ]) assert.deepEqual(parseHash(formatHash(r)), r);
});

test('resolve: defaults and fallbacks', () => {
  const r = (h, o) => resolveRoute(parseHash(h), TABS, o);
  assert.deepEqual(r('#outils'), { tab: 'outils', section: 'main', params: {} });
  assert.deepEqual(r('#techniques'), { tab: 'techniques', section: 'main', params: {} });
  assert.deepEqual(r('#esquisses/nope'), { tab: 'esquisses', section: 'main', params: {} });
  // Not a route (a citation): keep the current view.
  assert.equal(r('#src-wiki-nappe'), null);
  assert.equal(r(''), null);
  // ...except on first load, which falls back to the first tab.
  assert.deepEqual(r('', { fallback: true }), { tab: 'outils', section: 'main', params: {} });
  assert.deepEqual(r('#water', { fallback: true }), { tab: 'outils', section: 'main', params: {} });
});

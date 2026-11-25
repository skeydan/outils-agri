// The glossary data: every entry must be complete (three terms, a drawing,
// an explanation in both languages, at least one listed source), ids unique,
// categories known, and the sources listed at the bottom all cited.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ENTRIES, CATEGORIES, SOURCE_ORDER } from '../site/data/glossary.js';
import { SOURCES } from '../site/data/sources.js';
import { TOOL_DRAWINGS } from '../site/drawings/tools.js';

const categoryIds = new Set(CATEGORIES.map((c) => c.id));
const listed = new Set(SOURCE_ORDER);

test('every entry has its three terms', () => {
  for (const e of ENTRIES) {
    for (const code of ['fr', 'de', 'en']) {
      assert.equal(typeof e.term?.[code], 'string', `${e.id}: term.${code}`);
      assert.ok(e.term[code].trim().length > 0, `${e.id}: term.${code} is empty`);
    }
  }
});

test('every entry has an explanation in French and English', () => {
  for (const e of ENTRIES) {
    for (const code of ['fr', 'en']) {
      assert.equal(typeof e.body?.[code], 'string', `${e.id}: body.${code}`);
      assert.ok(e.body[code].trim().length > 40, `${e.id}: body.${code} too short`);
    }
  }
});

test('every entry has a source, and it is listed at the bottom', () => {
  for (const e of ENTRIES) {
    assert.ok(Array.isArray(e.sources) && e.sources.length > 0, `${e.id}: no source`);
    for (const id of e.sources) {
      assert.ok(SOURCES[id], `${e.id}: unknown source ${id}`);
      assert.ok(listed.has(id), `${e.id}: source ${id} missing from SOURCE_ORDER`);
    }
  }
});

test('every listed source is cited by at least one entry', () => {
  const cited = new Set(ENTRIES.flatMap((e) => e.sources));
  for (const id of SOURCE_ORDER) {
    assert.ok(SOURCES[id], `SOURCES.${id} is missing`);
    assert.ok(cited.has(id), `source ${id} is listed but never cited`);
    assert.match(SOURCES[id].url, /^https:\/\//, `${id}: https only`);
  }
});

test('ids are unique and categories known', () => {
  const ids = new Set();
  for (const e of ENTRIES) {
    assert.ok(!ids.has(e.id), `duplicate id ${e.id}`);
    ids.add(e.id);
    assert.ok(Array.isArray(e.categories) && e.categories.length > 0, `${e.id}: no category`);
    for (const c of e.categories) assert.ok(categoryIds.has(c), `${e.id}: unknown category ${c}`);
    for (const code of e.unsure ?? []) assert.ok(['fr', 'de', 'en'].includes(code), `${e.id}: bad unsure field ${code}`);
  }
});

test('every entry has a hand-drawn SVG', () => {
  for (const e of ENTRIES) {
    const svg = TOOL_DRAWINGS[e.drawing];
    assert.equal(typeof svg, 'string', `${e.id}: no drawing for ${e.drawing}`);
    assert.match(svg, /^<svg[\s>]/, `${e.id}: drawing is not an SVG`);
  }
});

test('the four categories have the expected entries', () => {
  const count = (id) => ENTRIES.filter((e) => e.categories.includes(id)).length;
  assert.equal(count('sol'), 7);
  assert.equal(count('broyage'), 3);
  assert.equal(count('main'), 8);
  assert.equal(count('eau'), 5);
  // The grelinette and the bêche are each both a soil tool and a hand tool, written once.
  const grelinette = ENTRIES.filter((e) => e.id === 'grelinette');
  assert.equal(grelinette.length, 1);
  assert.deepEqual(grelinette[0].categories.sort(), ['main', 'sol']);
  const beche = ENTRIES.filter((e) => e.id === 'beche');
  assert.equal(beche.length, 1);
  assert.deepEqual(beche[0].categories.sort(), ['main', 'sol']);
});

// The techniques data and the thematic sketches: same completeness
// rules, plus every [n] citation in a sketch text must point to a source
// number that exists in the tab's list.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TECHNIQUES, TECH_SOURCE_ORDER } from '../site/data/techniques.js';
import { SKETCHES, SKETCH_SOURCE_ORDER } from '../site/data/sketches.js';
import { SOURCES } from '../site/data/sources.js';
import { TECHNIQUE_DRAWINGS } from '../site/drawings/techniques.js';
import { SKETCH_DRAWINGS } from '../site/drawings/sketches.js';

test('every technique has three terms, both explanations and a source', () => {
  const ids = new Set();
  for (const e of TECHNIQUES) {
    assert.ok(!ids.has(e.id), `duplicate technique ${e.id}`);
    ids.add(e.id);
    for (const code of ['fr', 'de', 'en']) assert.ok(e.term?.[code]?.trim(), `${e.id}: term.${code}`);
    for (const code of ['fr', 'en']) assert.ok(e.body?.[code]?.trim().length > 40, `${e.id}: body.${code}`);
    assert.ok(e.sources?.length > 0, `${e.id}: no source`);
    for (const id of e.sources) {
      assert.ok(SOURCES[id], `${e.id}: unknown source ${id}`);
      assert.ok(TECH_SOURCE_ORDER.includes(id), `${e.id}: ${id} missing from TECH_SOURCE_ORDER`);
    }
    assert.match(TECHNIQUE_DRAWINGS[e.drawing] ?? '', /^<svg[\s>]/, `${e.id}: drawing`);
  }
  assert.equal(TECHNIQUES.length, 8);
});

test('techniques: listed sources all exist and are cited', () => {
  const cited = new Set(TECHNIQUES.flatMap((e) => e.sources));
  for (const id of TECH_SOURCE_ORDER) {
    assert.ok(SOURCES[id], `SOURCES.${id} missing`);
    assert.ok(cited.has(id), `source ${id} listed but never cited`);
  }
});

test('every sketch has a drawing, a legend, a text and sources', () => {
  assert.ok(SKETCHES.length >= 12 && SKETCHES.length <= 24, `${SKETCHES.length} sketches`);
  for (const s of SKETCHES) {
    assert.match(SKETCH_DRAWINGS[s.drawing] ?? '', /^<svg[\s>]/, `${s.id}: drawing`);
    assert.ok(s.title.fr && s.title.en, `${s.id}: title`);
    assert.ok(s.lead.fr && s.lead.en, `${s.id}: lead`);
    assert.ok(Array.isArray(s.legend) && s.legend.length >= 3, `${s.id}: legend`);
    const numbers = s.legend.map((l) => l.n);
    assert.deepEqual(numbers, numbers.map((_, i) => i + 1), `${s.id}: legend numbered 1..n`);
    for (const l of s.legend) {
      const okTerm = typeof l.term === 'string'
        ? l.term.trim().length > 0
        : ['fr', 'de', 'en'].every((c) => l.term?.[c]?.trim());
      assert.ok(okTerm, `${s.id}: legend item ${l.n} term`);
      assert.ok(l.note?.fr && l.note?.en, `${s.id}: legend item ${l.n}`);
    }
    for (const code of ['fr', 'en']) {
      assert.ok(Array.isArray(s.body[code]) && s.body[code].length >= 2, `${s.id}: body.${code}`);
    }
    assert.ok(s.sources.length > 0, `${s.id}: no source`);
    for (const id of s.sources) assert.ok(SKETCH_SOURCE_ORDER.includes(id), `${s.id}: ${id} not in list`);
  }
});

test('the scene sketches are present and labelled in French, German and English', () => {
  const byId = new Map(SKETCHES.map((s) => [s.id, s]));
  const scenes = [
    'scene-sous-soleuse',
    'scene-decompacteur',
    'scene-broyeur',
    'scene-rotavator',
    'scene-goutte-bulbe',
    'scene-labour',
    'scene-compost',
    'scene-sous-solage',
    'cycle-couvert',
  ];
  for (const id of scenes) {
    const s = byId.get(id);
    assert.ok(s, `missing sketch ${id}`);
    for (const code of ['fr', 'de', 'en']) {
      assert.ok(s.title?.[code]?.trim(), `${id}: title.${code}`);
      assert.ok(s.lead?.[code]?.trim(), `${id}: lead.${code}`);
      for (const l of s.legend) {
        assert.equal(typeof l.term, 'object', `${id}: legend ${l.n} term should be {fr, de, en}`);
        assert.ok(l.term.fr && l.term.de && l.term.en, `${id}: legend ${l.n} term in three languages`);
        assert.ok(l.note?.[code]?.trim(), `${id}: legend ${l.n} note.${code}`);
      }
    }
  }
});

test('sketch citations point to a listed source number', () => {
  for (const s of SKETCHES) {
    for (const code of ['fr', 'en']) {
      for (const para of s.body[code]) {
        for (const m of para.matchAll(/\[([\d\s,]+)\]/g)) {
          for (const n of m[1].split(',').map((x) => Number(x.trim()))) {
            assert.ok(Number.isInteger(n) && n >= 1 && n <= SKETCH_SOURCE_ORDER.length,
              `${s.id}: citation [${n}] outside 1..${SKETCH_SOURCE_ORDER.length}`);
            assert.ok(SOURCES[SKETCH_SOURCE_ORDER[n - 1]], `${s.id}: source ${n} missing`);
          }
        }
      }
    }
  }
});

test('sketch source list only contains existing sources', () => {
  for (const id of SKETCH_SOURCE_ORDER) assert.ok(SOURCES[id], `SOURCES.${id} missing`);
});

test('sketches: every listed source is cited at least once', () => {
  const cited = new Set();
  for (const s of SKETCHES) {
    for (const code of ['fr', 'en']) {
      for (const para of s.body[code]) {
        for (const m of para.matchAll(/\[([\d\s,]+)\]/g)) {
          for (const n of m[1].split(',')) cited.add(Number(n.trim()));
        }
      }
    }
  }
  for (const [i, id] of SKETCH_SOURCE_ORDER.entries()) {
    assert.ok(cited.has(i + 1), `source ${i + 1} (${id}) is listed but never cited`);
  }
});

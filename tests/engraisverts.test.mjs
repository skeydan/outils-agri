// The green-manure data: every plant must be complete (three terms,
// scientific name, family, drawing, both portraits, a chemistry text and at
// least one listed source), ids and service keys are valid, and the sunflower
// and the Jerusalem artichoke stay two distinct entries of Helianthus.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PLANTS, SERVICES, EV_SOURCE_ORDER } from '../site/data/engraisverts.js';
import { SOURCES } from '../site/data/sources.js';
import { GREEN_MANURE_DRAWINGS } from '../site/drawings/engraisverts.js';

const serviceIds = new Set(SERVICES.map((s) => s.id));
const listed = new Set(EV_SOURCE_ORDER);

test('every plant has its three terms, scientific name and family', () => {
  for (const p of PLANTS) {
    for (const code of ['fr', 'de', 'en']) {
      assert.equal(typeof p.term?.[code], 'string', `${p.id}: term.${code}`);
      assert.ok(p.term[code].trim().length > 0, `${p.id}: term.${code} is empty`);
    }
    assert.ok(p.scientific?.trim(), `${p.id}: scientific name`);
    for (const code of ['fr', 'en']) assert.ok(p.family?.[code]?.trim(), `${p.id}: family.${code}`);
  }
});

test('every plant has a portrait and a chemistry text in French and English', () => {
  for (const p of PLANTS) {
    for (const code of ['fr', 'en']) {
      assert.ok(p.character?.[code]?.trim().length > 40, `${p.id}: character.${code}`);
      assert.ok(p.chemistry?.[code]?.trim().length > 80, `${p.id}: chemistry.${code}`);
    }
    assert.ok(p.nitrogen?.fr?.trim() && p.nitrogen?.en?.trim(), `${p.id}: nitrogen`);
    assert.ok(p.sowing?.fr?.trim() && p.sowing?.en?.trim(), `${p.id}: sowing`);
  }
});

test('ids and scientific names are unique; service keys are known', () => {
  const ids = new Set();
  const names = new Set();
  for (const p of PLANTS) {
    assert.ok(!ids.has(p.id), `duplicate id ${p.id}`);
    ids.add(p.id);
    assert.ok(!names.has(p.scientific), `duplicate species ${p.scientific}`);
    names.add(p.scientific);
    assert.ok(Array.isArray(p.services) && p.services.length > 0, `${p.id}: no service`);
    for (const s of p.services) assert.ok(serviceIds.has(s), `${p.id}: unknown service ${s}`);
    if (p.cn !== undefined) assert.equal(typeof p.cn, 'string', `${p.id}: cn`);
  }
});

test('every plant has a hand-drawn SVG', () => {
  const keys = new Set();
  for (const p of PLANTS) {
    const svg = GREEN_MANURE_DRAWINGS[p.drawing];
    assert.equal(typeof svg, 'string', `${p.id}: no drawing for ${p.drawing}`);
    assert.match(svg, /^<svg[\s>]/, `${p.id}: drawing is not an SVG`);
    keys.add(p.drawing);
  }
  assert.ok(keys.size >= 8, `only ${keys.size} drawings`);
});

test('every plant has a source, and it is listed at the bottom', () => {
  for (const p of PLANTS) {
    assert.ok(Array.isArray(p.sources) && p.sources.length > 0, `${p.id}: no source`);
    for (const id of p.sources) {
      assert.ok(SOURCES[id], `${p.id}: unknown source ${id}`);
      assert.ok(listed.has(id), `${p.id}: source ${id} missing from EV_SOURCE_ORDER`);
    }
  }
});

test('every listed source exists, is https, and is cited', () => {
  const cited = new Set(PLANTS.flatMap((p) => p.sources));
  for (const id of EV_SOURCE_ORDER) {
    assert.ok(SOURCES[id], `SOURCES.${id} is missing`);
    assert.ok(cited.has(id), `source ${id} is listed but never cited`);
    assert.match(SOURCES[id].url, /^https:\/\//, `${id}: https only`);
  }
});

test('chemistry citations point to a listed source number', () => {
  for (const p of PLANTS) {
    for (const code of ['fr', 'en']) {
      for (const m of p.chemistry[code].matchAll(/\[([\d\s,]+)\]/g)) {
        for (const n of m[1].split(',').map((x) => Number(x.trim()))) {
          assert.ok(Number.isInteger(n) && n >= 1 && n <= EV_SOURCE_ORDER.length,
            `${p.id}: citation [${n}] outside 1..${EV_SOURCE_ORDER.length}`);
          assert.ok(SOURCES[EV_SOURCE_ORDER[n - 1]], `${p.id}: source ${n} missing`);
        }
      }
    }
  }
});

test('the set covers the usual green manures, with two distinct Helianthus', () => {
  assert.ok(PLANTS.length >= 8 && PLANTS.length <= 12, `${PLANTS.length} plants`);
  const byId = new Map(PLANTS.map((p) => [p.id, p]));
  for (const id of ['phacelie', 'vesce-commune', 'vesce-velue', 'consoude', 'tournesol', 'topinambour', 'raifort', 'ray-grass']) {
    assert.ok(byId.has(id), `missing plant ${id}`);
  }
  const sunflower = byId.get('tournesol');
  const artichoke = byId.get('topinambour');
  assert.equal(sunflower.scientific, 'Helianthus annuus');
  assert.equal(artichoke.scientific, 'Helianthus tuberosus');
  assert.notEqual(sunflower.id, artichoke.id);
  assert.ok(/Helianthus annuus/.test(sunflower.note?.fr ?? ''), 'sunflower note should cross-reference');
  assert.ok(/Helianthus tuberosus/.test(artichoke.note?.fr ?? ''), 'artichoke note should cross-reference');
});

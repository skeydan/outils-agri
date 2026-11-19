// Browser check of the single page: screenshots of the three tabs (desktop
// and phone, light and dark, French and English), the tab bar and hash
// routing, the presence of the three FR–DE–EN terms and a source on every
// glossary card, the numbered legends of the sketches, and citations.
// Fails on any console error or warning, and on any horizontal overflow.
//
//   npm i
//   npx playwright install chromium   (once, if no browser is cached)
//   npm run serve                     (in another terminal, port 9417)
//   BASE=http://localhost:9417 node scripts/e2e.mjs
//
// Screenshots go to $SHOTS (default /tmp/agri-shots).

import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const BASE = process.env.BASE || 'http://localhost:9417';
const SHOTS = process.env.SHOTS || '/tmp/agri-shots';
mkdirSync(SHOTS, { recursive: true });

const devices = {
  desktop: { viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1 },
  phone: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
};

const browser = await chromium.launch();
const problems = [];
let checks = 0;
const ok = (cond, msg) => { checks++; if (!cond) problems.push(msg); };

async function newPage(device, scheme, lang) {
  const ctx = await browser.newContext({ ...devices[device], colorScheme: scheme, locale: lang === 'fr' ? 'fr-FR' : 'en-GB' });
  const page = await ctx.newPage();
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') problems.push(`[${device} ${scheme} ${lang}] console ${m.type()}: ${m.text()}`); });
  page.on('pageerror', (e) => problems.push(`[${device} ${scheme} ${lang}] page error: ${e.message}`));
  return { ctx, page };
}

async function waitFor(page, fn, arg, what = 'condition') {
  for (let i = 0; i < 400; i++) {
    if (await page.evaluate(fn, arg)) return;
    await page.waitForTimeout(25);
  }
  throw new Error(`timed out waiting for ${what}`);
}
const route = (page, r) => waitFor(page, (r) => document.documentElement.dataset.route === r, r, `route ${r}`);
const overflowOf = (page) => page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);

const label = (lang, fr, en) => (lang === 'fr' ? fr : en);

for (const device of Object.keys(devices)) {
  for (const scheme of ['light', 'dark']) {
    for (const lang of ['fr', 'en']) {
      const tag = `[${device} ${scheme} ${lang}]`;
      const { ctx, page } = await newPage(device, scheme, lang);
      await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
      ok((await page.getAttribute('html', 'lang')) === lang, `${tag} browser language not picked up`);
      ok(new URL(page.url()).hash === '#outils', `${tag} default route: ${page.url()}`);
      ok(await page.locator('#tabs a').count() === 3, `${tag} three tabs`);
      ok((await page.textContent('#tabs a[aria-current="page"]')) === label(lang, 'Outils et machines', 'Tools & machines'), `${tag} tab label`);
      ok(await page.isVisible('[data-tab-panel="outils"]') && !(await page.isVisible('[data-tab-panel="techniques"]')), `${tag} only the glossary panel`);
      ok(await page.locator('#tab-outils .entry').count() === 16, `${tag} 16 glossary cards`);
      ok(await page.locator('#tab-outils .entry .term').count() === 16 * 3, `${tag} three terms per card`);
      ok(await page.locator('#tab-outils .entry .entry-src a').count() >= 16, `${tag} a source on every card`);
      ok(await page.isVisible('#sources-outils'), `${tag} source list at the bottom`);
      let overflow = await overflowOf(page);
      ok(overflow <= 0, `${tag} glossary: horizontal overflow ${overflow}px`);
      await page.screenshot({ path: `${SHOTS}/outils-${device}-${scheme}-${lang}.png`, fullPage: true });

      await page.click('#tabs a[data-tab="techniques"]');
      await route(page, 'techniques/main');
      ok(await page.locator('#tab-techniques .entry').count() === 8, `${tag} 8 techniques`);
      ok(await page.isVisible('[data-tab-panel="techniques"]') && !(await page.isVisible('[data-tab-panel="outils"]')), `${tag} only the techniques panel`);
      ok(await page.evaluate(() => window.scrollY === 0), `${tag} tab change scrolls to the top`);
      overflow = await overflowOf(page);
      ok(overflow <= 0, `${tag} techniques: horizontal overflow ${overflow}px`);
      await page.screenshot({ path: `${SHOTS}/techniques-${device}-${scheme}-${lang}.png`, fullPage: true });

      await page.click('#tabs a[data-tab="esquisses"]');
      await route(page, 'esquisses/main');
      ok(await page.locator('figure.sketch').count() === 3, `${tag} 3 sketches`);
      ok(await page.locator('figure.sketch svg').count() === 3, `${tag} 3 SVG drawings`);
      ok(await page.locator('.sketch-legend').count() === 3, `${tag} 3 legends`);
      overflow = await overflowOf(page);
      ok(overflow <= 0, `${tag} sketches: horizontal overflow ${overflow}px`);
      await page.screenshot({ path: `${SHOTS}/esquisses-${device}-${scheme}-${lang}.png`, fullPage: true });
      await ctx.close();
    }
  }
}

// ---------------------------------------------------------------- routing and interaction
{
  const { ctx, page } = await newPage('desktop', 'light', 'fr');
  await page.goto(`${BASE}/#techniques`, { waitUntil: 'networkidle' });
  await route(page, 'techniques/main');
  ok((await page.title()).startsWith('Techniques'), `title: ${await page.title()}`);
  // Language and theme switches.
  await page.click('[data-lang-btn="en"]');
  ok((await page.textContent('#tabs a[aria-current="page"]')) === 'Techniques', 'language toggle keeps the route');
  ok((await page.textContent('#tab-techniques h1')) === 'Techniques', 'language toggle re-renders the tab');
  await page.click('[data-theme-btn]');
  ok((await page.getAttribute('html', 'data-theme')) === 'dark', 'theme toggle');
  // Back to the glossary, a citation jumps to the source list without a route change.
  await page.click('#tabs a[data-tab="outils"]');
  await route(page, 'outils/main');
  await page.click('#tabs a[data-tab="techniques"]');
  await route(page, 'techniques/main');
  const before = page.url();
  await page.click('#tab-techniques .entry .entry-src a >> nth=0');
  const target = await page.evaluate(() => document.querySelector('.sources li.is-target')?.id);
  ok(page.url() === before && /^src-/.test(target ?? ''), `citation: ${page.url()} ${target}`);
  // A deep link and the browser back button.
  await page.goto(`${BASE}/#esquisses`, { waitUntil: 'networkidle' });
  await route(page, 'esquisses/main');
  ok(await page.isVisible('figure.sketch'), 'deep link to the sketches');
  await page.click('#tabs a[data-tab="outils"]');
  await route(page, 'outils/main');
  await page.goBack();
  await route(page, 'esquisses/main');
  ok(await page.isVisible('figure.sketch'), 'back returns to the sketches');
  await page.goForward();
  await route(page, 'outils/main');
  ok(await page.isVisible('#sources-outils'), 'forward returns to the glossary');
  // Every link stays on the page (a known route or a listed source) or is an outside https link.
  for (const tab of ['outils', 'techniques', 'esquisses']) {
    await page.click(`#tabs a[data-tab="${tab}"]`);
    await route(page, `${tab}/main`);
    const bad = await page.evaluate(() => [...document.querySelectorAll('a[href]')].map((a) => a.getAttribute('href')).filter((h) => {
      if (/^https:\/\//.test(h)) return false;
      if (/^#src-/.test(h)) return !document.getElementById(h.slice(1));
      return !/^#(outils|techniques|esquisses)(\/main)?(\?.*)?$/.test(h);
    }));
    ok(bad.length === 0, `${tab}: links that go nowhere: ${bad.join(', ')}`);
  }
  await page.screenshot({ path: `${SHOTS}/interact-1.png` });
  await ctx.close();
}

// ---------------------------------------------------------------- phone: no sideways scroll
{
  const { ctx, page } = await newPage('phone', 'dark', 'fr');
  await page.goto(`${BASE}/#esquisses`, { waitUntil: 'networkidle' });
  await route(page, 'esquisses/main');
  const overflow = await overflowOf(page);
  ok(overflow <= 0, `phone sketches: horizontal overflow ${overflow}px`);
  await page.locator('figure.sketch').first().scrollIntoViewIfNeeded();
  await page.screenshot({ path: `${SHOTS}/phone-sketch.png` });
  await ctx.close();
}

await browser.close();
if (problems.length) {
  console.error(`FAILED ${problems.length} of ${checks} checks:\n- ${problems.join('\n- ')}`);
  process.exit(1);
}
console.log(`OK: ${checks} checks, no console errors. Screenshots in ${SHOTS}`);

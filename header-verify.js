const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });

  for (const width of [1280, 1366, 1536, 1920]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });

    const result = await page.evaluate(() => {
      const badge = [...document.querySelectorAll('span')].find((el) => el.textContent.includes('Open to PM roles'));
      const logo = document.querySelector('header a[href="/"]');
      const nav = document.querySelector('header nav');

      const rect = (el) => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return {
          left: Math.round(r.left),
          right: Math.round(r.right),
          width: Math.round(r.width),
          height: Math.round(r.height),
          top: Math.round(r.top),
          bottom: Math.round(r.bottom),
        };
      };

      return {
        badge: rect(badge),
        logo: rect(logo),
        nav: rect(nav),
      };
    });

    console.log(`WIDTH ${width}: ${JSON.stringify(result)}`);
    await page.screenshot({ path: `header-${width}.png`, fullPage: false });
  }

  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});

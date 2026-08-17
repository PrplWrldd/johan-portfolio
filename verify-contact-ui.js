const puppeteer = require('puppeteer');
const path = require('path');

const SCREENSHOT_DIR = '/Users/johanirfan/.gemini/antigravity-ide/brain/890c7d96-c5f7-41e2-b3ea-9a96b69c800b';

async function run() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  await page.goto('http://localhost:3000#contact', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 500));

  // Screenshot Dark Mode Contact Section
  const contactEl = await page.$('#contact');
  if (contactEl) {
    await contactEl.screenshot({ path: path.join(SCREENSHOT_DIR, 'contact_dark.png') });
  }

  // Switch to Light Mode
  const themeToggleBtn = await page.$('#theme-toggle-btn');
  if (themeToggleBtn) {
    // Click until light mode
    await page.evaluate(() => {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    });
    await new Promise(r => setTimeout(r, 400));
    if (contactEl) {
      await contactEl.screenshot({ path: path.join(SCREENSHOT_DIR, 'contact_light.png') });
    }
  }

  await browser.close();
  console.log('Contact screenshots saved!');
}

run().catch(console.error);

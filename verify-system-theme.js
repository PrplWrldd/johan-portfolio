const puppeteer = require('puppeteer');
const path = require('path');
const http = require('http');

const SCREENSHOT_DIR = '/Users/johanirfan/.gemini/antigravity-ide/brain/890c7d96-c5f7-41e2-b3ea-9a96b69c800b';

function checkServer() {
  return new Promise((resolve) => {
    const req = http.get('http://localhost:3000', (res) => {
      resolve(res.statusCode === 200);
    });
    req.on('error', () => resolve(false));
  });
}

async function runTest() {
  console.log('Testing System Theme Synchronization...');
  const isUp = await checkServer();
  if (!isUp) {
    console.error('Server not reachable at http://localhost:3000.');
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  // 1. Clear localStorage so default 'system' mode is active
  await page.goto('http://localhost:3000');
  await page.evaluate(() => localStorage.removeItem('portfolio_theme'));
  await page.reload({ waitUntil: 'networkidle0' });

  // 2. Emulate OS Dark Mode
  console.log('2. Emulating OS Dark Mode in System Sync...');
  await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'dark' }]);
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'system_mode_dark.png'), fullPage: false });

  // 3. Emulate OS Light Mode - should dynamically react without page reload!
  console.log('3. Emulating OS Light Mode in System Sync (Live)...');
  await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'system_mode_light.png'), fullPage: false });

  // 4. Test Theme Toggle Button cycling
  console.log('4. Testing Toggle Button Cycle (System -> Light -> Dark -> System)...');
  const btn = await page.$('#theme-toggle-btn');
  
  // Click 1: System -> Light
  await btn.click();
  await new Promise(r => setTimeout(r, 400));
  const mode1 = await page.evaluate(() => document.documentElement.getAttribute('data-theme-mode'));
  console.log('Mode after 1st click:', mode1);

  // Click 2: Light -> Dark
  await btn.click();
  await new Promise(r => setTimeout(r, 400));
  const mode2 = await page.evaluate(() => document.documentElement.getAttribute('data-theme-mode'));
  console.log('Mode after 2nd click:', mode2);

  // Click 3: Dark -> System
  await btn.click();
  await new Promise(r => setTimeout(r, 400));
  const mode3 = await page.evaluate(() => document.documentElement.getAttribute('data-theme-mode'));
  console.log('Mode after 3rd click:', mode3);

  await browser.close();
  console.log('System Theme synchronization test PASSED!');
}

runTest().catch(err => {
  console.error('Error during system theme test:', err);
  process.exit(1);
});

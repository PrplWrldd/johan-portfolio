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

async function runVerification() {
  console.log('Checking if dev server is running on http://localhost:3000...');
  const isUp = await checkServer();
  if (!isUp) {
    console.error('Server not reachable at http://localhost:3000. Please start dev server first.');
    process.exit(1);
  }

  console.log('Launching browser for light & dark mode screenshots...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // 1. Desktop Viewport (1440x900) - Default / Dark Mode
  console.log('1. Capturing Desktop Dark Mode...');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'desktop_dark_hero.png'), fullPage: false });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'desktop_dark_fullpage.png'), fullPage: true });

  // 2. Click Theme Toggle Button -> Light Mode
  console.log('2. Toggling to Light Mode...');
  const themeToggleBtn = await page.$('#theme-toggle-btn');
  if (themeToggleBtn) {
    await themeToggleBtn.click();
    await new Promise(r => setTimeout(r, 700));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'desktop_light_hero.png'), fullPage: false });
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'desktop_light_fullpage.png'), fullPage: true });
  } else {
    console.error('Theme toggle button #theme-toggle-btn not found!');
  }

  // 3. Open Project Modal in Light Mode
  console.log('3. Opening Project Modal in Light Mode...');
  const maqamBtn = await page.$('#btn-details-maqam');
  if (maqamBtn) {
    await maqamBtn.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'modal_light_mode.png'), fullPage: false });
    const closeBtn = await page.$('#btn-close-project-modal');
    if (closeBtn) await closeBtn.click();
    await new Promise(r => setTimeout(r, 400));
  }

  // 4. Mobile Viewport (390x844) - Light Mode & Mobile Menu
  console.log('4. Capturing Mobile Viewport in Light Mode...');
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'mobile_light_hero.png'), fullPage: false });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'mobile_light_fullpage.png'), fullPage: true });

  // 5. Toggle Mobile Theme to Dark Mode
  console.log('5. Toggling Mobile to Dark Mode...');
  const mobileThemeBtn = await page.$('#mobile-theme-toggle-btn');
  if (mobileThemeBtn) {
    await mobileThemeBtn.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'mobile_dark_hero.png'), fullPage: false });
  }

  await browser.close();
  console.log('Visual verification completed successfully!');
}

runVerification().catch(err => {
  console.error('Verification error:', err);
  process.exit(1);
});

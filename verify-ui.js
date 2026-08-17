const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const SCREENSHOT_DIR = '/Users/johanirfan/.gemini/antigravity-ide/brain/7ce962d7-0ff2-4b4c-88dc-7596cd971263';

async function runVerification() {
  console.log('Launching browser for responsive screenshots...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // 1. Desktop Viewport (1440x900)
  console.log('Capturing Desktop Viewport...');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'desktop_hero.png'), fullPage: false });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'desktop_fullpage.png'), fullPage: true });

  // 2. Click Language Toggle (BM)
  console.log('Testing Bahasa Melayu toggle...');
  const langBtn = await page.$('#lang-toggle-btn');
  if (langBtn) {
    await langBtn.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'desktop_bahasa_melayu.png'), fullPage: false });
    // Switch back to EN
    await langBtn.click();
    await new Promise(r => setTimeout(r, 400));
  }

  // 3. Open MAQAM Project Modal
  console.log('Testing Project Modal...');
  const maqamBtn = await page.$('#btn-details-maqam');
  if (maqamBtn) {
    await maqamBtn.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'modal_project_details.png'), fullPage: false });
    const closeBtn = await page.$('#btn-close-project-modal');
    if (closeBtn) await closeBtn.click();
    await new Promise(r => setTimeout(r, 400));
  }

  // 4. Mobile Viewport (390x844)
  console.log('Capturing Mobile Viewport (390x844)...');
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'mobile_hero.png'), fullPage: false });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'mobile_fullpage.png'), fullPage: true });

  await browser.close();
  console.log('Visual verification complete! All screenshots saved to artifact directory.');
}

runVerification().catch(err => {
  console.error('Error during verification:', err);
  process.exit(1);
});

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const SCREENSHOT_DIR = '/Users/johanirfan/.gemini/antigravity-ide/brain/4028ea19-89b5-4083-826a-079ca0f917ee';

async function runVerification() {
  console.log('Launching browser for responsive screenshots...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // 1. Desktop Viewport (1440x900)
  console.log('Capturing Desktop Hero...');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'desktop_hero.png'), fullPage: false });

  // 2. Scroll through page to trigger any lazy elements
  console.log('Scrolling through page...');
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });
  await new Promise(r => setTimeout(r, 800));

  // 3. Capture Projects Section
  console.log('Capturing Projects Section...');
  const projectsEl = await page.$('#projects');
  if (projectsEl) {
    await projectsEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'desktop_projects_grid.png'), fullPage: false });
  }

  // 4. Capture Full Page
  console.log('Capturing Fullpage...');
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'desktop_fullpage.png'), fullPage: true });

  // 5. Open Project Modal
  console.log('Testing Project Modal...');
  const projectBtn = await page.$('#btn-details-ianseo-pro');
  if (projectBtn) {
    await projectBtn.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'modal_project_details.png'), fullPage: false });
    const closeBtn = await page.$('#btn-close-project-modal');
    if (closeBtn) await closeBtn.click();
    await new Promise(r => setTimeout(r, 400));
  }

  // 6. Test Light Mode
  console.log('Testing Light Mode...');
  const themeBtn = await page.$('#theme-toggle-btn');
  if (themeBtn) {
    await themeBtn.click();
    await new Promise(r => setTimeout(r, 600));
    if (projectsEl) {
      await projectsEl.scrollIntoView();
      await new Promise(r => setTimeout(r, 400));
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'desktop_light_projects.png'), fullPage: false });
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'desktop_light_hero.png'), fullPage: false });
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'desktop_light_fullpage.png'), fullPage: true });
    // Switch back to system/dark
    await themeBtn.click();
  }

  await browser.close();
  console.log('Visual verification complete! All screenshots saved.');
}

runVerification().catch(err => {
  console.error('Error during verification:', err);
  process.exit(1);
});

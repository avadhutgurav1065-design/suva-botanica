const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/plants/poinsettia', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 3000));
  
  // Hero screenshot
  await page.screenshot({ path: 'plant_hero.png' });
  
  // Scroll down and take content screenshot
  await page.evaluate(() => window.scrollTo({ top: window.innerHeight, behavior: 'instant' }));
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: 'plant_about.png' });
  
  // Scroll to care section
  await page.evaluate(() => window.scrollTo({ top: window.innerHeight * 2, behavior: 'instant' }));
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: 'plant_care.png' });
  
  // Scroll to CTA
  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' }));
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: 'plant_cta.png' });
  
  await browser.close();
  console.log('Screenshots taken!');
})();

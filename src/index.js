const puppeteer = require('puppeteer');
puppeteer.launch({
    headless:false
}).then(async browser => {
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({path: 'screenshot.png'});
    await browser.close();
  });

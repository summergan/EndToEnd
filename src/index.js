const puppeteer = require('puppeteer');
puppeteer.launch({
    headless:false
}).then(async browser => {
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/');
    await page.evaluate('toggleEnv()');
    await page.waitFor(1000);

    await page.click('[data-sign="envToggle"]');
    await page.focus('[data-sign="envServerUrl"]');
    await page.$eval('[data-sign="envServerUrl"]', input => input.select(), '[data-sign="envServerUrl"]');
    await page.evaluate(() => {
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Delete' }));
        document.dispatchEvent(new KeyboardEvent('keyup', { key: 'Delete' }));
      });    // await page.clear('[data-sign="envServerUrl"]');
    await page.type('[data-sign="envServerUrl"]', 'https://api-xmnup.lab.nordigy.ru');
    await page.click('[data-sign="envSave"]');
    await page.waitFor(1000);
    await page.click('[data-sign="loginButton"]');
    await page.waitFor(5000);
      // swith to activity page
    const allpages = await browser.pages();
    const activityPage = allpages[allpages.length - 1];
      //input longin name
    await activityPage.type('[data-test-automation-id="input"]', "448451030241");
    await activityPage.click( '[data-test-automation-id="loginCredentialNext"]');
      //input password click signin
    await activityPage.waitFor(3000);
    await activityPage.type('[id=password]', 'Test!123');
    await activityPage.click('[data-test-automation-id="signInBtn"]')
    
    await page.screenshot({path: 'screenshot.png'});
    await browser.close();
  });

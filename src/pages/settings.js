const driver = require('../basic/puppeteer');
class Settings {
    static async gotoSettings() {
      await driver.waitFor(page,1000);
      await driver.waitFor(page,'[title="More Menu"]');
      await driver.click(page, '[title="More Menu"]');
      await driver.waitFor(page, '[title="Settings"]');
      await driver.click(page, '[title="Settings"]');
      await driver.waitFor(page, 1000);
    }

    static async gotoCalling() {
      await driver.waitFor(page, '[class*=-SettingsPanel-_styles_root] div  a:nth-child(1) [class*=IconField-_styles_content]');
      await driver.click(page, '[class*=-SettingsPanel-_styles_root] div  a:nth-child(1) [class*=IconField-_styles_content]');
    }
    static async settingCustomPhone() {
      const DropdownSelectText = await driver.getText(page, '[class*="DropdownSelect"]');
      if (DropdownSelectText.trim() !== 'Custom Phone') {
        await driver.click(page, '[class*="DropdownSelect"]');
        await driver.click(page, '[title="Custom Phone"]');
        await driver.waitFor(page, 100);
        const ringoutPrompt = await driver.execute(page, `phone.callingSettings.ringoutPrompt`);
        if (ringoutPrompt === true) {
          await driver.click(page,'[class*=Switch-_styles_slider]');
        }
        await driver.waitFor(page,'[class*=TextInput-_styles_input]');
        await driver.input(page, '[class*=TextInput-_styles_input]', '+' + context.options.option.accounts[1]['did'], { selector: 'css' });
        await driver.click(page, '[class*=SaveButton]');
        await driver.waitFor(page, '[class*="AlertDisplay"]');
        await driver.execute(page, 'phone.alert.dismissAll');
        await driver.waitFor(page, 1000);
      }
    }
    static async settingMyRCPhone() {
      const DropdownSelectText = await driver.getText(page, '[class*="DropdownSelect"]');
      if (DropdownSelectText.trim() !== 'My RingCentral Phone') {
        await driver.click(page, '[class*="DropdownSelect"]');
        await driver.click(page, '[title="My RingCentral Phone"]');
        const ringoutPrompt = await driver.execute(page, `phone.callingSettings.ringoutPrompt`);
        if (ringoutPrompt === true) {
          await driver.click(page, '[class*=Switch-_styles_slider]');
        }
        await driver.click(page, '[class*=SaveButton]');
        await driver.waitFor(page, '[class*="AlertDisplay"]');
        await driver.execute(page, 'phone.alert.dismissAll');
        await driver.waitFor(page, 1000);
      }
    }
  
    static async settingRCPhoneDesktop() {
      const DropdownSelectText = await $(app).getText('[class*="DropdownSelect"]');
      if (DropdownSelectText.trim() !== 'RingCentral for Desktop') {
        await $(app).click('[class*="DropdownSelect"]', { selector: 'css' });
        await $(app).click('[title="RingCentral for Desktop"]', { selector: 'css' });
        const ringoutPrompt = await $(app).execute(`phone.callingSettings.ringoutPrompt`);
        if (ringoutPrompt === true) {
          await $(app).click('[class*=Switch-_styles_slider]', { selector: 'css' });
        }
        await $(app).click('[class*=SaveButton]', { selector: 'css' });
        await $(app).waitForSelector('[class*="AlertDisplay"]', { selector: 'css' });
        await $(app).execute('phone.alert.dismissAll');
        await $(app).waitFor(1000);
      }
    }
  }
  module.exports=Settings;
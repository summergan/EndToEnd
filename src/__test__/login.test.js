const driver = require('../basic/puppeteer/index');
const Login = require('../pages/login');
const Settings = require('../pages/settings');
const logger =require('../logger')
const timeout = 100000

describe(
  '/ (Login Page)',
  () => {
    beforeAll(async () => {
      await driver.goto(page,'http://localhost:8080')
    }, timeout)

    afterAll(async () => {
      await driver.close(page)
    })

    it('should setting', async () => {
        await Login.login();
        await Settings.gotoSettings();
        await Settings.gotoCalling();
        await Settings.settingMyRCPhone();
        logger.info("setting")
        await driver.waitFor(page, 1000);
    },timeout)
  })
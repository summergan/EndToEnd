const driver = require('../basic/puppeteer/index');
const Login = require('../pages/login');
const Settings = require('../pages/settings');
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

    it('should load without error', async () => {
        await Login.login();
        await Settings.gotoSettings();
        await Settings.gotoCalling();
        await Settings.settingMyRCPhone();
    },timeout)
  })
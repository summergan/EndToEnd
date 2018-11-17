const driver= require('../basic/puppeteer/index');
const timeout = 20000
describe(
  '/ (Home Page)',
  () => {
    beforeAll(async () => {
      await driver.goto(page,'https://cn.bing.com/')
    }, timeout)

    afterAll(async () => {
      await driver.close(page);
    })

    it('should load without error', async () => {
      let text = await driver.execute(page,() => document.body.innerText)
      expect(text).toContain('Bing')
    },timeout);
  })
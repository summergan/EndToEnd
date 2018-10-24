const timeout = 20000

describe(
  '/ (Home Page)',
  () => {
    beforeAll(async () => {
      await global.page.goto('https://cn.bing.com/')
    }, timeout)

    afterAll(async () => {
      await global.page.close()
    })

    it('should load without error', async () => {
      let text = await global.page.evaluate(() => document.body.innerText)
      expect(text).toContain('Bing')
    })
  },
  timeout
)
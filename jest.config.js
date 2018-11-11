module.exports = {
    globalSetup: './src/environment/setup.js',
    globalTeardown: './src/environment/teardown.js',
    testEnvironment: './src/environment/puppeteerEnvironment.js',
    testResultsProcessor: "jest-vue-report",
  }
  
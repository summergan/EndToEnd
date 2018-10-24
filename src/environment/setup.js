const chalk = require('chalk');
const puppeteer = require('puppeteer');
const fs = require('fs');
const mkdirp = require('mkdirp');
const constants = require('./constants');


module.exports = async function() {
  console.log(chalk.green('Setup Puppeteer'));
  const browser = await puppeteer.launch({headless:false});
  // This global is not available inside __tests__ but only in global teardown
  global.__BROWSER_GLOBAL__ = browser;
  // Instead, we expose the connection details via file system to be used in __tests__
  mkdirp.sync(constants.DIR);
  fs.writeFileSync(constants.WS_ENDPOINT_PATH, browser.wsEndpoint());
}

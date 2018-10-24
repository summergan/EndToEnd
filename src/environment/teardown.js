const chalk = require('chalk');
const rimraf = require('rimraf')
const constants = require('./constants');

module.exports = async function() {
  console.log(chalk.green('Teardown Puppeteer'))
  await global.__BROWSER_GLOBAL__.close()
  rimraf.sync(constants.DIR)
}

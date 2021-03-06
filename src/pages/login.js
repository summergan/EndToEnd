const driver = require('../basic/puppeteer');
const logger =require('../logger')

class Login{
    
    static async clickLoginBtn(){
        await driver.click(page, '[data-sign="loginButton"]');
    }

    static async toggleEnv(){
        await driver.execute(page, 'toggleEnv()');
        await driver.click(page, '[data-sign="envToggle"]');
        await driver.clear(page, '[data-sign="envServerUrl"]');
        await driver.input(page, '[data-sign="envServerUrl"]', 'https://api-xmnup.lab.nordigy.ru');
        await driver.click(page, '[data-sign="envSave"]');
        await driver.waitFor(page, 1000);
    }

    static async login(){
        logger.info('enter login');
        await this.toggleEnv();
        await this.clickLoginBtn();
        await driver.waitFor(page, 5000);
        // swith to activity page
        const activityPage = await driver.switchToActivityPage();
        //input longin name
        await driver.input(activityPage, '[data-test-automation-id="input"]', "44845103024*");
        await driver.click(activityPage, '[data-test-automation-id="loginCredentialNext"]');
        //input password click signin
        await driver.waitFor(activityPage, 3000);
        await driver.input(activityPage, '[id=password]', '');
        await driver.click(activityPage, '[data-test-automation-id="signInBtn"]')
    }
}
module.exports = Login;
const driver = require('../basic/puppeteer');
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
        await this.toggleEnv();
        await this.clickLoginBtn();
        await driver.waitFor(page, 5000);
        // swith to activity page
        const activityPage = await driver.switchToActivityPage();
        //input longin name
        await driver.input(activityPage, '[data-test-automation-id="input"]', "448451030241");
        await driver.click(activityPage, '[data-test-automation-id="loginCredentialNext"]');
        //input password click signin
        await driver.waitFor(activityPage, 3000);
        await driver.input(activityPage, '[id=password]', 'Test!123');
        await driver.click(activityPage, '[data-test-automation-id="signInBtn"]')
    }
}
module.exports = Login;
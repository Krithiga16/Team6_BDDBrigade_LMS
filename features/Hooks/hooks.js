require('dotenv').config();
const { chromium, firefox, webkit } = require('playwright');
const { Before, After } = require('@cucumber/cucumber');
const ProgramPage = require('../../pageobjects/progrmaPage');
const BatchPage = require('../../pageobjects/batchPage');
const { loginPage } = require('../../pageobjects/loginPage');
const { logoutPage } = require('../../pageobjects/logoutPage');
const { homePage } = require('../../pageobjects/homePage');
const {logTestResults, getScreenshotFileName} = require('../../utils/logger')

const browsers = { chromium, firefox, webkit };

Before(async function () {
    const browserType = process.env.BROWSER || 'chromium';
    const browserLauncher = browsers[browserType];

    if (!browserLauncher) {
        throw new Error(`Unknown browser: ${browserType}. Use chromium, firefox, or webkit.`);
    }

    this.browser = await browserLauncher.launch({ headless: true });
    this.page = await this.browser.newPage();
    this.loginPage = new loginPage(this.page);
    this.logoutPage = new logoutPage(this.page);
    this.programPage = new ProgramPage(this.page);
    this.homePage = new homePage(this.page);
    this.batchPage = new BatchPage(this.page);
    this.baseUrl = process.env.BASE_URL;
});

After(async function (scenario) {
    async function onTestComplete(scenario){
        const name = scenario.pickle.name;
        const status = scenario.result.status;

        logTestResults(name, status);

        if (status === 'FAILED'){
            const fileName = getScreenshotFileName(name);
            if(this.page){
                await this.page.screenshot({path: `./screenshots/${fileName}`, fullPage: true});
            }
        }
    }
    await onTestComplete.call(this, scenario);
    if(this.browser){
        await this.browser.close();
    }
    
});
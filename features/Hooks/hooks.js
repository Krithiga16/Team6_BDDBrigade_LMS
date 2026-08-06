require('dotenv').config();
const { chromium, firefox, webkit } = require('playwright');
const { Before, After } = require('@cucumber/cucumber');
const ProgramPage = require('../../pageobjects/progrmaPage');
const config = require('../../config/config');

const browsers = { chromium, firefox, webkit };

Before(async function () {
    const browserType = process.env.BROWSER || 'chromium';
    const browserLauncher = browsers[browserType];

    if (!browserLauncher) {
        throw new Error(`Unknown browser: ${browserType}. Use chromium, firefox, or webkit.`);
    }

    this.browser = await browserLauncher.launch({ headless: false });
    this.page = await this.browser.newPage();
    this.programPage = new ProgramPage(this.page);
    this.baseUrl = config.baseUrl;
});

After(async function () {
    //await this.browser.close();
});
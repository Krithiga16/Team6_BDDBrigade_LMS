const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('The user is on the login page', async function () {
    await this.programPage.navigateToLoginPage(this.baseUrl);
       
});

When('The user enters valid credentials and clicks on the login button',async function () {
    
    await this.programPage.enterUsername('Lmshackathon@gmail.com');
    await this.programPage.enterPassword('lmsAug@2026');
    await this.programPage.selectRole('admin');
    await this.programPage.clickLoginButton();
    });

Then('The user should be logged in successfully', async function () {
    assert.equal(await this.programPage.getpagetitle(), 'LMS');
});

Given('The user is on Home page',async function () {
    console.log('User is on Home page');
});

When('The user can able to see program button', async function () {

    const title = await this.programPage.getpagetitle();
    console.log(`Current page title: ${title}`);
});

Then('The user should able to view the program button', async function () {
    var isVisible = await this.programPage.isProgramButtonVisible();
    assert.equal(isVisible, true);
});
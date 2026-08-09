const {Given, When, Then ,setDefaultTimeout } = require('@cucumber/cucumber');
const assert = require('assert');
const datajson = JSON.parse(JSON.stringify(require('../../utils/loginTestData.json')));
const { expect } = require('@playwright/test');


Given('Admin is in home page', function () {
  console.log("Admin is on Home Page");
});

When('Admin clicks on the logout in the menu bar', async function () {
  await this.logoutPage.clickLogoutButton();
});

Then('Admin should be redirected to login page', async function () {
   assert.equal(await this.loginPage.getpagetitle(), datajson.PageTitle);
    console.log('Admin is on the login page');
});


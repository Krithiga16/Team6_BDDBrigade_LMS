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

Given('Admin is on home page after Login', async function () {
  console.log('User is on Home page');
});

When('Admin clicks Program on the navigation bar', async function () {
  await this.programPage.clickProgramButton();
});

Then('Admin should be navigated to Program page', async function () {
  
    var isVisible = await this.programPage.getProgramPage();
    assert.equal(isVisible, true);
});

Then('Admin should see sub menu in menu bar as {string}', async function (expectedText) {
    var isVisible = await this.programPage.isAddNewProgramButtonVisible();
    var ActualText = await this.programPage.addNewprogrambtn.textContent();
    assert.equal(isVisible, true);
    assert.equal(ActualText, expectedText);
});

Then('Admin should see elements on program page', async function (dataTable) {
  const elements = dataTable.rows().flat(); // ['Manage Program', 'Delete button', 'Search bar', 'search... placeholder text']

  for (const elementvalue of elements) {
    let isvisible = false;

    switch (elementvalue) {
      case "Manage Program":
        isvisible = await this.programPage.manageprogram.isVisible();
        assert.ok(isvisible, `${elementvalue} should be visible`);
        break;

      case "Delete button":
        isvisible = await this.programPage.deleteButton.isVisible();
        assert.ok(isvisible, `${elementvalue} should be visible`);
        break;

      case "Search bar":
        isvisible = await this.programPage.serchInput.isVisible();
        assert.ok(isvisible, `${elementvalue} should be visible`);
        break;

      case "search... placeholder text":
        const placeholder = await this.programPage.serchInput.getAttribute('placeholder');
        assert.strictEqual(placeholder, "Search...", `placeholder should equal "Search..."`);
        break;

      default:
        throw new Error(`Unknown element: ${elementvalue}`);
    }
  }
});
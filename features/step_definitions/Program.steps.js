const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('The user is on the login page', async function () {
    await this.programPage.navigateToLoginPage(this.baseUrl);
       
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

Then('Admin should see data table with column header on the Manage Program Page as elements', async function (dataTable) {
  const elements = dataTable.rows().flat(); 
  for(const elementvalue of elements) {
    let isvisible = false;
    switch (elementvalue) {
      case "Program Name":
        isvisible = await this.programPage.HeaderProgramName.isVisible();
        assert.ok(isvisible, `${elementvalue} should be visible`);
        break;
      case "Program Description":
        isvisible = await this.programPage.HeaderProgramDescription.isVisible();
        assert.ok(isvisible, `${elementvalue} should be visible`);
        break;
      case "Program Status":
        isvisible = await this.programPage.Headerprogrmstatus.isVisible();
        assert.ok(isvisible, `${elementvalue} should be visible`);
        break;
      case "Edit / Delete":
        isvisible = await this.programPage.HeaderEditDelete.isVisible();
        assert.ok(isvisible, `${elementvalue} should be visible`);
        break;
      default:
        throw new Error(`Unknown element: ${elementvalue}`);
    }
  }
});

Then('Admin should see checkbox default state as unchecked beside Program Name column header', async function () {
 
  const isChecked = await this.programPage.checkbox.isChecked();
  assert.equal(isChecked, false, 'Checkbox should be unchecked by default');
});

Then('Admin should see check box default state as unchecked on the left side in all rows against program name', async function () {
  
  const checkboxesCount = await this.programPage.checkboxes.count();
  for (let i = 0; i < checkboxesCount; i++) {
    const isChecked = await this.programPage.checkboxes.nth(i).isChecked();
    assert.equal(isChecked, false, `Checkbox in row ${i + 1} should be unchecked by default`);
  }

});
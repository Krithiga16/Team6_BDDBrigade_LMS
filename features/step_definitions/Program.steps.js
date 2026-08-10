const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { expect } = require('@playwright/test');
const ProgramData = require('../../utils/ProgramData.json');

Given('The user is on the login page', async function () {
    await this.programPage.navigateToLoginPage(this.baseUrl);
       
});

// Given('Admin is on home page after Login', async function () {
//   console.log('User is on Home page');
// });

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
  const elements = dataTable.rows().flat(); 
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

Then('Admin should see the sort arrow icon beside to each column header except Edit and Delete', async function () {

 const count = await this.programPage.Headersort.count();
  for(let i = 0; i< count ; i++ ){
    const isVisible = await this.programPage.Headersort.nth(i).isVisible();
    assert.ok(isVisible, `Sort icon in row ${i + 1} should be visible`);
  }
  
});

Given('Admin is on Program page', async function () {
  
  console.log('Admin is on Program page');
});

When('Admin clicks on Add New Program under the Program menu bar', async function () {
 
     await this.programPage.addNewprogrambtn.click();
});

Then('Admin should see Program Details dialog', async function () {

  const isvisible = await this.programPage.programdetailsDialog.isVisible();
  assert.ok(isvisible, 'Program Details dialog should be visible');
  
});

Then('Admin should see red  asterisk mark  beside mandatory field Name and status', async function () {
 
   const nameastText = await this.programPage.nameAsterisk.textContent();
   const statusastText = await this.programPage.statusAsterisk.textContent();
   assert.equal(nameastText, '*', 'Red asterisk mark should be visible beside Name field');
   assert.equal(statusastText, '*', 'Red asterisk mark should be visible beside Status field');
   expect(this.programPage.nameAsterisk).toHaveCSS('color', '#ff0000');
   expect(this.programPage.statusAsterisk).toHaveCSS('color', '#ff0000');

});

Then('Admin should see the elements on program details dialog', async function (dataTable) {
  const elements = dataTable.rows().flat(); 

  for (const elementvalue of elements) {
    let isvisible = false;  
    switch (elementvalue) {
      case "Program Details":
         isvisible = await this.programPage.programDetails.isVisible();
         assert.ok(isvisible, `Program Details should be visible`);
         console.log( `element ${elementvalue} is visible: ${isvisible}`);
          break;
      case "name input":
        isvisible = await this.programPage.nameTextbox;
        assert.ok(isvisible, `Name input should be visible`);
         console.log( `element ${elementvalue} is visible: ${isvisible}`);
        break;
      case "Description input":
        isvisible = await this.programPage.descriptionTextbox.isVisible();
        assert.ok(isvisible, `Description input should be visible`);
         console.log( `element ${elementvalue} is visible: ${isvisible}`);
        break;
      case "status":
        isvisible = await this.programPage.Statuslable.isVisible();
        assert.ok(isvisible, `Status label should be visible`);
         console.log( `element ${elementvalue} is visible: ${isvisible}`);
        break;
      case "Active button":
        isvisible = await this.programPage.activeRadioButton.isVisible();
        assert.ok(isvisible, `Active button should be visible`);
         console.log( `element ${elementvalue} is visible: ${isvisible}`);
        break;
      case "Inactive button":
        isvisible = await this.programPage.inactiveRadioButton.isVisible();
        assert.ok(isvisible, `Inactive button should be visible`);
         console.log( `element ${elementvalue} is visible: ${isvisible}`);
        break;
      default:
        throw new Error(`Unknown element: ${elementvalue}`);
        break;
    }
  }

});

When('Admin clicks save button without entering mandatory', async function () {
  await this.programPage.addNewprogrambtn.click();
  await this.programPage.SaveButton.click();

});

Then('Admin gets message {string}', async function (string) {
  
  const errorMessage = await this.programPage.programdetailserrorMessage.textContent();
  assert.equal(errorMessage, 'Program name is required.');
   
});

Given('Admin is on Program details dialog box', async function () {
  
  console.log('Admin is on Program details dialog box');
});

When('Admin clicks Cancel button', async function () {
  await this.programPage.addNewprogrambtn.click();
  await this.programPage.cancelButton.click();
});

Then('Admin can see Program Details form disappears', async function () {
   
  const isVisible = await this.programPage.manageprogram.isVisible();
  assert.ok(isVisible, 'Program Details form should disappear and Manage Program should be visible');
});

When('Admin clicks X button on program details dialog box', async function () {
  await this.programPage.addNewprogrambtn.click();
  await this.programPage.closeProgramDetailsDialog();
});

When('Admin enter valid details for mandatory fields and Click on save button', async function () {
  await this.programPage.addNewprogrambtn.click();
  await this.programPage.fillProgramDetails(ProgramData.validData.programName, ProgramData.validData.programDescription);
  await this.programPage.clickActiveStatus();
  await this.programPage.clickSaveButton();
 
});

Then('Admin gets message Successful Program created', async function () {
  
await expect(this.programPage.programSuccessmsg).toBeVisible();
 
});

When('Admin enters a numeric value as the Program Name', async function () {
  await this.programPage.addNewprogrambtn.click();
  await this.programPage.fillProgramDetails(ProgramData.invalidData.programName, ProgramData.invalidData.programDescription);
  await this.programPage.clickActiveStatus();
  await this.programPage.clickSaveButton();
});

Then('Admin should see error message {string} under program name field', async function (string) {
  
  await expect(this.programPage.nameErrormsg).toBeVisible();
  await expect(this.programPage.descriptionErrormsg).toBeVisible();
});

When('Admin searches with newly created Program Name', async function () {
  await this.programPage.searchProgram(ProgramData.validData.programName);
});

Then('Admin should see the Records of the newly created Program details', async function () {
  const programCell = await this.programPage.isProgramVisible(ProgramData.validData.programName);
  await expect(programCell).toBeVisible();
});

When('Admin clicks on Edit option for particular program', async function () {
  await this.programPage.searchProgram(ProgramData.validData.programName);
  await this.programPage.clickEditButtonForProgram();
});

When('Admin clicks save button after editing the {string}', async function (programfield) {
    
  if(programfield === "program name"){
    await this.programPage.searchProgram(ProgramData.validData.programName);
    await this.programPage.clickEditButtonForProgram();
    await this.programPage.fillProgramDetails(ProgramData.UpdateprogramName.programName, ProgramData.UpdateprogramName.programDescription);
    await this.programPage.clickSaveButton();
  } else if (programfield === "Program Description"){
    await this.programPage.searchProgram(ProgramData.UpdateprogramName.programName);
    await this.programPage.clickEditButtonForProgram();
    await this.programPage.fillProgramDetails(ProgramData.UpdateDescription.programName , ProgramData.UpdateDescription.programDescription);
    await this.programPage.clickSaveButton();
  }
 
});

Then('Admin should see program update {string}', async function (expectedMasg) {
  await expect(this.programPage.programSuccessmsg).toBeVisible({ timeout: 5000 });
  await expect(this.programPage.programSuccessmsg).toContainText(expectedMasg, {timeout:5000});
});

When('Admin searches with newly updated Program Name', async function () {

  await this.programPage.searchProgram(ProgramData.UpdateDescription.programName);
  
});

Then('Admin verifies that the details are correctly updated', async function () {
  const programCell = await this.programPage.isProgramVisible(ProgramData.UpdateDescription.programName);
  await expect(programCell).toBeVisible();
});

When('Admin clicks on delete icon for a program', async function () {
  await this.programPage.searchProgram(ProgramData.validData.programName);
  await this.programPage.clickDeletebutton();
});

Then('Admin will get confirm deletion dialog box', async function () {
  
  await expect(this.programPage.deleteconfirmDailog).toBeVisible();
});

Given('Admin is on Program Confirm Deletion Page after selecting a program to delete',async  function () {
   console.log("user is not Delete program dailog box")
});

When('Admin clicks on No button', async function () {
  await this.programPage.searchProgram(ProgramData.validData.programName);
  await this.programPage.clickDeletebutton();
  await this.programPage.clickDeleteprogramNobutton();
   
});

Then('Admin can see Confirmation form disappears', async function () {
 
  await expect(this.programPage.deleteconfirmDailog).not.toBeVisible();
  
});

When('Admin Click on X button on Program delete dailog', async function () {

  await this.programPage.searchProgram(ProgramData.validData.programName);
  await this.programPage.clickDeletebutton();
  await this.programPage.clickdeleteprogramdailog();
  
});

Then('Admin can see Confirm Deletion form disappear', async function () {

await expect(this.programPage.deleteconfirmDailog).not.toBeVisible();
  
});

When('Admin clicks on Yes button on program delete dailog', async function () {
   await this.programPage.searchProgram(ProgramData.validData.programName);
  await this.programPage.clickDeletebutton();
  await this.programPage.clickconfirmYesButton();
});

Then('Admin can see {string} message', async function (string) {

  await expect(this.programPage.programUpdatemsg).toBeVisible();
  
});

When('Admin Searches for Deleted Program name', async function () {

 await this.programPage.searchProgram(ProgramData.validData.programName);
});

Then('There should be zero results', async function () {

  const text = await this.programPage.nunmberofprograms.textContent();
  await assert.ok(text, "Showing 0 to 0 of 0 entries");
});

When('Admin selects more than one program by clicking on the checkbox', async function () {
   await this.programPage.clickEscape();
   await this.programPage.checkbox.click();
});

Then('Mulitple delete box under manage program must be enabled', async function () {
   
     await expect(this.programPage.bulkDeleteButton).toBeEnabled();
});
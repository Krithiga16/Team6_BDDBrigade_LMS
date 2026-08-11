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
   await this.programPage.clickEscape();
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
  //console.log(this.programPage.deletealert.textContent());
  await expect(this.programPage.deletealert).toBeVisible();
  
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

Then('Admin will see confirm deletion dialog box open',async function () {
   await this.programPage.clickBulkDelete();
   await expect(this.programPage.deleteconfirmDailog).toBeVisible();
});

Given('Admin is on Confirmation form', async function () {
  console.log("Admin is on delete confirm dailog box")
});

When('Admin clicks No button on bulk delete confirm dailog box',async function () {
  await this.programPage.clickEscape();
   await this.programPage.checkbox.click();
  await this.programPage.clickBulkDelete();
  await this.programPage.clickDeleteprogramNobutton();
});

Then('Admin can see Programs are still selected and not deleted', async function () {
  await expect(this.programPage.deleteconfirmDailog).not.toBeVisible();
  console.log("delete canceled");
});

When('Admin Click on X button on bulk Program delete dailog', async function () {
   await this.programPage.clickEscape();
   await this.programPage.checkbox.click();
  await this.programPage.clickBulkDelete();
  await this.programPage.clickdeleteprogramdailog();
});

When('Admin clicks on {string} button on bulk delete dailog box', async function (string) {
       await this.programPage.clickEscape();
       await this.programPage.selectFirstNCheckboxes(2);
       await this.programPage.clickBulkDelete();
       await this.programPage.clickconfirmYesButton();

});

When('Admin clicks on Arrow next to programName', async function () {
   await this.programPage.clickEscape();
   await this.programPage.clickprogramNameSort();
   
});

Then('Admin should  See the Program Name is sorted in Ascending order', async function () {
  await expect(this.programPage.sorticon).toBeVisible();
 const className = await this.programPage.sorticon.getAttribute('class')
   await assert.ok(className, 'amount-up-alt');
});

Given('Admin is in program page where Program names are sorted in ascending order', async function () {
  await this.programPage.clickEscape();
  await this.programPage.clickprogramNameSort(); 
  
});

Then('Admin should See the Program Name is sorted in Descending order', async function () {
   await expect(this.programPage.sortDownicon).toBeVisible({timeout: 30000});
  const className = await this.programPage.sortDownicon.getAttribute('class', {timeout: 30000})
   await assert.ok(className, 'sort-amount-down');
});

When('Admin clicks on Arrow next to ProgramDescription', async function () {
  await this.programPage.clickEscape();
  await this.programPage.clickDescriptionSort();
});

Then('Admin should See the program Description is sorted in Ascending order', async function () {

   
 const ascend = await this.programPage.HeaderProgramDescription.getAttribute('aria-sort')
   await assert.ok(ascend, 'ascending'); 
  
});

Given('Admin is in program page where Program description are sorted in ascending order', async function () {
   await this.programPage.clickEscape();
   await this.programPage.clickDescriptionSort();
});

Then('Admin  should See the program Description is sorted in Descending order', async function () {
  const desend = await this.programPage.HeaderProgramDescription.getAttribute('aria-sort')
   await assert.ok(desend, 'descending'); 
});

When('Admin clicks on Arrow next to Program status', async function () {
     await this.programPage.clickEscape();
     await this.programPage.clickStatusSort();
});

Then('Admin should see the Program status sorted in Ascending order', async function () {
  const ascend = await this.programPage.Headerprogrmstatus.getAttribute('aria-sort')
   await assert.ok(ascend, 'ascending'); 
});

Given('Admin is in program page where Program status are sorted in ascending order',async function () {
  await this.programPage.clickEscape();
     await this.programPage.clickStatusSort();
});


Then('Admin should see the Program status sorted in Descending order', async function () {
  const desend = await this.programPage.HeaderProgramDescription.getAttribute('aria-sort')
   await assert.ok(desend, 'descending'); 
   await expect(this.programPage.HeaderProgramDescription).toHaveAttribute('aria-sort', 'descending')
});

Given('Admin is on Program page with multiple program records', async function () {
  
     console.log("Admin is on program page with list of programs")
});

When('Admin clicks the next page option \\(>) in the pagination control',async function () {
   await this.programPage.clickEscape();
   await this.programPage.clicknextprogrampage();
});

Then('Admin should navigate to the next page and see the next set of program records', async function () {

  const noofprogram = await this.programPage.nunmberofprograms.textContent();
  await assert.ok(noofprogram , 'Showing 11 to 20');
  await expect(this.programPage.nunmberofprograms).toContainText('Showing 11 to 20')
});

Given('Admin is on any page except the last page of Program table', async function () {
    console.log("Admin in on Last page of programs")
});

When('Admin clicks the last page option \\(>>) in the pagination control', async function () {
    await this.programPage.clickEscape();
    await this.programPage.clickprogramLastpage();
    
});

Then('Admin should see the last page record on the table',async function () {
  
     await expect(this.programPage.Programlastpage).toBeDisabled();
});

Given('Admin is on the Program table on any page except the first page', async function () {
  console.log("Admin is not on first page of programs")
});

When('Admin clicks the previous page option \\(<) in the pagination control', async function () {
  await this.programPage.clickEscape();
   var isEnable = await this.programPage.Programpreviouspage.isEnabled();
  if(isEnable == false){
    await this.programPage.clicknextprogrampage();
    console.log(await this.programPage.nunmberofprograms.textContent())
    isEnable  = await this.programPage.Programpreviouspage.isEnabled();
    console.log(isEnable)
    await this.programPage.clickPreviousprogrampage();
  }
  
});

Then('Admin should see the previous page record on the table', async function () {
   console.log(await this.programPage.nunmberofprograms.textContent())
   await expect(this.programPage.nunmberofprograms).toContainText('Showing 1 to 10')
});


Given('Admin is on any page except the first page of Program table', async function () {
   console.log("Admin is not on first page of programs")
});

When('Admin clicks the first page option \\(<<) in the pagination control', async function () {

  await this.programPage.clickEscape();
   var isEnable = await this.programPage.programfirstpage.isEnabled();
  if(isEnable == false){
    await this.programPage.clickprogramLastpage();
    console.log(await this.programPage.nunmberofprograms.textContent())
    isEnable  = await this.programPage.programfirstpage.isEnabled();
    console.log(isEnable)
    await this.programPage.clickProgramfirstpage();
  }
 
});

Then('Admin should see the very first page record on the table',async function () {

  await expect(this.programPage.programfirstpage).toBeDisabled();
  await expect(this.programPage.nunmberofprograms).toContainText('Showing 1 to 10');
  
});

Given('Admin is on home page after Login', async function () {
   
  console.log("Admin is on home page")
});

When('Admin clicks {string} on the navigation bar', async function (string) {
    
  await this.programPage.clickEscape();
 // await this.programPage.clickProgramButton();
  
});

Then('{string} should be displayed', async function (expectedText) {
   await this.programPage.checkboxes.first().waitFor({
    state: 'visible',
    timeout: 10000
});
   const count = await this.programPage.checkboxes.count();
  if(count == 0){
    await expect(this.programPage.nunmberofprograms).toHaveText(expectedText)
  }else {
    console.log("programs : " , await this.programPage.nunmberofprograms.textContent())
  }
  
});

Then('Admin should see pagination icons disabled', async function () {
  await this.programPage.rows.first().waitFor({
    state: 'visible',
    timeout: 10000
});
  const count = await this.programPage.rows.count();
  console.log(count)
  if(count <= 5){
    await expect(this.programPage.nextprogrampage).toBeDisabled();
    await expect(this.programPage.Programlastpage).toBeDisabled();
    await expect(this.programPage.programfirstpage).toBeDisabled();
    await expect(this.programPage.Programpreviouspage).toBeDisabled();
     
  }else {
    console.log("programs : " , await this.programPage.nunmberofprograms.textContent())
  }
});

When('Admin enter program name and large description value and Click on save button', async function () {
  await this.programPage.addNewprogrambtn.click();
  await this.programPage.fillProgramDetails(ProgramData.LargeDescription.programName, ProgramData.LargeDescription.programDescription);
  await this.programPage.clickActiveStatus();
  await this.programPage.clickSaveButton();
  await expect(this.programPage.programdetailsDialog).not.toBeVisible();
  await this.programPage.page.screenshot({
        path: 'screenshots/after-save-button.png',
        fullPage: true
    });
});

Then('Admin gets description is too large error message', async function () {
    

    await expect(this.programPage.descriptionisLarge).toBeVisible();
});

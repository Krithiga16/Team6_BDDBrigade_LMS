const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { expect } = require('playwright/test');
const datasetBatch = JSON.parse(JSON.stringify(require('../../utils/batchTestData.json')));

Given('Admin is on the login page', async function(){
    await this.loginPage.navigateToLoginPage(this.baseUrl);
    
})
When ('Admin enters login credentials and clicks on the login button', async function(){
    await this.loginPage.loginWithCredentials(datasetBatch.username,datasetBatch.password);
    await this.loginPage.clickLoginButton();
})
Then ('Admin should be logged in successfully', async function(){
    assert.equal(await this.batchPage.getpagetitle(), datasetBatch.pageTitle)
})

Given('Admin is on home page after Login for Batch Module', async function(){
    console.log('Admin is in Home Page');
})
When ('Admin clicks Batch on the navigation bar', async function(){
    await this.batchPage.clickBatchMenu();
})
Then ('Admin should be in the Manage Batch Page', {timeout:20000}, async function(){
    const isVisible = await this.batchPage.verifyManageBatchPage();
    expect(isVisible).toBe(true)
})

Then ('Admin should see sub menu in menu bar as Add New Batch', async function(){
    assert.equal(await this.batchPage.verifyAddNewBatchMenu(), datasetBatch.addBatchMenu);

})
//Background: Admin navigates to Add new batch dialog box after logged in
Given('Admin has logged into LMS application', async function(){
    await this.loginPage.navigateToLoginPage(this.baseUrl);
    await this.loginPage.loginWithCredentials(datasetBatch.username,datasetBatch.password);
    await this.loginPage.clickLoginButton();
})
When('Admin clicks Batch menu and selects Add New Batch option', async function(){
    await this.batchPage.clickBatchMenu();
    await this.batchPage.clickAddNewBatch();
})
Then('Admin is able to see Batch Details dialog', async function(){
    assert.equal(await this.batchPage.verifyBatchDetailsDialog(), true);
})

//Scenario: Batch name suffix accepts only numbers
Given('Admin is on Batch details dialog box', async function(){
    console.log(await this.batchPage.viewBatchDetailsTitle()+ ' dialog is displayed')
})
When('Admin enters alphabets in batch name suffix box', async function(){
    await this.batchPage.enterBatchName(datasetBatch.batchNameAlphabet);
})
Then('Admin should get error message below the text box of respective field', async function(){
    assert.equal(await this.batchPage.errMsg_BatchNameSuffix(), datasetBatch.errMsgBatchSuffix);
})
//Scenario: Add new batch only with mandatory fields
When('Admin enters the data only to the mandatory fields and clicks save button', async function(){
    await this.batchPage.selectBatchProgram(datasetBatch.batchProgram)
    await this.batchPage.enterBatchName(datasetBatch.batchName);
    await this.batchPage.selectBatchStatus();
    await this.batchPage.enterNumOfClass(datasetBatch.noOfClass);
    await this.batchPage.clickSaveBtn();
})
Then('Admin should get a successful message', async function(){
    assert.equal(await this.batchPage.viewAddBatchSuccess(), datasetBatch.addBatchSuccess);
    assert.equal(await this.batchPage.viewBatchCreatedMsg(), datasetBatch.batchCreateMsg);
})

//Scenario: Add new batch with all fields
When('Admin enters the data in all fields and clicks save button', async function(){
    await this.batchPage.selectBatchProgram(datasetBatch.batchProgram)
    await this.batchPage.enterBatchName(datasetBatch.batchName1);
    await this.batchPage.enterBatchDesc(datasetBatch.batchDesc);
    await this.batchPage.selectBatchStatus();
    await this.batchPage.enterNumOfClass(datasetBatch.noOfClass);
    await this.batchPage.clickSaveBtn();
})
Then('Admin should see the added batch in the Data Table', async function(){
    await this.batchPage.searchBatch(datasetBatch.batchProgram+'_'+datasetBatch.batchName1);
    const isbatchFound = await this.batchPage.batchTableSearch(datasetBatch.batchProgram+'_'+datasetBatch.batchName1)
    expect(isbatchFound).toBe(true)    
})

//Scenario: Add new batch with leaving space in mandatory field - Program Name
When('Admin leaves Program Name field blank enters value in other fields and click save', async function(){
    await this.batchPage.enterBatchName(datasetBatch.batchName);
    await this.batchPage.selectBatchStatus();
    await this.batchPage.enterNumOfClass(datasetBatch.noOfClass);
    await this.batchPage.clickSaveBtn();
})
Then('Admin should get error message for Program Name field', async function(){
    assert.equal(await this.batchPage.viewMandatoryFldMsg(), datasetBatch.programFldErrMsg);
})

//Scenario: Add new batch with leaving space in mandatory field - Batch Name
When('Admin leaves Batch Name field blank enters value in other fields and click save', async function(){
    await this.batchPage.selectBatchProgram(datasetBatch.batchProgram)
    await this.batchPage.selectBatchStatus();
    await this.batchPage.enterNumOfClass(datasetBatch.noOfClass);
    await this.batchPage.clickSaveBtn();
})
Then('Admin should get error message for Batch Name field', async function(){
    assert.equal(await this.batchPage.viewMandatoryFldMsg(), datasetBatch.batchFldErrMsg);
})
//Scenario: Add new batch with leaving space in mandatory field - Status
When('Admin leaves Status field blank enters value in other fields and click save', async function(){
    await this.batchPage.selectBatchProgram(datasetBatch.batchProgram)
    await this.batchPage.enterBatchName(datasetBatch.batchName);
    await this.batchPage.enterNumOfClass(datasetBatch.noOfClass);
    await this.batchPage.clickSaveBtn();
})
Then('Admin should get error message for Status field', async function(){
    assert.equal(await this.batchPage.viewMandatoryFldMsg(), datasetBatch.statusFldErrMsg);
})
//Scenario: Add new batch with leaving space in mandatory field - Number of Classes
When('Admin leaves Number of Classes field blank enters value in other fields and click save', async function(){
    await this.batchPage.selectBatchProgram(datasetBatch.batchProgram)
    await this.batchPage.enterBatchName(datasetBatch.batchName);
    await this.batchPage.selectBatchStatus();
    await this.batchPage.clickSaveBtn();
})
Then('Admin should get error message for Number of Classes field', async function(){
    assert.equal(await this.batchPage.viewMandatoryFldMsg(), datasetBatch.classesFldErrMsg);
})
//Batch name Prefix cannot be edited
Then ('Admin sees the Batch Prefix field is disabled', {timeout:20000}, async function(){
    expect(await this.batchPage.batchProgEditable()).toBe(false)
})
//Scenario: Cancel Button functionality
When('Admin enters the valid data to all the mandatory fields and click cancel button', async function(){
    await this.batchPage.selectBatchProgram(datasetBatch.batchProgram)
    await this.batchPage.enterBatchName(datasetBatch.batchName);
    await this.batchPage.selectBatchStatus();
    await this.batchPage.enterNumOfClass(datasetBatch.noOfClass);
    await this.batchPage.clickCancelBtn();
})
Then('Admin should see the batch details popup closes without creating any batch', {timeout:20000}, async function(){

    var isVisibleBatchDialog = await this.batchPage.verifyBatchDetailsDialog_NotVisible();
    assert.equal(isVisibleBatchDialog,false);
    await this.batchPage.searchBatch(datasetBatch.batchProgram+'_'+datasetBatch.batchName);
    assert.equal(await this.batchPage.verifyBatchNotCreated(), datasetBatch.noBatchEntry);
})

//Scenario: Program name appears as batch prefix
When('Admin selects program name present in the dropdown', async function(){
    await this.batchPage.selectBatchProgram(datasetBatch.batchProgram)
})
Then('Admin should see selected program name in the batch name prefix box', async function(){
    assert.equal(await this.batchPage.getBatchProgramName(), datasetBatch.batchProgram);
})
//Scenario: Close icon functionality
When('Admin clicks on the close icon', async function(){
    await this.batchPage.clickCloseBtn();
})
Then('Batch details pop up closes', async function(){
    var isVisibleBatchDialog1 = await this.batchPage.verifyBatchDetailsDialog_NotVisible();
    assert.equal(isVisibleBatchDialog1,false);
})

//Edit Batch
//Background
When('Admin clicks Batch menu', async function(){
    await this.batchPage.clickBatchMenu();
    await this.batchPage.clickAddNewBatch();
    await this.batchPage.clickCloseBtn();    
})

//Scenario: Edit icon functionality
Given('Admin is on the Manage Batch page', async function () {
    console.log('Admin is in Manage Batch Page')
})
When('Admin clicks the edit icon', {timeout:20000}, async function(){
    await this.batchPage.searchBatch(datasetBatch.batchProgram+'_'+datasetBatch.batchName);
    await this.batchPage.clickEditBtn();
})

//Batch Name value disabled
Then('Admin should see batch name value field is disabled for editing', async function(){
    assert.equal(await this.batchPage.batchNameFldDisabled_EditBatch(),true);
})

//Validate editing description and No. of classes fields with invalid data in the pop up
When('Admin Updates any fields with invalid data and click save button', async function(){
    await this.batchPage.enterBatchDesc(datasetBatch.invalidDesc);
    await this.batchPage.clickSaveBtn();
})
Then('Admin should get a error message under the respective field', async function(){
    assert.equal(await this.batchPage.viewMandatoryFldMsg(), datasetBatch.descFldErrMsg);    
})
//Cancel Button Functionality
Given('Admin is on Batch details dialog box for editing', async function(){
    await this.batchPage.searchBatch(datasetBatch.batchProgram+'_'+datasetBatch.batchName);
    await this.batchPage.clickEditBtn();
})
When('Admin clicks cancel button after updating with valid data', async function(){
    await this.batchPage.selectBatchProgram(datasetBatch.batchProgram2)
    await this.batchPage.enterBatchName(datasetBatch.batchName2);
    await this.batchPage.enterNumOfClass(datasetBatch.noOfClass2);
    await this.batchPage.clickCancelBtn();    
})
Then('Admin should see the batch details popup closes without editing the batch',{timeout:20000}, async function(){
    var isBatchDialogVisible = await this.batchPage.verifyBatchDetailsDialog_NotVisible();
    assert.equal(isBatchDialogVisible,false);
    await this.batchPage.searchBatch(datasetBatch.batchProgram2+'_'+datasetBatch.batchName2);
    assert.equal(await this.batchPage.verifyBatchNotCreated(), datasetBatch.noBatchEntry);
})

//Successful Batch Update
When ('Admin clicks save button after updating with valid data', async function(){
    await this.batchPage.selectBatchProgram(datasetBatch.batchProgram2)
    await this.batchPage.enterBatchName(datasetBatch.batchName2);
    await this.batchPage.enterNumOfClass(datasetBatch.noOfClass2);
    await this.batchPage.clickSaveBtn();
})
Then('Admin should get a successful message for editing the batch', async function(){
    assert.equal(await this.batchPage.viewAddBatchSuccess(), datasetBatch.addBatchSuccess);
    assert.equal(await this.batchPage.viewBatchCreatedMsg(), datasetBatch.batchEditMsg);    
})

//Display Delete Confirmation
When ('Admin clicks the delete Icon on any row', async function(){
    await this.batchPage.searchBatch(datasetBatch.batchProgram2+'_'+datasetBatch.batchName2);
    await this.batchPage.clickDeleteBtn();
})
Then ('Admin should see the confirm alert box with yes and no button', async function(){
    assert.equal(await this.batchPage.viewDeleteConfirmDialog(), 'Confirm');
    expect(await this.batchPage.confirmDialogBtns()).toContain('No');
    expect(await this.batchPage.confirmDialogBtns()).toContain('Yes');
})

//Cancel batch deletion
Given ('Admin is on the batch confirm popup page', async function(){
    await this.batchPage.searchBatch(datasetBatch.batchProgram2+'_'+datasetBatch.batchName2);
    await this.batchPage.clickDeleteBtn();    
})
When('Admin clicks no button after clicking delete icon', async function(){
    await this.batchPage.clickNoBtn();
})
Then ('Admin should see the alert box closed and the batch is not deleted',{timeout:20000}, async function(){
    var isConfirmDialogVisible = await this.batchPage.confirmDialogDisplay();
    assert.equal(isConfirmDialogVisible,false);
    if (await this.batchPage.batchCnt_ManageBatch() == 1){
        console.log("Batch is not deleted on clicking No in Confirm dialog")
    }
})
//Alert Box Close icon functionality
When('Admin clicks on the close icon in confirm popup page', async function(){
    await this.batchPage.clickDialogCloseBtn();
})
Then ('Admin should see the alert box closed',{timeout:20000},async function(){
    var isConfirmDialogVisible = await this.batchPage.confirmDialogDisplay();
    assert.equal(isConfirmDialogVisible,false);
})
//Delete batch Successfully
When ('Admin clicks yes button after clicking delete icon', async function(){
    await this.batchPage.clickYesBtn();
})
Then('Admin should see the successful message and the batch should be deleted',{timeout:20000}, async function(){
    assert.equal(await this.batchPage.viewAddBatchSuccess(), datasetBatch.addBatchSuccess);
    assert.equal(await this.batchPage.viewBatchCreatedMsg(), datasetBatch.batchDelMsg); 
    await this.batchPage.searchBatch(datasetBatch.batchProgram2+'_'+datasetBatch.batchName2); 
    assert.equal(await this.batchPage.verifyBatchNotCreated(), datasetBatch.noBatchEntry);  
})


//*****************UI******************************* */
//BackGround
When('Admin clicks Batch menu for UI', async function(){
    await this.batchPage.clickBatchMenu();
})
//Scenario: Batch name field is displayed
When('Admin clicks on Add New batch under the batch menu bar', async function(){
    await this.batchPage.clickAddNewBatch();   
})
Then('Admin should see the batch name field in the Batch Details', async function(){
    expect(await this.batchPage.batchProgNameVisible()).toBe(true)
    expect(await this.batchPage.batchNameVisible()).toBe(true)    
})
//Scenario: Number of Classes field is displayed
Then('Admin should see the number of classes field', async function(){
    expect(await this.batchPage.batchClassesVisible()).toBe(true)
})
//Scenario: Description field is displayed
Then('Admin should see the description field', async function(){
    expect(await this.batchPage.batchDescVisible()).toBe(true)
})
//Scenario: Program Name dropdown is displayed
Then('Admin should see the Program Name field with dropdown', async function(){
    expect(await this.batchPage.programNameVisible()).toBe(true)
    expect(await this.batchPage.programListVisible()).toBe(true)
})
//Scenario: Status radio buttons are displayed
Then('Admin should see the status radio button', async function(){
    const {activeVisible, inactiveVisible} = await this.batchPage.radioBtnsVisible();

    await expect(activeVisible).toBe(true);
    await expect(inactiveVisible).toBe(true);

})
//******************Manage Batch Page UI Validations******************************** */
//Batch page heading is displayed
Then('Admin should see the Manage Batch Heading', async function(){
    expect(await this.batchPage.manageBatchHeaderName()).toEqual(datasetBatch.manageBatchHeading)
})
//Presence of disabled Delete Icon
Then('Admin should see the disabled Delete Icon under the header',{timeout:20000}, async function(){
    const {deleteBtnDisableH,deleteBtnVisibleH} = await this.batchPage.deleteBtnHeaderSection()
    expect(deleteBtnDisableH).toBe(true);
    expect(deleteBtnVisibleH).toBe(true);

})

//Pagination controls are displayed
Then('Admin should see the pagination controls under the data table',{timeout:20000}, async function(){
    expect(await this.batchPage.paginatorVisible()).toBe(true)
    const {tableBoxY, paginatorBoxY} = await this.batchPage.paginatorPosition()
    expect(paginatorBoxY).toBeGreaterThan(tableBoxY)

})
//Edit icon is displayed
Then('Admin should see the edit icon in each row', async function(){
    expect(await this.batchPage.editIconEachRow()).toBeGreaterThan(0)
})
//Delete icon is displayed
Then('Admin should see the delete icon in each row', async function(){
    expect(await this.batchPage.deleteIconEachRow()).toBeGreaterThan(0)
})

//Checkbox is displayed for each row
Then('Admin should see the checkbox in each row', async function(){
    expect(await this.batchPage.checkboxEachRow()).toBeGreaterThan(0)
})

//Datatable headers are displayed
Then('Admin should see the datatable headers', async function(){
    const actualHeaders = await this.batchPage.getBatchTblHeaders()
    expect(actualHeaders).toEqual(datasetBatch.batchTableHeaders)
})

//Checkbox is displayed in the table header
Then('Admin should see the checkbox in the datatable header row', async function(){
    expect(await this.batchPage.chkBoxHeaderVisible()).toBe(true)
})

//Sort icon presence in the table header
Then('Admin should see the sort icon next to all Datatable headers', async function(){
    expect(await this.batchPage.sortIconHeader()).toEqual(5)
})

//Search Bar Presence
Then ('Admin should see the Search Bar above the data table in Manage Batch Page', async function(){
    expect(await this.batchPage.searchBarVisible()).toBe(true)
    const {dTableBoxY, searchBarBoxY} = await this.batchPage.searchBarPosition()
    expect(searchBarBoxY).toBeLessThan(dTableBoxY)
})

//Add New Batch dialog is displayed
Then('Admin should see the Batch Details dialog box', async function(){
    expect(await this.batchPage.verifyBatchDetailsDialog()).toBe(true);    
})

/******************************Search Bar Validations********************** */
//Search by Batch name
When('Admin enters the batch name in the search box',async function(){
    await this.batchPage.searchBatch(datasetBatch.batchProgram+'_'+datasetBatch.batchName1)
})
Then('Admin should see the filtered batch details based on the batch name in the data table',async function(){
    expect(await this.batchPage.batchCnt_ManageBatch()).toBeGreaterThan(0)
    const isBatchFound = await this.batchPage.batchTableSearch(datasetBatch.batchProgram+'_'+datasetBatch.batchName1)
    expect(isBatchFound).toBe(true)
})
//Search by Batch description
When('Admin enters the batch description in the search box',async function(){
    await this.batchPage.searchBatch(datasetBatch.batchDesc)
})

Then('Admin should see the filtered batch details based on the batch description in the data table',async function(){
    expect(await this.batchPage.batchCnt_ManageBatch()).toBeGreaterThan(0)
    const isBatchFound = await this.batchPage.batchTableSearch(datasetBatch.batchProgram+'_'+datasetBatch.batchName1)
    expect(isBatchFound).toBe(true)
})

//Search by program name
When('Admin enters the Program name in the search box',async function(){
    await this.batchPage.searchBatch(datasetBatch.batchProgram)
})

Then('Admin should see the filtered batch details based on the program name in the data table',async function(){
    expect(await this.batchPage.batchCnt_ManageBatch()).toBeGreaterThan(0)
    const isBatchFound = await this.batchPage.batchTableSearch(datasetBatch.batchProgram+'_'+datasetBatch.batchName1)
    expect(isBatchFound).toBe(true)
})

//Search by number of classes
When('Admin enters the number of classes in search box',async function(){
    await this.batchPage.searchBatch(datasetBatch.noOfClass)
})

Then('Admin should see the filtered batch details based on the number of classes in the data table',async function(){
    expect(await this.batchPage.batchCnt_ManageBatch()).toBeGreaterThan(0)
    const isBatchFound = await this.batchPage.batchTableSearch(datasetBatch.batchProgram+'_'+datasetBatch.batchName1)
    expect(isBatchFound).toBe(true)
})

//Search by Non-existing batch name
When('Admin enters the non existing batch name in search box',async function(){
    await this.batchPage.searchBatch(datasetBatch.nonexistBatch)
})

Then('Admin should see no results displayed',async function(){
    expect(await this.batchPage.batchCnt_ManageBatch()).toBeGreaterThan(0)
    const isBatchFound = await this.batchPage.batchTableSearch(datasetBatch.nonexistBatch)
    expect(isBatchFound).toBe(false)
})

//Search by batch status
When('Admin enters the batch status in the search text box',async function(){
    await this.batchPage.searchBatch(datasetBatch.batchStatus)
})

Then('Admin should see the filtered batches by batch status in the data table',async function(){
    expect(await this.batchPage.batchCnt_ManageBatch()).toBeGreaterThan(0)
    const isBatchFound = await this.batchPage.batchTableSearch(datasetBatch.batchProgram+'_'+datasetBatch.batchName1)
    expect(isBatchFound).toBe(true)
})

/**************************Multiple Batch Deletion*************************** */
//Select multiple batch
When ('Admin selects more than one batch by clicking on the checkbox', async function(){
    await this.batchPage.searchBatch(datasetBatch.batchProgram)
    await this.batchPage.chkboxHeaderClick();
})
Then ('Admin should see the Delete box enabled under manage batch', async function(){
    const {deleteBtnDisableH,deleteBtnVisibleH} = await this.batchPage.deleteBtnHeaderSection()
    expect(deleteBtnDisableH).toBe(false);    
})

//Delete Multiple Batches
When('Admin selects more than one branch and clicks Delete button under Manage Page header', async function(){
    await this.batchPage.searchBatch(datasetBatch.batchProgram)
    await this.batchPage.chkboxHeaderClick();
    await this.batchPage.deleteBtnHeaderClick();
})
Then('Admin lands on Confirmation form', async function(){
    var isDelConfirmDialog = await this.batchPage.confirmDialogDisplay()
    expect(isDelConfirmDialog).toBe(true)
})

/************************ Pagination Controls ******************************* */
//Next Page Navigation - Pagination
When('Admin clicks the next page option > in the pagination control', async function(){
    await this.batchPage.nextPageBtnClick();
})
Then('Admin should see the Next Page', async function(){
    expect(await this.batchPage.getCurrentPage()).toContain(datasetBatch.nextPageTxt)
})
//Previous Page Navigation
Given('Admin is in the second page of the Manage Batch page', async function(){
    await this.batchPage.pageNumClick(2);
})
When('Admin clicks the Previous page < button', async function(){
    await this.batchPage.prevPageBtnClick();
})
Then('Admin should see the first page', async function(){
    expect(await this.batchPage.getCurrentPage()).toContain(datasetBatch.firstPageTxt)
})
//First Page Navigation
Given('Admin is in the third page of the Manage Batch page', async function(){
    await this.batchPage.pageNumClick(3);
})
When('Admin clicks first page button << in pagination controls', async function(){
    await this.batchPage.firstPageBtnClick();
})
//Previous page arrow disabled on first page
When('Admin clicks first page link on the data table', async function(){
    await this.batchPage.pageNumClick(1);
})
Then ('Admin should see the Previous arrow < disabled', async function(){
    const isprevPageBtnDisabled = await this.batchPage.prevPageBtnDisabled();
    expect(isprevPageBtnDisabled).toBe(true)    
})
//First page arrow disabled on first page
Then('Admin should see the First page arrow << disabled', async function(){
    const isfirstPageBtnDisabled = await this.batchPage.firstPageBtnDisabled();
    expect(isfirstPageBtnDisabled).toBe(true)
})
//Next page arrow enabled on first page
Given('Admin is in the last page of the data table', async function(){
    await this.batchPage.lastPageBtnClick();
})
When('Admin clicks first page button', async function(){
    await this.batchPage.firstPageBtnClick();
})
Then('Admin should see Next arrow > enabled', async function(){
    const isnextPageBtnDisable = await this.batchPage.nextPageBtnDisabled();
    expect(isnextPageBtnDisable).toBe(false)    
})
//Last page arrow enabled on first page
Then('Admin should see Last page arrow >> enabled', async function(){
    const islastPageBtnDisabled = await this.batchPage.lastPageBtnDisabled();
    expect(islastPageBtnDisabled).toBe(false)    
})
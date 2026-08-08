class BatchPage {
    constructor (page){
        this.page = page;
        this.batchMenu = page.getByText('Batch', { exact: true });
        this.manageBatchTitle = page.getByText('Manage Batch', { exact: true })
        this.addNewBatchMenu = page.getByRole('menuitem')
        this.batchDetailsDialog = page.locator("div[role='dialog']")
        this.batchDetailsTitle = page.locator("span[class*='p-dialog-title']")
        this.batchName = page.locator('#batchName:visible')
        this.errMsgBatchSuffix = page.locator('#text-danger')
        this.batchDescEle = page.locator('#batchDescription')
        this.batchStatus_Active = page.locator('[ng-reflect-input-id="Active"]')
        this.batchStatus_Inactive = page.locator('[ng-reflect-input-id="Inactive"]')
        this.batchClasses = page.locator("#batchNoOfClasses")
        this.batchProgramFld = page.locator('input[placeholder="Select or type a program"]')
        this.batchProgDD = page.locator('button[class*="p-autocomplete-dropdown"]')
        this.programList = page.locator('ul[role="listbox"]')
        this.batchProgram = page.getByRole('option')
        this.saveBtnBatch = page.getByText('Save')
        this.cancelBtnBatch = page.getByText('Cancel')
        this.closeBtn = page.locator('[class*="p-dialog-header-close-icon"]')
        this.mandatoryMsgFld = page.locator('small[class*="p-invalid"]')
        this.toastSummary = page.locator('.p-toast-summary')
        this.toastDetails = page.locator('.p-toast-detail')
        this.searchFld = page.locator('input[id="filterGlobal"]')
        this.paginator = page.locator('.p-paginator-current')
        this.batchPrefix = page.locator('#batchProg')
        this.editBtn = page.locator('span[class*="pi-pencil"]')
        this.deleteBtn = page.locator('div.action').locator('span[class*="pi-trash"]')
        this.confirmDialogBox = page.locator('div[class*="p-confirm-dialog"]')
        this.dialogTitle = page.locator('span[class*="p-dialog-title"]')
        this.dialogBtns = page.locator('span[class*="p-button-label"]')
        this.btnReject = page.locator('button[class*="p-confirm-dialog-reject"]')
        this.btnAccept = page.locator('button[class*="p-confirm-dialog-accept"]')
        this.batchTable = page.locator('tbody[class="p-datatable-tbody"]')
    }

    async goToURL(){
        await this.page.goto('https://lms-frontend-hackathon-6dcccb9dd0fa.herokuapp.com/');
    }

    async loginUser(){
        await this.page.getByRole('textbox', {name: 'User'}).fill('lmshackathon@gmail.com');
        await this.page.getByRole('textbox', {name: 'Password'}).fill('lmsAug@2026');
        await this.page.getByRole('combobox', {name: /Select the role/i}).click();
        await this.page.getByRole('option', {name: 'Admin', exact: false}).click();
        await this.page.getByRole('button', {name: 'Login'}).click();
    }

    async getpagetitle(){
        return await this.page.title();
   }
    async clickBatchMenu(){
        await this.batchMenu.click();
    }

    async verifyManageBatchPage(){
        return await this.manageBatchTitle.isVisible();
    }

    async verifyAddNewBatchMenu(){
        return await this.addNewBatchMenu.innerText();      
    }

    async clickAddNewBatch(){
        await this.addNewBatchMenu.click();
        await this.batchDetailsDialog.waitFor(); 
    }

    async verifyBatchDetailsDialog(){
        return await this.batchDetailsDialog.isVisible();
    }

    async viewBatchDetailsTitle(){
        return await this.batchDetailsTitle.innerText();
    }

    async enterBatchName(batchName){
        await this.batchName.fill(batchName);
    }

    async errMsg_BatchNameSuffix(){
        return await this.errMsgBatchSuffix.innerText();
    }

    async selectBatchStatus(){
        await this.batchStatus_Active.click();
    }

    async enterBatchDesc(batchDesc){
        await this.batchDescEle.fill(batchDesc)
    }

    async enterNumOfClass(noOfClass){
        await this.batchClasses.fill(noOfClass);
    }

    async selectBatchProgram(batchProgram){
        await this.batchProgramFld.fill(batchProgram);
        await this.batchProgram.click();
    }

    async clickSaveBtn(){
        await this.saveBtnBatch.click();
    }

    async clickCancelBtn(){
        await this.cancelBtnBatch.click();
        await this.page.waitForTimeout(3000);
    }

    async clickCloseBtn(){
        await this.closeBtn.click();
    }

    async viewMandatoryFldMsg(){
        return await this.mandatoryMsgFld.innerText();
    }

    async viewBatchCreatedMsg(){
        return await this.toastDetails.innerText();
    }

    async viewAddBatchSuccess(){
        return await this.toastSummary.innerText();
    }

    async verifyBatchDetailsDialog_NotVisible(){
        try {
            await this.batchDetailsDialog.waitFor({ state: 'visible', timeout: 3000 });
            return true;
        } catch (e) {
            return false;
        }
    }

    async searchBatch(batchNameToSearch){
        await this.searchFld.fill(batchNameToSearch);
        await this.page.waitForTimeout(3000);
    }

    async verifyBatchNotCreated(){
        return await this.paginator.innerText();       
    }

    async getBatchProgramName(){
        return await this.batchPrefix.getAttribute('ng-reflect-model');
    }

    async clickEditBtn(){
        await this.editBtn.click();
    }

    async batchNameFldDisabled_EditBatch(){
        return await this.batchName.isDisabled();
    }

    async clickDeleteBtn(){
        await this.deleteBtn.click();
    }

    async viewDeleteConfirmDialog(){
        return await this.dialogTitle.innerText()
    }

    async confirmDialogBtns(){
        return await this.dialogBtns.allInnerTexts()
    }

    async clickNoBtn(){
        await this.btnReject.click();
        await this.page.waitForTimeout(3000);
    }

    async clickYesBtn(){
        await this.btnAccept.click();
    }

    async confirmDialogDisplay(){
        try {
            await this.confirmDialogBox.waitFor({ state: 'visible', timeout: 3000 });
            return true;
        } catch (e) {
            return false;
        }
    }
    async batchCnt_ManageBatch(){
        return await this.batchTable.count();
    }

    async batchProgNameVisible(){
        return await this.batchPrefix.isVisible()
    }

    async batchNameVisible(){
        return await this.batchName.isVisible()
    }

    async batchDescVisible(){
        return await this.batchDescEle.isVisible()
    }

    async batchClassesVisible(){
        return await this.batchClasses.isVisible()
    }

    async radioBtnsVisible(){
        const activeVisible = await this.batchStatus_Active.isVisible()
        const inactiveVisible = await this.batchStatus_Inactive.isVisible()
        return {activeVisible, inactiveVisible}
    }

    async programNameVisible(){
        return await this.batchProgramFld.isVisible()
    }

    async programListVisible(){
        await this.batchProgDD.click();
        return await this.programList.isVisible()
    }


}
module.exports = BatchPage;
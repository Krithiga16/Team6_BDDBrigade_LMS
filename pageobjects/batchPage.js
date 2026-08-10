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
        this.dialogCloseBtn = page.locator('.p-dialog-header-close')
        this.mandatoryMsgFld = page.locator('small[class*="p-invalid"]')
        this.toastSummary = page.locator('.p-toast-summary')
        this.toastDetails = page.locator('.p-toast-detail')
        this.searchFld = page.locator('input[id="filterGlobal"]')
        this.paginator = page.locator('.p-paginator-current')
        this.batchPrefix = page.locator('#batchProg')
        this.editBtn = page.locator('tbody tr span[class*="pi-pencil"]')
        this.deleteBtn = page.locator('div.action').locator('span[class*="pi-trash"]')
        this.chkboxBtn = page.locator('tbody tr p-tablecheckbox')
        this.confirmDialogBox = page.locator('div[class*="p-confirm-dialog"]')
        this.dialogTitle = page.locator('span[class*="p-dialog-title"]')
        this.dialogBtns = page.locator('span[class*="p-button-label"]')
        this.btnReject = page.locator('button[class*="p-confirm-dialog-reject"]')
        this.btnAccept = page.locator('button[class*="p-confirm-dialog-accept"]')
        this.batchTable = page.locator('tbody[class="p-datatable-tbody"]')
        this.manageBatchHeader = page.locator('mat-card-title')
        this.headerDeleteBtn = page.locator('.mat-card-title').locator('button[class*="p-button-danger"]')
        this.dataTableBatch = page.locator('div[class*="p-datatable-wrapper"]')
        this.paginatorSection = page.locator('div[class*="p-paginator"]')
        this.tableHeaders = page.locator('thead tr th')
        this.chkboxHeader = page.locator('thead tr th p-tableheadercheckbox')
        this.sortIcon = page.locator('thead p-sorticon')
        this.batchNameTable = page.locator('//tbody/tr/td[2]')
        this.firstPageBtn = page.locator('.p-paginator-first')
        this.prevPageBtn = page.locator('.p-paginator-prev')
        this.nextPageBtn = page.locator('.p-paginator-next')
        this.lastPageBtn = page.locator('.p-paginator-last')
        this.pageNumBtn = page.locator('.p-paginator-page')
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
        await this.page.waitForTimeout(2000)
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
        await this.page.waitForTimeout(2000);
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

    async clickDialogCloseBtn(){
        await this.dialogCloseBtn.click();
    }
    async confirmDialogDisplay(){
        await this.page.waitForTimeout(2000);
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

    async batchProgEditable(){
        return await this.batchPrefix.isEditable()
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

    async deleteBtnHeaderSection(){
        const deleteBtnDisableH = await this.headerDeleteBtn.isDisabled();
        const deleteBtnVisibleH = await this.headerDeleteBtn.isVisible();
        return {deleteBtnDisableH,deleteBtnVisibleH};
    }

    async deleteBtnHeaderClick(){
        await this.headerDeleteBtn.click();
    }

    async paginatorVisible(){
       return await this.paginatorSection.isVisible();
    }

    async paginatorPosition(){
        await this.dataTableBatch.waitFor({state: 'visible'})
        await this.paginatorSection.waitFor({state: 'visible'})
        const tableBox = await this.dataTableBatch.boundingBox();
        const paginatorBox = await this.paginatorSection.boundingBox();
        const tableBoxY = tableBox.y;
        const paginatorBoxY = paginatorBox.y
        return {tableBoxY, paginatorBoxY}
    }

    async searchBarPosition(){
        const dTableBox = await this.dataTableBatch.boundingBox();
        const searchBarBox = await this.searchFld.boundingBox();
        const dTableBoxY = dTableBox.y;
        const searchBarBoxY = searchBarBox.y;
        return {dTableBoxY, searchBarBoxY}
    }

    async editIconEachRow(){
        return await this.editBtn.count()
    }

    async deleteIconEachRow(){
        return await this.deleteBtn.count()
    }

    async checkboxEachRow(){
        return await this.chkboxBtn.count()
    }

    async getBatchTblHeaders(){
        const headerVal = await this.tableHeaders.allInnerTexts();
        const actualHeaders = headerVal.slice(1).map(a=>a.trim());
        return actualHeaders;
    }

    async chkBoxHeaderVisible(){
        return await this.chkboxHeader.isVisible();
    }

    async chkboxHeaderClick(){
        await this.chkboxHeader.click();
    }

    async sortIconHeader(){
        return await this.sortIcon.count()
    }

    async searchBarVisible(){
        return await this.searchFld.isVisible();
    }
    async manageBatchHeaderName(){
        const manageBatchVal = (await this.manageBatchHeader.innerText()).trim()
        return manageBatchVal
    }

    async batchTableSearch(batchSearch){
        const batchCells = await this.batchNameTable
        const allBatchNames = await batchCells.allInnerTexts();
        return allBatchNames.some(name => name.trim() === batchSearch);
    }

    async firstPageBtnClick(){
        await this.firstPageBtn.click();
    }
    async prevPageBtnClick(){
        await this.prevPageBtn.click();
    }
    async nextPageBtnClick(){
        await this.nextPageBtn.click();
    }
    async lastPageBtnClick(){
        await this.lastPageBtn.click();
    }

    async firstPageBtnDisabled(){
        const firstPageDisable = await this.firstPageBtn.isDisabled();
        return firstPageDisable;
    }
    async prevPageBtnDisabled(){
        const prevPageDisable = await this.prevPageBtn.isDisabled();
        return prevPageDisable;
    }
    async nextPageBtnDisabled(){
        const nextPageDisable = await this.nextPageBtn.isDisabled();
        return nextPageDisable;
    }
    async lastPageBtnDisabled(){
        const lastPageDisable = await this.lastPageBtn.isDisabled();
        return lastPageDisable;
    }

    async getCurrentPage(){
        return await this.paginator.innerText();
    }

    async pageNumClick(pageNumber){
        const pageCnt = await this.pageNumBtn.count();
        for(let num=0; num< pageCnt; num++){
            const pageNum = await this.pageNumBtn.nth(num).innerText();
            if(pageNum == pageNumber){
                await this.pageNumBtn.nth(num).click();
            }
        }
    }
}
module.exports = BatchPage;
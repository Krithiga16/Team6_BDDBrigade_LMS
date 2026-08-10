module.exports = class ProgramPage {

    constructor(page) {
        this.page = page;
        this.username = page.getByRole('textbox', { name: 'User' });
        this.Password = page.getByRole('textbox', { name: 'Password' });
        this.roleDropdown = page.getByRole('combobox', { name: /select the role/i });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.programBtn = page.locator('#program');   
        this.programpage = page.locator('.mat-card-title');
        this.manageprogram = page.getByText('Manage Program');
        this.addNewprogrambtn = page.getByRole('menuitem', { name: 'Add New Program' })
        this.bulkDeleteButton  = page.locator("//div[@class='box']//button[@class='p-button-danger p-button p-component p-button-icon-only']");
        //this.serchInput = page.getByPlaceholder('Search...');
        this.searchInput = page.locator('input[placeholder="Search..."]');
        this.Headercheckbox = page.locator("th div[class='p-checkbox p-component']");
        this.HeaderProgramName = page.getByRole('columnheader', { name: 'Program Name' });
        this.HeaderProgramDescription = page.getByRole('columnheader', { name: 'Program Description' });
        this.Headerprogrmstatus = page.getByRole('columnheader', { name: 'Program Status' });
        this.HeaderEditDelete = page.getByRole('columnheader', { name: 'Edit / Delete' });
        this.checkbox = page.locator("//div[@class='p-checkbox-box']");
        this.checkboxes = page.locator('p-tablecheckbox');
        //page.locator('tbody.p-datatable-tbody').getByRole('checkbox');
        //page.locator("//td//div[@class='p-checkbox-box p-component']");
        this.Headersort = page.locator("//th[@role='columnheader']//i[contains(@class , 'p-sortable')]");
        this.programdetailsDialog = page.getByRole('dialog', { name: 'Program Details'});
        this.programDetails = page.locator("//span[text()='Program Details']");
        this.nameTextbox = page.getByRole('textbox', { name: /Name/ });
        this.descriptionTextbox = page.getByRole('textbox', { name: 'Description' });
        this.Statuslable = page.getByText('Status*', { exact: true });
        this.activeRadioButton = page.locator("p-radiobutton[ng-reflect-input-id='Active'] .p-radiobutton-box");
        this.inactiveRadioButton = page.locator("p-radiobutton[ng-reflect-input-id='Inactive'] div[ng-reflect-ng-class='[object Object]'] div[ng-reflect-ng-class='[object Object]']");
        this.cancelButton =  page.getByRole('button', { name: 'Cancel' });
        this.SaveButton = page.getByRole('button', { name: 'Save' });
        this.nameAsterisk = page.locator("//label[text()='Name']//span");
        this.statusAsterisk = page.locator("//lable[text()='Status']//span");
        this.programdetailserrorMessage = page.getByText('Program name is required.');
        this.programXbtn =page.locator("//span[@class='p-dialog-header-close-icon ng-tns-c81-8 pi pi-times']");
        this.programSuccessmsg = page.locator(':text-is("Successful")');
        this.nameErrormsg = page.getByText('This field should start with an alphabet, no special char other than a hyphen and have min 4 char.');
        this.descriptionErrormsg =  page.getByText('This field should start with an alphabet and min 2 char.', { exact: true });
        this.descriptionisLarge = page.getByText("This field description is loo large");
        this.editButton =  page.locator("//button[@id='editProgram']");
        //this.programUpdatemsg =  page.locator('div.p-toast-message-text.ng-tns-c20-13.ng-star-inserted')
        this.deleteButton = page.locator("//button[@id='deleteProgram']")
        this.deleteconfirmDailog = page.locator('.p-confirm-dialog-message');
        this.confirmYesButton = page.locator('.p-confirm-dialog-accept');
        this.confirmNoButton = page.locator('.p-confirm-dialog-reject');
        this.deleteprogramDailogclose =  page.locator('.p-dialog-header-close .pi-times');
        this.programdeletesuccessmsg =  page.locator('.p-toast-summary');
        //page.locator('div.ng-tns-c21-2.p-toast.p-component.p-toast-top-right')
        this.nunmberofprograms = page.locator(".p-paginator-current.ng-star-inserted");
        this.deletealert = page.getByRole('alert');
        this.programNameSort = page.locator("//p-sorticon[@field = 'programName']")
        this.sorticon =  page.locator("//i[@class='p-sortable-column-icon pi pi-fw pi-sort-amount-up-alt']");
        this.sortDownicon = page.locator("//i[@class='p-sortable-column-icon pi pi-fw pi-sort-amount-down']")
        this.DescriptionSort = page.locator("//p-sorticon[@field ='description']");
        this.StatusSort = page.locator("//p-sorticon[@field ='status']");
        this.nextprogrampage = page.locator("//button[@class ='p-paginator-next p-paginator-element p-link p-ripple']");
        this.Programlastpage = page.locator("button.p-paginator-last");
        this.Programpreviouspage = page.locator("button.p-paginator-prev");
        this.programfirstpage = page.locator("button.p-paginator-first");
        this.programpagenumber = page.locator("button.p-paginator-page");
        this.rows = page.locator("//tbody//tr");
    }

    async navigateToLoginPage(url) {
        await this.page.goto(url);
    }

    async enterUsername(username) {

        await this.username.fill(username);
    }

    async enterPassword(password) {
        
        await this.Password.fill(password);
    }

   async selectRole(role) {
    await this.roleDropdown.click();
    await this.page.getByRole('option', { name: role, exact: false }).click();
}

    async clickLoginButton() {
        await this.loginButton.click();
    }

   async getpagetitle(){
    return await this.page.title();
   }

   async isProgramButtonVisible() {
     try {
        await this.programBtn.waitFor({ state: 'visible', timeout: 10000 });
        return true;
    } catch (e) {
        return false;
    }
   };

   async clickProgramButton(){
    await this.programBtn.click();
   
   };

   async getProgramPage(){
       try{
        await this.programpage.waitFor({ state: 'visible', timeout: 10000 });
        return true;
    } catch (e) {
        return false;
    }
   
 }

 async isAddNewProgramButtonVisible() {
    try {
        await this.addNewprogrambtn.waitFor({ state: 'visible', timeout: 10000 });
        return true;
    } catch (e) {
        return false;
    }
   }

   async closeProgramDetailsDialog() {
    await this.programXbtn.click();
}

 async fillProgramDetails(name, description) {
    await this.nameTextbox.fill(name);
    await this.descriptionTextbox.fill(description);

  }

 async clickActiveStatus(){
    await this.activeRadioButton.click();
     // await this.activeRadioButton.check({ force: true });
}

  async clickInactiveButton(){
    await this.inactiveRadioButton.click();
  }

  async clickSaveButton(){
    await this.SaveButton.click();
  }

  async searchProgram(programName) {
    await this.page.keyboard.press('Escape');
  await this.page.locator('.cdk-overlay-backdrop').waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});

  await this.searchInput.fill(programName);
  await this.page.waitForTimeout(500);
}

async isProgramVisible(programName) {
    
  return await this.page.getByText(programName, { exact: true })
  
 }

async clickEditButtonForProgram() {

  await this.editButton.click();
}

get programUpdatemsg() {
  return this.page.locator('.p-toast-message-text');
}

async clickDeletebutton(){

    await this.deleteButton.click();
}

async clickDeleteprogramNobutton(){
    await this.confirmNoButton.click();
}

async clickEscape(){
     await this.page.keyboard.press('Escape');
    await this.page.locator('.cdk-overlay-backdrop, .p-menu-overlay').waitFor({ state: 'hidden', timeout: 3000 }).catch(() => {});
}

async clickdeleteprogramdailog(){
    await this.deleteprogramDailogclose.click();
}

async clickconfirmYesButton(){

    await this.confirmYesButton.click();
}

async selectFirstNCheckboxes(count) {

    await this.page.locator('p-tablecheckbox').first().waitFor({
        state: 'visible',
        timeout: 10000
    });

    const checkboxes = this.page.locator('p-tablecheckbox');

    const checkboxCount = await checkboxes.count();

    console.log("Checkbox count:", checkboxCount);

    const numberToSelect = Math.min(count, checkboxCount);

    for (let i = 0; i < numberToSelect; i++) {
        await checkboxes.nth(i).click({ force: true });
    }
}
async clickBulkDelete(){

    await this.bulkDeleteButton.click();
   
}

async clickprogramNameSort(){

    await this.programNameSort.click();
}

async clickDescriptionSort(){
    await this.DescriptionSort.click();
}

async clickStatusSort(){

    await this.StatusSort.click();
}

async clicknextprogrampage(){

    await this.nextprogrampage.click();
}

async clickprogramLastpage(){

   // await this.Programlastpage.scrollIntoViewIfNeeded();
    await this.Programlastpage.click();
}

async clickPreviousprogrampage(){

    await this.Programpreviouspage.click();
}
async clickProgramfirstpage(){
    await this.programfirstpage.click();
}
}


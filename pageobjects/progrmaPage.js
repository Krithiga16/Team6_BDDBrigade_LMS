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
        this.deleteButton = page.locator("//button[@class='p-button-danger p-button p-component p-button-icon-only']//span[@class='p-button-icon pi pi-trash']");
        this.serchInput = page.getByPlaceholder('Search...');
        this.Headercheckbox = page.locator("th div[class='p-checkbox p-component']");
        this.HeaderProgramName = page.getByRole('columnheader', { name: 'Program Name' });
        this.HeaderProgramDescription = page.getByRole('columnheader', { name: 'Program Description' });
        this.Headerprogrmstatus = page.getByRole('columnheader', { name: 'Program Status' });
        this.HeaderEditDelete = page.getByRole('columnheader', { name: 'Edit / Delete' });
        this.checkbox = page.locator("//div[@class='p-checkbox-box']")
        this.checkboxes = page.locator("//td//div[@role='checkbox']");
        this.Headersort = page.locator("//th[@role='columnheader']//i[contains(@class , 'p-sortable')]");
        this.programdetailsDialog = page.getByRole('dialog', { name: 'Program Details'});
        this.programDetails = page.locator("//span[text()='Program Details']");
        this.nameTextbox =   page.getByLabel('Name*', { exact: true });
        this.descriptionTextbox = page.getByRole('textbox', { name: 'Description' });
        this.Statuslable = page.getByText('Status*', { exact: true });
        this.activeRadioButton = page.locator("//div[text()=' Active ']");
        this.inactiveRadioButton =  page.locator("//div[text()=' Inactive ']");
        this.cancelButton =  page.getByRole('button', { name: 'Cancel' });
        this.SaveButton = page.getByText('Save');
        this.nameAsterisk = page.locator("//label[text()='Name']//span");
        this.statusAsterisk = page.locator("//lable[text()='Status']//span");
        this.programdetailserrorMessage = page.getByText('Program name is required.');
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

}
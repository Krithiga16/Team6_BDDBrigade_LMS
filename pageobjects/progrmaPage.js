module.exports = class ProgramPage {

    constructor(page) {
        this.page = page;
        this.username = page.getByRole('textbox', { name: 'User' });
        this.Password = page.getByRole('textbox', { name: 'Password' });
        this.roleDropdown = page.getByRole('combobox', { name: /select the role/i });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.programBtn = page.locator('#program');   
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

   async viewProgramButton(){
    return await this.programBtn.isVisible();
   
   };
}
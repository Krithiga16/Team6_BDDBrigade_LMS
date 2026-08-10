class loginPage {
    constructor(page) {
        this.page = page;
        this.username = page.getByRole('textbox', { name: 'User' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.passwordlocator =  page.locator('div').filter({ hasText: 'Password *' }).nth(3)
        this.roleDropdown = page.getByText('Select the roleSelect the');
        this.rolePlaceholder = page.getByLabel('Select the role').getByText('Select the role');
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.apptitle = page.getByText('LMS - Learning Management System');
        this.roleSelect = page.getByRole('option', { name: 'Admin' });
        this.companyLogo = this.page.getByRole('img');
        this.userLabel = page.getByText('User');
        this.userAsterisk = this.page.locator('.mat-form-field-required-marker').first();
        this.passwordAsterisk = this.page.locator('.mat-form-field-required-marker').nth(1);
        this.staffOption = page.getByRole('option', { name: 'Staff' });
        this.studentOption = page.getByRole('option', { name: 'Student' });
        this.loginForm = page.locator('mat-card');
        this.loginInstruction = page.getByText('Please login to LMS');
        this.passwordLabel = this.page.locator('label[for="password"]');
        this.inactiveUserMessage = page.getByText('Inactive User : Please contact your administrator.');
        this.specialCharacterError = page.getByText('Inactive User : Please');
        this.usernameError = page.getByText('Please enter your user name');
        this.passwordError = page.getByText('Please enter your password');
        this.invalidCredentialsError = page.getByText('Invalid username and password');
        this.roleerror = page.getByText('Please select your Role');
        this.inavalidroleerror = page.getByText('Please select correct role');

    }

     async navigateToLoginPage(url) {
        await this.page.goto(url);
        await this.page.waitForLoadState('networkidle');
    }

    async navigateToInvalidURL(invalidUrl) {
    await this.page.goto(invalidUrl);
   }

    async invalidPageDisplayed() {
    return await this.page.locator('iframe').contentFrame().getByText('There\'s nothing here, yet.').isVisible();
  }

  async invalidRoleLogin(){
    await this.roleDropdown.click();
    await this.staffOption.click();
  }

  async loginWithCredentials(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.roleDropdown.click();
    await this.roleSelect.click();
  }

  async enterUsername(username) {
        await this.username.fill(username);
    }

    async enterPassword(password) { 
        await this.password.fill(password);
    }

  async clickLoginButton() {
    await this.loginBtn.click();
  }

  async selectRole() {
    await this.roleDropdown.click();
    await this.roleSelect.click();
  }

   async getpagetitle(){
    return await this.page.title();
   }

   async isLoginButtonVisible() {
        return await this.loginBtn.isVisible();
    }


    async verifyHTTPResponse(expectedStatus) {
    const response = await this.page.goto(this.invalidUrl);
    const actualStatus = response.status();
    console.log("HTTP Status Code:", actualStatus);
    return actualStatus >= expectedStatus;
    }
 
    async getapptitle(){
    return await this.apptitle.textContent();
    }

   async verifyCompanyLogo() {
    return await this.companyLogo.isVisible();
}

async loginUsingKeyboard(username, password) {
    await this.username.fill(username);
    await this.username.press('Tab');
    await this.password.fill(password);
    await this.password.press('Tab');
    await this.page.waitForTimeout(5000);
    await this.page.keyboard.press('Enter');
    await this.page.keyboard.press('Enter');
    await this.page.keyboard.press('Tab');
    await this.page.keyboard.press('Enter');
}

async loginUsingMouse(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.roleDropdown.click();
    await this.roleSelect.click();
    await this.loginBtn.click();
}

}

module.exports = {loginPage};

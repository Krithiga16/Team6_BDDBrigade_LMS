class logoutPage {
    constructor(page) {
        this.page = page;
        this.ogoutbtn = page.locator('#Logout');   

        
    }

    async clickLogoutButton() {
    await this.page.waitForTimeout(5000);
    await this.logoutBtn.click();
  }

  async getLoginPageTitle(){
    return await this.page.title();
   }

}

module.exports = {logoutPage};
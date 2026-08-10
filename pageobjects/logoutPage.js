class logoutPage {
    constructor(page) {
        this.page = page;
         this.logoutButton = page.locator('#logout'); 
        
    }
    
    async clickLogoutButton() {
    await this.logoutButton.waitFor({ state: 'visible' });
    await this.logoutButton.click();
  }

}

module.exports = {logoutPage};
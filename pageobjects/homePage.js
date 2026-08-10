class homePage {
    constructor(page) {
        this.page = page;
        this.Pagetitle = page.getByText('LMS - Learning Management');
        this.navigationBar = page.locator('mat-toolbar');
        this.homeButton = page.locator('#dashboard');
        this.programButton = page.locator('#program');
        this.batchButton = page.getByRole('button', { name: 'Batch' });
        this.logoutButton = page.locator('#logout');
        this.welcomeMessage = page.getByText('Welcome Lmshackathon@gmail.com');
        this.role = page.getByText('ADMIN');
        this.barChart = page.locator('canvas.chartjs-render-monitor').first();
        this.userCountlist = this.page.locator('div.value[routerlink="/user"]');
        this.userCount = this.userCountlist.locator('div.top');
        this.stafflist = this.page.locator('div.value').filter({ hasText: 'Staff' });
        this.staffCount = this.stafflist.locator('div.top');
        this.programCountlist = this.page.locator('div.value[routerlink="/program"]');
        this.programCount = this.programCountlist.locator('div.top');
        this.batchCountlist = this.page.locator('div.value[routerlink="/batch"]');
        this.batchCount = this.batchCountlist.locator('div.top');
        this.staffDataTable = page.locator('.mat-table');
        this.staffTableHeaders = page.locator('mat-header-cell');
     

    }

    async isTitleAtTopLeft() {
        const box = await this.Pagetitle.boundingBox();
        return box && box.x < 100 && box.y < 100;
    }

    async getFirstNavigationText() {
        return await this.navigationBar.locator('button').first().textContent();
    }

    async getSecondNavigationText() {
        return await this.navigationBar.locator('button').nth(1).textContent();
    }

    async getThirdNavigationText() {
    return await this.navigationBar.locator('button').nth(2).textContent();
    }

    async getFourthNavigationText() {
    return await this.navigationBar.locator('button').nth(3).textContent();
    }


    async getWelcomeMessage() {
        return await this.welcomeMessage.textContent();
    }

    async getByRole(){
        return await this.role.textContent();
    }

    async isBarChartVisible() {
        return await this.barChart.isVisible();
    }

    async getUserCount() {
    await this.userCount.waitFor({ state: 'visible' });
    const count = await this.userCount.textContent();
    return Number(count.trim());
    }

    async getStaffCount() {
        await this.programCount.waitFor({ state: 'visible' });
        await this.page.waitForTimeout(2000);
        const count = await this.staffCount.textContent();
        return Number(count.trim());
    }

    async getProgramCount() {
        await this.programCount.waitFor({ state: 'visible' });
        await this.page.waitForTimeout(2000);
        const count = await this.programCount.textContent();
        console.log('Raw Program Count:', count);
        return Number(count.trim());
   }

   async getBatchCount() {
    await this.batchCount.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(2000);
    const count = await this.batchCount.textContent();
    return Number(count.trim());
}

}

module.exports = {homePage};
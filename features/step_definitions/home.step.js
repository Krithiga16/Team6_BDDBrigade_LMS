const {Given, When, Then ,setDefaultTimeout } = require('@cucumber/cucumber');
const assert = require('assert');
const datajson = JSON.parse(JSON.stringify(require('../../utils/loginTestData.json')));
const tablejson = JSON.parse(JSON.stringify(require('../../utils/homeTestData.json')));
const { expect } = require('@playwright/test');


//@LMSTitle
Then('Admin should see {string} as title', async function (expectedText) {
  const pagetitle = await this.homePage.Pagetitle.textContent();
    assert.equal(pagetitle, expectedText);
});

//@TitleAlignment
Then('LMS title should be on the top left corner of page', async function () {
    const TitleTopLeft = await this.homePage.isTitleAtTopLeft();
    assert.equal(TitleTopLeft, true);
});

//@LMStitleSpelling
Then('Admin should see correct spelling and space in LMS title', async function () {
  const pagetitle = await this.homePage.Pagetitle.textContent();
  assert.equal(pagetitle, ' LMS - Learning Management System ');
});

//@FirstHome
Then('Admin should see Home in the 1st place', async function () {
    const firstNavigationItem = await this.homePage.getFirstNavigationText();
    assert.equal(firstNavigationItem.trim(), 'Home');
    console.log("first navigation item :" +firstNavigationItem);
});

//@program
Then('Admin should see program in the 2nd place', async function () {

    const secondNavigationItem = await this.homePage.getSecondNavigationText();
    assert.equal(secondNavigationItem.trim(), 'Program');
    console.log("second navigation item :" +secondNavigationItem);
});

//@ThirdBatch
Then('Admin should see batch in the 3rd place', async function () {
    const thirdNavigationItem = await this.homePage.getThirdNavigationText();
    assert.equal(thirdNavigationItem.trim(), 'Batch');
    console.log("Third navigation item :" +thirdNavigationItem);
});

//@FourthLogout
Then('Admin should see logout in the 4th place', async function () {
    const fourthNavigationItem = await this.homePage.getFourthNavigationText();
    assert.equal(fourthNavigationItem.trim(), 'Logout');
    console.log("Fourth navigation item :" +fourthNavigationItem);
});

//@WelcomeMessage
Then('Admin should see welcome message with user name and role', async function () {
    await expect(this.homePage.welcomeMessage).toBeVisible();
    await expect(this.homePage.role).toBeVisible();
    const welcomemessage = await this.homePage.getWelcomeMessage();
    console.log("Message is:" +welcomemessage);
    const role = await this.homePage.getByRole();
    console.log("Role is :" +role);
});

//@BarChartPresence
Then('Admin should see bar chart for Active and inactive user', async function () {
     const box = await this.homePage.barChart.boundingBox();
     assert.ok(box, 'Bar chart is not displayed');
});

//@UserCount
Then('Admin should see user count', async function () {
    const userCount = await this.homePage.getUserCount();
      console.log('User Count:', userCount);
      assert.ok( Number.isInteger(userCount) && userCount >= 0, 'User count is not displayed');
});

//@StaffCount
Then('Admin should see staff count', async function () {
    const staffCount = await this.homePage.getStaffCount();
    console.log('Staff Count:', staffCount);
    assert.ok( Number.isInteger(staffCount) && staffCount >= 0,'Staff count is not displayed');
});

//@ProgramCount
Then('Admin should see program count', async function () {
    const programCount = await this.homePage.getProgramCount();
    console.log('Program Count:', programCount);
    assert.ok(Number.isInteger(programCount) && programCount >= 0,'Program count is not displayed');
});

//@batchcount
Then('Admin should see batch count', async function () {
    const batchCount = await this.homePage.getBatchCount();
     console.log('batch Count:', batchCount);
     assert.ok(Number.isInteger(batchCount) && batchCount >=0,'Batch count is not displayed');
});

//@StaffTable
Then('Admin should see the Staff Data table', async function () {
    await expect(this.homePage.staffDataTable).toBeVisible();
});

 //@TableHeaders
Then('Admin should see the headers #, First Name, Last Name, Phone in the Staff Data table', async function () {
          const headers = tablejson.staffTableHeaders;
          await expect(this.homePage.staffDataTable).toBeVisible();
        await expect(this.homePage.staffTableHeaders).toHaveText(headers);
});

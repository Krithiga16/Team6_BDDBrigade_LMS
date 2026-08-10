const {Given, When, Then ,setDefaultTimeout } = require('@cucumber/cucumber');
const assert = require('assert');
const datajson = JSON.parse(JSON.stringify(require('../../utils/loginTestData.json')));
const { request, expect } = require('@playwright/test');

setDefaultTimeout(60 * 1000);

//@validURL
Given('Admin is on the browser', async function () {
 console.log('Admin is on the browser');
});

When('Admin enters the Valid LMS app URL', async function () {
    await this.loginPage.navigateToLoginPage(this.baseUrl);
});

Then('Admin should land on the login page', async function () {
    const isVisible = await this.loginPage.isLoginButtonVisible();
    assert.equal(isVisible, true);
    console.log('Admin is on the login page');
});

//@InvalidURL
When('Admin enters the invalid LMS app URL.', async function () {
    await this.loginPage.navigateToInvalidURL(datajson.invalidUrl);
});

Then('Admin should receive error message', async function () {
    const errorMessage = await this.loginPage.invalidPageDisplayed();
    assert.equal(errorMessage, true);
});

//@BrokenLink
When('Admin enters the Valid LMS app URL.', async function () {
    this.response = await this.page.goto(this.baseUrl);
});

Then('Admin should not see a broken link', async function () { 
    const status = this.response.status();
    console.log('HTTP Response:', status);
    expect(status).toBeLessThan(400);
});

//@ApplicationLogo
Then('Admin should see Application Logo', async function () {
         const isLogoVisible = await this.loginPage.verifyCompanyLogo();
         assert.equal(isLogoVisible, true);
});

//@LoginInstructionMessage
Then('Admin should see {string}', async function (string) {
    await expect(this.loginPage.loginInstruction).toHaveText(string);
});

//@InputFieldsDisplayed
Then('Admin should see two text field', async function () {
   await expect(this.loginPage.username).toBeVisible();
   await expect(this.loginPage.password).toBeVisible();
});

//@RoleDropdown
Then('Admin should see one dropdown', async function () {
    await expect(this.loginPage.roleDropdown).toBeVisible();
});

//@UserTextPresence
Then('Admin should see {string} in the first text field', async function (expectedText) {
   await expect(this.loginPage.userLabel).toHaveText(expectedText);
});

//@PasswordTextPresence
Then('Admin should see {string} in the second text field', async function (expectedText) {
     const placeholder = await this.loginPage.password.getAttribute('data-placeholder');
    assert.equal(placeholder, expectedText);
});


//@AsteriskUserPresence
Then('Admin should see asterisk mark symbol next to user text', async function () {
   await expect(this.loginPage.userAsterisk).toHaveText('*');
   await expect(this.loginPage.userAsterisk).toBeVisible();
});

//@AsteriskPasswordPresence
Then('Admin should see asterisk mark symbol next to password text', async function () {
    await expect(this.loginPage.passwordAsterisk).toHaveText('*');
    await expect(this.loginPage.passwordAsterisk).toBeVisible();
});

//@PlaceholderPresence 
Then('Admin should see {string} placeholder in dropdown', async function (expectedText) {
       await expect(this.loginPage.rolePlaceholder).toHaveText(expectedText);
});

//@DropdownOptions
Then('Admin should see {string}, {string} ,{string} options in dropdown', async function (string, string2, string3) {
  await this.loginPage.roleDropdown.click();
  await expect(this.loginPage.roleSelect).toHaveText(string);
  await expect(this.loginPage.staffOption).toHaveText(string2);
  await expect(this.loginPage.studentOption).toHaveText(string3);
});

//@LoginFormPresence
Then('Admin should see login form on the centre of the page', async function () {
console.log(await this.loginPage.loginForm.count());
});

//@LoginButtonDisplayed
Then('Admin should see login button', async function () {    
const isLoginButtonVisible = await this.loginPage.isLoginButtonVisible();
assert.equal(isLoginButtonVisible, true);
});


//@UserTextColour
Then('Admin should see user text in gray color', async function () {

    const color = await this.loginPage.userLabel.evaluate(
        (element) => window.getComputedStyle(element).color
    );
    console.log("User placeholder color:", color);
    await expect(color).toBe('rgba(0, 0, 0, 0.54)');
});

//@passwordTextColour
Then('Admin should see password text in gray color', async function () {

    const color = await this.loginPage.passwordLabel.evaluate(
        (element) => window.getComputedStyle(element).color
    );
    console.log("Password placeholder color:", color);
    await expect(color).toBe('rgba(0, 0, 0, 0.54)');
});

//@SuccessfulLogin
Given('Admin is on login Page', async function () {
 await this.loginPage.navigateToLoginPage(this.baseUrl);
});

When('Admin clicks login in button after entering  a valid credential', async function () {
  await this.loginPage.loginWithCredentials(datajson.username, datajson.password);
  await this.loginPage.clickLoginButton();
});

Then('Admin should land on home page', async function () {
  assert.equal(await this.loginPage.getpagetitle(), datajson.PageTitle);
  console.log('Admin is on the home page');
});

//@splcharacLogin
When('Admin clicks login in button after entering special character in username', async function () {
    await this.loginPage.enterUsername(datajson.splcharusername);
    await this.loginPage.enterPassword(datajson.password);
    await this.loginPage.selectRole();
    await this.loginPage.clickLoginButton();
});

Then('Admin should see a Error message {string}', async function (expectedText) {
  const errorMessage = await this.loginPage.specialCharacterError.textContent();
  assert.equal(errorMessage.trim(), expectedText);
});

//@EmptyUserNameLogin
When('Admin has entered only the password and selected a role', async function () {
  await this.loginPage.enterPassword(datajson.password);
  await this.loginPage.selectRole();
  await this.loginPage.clickLoginButton();
});

Then('Admin should see Errormessage {string}', async function (string) {
  await expect(this.loginPage.usernameError).toHaveText(string);
});

//@EmptyPasswordLogin
When('Admin has entered only the username and selected a role', async function () {
  await this.loginPage.enterUsername(datajson.username);
  await this.loginPage.selectRole();
  await this.loginPage.clickLoginButton();
});

Then('Admin should see the Error message {string}', async function (string) {
    await expect(this.loginPage.passwordError).toHaveText(string);
});

 
//@InvalidpasswordLogin
When('Admin clicks login in button after entering valid username , role and wrong password', async function () {
    await this.loginPage.enterUsername(datajson.username);
    await this.loginPage.enterPassword(datajson.WrongPassword);
    await this.loginPage.selectRole();
    await this.loginPage.clickLoginButton();
});

Then('Admin should see Error message {string}', async function (expectedText) {
  await expect(this.loginPage.invalidCredentialsError).toHaveText(expectedText);
  console.log('Error message displayed:', expectedText);
});

//@emptyRoleLogin
When('Admin has entered a valid username and password without selecting a role', async function () {
    await this.loginPage.enterUsername(datajson.username);
    await this.loginPage.enterPassword(datajson.password);
    await this.loginPage.clickLoginButton();
});

Then('Admin should see Error Messge {string}', async function (string) {
  await expect(this.loginPage.roleerror).toContainText(string);
        console.log('Error message displayed:', string);
});

//@Invalidrolelogin
When('Admin clicks login in button after selecting a invalid role and entering valid username ,password', async function () {
    await this.loginPage.enterUsername(datajson.username);
    await this.loginPage.enterPassword(datajson.password);
    await this.loginPage.invalidRoleLogin();
    await this.loginPage.clickLoginButton();
});

Then('Admin should see error Messge {string}', async function (string) {
  await expect(this.loginPage.inavalidroleerror).toContainText(string);
        console.log('Error message displayed:', string);
});

//@KeyboardLogin

When('Admin clicks login in button after entering  a valid credential through keyboard', async function () {
   await this.loginPage.loginUsingKeyboard( datajson.username,datajson.password);
});

//@MouseLogin
When('Admin clicks login in button after entering  a valid credential through mouse', async function () {
  await this.loginPage.loginUsingMouse(datajson.username, datajson.password)
});














  


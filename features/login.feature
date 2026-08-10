@login
Feature: login page validations

@validURL
Scenario: Login page is displayed successfully
    Given Admin is on the browser
    When Admin enters the Valid LMS app URL
    Then Admin should land on the login page

@InvalidURL
Scenario: Access app with invalid URL 
      Given Admin is on the browser
      When Admin enters the invalid LMS app URL.
      Then Admin should receive error message
      
@ApplicationLogo
Scenario: Application Logo is displayed
   Given Admin is on the browser
   When Admin enters the Valid LMS app URL 
   Then Admin should see Application Logo
  
@LoginInstructionMessage   
Scenario:Login instruction message is displayed
   Given Admin is on the browser
   When Admin enters the Valid LMS app URL 
   Then Admin should see "Please login to LMS application"

@InputFieldsDisplayed
Scenario: Input fields are displayed
      Given Admin is on the browser
      When Admin enters the Valid LMS app URL
      Then Admin should see two text field

@RoleDropdown
Scenario: Role dropdown is displayed
      Given Admin is on the browser
      When Admin enters the Valid LMS app URL
      Then Admin should see one dropdown

@UserTextPresence
Scenario:Text presence on the first field
     Given Admin is on the browser
      When Admin enters the Valid LMS app URL
      Then Admin should see "User" in the first text field

@PasswordTextPresence
Scenario:Text presence on the second field
     Given Admin is on the browser
      When Admin enters the Valid LMS app URL
      Then Admin should see "Password" in the second text field

@AsteriskUserPresence
Scenario:Asterisk is displayed for user field
      Given Admin is on the browser
      When Admin enters the Valid LMS app URL
      Then Admin should see asterisk mark symbol next to user text

@AsteriskPasswordPresence
Scenario:Asterisk is displayed for password field
      Given Admin is on the browser
      When Admin enters the Valid LMS app URL
      Then Admin should see asterisk mark symbol next to password text

@PlaceholderPresence      
Scenario:Placeholder presence in dropdown 
      Given Admin is on the browser
      When Admin enters the Valid LMS app URL
      Then Admin should see "Select the role" placeholder in dropdown

@DropdownOptions
Scenario:Dropdown options to select role
      Given Admin is on the browser
      When Admin enters the Valid LMS app URL
      Then Admin should see "Admin", " Staff " ," Student " options in dropdown

@LoginFormPresence
Scenario:Alignment of the login form
      Given Admin is on the browser
      When Admin enters the Valid LMS app URL
      Then Admin should see login form on the centre of the page

@LoginButtonDisplayed
Scenario:Login button is displayed
      Given Admin is on the browser
      When Admin enters the Valid LMS app URL
      Then Admin should see login button 

@UserTextColour
Scenario:User field Placeholder text colour
    Given Admin is on the browser
    When Admin enters the Valid LMS app URL
    Then Admin should see user text in gray color

@passwordTextColour
Scenario:Password field Placeholder text colour
    Given Admin is on the browser
    When Admin enters the Valid LMS app URL
    Then Admin should see password text in gray color

@SuccessfulLogin
Scenario:Successful login with valid credentials
    Given Admin is on login Page
    When Admin clicks login in button after entering  a valid credential
    Then Admin should land on home page 

@splcharacLogin
Scenario: Login with spl charac in user name
    Given Admin is on login Page
    When Admin clicks login in button after entering special character in username
    Then Admin should see a Error message "Inactive User : Please contact Admin for assistance"

@EmptyUserNameLogin
 Scenario: Login attempt with empty username
    Given Admin is on login Page
    When Admin has entered only the password and selected a role
    Then Admin should see Errormessage "Please enter your user name"

@EmptyPasswordLogin
 Scenario: Login attempt with empty password
    Given Admin is on login Page
    When Admin has entered only the username and selected a role
    Then Admin should see the Error message "Please enter your password " 

@InvalidpasswordLogin
 Scenario:Login attempt with wrong password
  Given Admin is on login Page
  When Admin clicks login in button after entering valid username , role and wrong password
  Then Admin should see Error message "Invalid username and password Please try again"

@emptyRoleLogin
  Scenario: Login attempt without selecting any role
  Given Admin is on login Page
  When Admin has entered a valid username and password without selecting a role
  Then Admin should see Error Messge " Please select your Role"

@Invalidrolelogin
   Scenario:Login Attempt with invalid role
    Given Admin is on login Page
    When Admin clicks login in button after selecting a invalid role and entering valid username ,password
    Then Admin should see error Messge "Please select correct role" 

@KeyboardLogin
   Scenario: Login Attempt using Keyboard
   Given Admin is on login Page
   When Admin clicks login in button after entering  a valid credential through keyboard
   Then Admin should land on home page

@MouseLogin
  Scenario: Login Attempt using Mouse
   Given Admin is on login Page
   When Admin clicks login in button after entering  a valid credential through mouse
   Then Admin should land on home page
Feature: Program Module

Background: User logged in to LMS application
Given The user is on the login page
  When Admin clicks login in button after entering  a valid credential
  Then Admin should land on home page

  Scenario: Program page navigation
  Given Admin is on home page after Login
  When Admin clicks Program on the navigation bar
  Then Admin should be navigated to Program page
  
  Scenario: Program-Sub menu displayed
  Given Admin is on home page after Login
  When Admin clicks Program on the navigation bar
  Then Admin should see sub menu in menu bar as "Add New Program"

  Scenario: Program-Sub menu displayed
  Given Admin is on home page after Login
  When Admin clicks Program on the navigation bar
  Then Admin should see elements on program page
  | elements |
  | Manage Program |
  | Delete button |
  | Search bar |
  | search... placeholder text |
  
  @headers
  Scenario: column header name of data table
  Given Admin is on home page after Login
  When Admin clicks Program on the navigation bar
  Then Admin should see data table with column header on the Manage Program Page as elements
  |elements |
  |Program Name|
  | Program Description |
  | Program Status |
  | Edit / Delete |

@Unchecked
Scenario: Checkbox default state - header
  Given Admin is on home page after Login
  When Admin clicks Program on the navigation bar
  Then Admin should see checkbox default state as unchecked beside Program Name column header 

  Scenario: Checkbox default state - datatable each rows
  Given Admin is on home page after Login
   When Admin clicks Program on the navigation bar
   Then Admin should see check box default state as unchecked on the left side in all rows against program name 

Scenario: Sort icon presence
Given Admin is on home page after Login
When Admin clicks Program on the navigation bar
Then Admin should see the sort arrow icon beside to each column header except Edit and Delete 
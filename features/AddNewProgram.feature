Feature: Add new program validation

Background: User logged in to LMS application
Given The user is on the login page
When Admin clicks login in button after entering  a valid credential
And Admin clicks Program on the navigation bar
Then Admin should be navigated to Program page

Scenario: Admin navigates to program page after logged in
Given Admin is on Program page
When Admin clicks on Add New Program under the Program menu bar
Then Admin should see Program Details dialog

Scenario: Mandatory fields indicator
Given Admin is on Program page
When Admin clicks on Add New Program under the Program menu bar
Then Admin should see red  asterisk mark  beside mandatory field Name and status

Scenario: Name field is displayed
Given Admin is on Program page
When Admin clicks on Add New Program under the Program menu bar
Then Admin should see the elements on program details dialog
| elements |
| Program Details |
| name input |
| Description input |
| status |
| Active button |
| Inactive button |

Scenario: Empty form submission
Given Admin is on Program page
When Admin clicks save button without entering mandatory 
Then Admin gets message '<field> is required'

Scenario: cancel button functionality
Given Admin is on Program details dialog box
When Admin clicks Cancel button
Then Admin can see Program Details form disappears 

Scenario: Close button (X) functionality
Given Admin is on Program details dialog box
When Admin clicks X button on program details dialog box
Then Admin can see Program Details form disappears 

Scenario: Add new program with valid details
Given Admin is on Program details dialog box
When Admin enter valid details for mandatory fields and Click on save button
Then Admin gets message Successful Program created

Scenario: Add new program with numeric program name
Given Admin is on Program details dialog box
When Admin enters a numeric value as the Program Name
Then Admin should see error message "This field should start with an alphabet, no special char other than a hyphen and have min 4 char" under program name field

Scenario: Verify added Program is created
Given Admin is on Program page 
When Admin searches with newly created Program Name
Then Admin should see the Records of the newly created Program details

Scenario: Add new program with large description field
Given Admin is on Program details dialog box
When Admin enter program name and large description value and Click on save button
Then Admin gets description is too large error message
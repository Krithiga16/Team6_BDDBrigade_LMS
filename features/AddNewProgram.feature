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

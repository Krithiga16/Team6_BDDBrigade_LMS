Feature: Edit and Delete Program scenrios

Background: Admin navigates to program page after logged in
Given The user is on the login page
When Admin clicks login in button after entering  a valid credential
And Admin clicks Program on the navigation bar
Then Admin should be navigated to Program page

Scenario: Edit icon functionality
Given Admin is on Program page
When Admin clicks on Edit option for particular program
Then Admin should see Program Details dialog

Scenario Outline: Edit Program info
Given Admin is on Program details dialog box
When Admin clicks save button after editing the "<Data>"
Then  Admin should see program update "<success message>"
Examples:
    | Data                 | success message              |
    | program name        | Successful  |
    | Program Description | Successful |

Scenario: Verify edited Program details
Given Admin is on Program page
When Admin searches with newly updated Program Name
Then Admin verifies that the details are correctly updated

#Delete Program

Scenario: Display Delete Confirmation
Given Admin is on Program page
When Admin clicks on delete icon for a program
Then Admin will get confirm deletion dialog box

Scenario: Cancel Program Deletion
Given Admin is on Program Confirm Deletion Page after selecting a program to delete
When Admin clicks on No button 
Then Admin can see Confirmation form disappears

Scenario: Close Delete Confirmation
Given Admin is on Program Confirm Deletion Page after selecting a program to delete
When Admin Click on X button on Program delete dailog
Then Admin can see Confirm Deletion form disappear

Scenario: Deleted Program visibility
Given Admin is on Program Confirm Deletion Page after selecting a program to delete
When  Admin clicks on Yes button on program delete dailog
Then Admin can see 'Successful Program Deleted' message

Scenario: Deleted Program visibility
Given Admin is on Program page
When Admin Searches for Deleted Program name
Then There should be zero results

Scenario: Select multiple programs
Given Admin is on Program page
When Admin selects more than one program by clicking on the checkbox
Then Mulitple delete box under manage program must be enabled

Scenario: Delete Multiple programs
Given Admin is on Program page
When Admin selects more than one program by clicking on the checkbox
Then Admin will see confirm deletion dialog box open

Scenario: Delete selected program
Given Admin is on Confirmation form
When Admin clicks No button on bulk delete confirm dailog box
Then Admin can see Programs are still selected and not deleted

Scenario: Close Multiple deletion confirmation
Given Admin is on Program Confirm Deletion Page after selecting a program to delete
When Admin Click on X button on bulk Program delete dailog
Then Admin can see Confirm Deletion form disappear

Scenario: Delete selected program
Given Admin is on Confirmation form
When Admin clicks on "Yes" button on bulk delete dailog box 
Then Admin can see "Successful  program deleted" message
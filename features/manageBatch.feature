Feature: Manage Batch Validations - Edit and Delete Batch

    Background: Admin navigates to Manage batch page after logged in
        Given Admin has logged into LMS application
        When Admin clicks Batch menu
        Then Admin should be in the Manage Batch Page

    Scenario: Edit icon functionality
        Given Admin is on the Manage Batch page 
        When Admin clicks the edit icon
        Then Admin is able to see Batch Details dialog 

    Scenario: Batch Name value disabled
        When Admin clicks the edit icon
        Then Admin should see batch name value field is disabled for editing

    Scenario: Validate editing description and No. of classes fields with invalid data in the pop up
        Given Admin is on Batch details dialog box for editing
        When Admin Updates any fields with invalid data and click save button
        Then Admin should get a error message under the respective field

    Scenario: Cancel Button Functionality
        Given Admin is on Batch details dialog box for editing
        When Admin clicks cancel button after updating with valid data
        Then Admin should see the batch details popup closes without editing the batch 

    Scenario: Successful Batch Update
        Given Admin is on Batch details dialog box for editing
        When Admin clicks save button after updating with valid data
        Then Admin should get a successful message for editing the batch 

    Scenario: Display Delete Confirmation
        Given Admin is on the Manage Batch page
        When Admin clicks the delete Icon on any row
        Then Admin should see the confirm alert box with yes and no button

    Scenario: Cancel batch deletion
        Given Admin is on the batch confirm popup page
        When Admin clicks no button after clicking delete icon
        Then Admin should see the alert box closed and the batch is not deleted

    Scenario: Delete batch Successfully
        Given Admin is on the batch confirm popup page
        When Admin clicks yes button after clicking delete icon
        Then Admin should see the successful message and the batch should be deleted
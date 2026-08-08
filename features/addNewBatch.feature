Feature: Add New Batch - Functional Validation

    Background: Admin navigates to Add new batch dialog box after logged in
        Given Admin has logged into LMS application
        When Admin clicks Batch menu and selects Add New Batch option
        Then Admin is able to see Batch Details dialog

    Scenario: Batch name suffix accepts only numbers
        Given Admin is on Batch details dialog box
        When Admin enters alphabets in batch name suffix box
        Then Admin should get error message below the text box of respective field

    Scenario: Cancel Button functionality
        When Admin enters the valid data to all the mandatory fields and click cancel button
        Then Admin should see the batch details popup closes without creating any batch

    Scenario: Add new batch only with mandatory fields
        When Admin enters the data only to the mandatory fields and clicks save button
        Then Admin should get a successful message

    Scenario: Add new batch with leaving space in mandatory field - Program Name
        When Admin leaves Program Name field blank enters value in other fields and click save
        Then Admin should get error message for Program Name field

    Scenario: Add new batch with leaving space in mandatory field - Batch Name
        When Admin leaves Batch Name field blank enters value in other fields and click save
        Then Admin should get error message for Batch Name field

    Scenario: Add new batch with leaving space in mandatory field - Status
        When Admin leaves Status field blank enters value in other fields and click save
        Then Admin should get error message for Status field

    Scenario: Add new batch with leaving space in mandatory field - Number of Classes
        When Admin leaves Number of Classes field blank enters value in other fields and click save
        Then Admin should get error message for Number of Classes field

    Scenario: Program name appears as batch prefix
        When Admin selects program name present in the dropdown
        Then Admin should see selected program name in the batch name prefix box

    Scenario: Close icon functionality
        When Admin clicks on the close icon
        Then Batch details pop up closes


Feature: Add New Batch - UI validation

    Background: Admin navigates to Manage batch page after logged in
        Given Admin has logged into LMS application
        When Admin clicks Batch menu for UI
        Then Admin should be in the Manage Batch Page

    Scenario: Batch name field is displayed
        Given Admin is on the Manage Batch page
        When Admin clicks on Add New batch under the batch menu bar
        Then Admin should see the batch name field in the Batch Details 

    Scenario: Number of Classes field is displayed
        When Admin clicks on Add New batch under the batch menu bar
        Then Admin should see the number of classes field

    Scenario: Description field is displayed
        When Admin clicks on Add New batch under the batch menu bar 
        Then Admin should see the description field

    Scenario: Program Name dropdown is displayed   
        When Admin clicks on Add New batch under the batch menu bar 
        Then Admin should see the Program Name field with dropdown

    Scenario: Status radio buttons are displayed
        When Admin clicks on Add New batch under the batch menu bar 
        Then Admin should see the status radio button


Feature: Manage Batch - Search bar validations

    Background: Admin navigates to Manage batch page after logged in
        Given Admin has logged into LMS application
        When Admin clicks Batch menu
        Then Admin should be in the Manage Batch Page

    Scenario: Search by Batch name
        Given Admin is on the Manage Batch page
        When Admin enters the batch name in the search box
        Then Admin should see the filtered batch details based on the batch name in the data table

    Scenario: Search by Batch description
        When Admin enters the batch description in the search box
        Then Admin should see the filtered batch details based on the batch description in the data table

    Scenario: Search by program name
        When Admin enters the Program name in the search box
        Then Admin should see the filtered batch details based on the program name in the data table

    Scenario: Search by number of classes
        When Admin enters the number of classes in search box
        Then Admin should see the filtered batch details based on the number of classes in the data table

    Scenario: Search by Non-existing batch name
        When Admin enters the non existing batch name in search box
        Then Admin should see no results displayed

    Scenario: Search by batch status
        When Admin enters the batch status in the search text box
        Then Admin should see the filtered batches by batch status in the data table

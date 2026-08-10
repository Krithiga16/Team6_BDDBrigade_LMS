Feature: Manage Batch Page - UI validation

    Background: Admin is logged in to LMS Portal
        Given Admin is on the login page
        When Admin enters login credentials and clicks on the login button
        Then Admin should be logged in successfully

    Scenario: Batch page heading is displayed
        When Admin clicks Batch menu
        Then Admin should see the Manage Batch Heading

    Scenario: Presence of disabled Delete Icon
        When Admin clicks Batch menu
        Then Admin should see the disabled Delete Icon under the header

    Scenario: Pagination controls are displayed
        When Admin clicks Batch menu
        Then Admin should see the pagination controls under the data table

    Scenario: Edit icon is displayed
        When Admin clicks Batch menu
        Then Admin should see the edit icon in each row

    Scenario: Delete icon is displayed
        When Admin clicks Batch menu
        Then Admin should see the delete icon in each row

    Scenario: Checkbox is displayed for each row
        When Admin clicks Batch menu
        Then Admin should see the checkbox in each row

    Scenario: Datatable headers are displayed
        When Admin clicks Batch menu
        Then Admin should see the datatable headers

    Scenario: Checkbox is displayed in the table header
        When Admin clicks Batch menu
        Then Admin should see the checkbox in the datatable header row

    Scenario: Sort icon presence
        When Admin clicks Batch menu
        Then Admin should see the sort icon next to all Datatable headers

    Scenario: Search Bar Presence
        When Admin clicks Batch menu
        Then Admin should see the Search Bar above the data table in Manage Batch Page

    Scenario: Add New Batch dialog is displayed
        When Admin clicks Batch menu and selects Add New Batch option
        Then Admin should see the Batch Details dialog box

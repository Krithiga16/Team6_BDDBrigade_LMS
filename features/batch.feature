Feature: Batch Page Validations

    Background: Admin is logged in to LMS Portal
        Given Admin is on the login page
        When Admin enters login credentials and clicks on the login button
        Then Admin should be logged in successfully

    Scenario: Verify Admin is able to view Batch page 
        Given Admin is on home page after Login
        When Admin clicks Batch on the navigation bar
        Then Admin should be in the Manage Batch Page

    Scenario: Verify Batch-sub menu displayed
        Given Admin is on home page after Login
        When Admin clicks Batch on the navigation bar
        Then Admin should see sub menu in menu bar as Add New Batch

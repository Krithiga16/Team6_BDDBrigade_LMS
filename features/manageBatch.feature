Feature: Manage Batch Validations - Edit and Delete Batch and Delete Multiple Batch

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

    Scenario: Alert Box Close icon functionality
        Given Admin is on the batch confirm popup page
        When Admin clicks on the close icon in confirm popup page
        Then Admin should see the alert box closed

    Scenario: Delete batch Successfully
        Given Admin is on the batch confirm popup page
        When Admin clicks yes button after clicking delete icon
        Then Admin should see the successful message and the batch should be deleted

    Scenario: Select multiple batch
        When Admin selects more than one batch by clicking on the checkbox
        Then Admin should see the Delete box enabled under manage batch 

    Scenario: Delete Multiple Batches
        When Admin selects more than one branch and clicks Delete button under Manage Page header
        Then Admin lands on Confirmation form

    Scenario: Next Page Navigation - Pagination
        When Admin clicks the next page option > in the pagination control
        Then Admin should see the Next Page

    Scenario: Previous Page Navigation
        Given Admin is in the second page of the Manage Batch page
        When Admin clicks the Previous page < button
        Then Admin should see the first page 

    Scenario: First Page Navigation
        Given Admin is in the third page of the Manage Batch page
        When Admin clicks first page button << in pagination controls
        Then Admin should see the first page

    Scenario: Previous page arrow disabled on first page
        Given Admin is in the second page of the Manage Batch page
        When Admin clicks first page link on the data table  
        Then Admin should see the Previous arrow < disabled   

    Scenario: First page arrow disabled on first page
        Given Admin is in the third page of the Manage Batch page 
        When Admin clicks first page link on the data table
        Then Admin should see the First page arrow << disabled

    Scenario: Next page arrow enabled on first page
        Given Admin is in the last page of the data table
        When Admin clicks first page button
        Then Admin should see Next arrow > enabled 

    Scenario: Last page arrow enabled on first page
        When Admin clicks first page link on the data table
        Then Admin should see Last page arrow >> enabled

    Scenario: Last Page Navigation
        When Admin clicks the last page option >> in the pagination control
        Then Admin should see the next page > disabled

    Scenario: Sorting of batch name in Ascending order
        When Admin clicks on Arrow next to batch name
        Then Admin should See the batch details sorted by batch Name in Ascending order

    Scenario: Sorting of batch name in Descending order
        Given Admin is in Batch page where Batch names are sorted in ascending order
        When Admin clicks on Arrow next to batch name to check descending
        Then Admin should See the batch Name is sorted in Descending order
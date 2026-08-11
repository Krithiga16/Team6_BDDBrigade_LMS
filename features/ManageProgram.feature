Feature: Manage Program - Sorting 

Background: Admin navigates to program page after logged in
Given The user is on the login page
When Admin clicks login in button after entering  a valid credential
And Admin clicks Program on the navigation bar
Then Admin should be navigated to Program page

Scenario: Sorting of  Program name in Ascending order
Given Admin is on Program page
When Admin clicks on Arrow next to programName
Then Admin should  See the Program Name is sorted in Ascending order

Scenario: Sorting of  Program name in Descending order
Given Admin is in program page where Program names are sorted in ascending order
When Admin clicks on Arrow next to programName
Then Admin should See the Program Name is sorted in Descending order

Scenario: Sorting of  Program Description in Ascending order
Given Admin is on Program page
When Admin clicks on Arrow next to ProgramDescription
Then Admin should See the program Description is sorted in Ascending order

Scenario: Sorting of  Program Description in Descending order
Given Admin is in program page where Program description are sorted in ascending order
When Admin clicks on Arrow next to ProgramDescription
Then Admin  should See the program Description is sorted in Descending order

Scenario: Sorting of program status in Ascending order
Given Admin is on Program page
When Admin clicks on Arrow next to Program status
Then Admin should see the Program status sorted in Ascending order

Scenario: Sorting of Program status in Descending order
Given Admin is in program page where Program status are sorted in ascending order
When Admin clicks on Arrow next to Program status
Then Admin should see the Program status sorted in Descending order
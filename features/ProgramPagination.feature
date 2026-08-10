Feature: Manage Program - Pagination

Background: Admin navigates to program page after logged in
Given The user is on the login page
When Admin clicks login in button after entering  a valid credential
And Admin clicks Program on the navigation bar
Then Admin should be navigated to Program page

Scenario: Next Page Navigation
Given Admin is on Program page with multiple program records
When Admin clicks the next page option (>) in the pagination control
Then Admin should navigate to the next page and see the next set of program records

Scenario: Last Page Navigation
Given Admin is on any page except the last page of Program table
When Admin clicks the last page option (>>) in the pagination control
Then Admin should see the last page record on the table 

Scenario: Previous Page Navigation
Given Admin is on the Program table on any page except the first page
When Admin clicks the previous page option (<) in the pagination control
Then Admin should see the previous page record on the table 

Scenario: First Page Navigation
Given Admin is on any page except the first page of Program table
When Admin clicks the first page option (<<) in the pagination control
Then Admin should see the very first page record on the table 

Scenario: pagination when there are no records
Given Admin is on home page after Login
When Admin clicks "Program" on the navigation bar
Then  "Showing 0 to 0 of 0 entries" should be displayed

Scenario: pagination when there are less than 5 records
Given Admin is on home page after Login
When Admin clicks "Program" on the navigation bar
Then Admin should see pagination icons disabled


@Home
Feature: Home Page Validations

@LMSTitle
Scenario:Title of the LMS
Given Admin is on login Page
When Admin clicks login in button after entering  a valid credential
Then Admin should see " LMS - Learning Management System " as title

@TitleAlignment
Scenario:Title alignment
Given Admin is on login Page
When Admin clicks login in button after entering  a valid credential
Then LMS title should be on the top left corner of page

@LMStitleSpelling
Scenario:LMS title - spelling and space
Given Admin is on login Page
When Admin clicks login in button after entering  a valid credential
Then Admin should see correct spelling and space in LMS title

@FirstHome
Scenario:Navigation bar order - 1st home
Given Admin is on login Page
When Admin clicks login in button after entering  a valid credential
Then Admin should see Home in the 1st place

@program
Scenario:Navigation bar order - 2nd Program
Given Admin is on login Page
When Admin clicks login in button after entering  a valid credential
Then Admin should see program in the 2nd place

@ThirdBatch
Scenario:Navigation bar order  - 3rd  batch
Given Admin is on login Page
When Admin clicks login in button after entering  a valid credential
Then Admin should see batch in the 3rd place

@FourthLogout
Scenario:Navigation bar order - 4th logout
Given Admin is on login Page
When Admin clicks login in button after entering  a valid credential
Then Admin should see logout in the 4th place

@WelcomeMessage
Scenario:Welcome Message is displayed 
Given Admin is on login Page
When Admin clicks login in button after entering  a valid credential
Then Admin should see welcome message with user name and role

@BarChartPresence
Scenario:Bar chart presence
Given Admin is on login Page
When Admin clicks login in button after entering  a valid credential
Then Admin should see bar chart for Active and inactive user

@UserCount
Scenario:User count card presence
Given Admin is on login Page
When Admin clicks login in button after entering  a valid credential
Then Admin should see user count  

@StaffCount
Scenario:Staff count card presence
Given Admin is on login Page
When Admin clicks login in button after entering  a valid credential
Then Admin should see staff count 

@ProgramCount
Scenario:Program count card presence
Given Admin is on login Page
When Admin clicks login in button after entering  a valid credential
Then Admin should see program count

@BatchCount
Scenario:Batch count card presence
Given Admin is on login Page
When Admin clicks login in button after entering  a valid credential
Then Admin should see batch count

@StaffTable
Scenario:Staff Table Presence
Given Admin is on login Page
When Admin clicks login in button after entering  a valid credential
Then Admin should see the Staff Data table

@TableHeaders
Scenario:Staff Table header Presence
Given Admin is on login Page
When Admin clicks login in button after entering  a valid credential
Then Admin should see the headers #, First Name, Last Name, Phone in the Staff Data table



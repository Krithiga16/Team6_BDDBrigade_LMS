@logout
Feature: logout page 

Background: Admin is logged into the application
    Given Admin is on login Page
    When Admin clicks login in button after entering  a valid credential
    Then Admin should land on home page
    
Scenario:Logout function
 Given Admin is in home page
 When Admin clicks on the logout in the menu bar
 Then Admin should be redirected to login page
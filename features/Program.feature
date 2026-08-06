Feature: Program Module

Background: User logged in to LMS application
Given The user is on the login page
  When The user enters valid credentials and clicks on the login button
  Then The user should be logged in successfully

  # Scenario: Program page navigation
  # Given Admin is on home page after Login
  # When Admin clicks Program on the navigation bar
  # Then Admin should be navigated to Program page
  
  # Scenario: Program-Sub menu displayed
  # Given Admin is on home page after Login
  # When Admin clicks Program on the navigation bar
  # Then Admin should see sub menu in menu bar as "Add New Program"

  Scenario: Program-Sub menu displayed
  Given Admin is on home page after Login
  When Admin clicks Program on the navigation bar
  Then Admin should see elements on program page
  | elements |
  | Manage Program |
  | Delete button |
  | Search bar |
  | search... placeholder text |
  
  
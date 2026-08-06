Feature: Program Module

Background: User logged in to LMS application
Given The user is on the login page
  When The user enters valid credentials and clicks on the login button
  Then The user should be logged in successfully

Scenario: Verify that the user is able to view the program 
  Given The user is on Home page
  When The user can able to see program button 
  Then The user should able to view the program button
  
  
  
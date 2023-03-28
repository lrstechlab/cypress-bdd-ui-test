Feature: Automation of test provided by Sogeti

    application Regression
    
    Scenario: Test Case-1 Navigating to Automation Page
    Given I open Sogeti homepage
    When I hover on tab services 
    And clicked on the automation menu
    Then automation screen is displayed
    And "Automation" text is visible in page heading
    And Automation and Services are selected 

  
    Scenario: Test Case-2 filling the contact form
    Given I open Sogeti homepage
    When I hover on tab services
    And clicked on the automation menu
    And Scroll down to contact us form
    And Fill the First Name, Last Name, Email, Phone and Message fields with Random Generated Data
    And click on I agree checkbox
    And Click Submitt Button
    Then The form is submitted and Thank you message is displayed
   
   
    Scenario: Test Case-3 selecting a country specific page
    Given I open Sogeti homepage
    When Click the Worldwide Dropdown link in Page Header
    Then A Country dropdown list is displayed
    And These are the Country specific Sogeti links


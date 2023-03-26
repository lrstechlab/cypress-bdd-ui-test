Feature: Automation of test provided by Sogeti

    application Regression
    
    @Regression
    Scenario: Test Case-1 Navigating to Automation Page
        Given I open Sogeti homepage
        When I hover on tab services 
        And clicked on the automation menu
        Then automation screen is displayed
        And Automation text is visible in page heading
        And Automation and Services are selected 




/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../../support/pageObjects/HomePage";
import AutomationPage from "../../../../support/pageObjects/AutomationPage";


const homePage = new HomePage()
const automationPage = new AutomationPage()

let name
Given('I open Sogeti homepage', () => {
    cy.visit(Cypress.env('url'))
    homePage.getAcceptCookies().click()
})


// I hover on tab services

When('I hover on tab services', function () {
    homePage.getServicesTab().invoke('show')

})

//And clicked on the automation menu
When('clicked on the automation menu', () => {

    cy.contains("Automation").click()

})

Then('automation screen is displayed', () => {
    cy.url().should("include", "services")
    cy.url().should("include", "automation")
})

//*** parameterised this test */
Then('Automation text is visible in page heading', () => {
    automationPage.getPageHeading().should("contain", "Automation")
})

Then('Automation and Services are selected', () => {
    homePage.getServicesTab().invoke('show')
    homePage.getSeletedItem().should("contain", "Automation")
    homePage.getSeletedItem().should("contain", "Services")
})

When('Scroll down to contact us form', function () {
    cy.get(".Form__Title").scrollIntoView().should("contain", "Contact us:")

})

When('Fill the First Name, Last Name, Email, Phone and Message fields with Random Generated Data', function () {

    automationPage.getFirstName().type(generateRandomString(10), { force: true })

    automationPage.getLastName().type(generateRandomString(10), { force: true })

    automationPage.getEmail().type(generateRandomString(10), { force: true })

    automationPage.getPhone().type(generateRandomString(10), { force: true })

    automationPage.getMessage().type(generateRandomString(500), { force: true })

    automationPage.getIagreeCheckbox().check({ force: true })

})

When('click on I agree checkbox', function () {
   automationPage.getIagreeCheckbox().check({ force: true })

})


When('Click Submitt Button', function () {
    automationPage.getSubmittButton().click()
 
 })

 When('The form is submitted and Thank you message is displayed', function () {
    cy.log(" This test can not be automated as as the captcha validation" 
    +"is not possible for automation. in test environment we should disable captcha and provide the test build ")
 
 })
 
//  When Click the Worldwide Dropdown link in Page Header

When('Click the Worldwide Dropdown link in Page Header', function () {
        homePage.getCountrySelection().click()
 
 })




///*** The below function will return Random alphanumeric String with passed length */

 const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

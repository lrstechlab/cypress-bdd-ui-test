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

//*** parameterised this test with dataTable */
Then('{string} text is visible in page heading', function (headingText) {
    automationPage.getPageHeading().should("contain", headingText)
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
        + "is not possible for automation. in test environment we should disable captcha and provide the test build ")

})


When('Click the Worldwide Dropdown link in Page Header', function () {
    homePage.getNavBarCountrySelection().click()

})


Then('A Country dropdown list is displayed', () => {

    homePage.getCountriesList().should("be.visible")
})

//*** parameterised this test with Fixture */
Then('These are the Country specific Sogeti links', () => {
    homePage.getCountriesList().each((e, index, list) => {
        var url = e.prop('href'); //taking the href value i.ee each urls
        cy.log("url captured form Href" + url)
        var texte = e.text().trim() // getting the country name and trimming
        cy.log("countryname Captured from UI" + texte)
        cy.fixture('example.json').then((data) => {
            cy.log("this url is from fixture" + data[texte])
            const domainValue = data[texte]  //getting expected urls from fixture
            expect(domainValue).not.to.be.undefined  // cheking the country name is correct in data in fixture
            expect(domainValue).to.eql(url)  // validating the urls from href is matching with the expected urls from out tets data.

        })

    })

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

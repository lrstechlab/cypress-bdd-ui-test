/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pageObjects/HomePage";
import AutomationPage from "../../pageObjects/AutomationPage";


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

Then('Automation text is visible in page heading', () => {
    automationPage.getPageHeading().should("contain", "Automation")
})

Then('Automation and Services are selected', () => {
    homePage.getServicesTab().invoke('show')
        cy.wait(5000)
        homePage.getSeletedItem().should("contain","Automation")
        homePage.getSeletedItem().should("contain","Services")
})




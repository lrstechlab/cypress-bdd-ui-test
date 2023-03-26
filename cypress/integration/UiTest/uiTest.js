/// <reference types="Cypress"/>

import HomePage from "./pageObjects/HomePage"
import AutomationPage from "./pageObjects/AutomationPage"

describe('my First Test suite',function()
{
    
    it("my first test",function()
    {
        const homepage= new HomePage()
        const automationPage= new AutomationPage()
        cy.viewport(1800,1000)
        cy.visit("https://www.sogeti.com/")
        homepage.getAcceptCookies().click()
        //cy.get('#main-menu > .clearfix > .has-children.level2 > .wrapper > span').click()
    
        homepage.getServicesTab().invoke('show')
        cy.contains("Automation").click()
        cy.url().should("include","services")
        cy.url().should("include","automation")
        automationPage.getPageHeading().should("contain","Automation")
        homepage.getServicesTab().invoke('show')
        cy.wait(5000)
        homepage.getSeletedItem().should("contain","Automation")
        homepage.getSeletedItem().should("contain","Services")
    
    
    //cy.get(has-children).each(($el,index.$list) => {})

    })
})
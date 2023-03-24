/// <reference types="Cypress"/>

describe('my First Test suite',function()
{
    
it("my first test",function()
{

cy.viewport(1800,1000)
cy.visit("https://www.sogeti.com/")
cy.get('.acceptCookie').click()
//cy.get('#main-menu > .clearfix > .has-children.level2 > .wrapper > span').click()

cy.get('div[data-levelname="level2"]').invoke('show')
cy.contains("Automation").click()
cy.url().should("include","services")
cy.url().should("include","automation")
cy.get(".page-heading").should("contain","Automation")
cy.get(".selected").should("contain","Automation")
cy.get(".selected").should("contain","Services")



//cy.get(has-children).each(($el,index.$list) => {})

})

})
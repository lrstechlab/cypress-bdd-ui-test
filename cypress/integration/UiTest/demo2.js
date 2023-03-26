/// <reference types="Cypress" />

describe('My Second Test Suite', function() 
{

it('My FirstTest case',function() {


cy.visit('https://www.sogeti.com/')
cy.log
cy.url().should('be.equal', 'https://www.sogeti.com/');  


})
})

/// <reference types="Cypress"/>

const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }


describe("2nd test",function()
{

it("2ndtestcase",function()
{
    
    cy.viewport(1800,1000)
    cy.visit("https://www.sogeti.com/")
    cy.get('.acceptCookie').click()
        //cy.get('#main-menu > .clearfix > .has-children.level2 > .wrapper > span').click()
    cy.get('div[data-levelname="level2"]').invoke('show')
    cy.contains("Automation").click()
    cy.get(".Form__Title").scrollIntoView().should("contain","Contact us:")

    const randomString = generateRandomString(10); // Generates a random string of length 10

//first Name
    cy.get('input[id="4ff2ed4d-4861-4914-86eb-87dfa65876d8"]').type(generateRandomString(10),{force: true})
//last name
    cy.get('input[id="11ce8b49-5298-491a-aebe-d0900d6f49a7"]').type(generateRandomString(6),{force: true})
//email
    cy.get('input[id="056d8435-4d06-44f3-896a-d7b0bf4d37b2"]').type(generateRandomString(20),{force: true})
//phone
    cy.get('input[id="755aa064-7be2-432b-b8a2-805b5f4f9384"]').type(generateRandomString(10),{force: true})
//message
    cy.get('textarea[id="88459d00-b812-459a-99e4-5dc6eff2aa19"]').type(generateRandomString(102),{force: true})

//clicking on I agreee
    cy.get("[value='I agree']").check({force: true})

    // can not test submission and final welcome message as the captcha validation is not possible for automation.
    // in test environment we should disable captcha and provide the test build.

});

})


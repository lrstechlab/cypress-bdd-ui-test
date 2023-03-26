/// <reference types="Cypress"/>


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
    


    const random= cy.wrap({ sum: fn })
                    .invoke('makeid', 8)
    cy.get("#ff2ed4d-4861-4914-86eb-87dfa65876d8").type("random")
  
    
});
    
const uniqueSeed = Date.now().toString();
const getUniqueId = () => Cypress._.uniqueId(uniqueSeed);

it('uses a unique id', () => {
  const uniqueId = getUniqueId();
  cy.log(uniqueId)
});


function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}


})





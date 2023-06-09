/// <reference types="Cypress" />
import HomePage from "./pageObjects/HomePage"
import AutomationPage from "./pageObjects/AutomationPage"

describe("Test Case 3",function() {

    it("testcase",function()
    {
       const homepage= new HomePage()
       const automationPage= new AutomationPage() 
        cy.log("check this is the value of belgium"+this.data.belgium)
        cy.viewport(1800,1000)
        //1. Navigate to the URL https://www.sogeti.com/

        cy.visit("https://www.sogeti.com/")
        homepage.getAcceptCookies.click()


        //2. Click the Worldwide Dropdown link in Page Header.
        homepage.getCountrySelection.click()
        //3. A Country dropdown list is displayed. These are the Country specific Sogeti links.
        homepage.getCountriesList.should("be.visible")

        //4. Assert that all the Country specific Sogeti links are working.
        
        cy.get("#country-list-id a").then((e)=>{
         cy.log
          var url= e.prop('href');
          cy.log(url)
          cy.visit(url)
          cy.wait(3000)         
      })
      var baseUrl = "https://www.sogeti.fi/"
          cy.log(`Expected to be running on:`);
          cy.log(baseUrl);

      cy.origin("https://www.sogeti.fi/", () => {
              // declare cy.origin command on expected domain
              cy.url().should('contains', "https://www.sogeti.fi/");
              })

    })

})
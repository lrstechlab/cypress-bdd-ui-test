/// <reference types="Cypress" />
import HomePage from "./pageObjects/HomePage"
import AutomationPage from "./pageObjects/AutomationPage"

describe("Test Case 3",function() {

    before(function () {
        // runs once before all tests in the block
        cy.fixture('example').then(function (data) {
          this.data = data
        })
      })

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
        
   

    })

})
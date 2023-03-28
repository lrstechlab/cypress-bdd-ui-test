# sogeti-ui-test


How to run the test:

With testRunner-
1. do npx install
2. you will see node_modules folder generated in your Framework
3. in terminal and pass below command
      node_modules/.bin/cypress open
4. cypress Test runner will start
5. select E2E testing
6. All the browser installed in your machine will be displayed in next screen. Choose the one you want to test your application
7. after selecting the spec will be displayed. Since this is Gherkins based you will see feature file
8. click on the spec
9. The test will begin.
10. to rerun the test either run from the test runner Ui by clicking on rerun button on top right of test runner window or just save your code again.

 
On command Line
To run the test:
npx cypress run

to run in headed mode-

headTest": npm run test --headed

to run with chrome

npm run test --browser chrome
    

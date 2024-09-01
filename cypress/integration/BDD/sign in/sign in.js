/// <reference types="cypress" />​
/// <reference types="cypress-iframe" />​
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
beforeEach( function(){ 
    cy.fixture('example').then(function(data)
    {
        this.data = data 
    });
// cy.wait(3000);
})
// Scenario: Validate sign in with valid credentials
Given ('I open Amazon Ecommerce website', function(){
cy.visit('https://www.amazon.com/')
// cy.visit("https://www.amazon.com/",{headers: {"Accept-Encoding": "gzip, deflate" }});
cy.reload()
})

When ('I click the sign in Button', function(){
cy.wait(3000)
cy.get("div[id='nav-flyout-ya-signin'] span[class='nav-action-inner']").click({ force: true })
})

Then ('I entered a valid email and click on continue', function(){
cy.wait(3000)
cy.get('#ap_email').type(this.data.email);
cy.wait(4000)
cy.get('.a-button-inner > #continue').click({force: true})
cy.wait(5000)
})

When('I entered a valid password', function(){
cy.wait(3000)
cy.get('#ap_password').type(this.data.password);
})

Then ('click sign in', function(){
cy.wait(3000)
cy.get('#signInSubmit').click()
})

Then ('I Validate successful login to my account', function(){
cy.contains('Hello, Adedeji').should('be.visible');
// cy.get('#nameofuser').should('exist')
   })

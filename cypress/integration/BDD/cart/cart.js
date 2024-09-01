/// <reference types="cypress" />​
/// <reference types="cypress-iframe" />​
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
beforeEach( function(){ 
           cy.fixture('example').then(function(data)
    {
        this.data = data 
        
    })
})
// Scenario: Validate product added to cart is same as selected
    Given ('I open Amazon Ecommerce website', function(){
    cy.visit('https://www.amazon.com/')
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
    
    When ('I Validate successful login to my account', function(){
    cy.contains('Hello, Adedeji').should('be.visible');
    // cy.get('#nameofuser').should('exist')
    })
    
    Then ('I click cart', function (){
    cy.get('#nav-cart').click()
    })

Then ('I validate if the products displayed in the cart is same as the products i added to cart', function()
    {
       cy.wait(2000)
       cy.get('#sc-active-cart').contains('NIVEA Lip Care')
    })
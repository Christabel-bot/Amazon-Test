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
// Scenario: Validate sign up with valid credentials
    Given ('I open Amazon Ecommerce website', function(){
    cy.visit('https://www.amazon.com/')
    })

    Then ('I click Hello sign in Button', function(){
    cy.get('#nav-link-accountList').click()
    })


    // When ('I click on sign in Button', function(){
    //     cy.wait(3000)
    //     cy.get('#nav-flyout-ya-signin > a > span').click({ force: true })
    // })

    Then ('I click create your amazon Account', function(){
        cy.wait(3000)
    cy.get('#createAccountSubmit').click() 
    })

    When ('I entered Your Name', function(){
        cy.wait(3000)    
    cy.get('#ap_customer_name').type(this.data.name);
    })

    Then ('I entered a email field', function(){
        cy.wait(3000) 
    cy.get('#ap_email').type(this.data.NewEmail); 
    })  

    When ('I entered a password', function(){
        cy.wait(3000) 
     cy.get('#ap_password').type(this.data.password); 
    })      

    When ('I Re-enter password', function(){
        cy.get('#ap_password_check').type(this.data['Re-enter password']);

    })
    When ('I click on the sign up Button', function(){
        cy.get('#continue').click()
    })

    Then ('I Validate successful sign up to my account', function(){
     cy.contains('Hello, Adedeji').should('be.visible');
    //  cy.get('#nameofuser').should('exist')
    })

    Then ('I Validate unsuccessful sign up to my account', function(){
        cy.contains("There's already an account with this email").should('be.visible');
       //  cy.get('#nameofuser').should('exist')
       })
   
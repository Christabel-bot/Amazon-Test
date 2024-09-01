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
// Scenario: Validate add to cart Process
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
    
    Then ('I click Todays deals', function(){
    cy.wait(3000)
    cy.get('#nav-xshop > a:nth-child(2)').click({force: true})
    })

    When ('I select an item', function(){
    cy.get("div[id='slot-3'] li:nth-child(1)").contains('Ooma Telo VoIP').click({ force: true})
    })

    Then('I click the add to cart button', function () {
        cy.wait(5000)
    cy.get("input[name='submit.addToCart'][aria-label='Add both to Cart']").click()
    })

    Then ('I validate alert "Added to cart"', function(){
    cy.on('window:alert', (str) => {
    expect(str).to.equal('Added to cart')
    })
    })

    // Then('I validate the product price', function () {
    // cy.get("input[name='submit.addToCart'][aria-label='Add both to Cart']").click()
    // cy.wait(4000)
    // cy.wait(10000)
    // var TotalNum = 0
    // cy.wait(5000)
    // cy.get('tr td:nth-child(3)').each(($el, index, $list) => {
    // const total = $el.text()
    // var productTotal = total.trim()
    // TotalNum = Number(TotalNum) + Number(productTotal) 
    // }).then(function (){
    // cy.log(TotalNum)
    // })   
    // cy.get('#totalp').then(function (element) { 
    // const TotalAmount = element.text()
    // expect(Number(TotalAmount)).to.equal(TotalNum)
    // })
    // })



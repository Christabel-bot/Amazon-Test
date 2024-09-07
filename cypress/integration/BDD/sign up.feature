Feature: Amazon Ecommerce test validation​
 Application regression​
@regression @smoke

Scenario: Validate sign up with valid credentials
    Given I open Amazon Ecommerce website 
    Then I click Hello sign in Button 
    Then I click create your amazon Account
    When I entered Your Name
    Then I entered a Email
    When I entered a password
    When I Re-enter password 
    When I click on the sign up Button 
    Then I Validate successful login to my account 


Scenario: Validate unsuccessful sign up with an existing credentials
    Given I open Amazon Ecommerce website 
    Then I click Hello sign in Button 
    Then I click create your amazon Account
    When I entered Your Name
    Then I entered an existing email 
    When I entered a password
    When I Re-enter password 
    When I click on the sign up Button 
    Then I Validate unsuccessful sign up to my account
     



   
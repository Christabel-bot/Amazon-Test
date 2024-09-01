Feature: Amazon Ecommerce test validation​
 Application regression​
@regression @smoke

Scenario: Validate product added to cart is same as selected
    Given I open Amazon Ecommerce website
    When I click the sign in Button
    Then I entered a valid email and click on continue
    When I entered a valid password
    Then click sign in
    When I Validate successful login to my account
    Then I click cart
    Then I validate if the products displayed in the cart is same as the products i added to cart
    
Feature: Amazon Ecommerce test validation​
 Application regression​
@regression @smoke

Scenario: Validate add to cart Process
    Given I open Amazon Ecommerce website
    When I click the sign in Button
    Then I entered a valid email and click on continue
    When I entered a valid password
    Then click sign in
    When I Validate successful login to my account
    Then I click Todays deals
    When I select an item
    Then I click the add to cart button
    Then I validate alert "Added to cart"
    
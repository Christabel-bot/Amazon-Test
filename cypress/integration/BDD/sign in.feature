Feature: Amazon Ecommerce test validation​
 Application regression​
@regression @smoke

Scenario: Validate sign in with valid credentials
    Given I open Amazon Ecommerce website
    When I click the sign in Button
    Then I entered a valid email and click on continue
    When I entered a valid password
    Then click sign in
    Then I Validate successful login to my account
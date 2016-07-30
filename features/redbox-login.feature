Feature: redbox-login.feature

  Scenario: Enter username and password to login page
    Given I open weather angular site
    And I load the login page
    When I enter wrong user name
    And I enter wrong password
    And I click submit
    Then I see an error message
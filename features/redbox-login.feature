Feature: redbox-login.feature

#  Scenario: Enter username and password to login page
#    Given I open weather angular site
#    And I load the login page
#    When I enter wrong user name
#    And I enter wrong password
#    And I click submit
#    Then I see an error message

  @zs
  Scenario: Using angularjs website for a test scenario
    Given I view "https://angularjs.org/" site
    Then I verify github link
    When I enter "Zakir" in basic section
    And I pause the test
    Then I see my message "Hello Zakir!"
# title.feature
Feature: Title check
  I should be able to go to a website
  and check its title

  Scenario: Get the title of webpage
    Given I navigate to the url "http://10.35.96.111:3000/"
    Then I expect the title of the page "React App"
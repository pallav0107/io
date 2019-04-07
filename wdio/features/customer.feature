# customer.feature
Feature: Add Customer
    I should be able to go to a website
    and enter the customer data
    and click on submit

    Scenario: Navigate to customer details page
        Given I go to the url "http://10.35.96.111:3000/"
        When  I click on "Load Customer"
        Then I expect the user is naviageted to the page and title of the page "React App"

    Scenario: Enter customer details and click submit
        Given I go to the url "http://10.35.96.111:3000/"
        When  I click on "Load Customer"
        And   I enter first name "testfirstname"
        And   I enter last name "testlastname"
        And   I select date "05/04/2018"
        And   I select primary address "275 Kent Street Sydney NSW 2000"
        And   I click submit button
        Then  I should see an alert

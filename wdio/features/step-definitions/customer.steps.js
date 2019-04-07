// stepdefinitions1.js
const expect = require('chai').expect;
const { defineSupportCode } = require('cucumber');
const LoadCustomer = require('../../pageobject/loadcustomer.page');

defineSupportCode(function({ Given, When, Then }) {
  Given(/^I go to the url "([^"]*)"$/, url => {
    browser.url(url);
    browser.windowHandleMaximize();
  });

  When(/^I click on "([^"]*)"$/, button => {
    browser.click("//SPAN[text()='Load Customer']");
  });

  Then(
    /^I expect the user is naviageted to the page and title of the page "([^"]*)"$/,
    title => {
      expect(browser.getTitle()).to.be.eql(title);
      const actualtitle = browser.getTitle();
      console.log('Title is:', actualtitle);
    }
  );
  When(/^I enter first name "([^"]*)"$/, firstname => {
    LoadCustomer.firstname.waitForVisible();
    LoadCustomer.firstname.setValue(firstname);
  });

  When(/^I enter last name "([^"]*)"$/, lastname => {
    LoadCustomer.lastname.waitForVisible();
    LoadCustomer.lastname.setValue(lastname);
  });
  When(/^I select date "([^"]*)"$/, dob => {
    LoadCustomer.dob.addValue(dob);
  });
  When(/^I select primary address "([^"]*)"$/, primaryaddress => {
    LoadCustomer.primaryAddress.selectByValue(primaryaddress);
  });
  When(/^I click submit button$/, function() {
    LoadCustomer.submit();
  });

  Then(/^I should see an alert$/, function() {
    console.log(browser.alertText());
    const alert = browser.alertText();

    browser.alertAccept();
  });
});

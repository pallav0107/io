// stepdefinitions.js
const expect = require('chai').expect;
const { defineSupportCode } = require('cucumber');

defineSupportCode(function({ Given, When, Then }) {
  Given(/^I navigate to the url "([^"]*)"$/, url => {
    browser.url(url);
  });

  Then(/^I expect the title of the page "([^"]*)"$/, title => {
    expect(browser.getTitle()).to.be.eql(title);
    const actualtitle = browser.getTitle();
    console.log('Title is:', actualtitle);
  });
});

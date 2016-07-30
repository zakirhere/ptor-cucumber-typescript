'use strict';

function mySteps() {

    this.Given(/^I open weather angular site$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return browser.get('');
    });

    this.Given(/^I load the login page$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return element(by.linkText('SEVERE')).click();
    });

    this.When(/^I enter wrong user name$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return element(by.linkText('HEALTH')).click();
    });

    this.When(/^I enter wrong password$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return element(by.linkText('WEATHER')).click();
    });

    this.When(/^I click submit$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return element(by.linkText('TRAVEL')).click();
    });

    this.Then(/^I see an error message$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return;
    });
}

module.exports = mySteps;
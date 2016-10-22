
function mySteps() {

    this.When(/^I pause the test$/, function () {
       browser.pause(); 
    });
    
    this.Given(/^I view "([^"]*)" site$/, function (url) {
        return browser.get(url);
    });

    this.Then(/^I verify github link$/, function () {
        return element(by.css('a.btn-large')).isPresent().should.eventually.equal(true);
    });
    
    this.When(/^I enter "([^"]*)" in basic section$/, function (input) {
        return $('div[app-run="hello.html"] input').clear().sendKeys(input);
    });

    this.Then(/^I see my message "([^"]*)"$/, function (expectedText) {
        return $('div[app-run="hello.html"] h1').getText().should.eventually.equal(expectedText);  
    });

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
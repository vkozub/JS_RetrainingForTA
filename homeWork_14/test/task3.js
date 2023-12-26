const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');

describe('Task 3 Filling out the form', function() {
    let driver;
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().setTimeouts({ implicit: 2000 });
    });

    it('Verify Web Form functionality', async function() {
        await driver.get('https://formy-project.herokuapp.com/form');
        await driver.findElement(By.id('first-name')).sendKeys('Peter');
        await driver.findElement(By.id('last-name')).sendKeys('Peterson');
        await driver.findElement(By.id('job-title')).sendKeys('Tester');
        await driver.findElement(By.id('radio-button-1')).click();
        await driver.findElement(By.id('checkbox-1')).click();
        await driver.findElement(By.id('select-menu')).click();
        await driver.findElement(By.xpath('//option[text()="2-4"]')).click();
        await driver.findElement(By.id('datepicker')).sendKeys('12/12/2020');
        await driver.findElement(By.linkText('Submit')).click();
        let alertSuccess = await driver.findElement(By.className('alert alert-success'));
        await driver.wait(until.elementIsVisible(alertSuccess), 2000);
        let successMessage = await alertSuccess.getText();
        assert.equal(successMessage, 'The form was successfully submitted!', `Success message "${successMessage}" is not equal to expected`);
    });

    afterEach(async () => driver && await driver.quit());
});

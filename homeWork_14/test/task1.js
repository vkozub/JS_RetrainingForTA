const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');

describe('Task 1', function() {
    let driver;
    beforeEach(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Check that the 1st element of the list is inactive', async () => {
        await driver.get('https://the-internet.herokuapp.com/dropdown');
        await driver.findElement(By.id('dropdown')).click();
        let firstOption = await driver.findElement(By.xpath('//select[@id="dropdown"]/option[@selected="selected"]')).isEnabled();
        assert.ok(!firstOption, 'The first option of dropdown is not disabled');
    });

    it('Check that the 2nd element of the list is active', async () => {
        await driver.get('https://the-internet.herokuapp.com/dropdown');
        await driver.findElement(By.id('dropdown')).click();
        let secondOption = await driver.findElements(By.xpath('//select[@id="dropdown"]/option'))[1].isEnabled();
        assert.ok(secondOption, 'The second option of dropdown is disabled');

    });

    afterEach(async () => driver && await driver.quit());
});

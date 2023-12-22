const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');

describe('Google page', function() {
    let driver;
    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Search on Google Chrome', async () => {
        await driver.get('https://google.com');
    });

    after(async () => driver && await driver.quit());
});

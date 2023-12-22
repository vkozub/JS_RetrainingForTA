const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');

describe('Task 2', function() {
    let driver;
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().setTimeouts({ implicit: 3000 });
    });

    it('Check that the appearance of the text', async function() {
        await driver.get('https://the-internet.herokuapp.com/hovers');
        let images = await driver.findElements(By.xpath('//div[@class="figure"]/img'));
        await driver.actions({async: true}).move({origin: images[0]}).perform();
        let imageText = await driver.findElement(By.xpath('//div[@class="figcaption"]/h5')).getText();
        assert.equal(imageText, 'name: user1', `1st image text ${imageText} is not equal to "name: user1"`);
    });

    afterEach(async () => driver && await driver.quit());
});

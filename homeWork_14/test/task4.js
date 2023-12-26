const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
const { getTextOfNodes, getTextOfNodesWithSorting } = require('../modules/module1');

describe('Task 4 Sorting the table', function() {
    let driver;
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().setTimeouts({ implicit: 2000 });
    });

    it('Verify that table column is being sorted correctly', async function() {
        await driver.get('https://the-internet.herokuapp.com/tables');
        // scroll to the table 2
        let secondTable = await driver.findElement(By.id('table2'));
        await driver.executeScript('arguments[0].scrollIntoView(true);', secondTable);
        // click to sort the data
        // this line below with scoping does not work - it clicks table 1 instead of table 2
        // await secondTable.findElement(By.xpath('//span[text()="Due"]')).click();
        await driver.findElement(By.xpath('//table[@id="table2"]//span[text()="Due"]')).click();
        // retrieve the text and convert to the string representation
        let duesSortedNodes = await secondTable.findElements(By.xpath('//td[@class="dues"]'));
        let actualText = await getTextOfNodes(duesSortedNodes);
        let expectedText = await getTextOfNodesWithSorting(duesSortedNodes);
        // asertion
        assert.strictEqual(actualText, expectedText, `Sorted array "${actualText}" is not equal to expected "${expectedText}"`);
    });

    afterEach(async () => driver && await driver.quit());
});
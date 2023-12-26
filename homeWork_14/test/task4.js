const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');

describe('Task 4 Sorting the table', function() {
    let driver;
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().setTimeouts({ implicit: 2000 });
    });

    it('Verify Web Form functionality', async function() {
        await driver.get('https://the-internet.herokuapp.com/tables');
        // scroll to the table 2
        let secondTable = await driver.findElement(By.id('table2'));
        await driver.executeScript('arguments[0].scrollIntoView(true);', secondTable);
        // click to sort the data
        // this line 18 does not work - it clicks table 1 instead of table 2
        // await secondTable.findElement(By.xpath('//span[text()="Due"]')).click();
        await driver.findElement(By.xpath('//table[@id="table2"]//span[text()="Due"]')).click();
        await driver.sleep(3000);
        // retrieve the text and convert to the string representation
        let duesSortedNodes = await secondTable.findElements(By.xpath('//td[@class="dues"]'));
        let duesSortedTextArray = [];
        for (let node of duesSortedNodes) { 
            let nodeText = await node.getText(); 
            duesSortedTextArray.push(nodeText.replace(/\$/g, '')) 
        };
        console.log(duesSortedTextArray);
        let actualText = duesSortedTextArray.toString();
        // asertion
        assert.strictEqual(actualText, '50.00,50.00,51.00,100.00', `Sorted array "${actualText}" is not equal to expected`);
    });

    afterEach(async () => driver && await driver.quit());
});
const addNumbers = require('../modules/addNumbers');

describe('Task 1', () => {
    test('Verify addition of float numbers', () => {
        expect(addNumbers(0.1, 0.2)).toBeCloseTo(0.3);
    });
});

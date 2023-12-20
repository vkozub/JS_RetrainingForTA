const { getCircleLength, getCircleArea } = require('../modules/calcCircle');

describe('Task 3', () => {
    test('Verify function for calculating of the lenght of the circle', () => {
        expect(getCircleLength(22)).toBeCloseTo(138.2, 1);
    });

    test('Verify function for calculating of the area of the circle', () => {
        expect(getCircleArea(9)).toBeCloseTo(254.47, 2);
    });

    test('Verify function for calculating of the lenght of the circle with no arguments', () => {
        expect(getCircleLength()).toBeNaN();
    });

    test('Verify function for calculating of the area of the circle with no arguments', () => {
        expect(getCircleArea()).toBeNaN();
    });
});
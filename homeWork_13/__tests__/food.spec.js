const filterFoodPrice = require('../modules/food');
const food = [
    {kind: 'potato', price: 10},
    {kind: 'bred',   price: 16}, 
    {kind: 'pepper', price: 27}, 
    {kind: 'banana', price: 32}, 
    {kind: 'lemon',  price: 50}
];
const MIN = 12;
const MAX = 40;

describe('Task 4 - Filtering food', () => {
    test('Verify that filtered array has length 3', () => {
        expect(filterFoodPrice(food, MIN, MAX)).toHaveLength(3);
    });

    test('Verify that filtered array contains "pepper" food info', () => {
        const expectedFood = {kind: 'pepper', price: 27};
        expect(filterFoodPrice(food, MIN, MAX)).toContainEqual(expectedFood);
    });

    test('Verify that filtered array contains 2nd, 3rd and 4th elements', () => {
        const expectedFoodsArray = filterFoodPrice(food, MIN, MAX);
        let actualIndexes = [];
        for (let filteredFood of expectedFoodsArray) {
            let foodIndexFromInitial = food.indexOf(filteredFood);
            actualIndexes.push(foodIndexFromInitial);
        };
        const expectedIndexes = [1, 2, 3];
        expect(actualIndexes).toEqual(expectedIndexes);
    });

    test('Verify that the price of the first element of filtered array is greater than min value', () => {
        expect(filterFoodPrice(food, MIN, MAX)[0]?.price).toBeGreaterThan(MIN);
    });

    test('Verify that the price of the third element of filtered array is less than max value', () => {
        expect(filterFoodPrice(food, MIN, MAX)[2]?.price).toBeLessThan(MAX);
    });

    test('Verify that filtered array does not contain "lemon" food info', () => {
        const expectedFood = {kind: 'lemon', price: 50};
        expect(filterFoodPrice(food, MIN, MAX)).not.toContainEqual(expectedFood);
    });

    test('Verify that the function return true value', () => {
        expect(filterFoodPrice(food, MIN, MAX)).toBeTruthy();
    });

    test('Verify that the function return instance of Array class', () => {
        expect(filterFoodPrice(food, MIN, MAX)).toBeInstanceOf(Array);
    });

    test('Verify that first element of filtered array have property "kind" with value "potato"', () => {
        expect(filterFoodPrice(food, 0, MAX)[0]).toHaveProperty('kind', 'potato');
    });

    test('Verify that "kind" attribute contains only letters', () => {
        const expectedFoodsArray = filterFoodPrice(food, MIN, MAX);
        for (let filteredFood of expectedFoodsArray) {
            expect(filteredFood.kind).toMatch(/^[A-Za-z]+$/);
        };
    });

    test('Verify that "price" attribute contains only digits', () => {
        const expectedFoodsArray = filterFoodPrice(food, MIN, MAX);
        for (let filteredFood of expectedFoodsArray) {
            expect(filteredFood.price.toString()).toMatch(/^\d+$/);
        };
    });

    test('Verify that the first element does not have attribute "origin"', () => {
        expect(filterFoodPrice(food, MIN, MAX)[0].origin).toBeFalsy();
    });
});
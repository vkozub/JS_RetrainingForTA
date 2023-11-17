// task 1
function calcRectangleArea(width, height) {
    try {
        if (isNaN(width) || isNaN(height)) { throw new TypeError("Width and height must be a number"); };
        return Math.abs(width * height).toPrecision();
    } catch (e) {
        console.log(e);
    };
}
let width = parseFloat(prompt('Enter the width of rectangle'));
let height = parseFloat(prompt('Enter the height of rectangle'));
console.log(calcRectangleArea(width, height));

// task 2

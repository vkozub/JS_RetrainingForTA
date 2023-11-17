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
let age = prompt('Enter you age');
function checkAge(age) {
    try {
        if (!age) { 
            throw new RangeError("Empty field! Please enter your age.");
        } else if (isNaN(parseInt(age))) { 
            throw new TypeError("Age must be a number");
        } else if (age < 14) {
            throw new RangeError("Age must be more than 14 years old");
        } else {
            alert('You have got the access to watch the movie');
        };
    } catch (e) {
        console.log(e.name + ' ' + e.message);
        alert(e.message);
    };
}
checkAge(age);

// task 3
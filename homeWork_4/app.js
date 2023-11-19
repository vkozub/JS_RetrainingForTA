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
class MonthException extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
function showMonthName(month) {
    try {
        if ((month <= 0) || (month > 12)) { 
            throw new MonthException("Incorrect month number!");
        } else {
            let date = new Date();
            date.setMonth(month - 1);
            return date.toLocaleString('en-US', { month: 'long' });
        };
    } catch (e) {
        console.log(e);
    };
}
let month = parseInt(prompt("Enter a month"));
console.log(showMonthName(month));

// task 4
function showUser(userId) {
    try {
        if (userId < 0) { 
            throw new Error("ID cannot be negative");
        } else {
            return { id: userId };
        };
    } catch (e) {
        return e;
    };
}
function showUsers(ids) {
    let users = [];
    for (let id of ids) {
        let userObject = showUser(id);
        if (userObject instanceof Error) {
            console.log(userObject.name + ': ' + userObject.message + ': ' + id);
        } else {
            users.push(userObject);
        };
    };
    return users;
}
const ids = [1, 2, -3, 99, 0, 100, -123];
console.log(showUsers(ids));

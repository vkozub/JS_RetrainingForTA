// task 1
let x = 1;
let y = 2;
let res1 = "" + x + y;
console.log(res1);
console.log(typeof res1);

let res2 = 'true' + x*y;
console.log(res2);
console.log(typeof res2);

let res3 = !!(y/x);
console.log(res3);
console.log(typeof res3);

let res4 = Math.sqrt(-x*y);
console.log(res4);
console.log(typeof res4);

// task 2


// task 3
let array = new Array();
array[0] = Math.random();
array.push('myString');
array.push(!!array[0]);
array[3] = null;
document.body.innerHTML = `<p>Length of the array is ${array.length}. The array is: [${array}]</>`;
let userValue = prompt("Enter the fifth element into the array!");
array.push(userValue);
document.body.innerHTML += `<h2>The 5th element is: ${userValue}</>`;
array.shift()
document.body.innerHTML += `<i>[${array}]</>`;

// task 4
let cities = ['Rome', 'Lviv', 'Warsaw'];
let citiesRibbon = cities.join('*');
console.log(citiesRibbon);

// task 5
let isAdult = +prompt('How old are you?');
let message = (isAdult < 18) ? 'You are still too young' : 'You have reached the age of majority';
alert(message);

// task 6
function isValidValues() {
    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) { return false; }; // verifying numbers
    if (((side1 + side2) <= side3) || ((side1 + side3) <= side2) || ((side2 + side3) <= side1)) { return false; }; // verifying existing of triangle
    return true;
}
let side1 = parseFloat(prompt('Enter the length of the first side of the triangle'));
let side2 = parseFloat(prompt('Enter the length of the second side of the triangle'));
let side3 = parseFloat(prompt('Enter the length of the third side of the triangle'));
let calculateAreaOfTriangle = function(a, b, c) {
    if (!isValidValues()) { return 'Incorrect data'; };
    let halfOfPerimeter = (a + b + c)/2;
    let area = Math.sqrt(halfOfPerimeter*(halfOfPerimeter - a)*(halfOfPerimeter - b)*(halfOfPerimeter - c));
    return area.toFixed(3);
}
console.log(calculateAreaOfTriangle(side1, side2, side3));


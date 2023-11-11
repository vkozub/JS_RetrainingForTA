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
// verifying whether prompted values are numbers
function isNumbers() { return !(isNaN(side1) || isNaN(side2) || isNaN(side3)); }
// verifying existing of triangle
function isExistTriangle() { return (((side1 + side2) > side3) && ((side1 + side3) > side2) && ((side2 + side3) > side1)); }
// whether the triangle being rectangular
function isRectangleTriangle() {
    let angleA = Math.acos((side1*side1 + side3*side3 - side2*side2)/(2*side1*side3));
    let angleB = Math.acos((side1*side1 + side2*side2 - side3*side3)/(2*side1*side2));
    let angleC = Math.acos((side2*side2 + side3*side3 - side1*side1)/(2*side2*side3));
    let toDegrees = function(angle) { return parseFloat((angle*(180/Math.PI)).toFixed(2)); };
    console.log(toDegrees(angleA), toDegrees(angleB), toDegrees(angleC));
    let isRectangle = ((toDegrees(angleA) === 90.00) || (toDegrees(angleB) === 90.00) || (toDegrees(angleC) === 90.00)) ? true : false;
    return isRectangle;
}
function isValidTriangle() {
    return (isNumbers() && isExistTriangle());
}
let side1 = parseFloat(prompt('Enter the length of the first side of the triangle'));
let side2 = parseFloat(prompt('Enter the length of the second side of the triangle'));
let side3 = parseFloat(prompt('Enter the length of the third side of the triangle'));
let calculateAreaOfTriangle = function(a, b, c) {
    if (!isValidTriangle()) { return 'Incorrect data'; };
    let halfOfPerimeter = (a + b + c)/2;
    let area = Math.sqrt(halfOfPerimeter*(halfOfPerimeter - a)*(halfOfPerimeter - b)*(halfOfPerimeter - c));
    return [area.toFixed(3), `Trianlge is rectangular: ${isRectangleTriangle()}`];
}
console.log(...calculateAreaOfTriangle(side1, side2, side3));

// task 7
let dateNow = new Date();
let timeInHours = dateNow.getHours();
// using if 
if (timeInHours < 5 && timeInHours >= 23) { alert('Good night!');
} else if (timeInHours >= 5 && timeInHours < 11) { alert('Good morning!'); 
} else if (timeInHours >= 11 && timeInHours < 17) { alert('Good day!'); 
} else { alert('Good evening!'); };
console.log(`Now is ${timeInHours + 1}th hour of the day`);

// using switch
switch(true) {
    case (timeInHours < 5 && timeInHours >= 23):
        console.log('Good night!');
        break;
    case (timeInHours >= 5 && timeInHours < 11):
        console.log('Good morning!');
        break;
    case (timeInHours >= 11 && timeInHours < 17):
        console.log('Good day!');
        break;
    default:
        console.log('Good evening!');
};

// using ternary if
let greetings = (timeInHours < 5 && timeInHours >= 23) ? 'Good night!' : ((timeInHours >= 5 && timeInHours < 11) ? 'Good morning!' : ((timeInHours >= 11 && timeInHours < 17) ? 'Good day!' : 'Good evening!'));
console.log(greetings);

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

//task 4
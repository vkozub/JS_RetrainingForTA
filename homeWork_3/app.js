// task 1
const numbers = [2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++ ) {
    console.log(numbers[i], i);
};
let index = 0
while (index < numbers.length) {
    console.log(numbers[index], index);
    index++;
};

// task 2
for (let i = 0; i < 15; i++) {
    let message = (i%2 === 0) ? `${i} is even` : `${i} is odd`;
    console.log(message)
}

// task 3
function randArray(k) {
    const array = [];
    for (let i = 0; i < k; i++) { array.push(Math.round(Math.random()*500)); };
    return array;
}
console.log(randArray(10));

// task 4
let base = parseInt(prompt("Enter the base value"));
let exponent = parseInt(prompt("Enter the exponent value"));
function raiseToDegree(a, b) {
    return Math.pow(a, b);
}
console.log(base, exponent, raiseToDegree(base, exponent));

// task 5
// reusing function randArray(k) declared in task 3 as input values
let randValues = randArray(10);
console.log(...randValues);
function findMin() {
    return Math.min(...arguments);
}
console.log(`The minimum is: ${findMin(...randValues)}`);

// task 6
// using closure and recursion
const arrayOfNum = [1, 22, 3, 3, 4, 5];
let findUnique = function(arr) {
        let ary = [...arr];                        // copy initial array not to change it
        let value;
        let verifyEquity = () => {
            if (ary.length <= 1) { return true; }; // if array contains 1 or 0 values return true immediately
            value = ary.shift();                   // remove first element not to iterate over again and not to compare with itself
            console.log(value, ary);
            for (let i of ary) {
                if (value === i) { return false; };
            };
            return verifyEquity();
        };
        return verifyEquity();
    };
console.log(arrayOfNum);
console.log(`Array has got only unique values: ${findUnique(arrayOfNum)}`);

// task 7

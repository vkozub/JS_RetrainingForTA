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

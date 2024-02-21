
function* range(start, end) {
    for (let number = start; number <= end; number++) 
        yield number;
}

for (const num of range(1, 9)) 
    console.log(num);

console.log('********************************');
let result = range(5, 10);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next());
console.log(result.next());
console.log(result.next());

console.log('********************************');
let newArray = [...range(100, 105), ...range(20, 23)];
console.log(newArray.toString());

// iterating over object
console.log('******************************** iterating over object');
let object = {
    from: 30,
    to: 40,
    *[Symbol.iterator]() {
        for (let i = this.from; i <= this.to; i++) {
            yield i;
        }
    }
};

for (const num of object) 
    console.log(num);

// composition of generators
console.log('******************************** composition');
function* rangeOfNumbers() {
    yield* range(10, 15);
    yield* range(20, 25);
    yield* range(5, 10);
}

// for (const num of rangeOfNumbers()) { console.log(num) }
let arr6 = [];
for (const num of rangeOfNumbers()) { arr6.push(num); }
console.log(arr6.toString());

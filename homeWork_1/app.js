// task 2
console.log('Kozub');

// task 3
let dateNow = new Date();
let grettings = 'Hi, I am ' + 'Vsevolod Kozub';
let message = () => `${dateNow} ${grettings}`;
alert(message());
[dateNow, grettings] = [grettings, dateNow];
alert(message());

// task 4
let properties = {
    "String": 'I am a String data type',
    "Number": 1_000_000,
    "Boolean": false,
    "Undefined": undefined,
    "Null": null
};

// task 5
let isAdult = confirm('Are you more than 18 years old?');
console.log(isAdult);

// task 6

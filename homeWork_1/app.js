// task 2
console.log('Kozub');

// task 3
let dateNow = new Date();
let grettings = 'Hi, I am ' + 'Vsevolod Kozub';
let message = () => `${dateNow} ${grettings}`; // using function with closure to avoid code duplication
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
let myFirtLastGroupInfo = 'Vsevolod Kozub JavaScript for TA [Q4, 2023]';
let myYearDob = 1982;
let myMaritalStatus = false;
let arrayOfData = [myFirtLastGroupInfo, myYearDob, myMaritalStatus];
// declare simple function to sort by Type, it works only if there is no Type duplication
function compareByType(value1, value2) {
    if (typeof(value2) === 'string') {
        return -1;
    } else if (typeof(value1) === 'string') {
        return 1;
    };
    return (typeof(value1) === 'number') ? -1 : 1;
} 
let [number, boolean, string] = arrayOfData.sort(compareByType);
// logging the sorted values
console.log(`Number: ${number}, Boolean: ${boolean}, String: ${string}.`);
let myBikes = null;
let myCars;
console.log('My bikes variable type is: ' + typeof(myBikes));
console.log('My cars variable type is: ' + typeof(myCars));

// task 7
let userLogin = prompt('Please, enter you login');
let userEmail = prompt('Please, enter you email');
let userPassword = prompt('Please, enter you password');
alert(`Dear ${userLogin}, your email is ${userEmail}, your password is ${userPassword}.`);

//task 8
let secondsInHour = (hours) => hours * 3600;
let secondsInDay = (days) => secondsInHour(days * 24);
let secondsInMonth = (months) => secondsInDay(months * 30); // let assume that we have 30 days in a month
alert(`Seconds in an hour: ${secondsInHour(1)}, seconds in a day: ${secondsInDay(1)}, seconds in a month: ${secondsInMonth(1)}.`);

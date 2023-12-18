// ********************************** Task 1 ********************************

function upperCase(str) {
    const upCasePattern = /^[A-Z]/;
    let message = upCasePattern.test(str) ? "String's starts with uppercase character" : "String's not starts with uppercase character";
    console.log(message);
}

upperCase('regExp');
upperCase('RegExp');


// ********************************** Task 2 ********************************

// add dot (part before @ sign) in pattern because Gmail allows it, for DSN domains only lowercase letters

function checkEmail(email) {
    const emailPattern = /^\w+\.?\w+\@[a-z]+\.[a-z]+$/g;
    return emailPattern.test(email);
}

console.log(checkEmail('vsevolod.kozub@gmail.com'));

// ********************************** Task 3 ********************************

let dLetterPattern = /d(b+)(d?)/ig;
let string = "cdbBdbsbz";
let matching = [...string.matchAll(dLetterPattern)][0];
let results = matching.map(el => el);
console.log(results);

// ********************************** Task 4 ********************************

let stringInput = "Java Script";
let newString = stringInput.replace(/(\w+)\s(\w+)/, "$2" + " , " + "$1");
console.log(newString);

// ********************************** Task 5 ********************************



// ********************************** Task 6 ********************************


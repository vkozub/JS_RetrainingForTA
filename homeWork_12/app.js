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
    const upCasePattern = /^\w+\.?\w+\@[a-z]+\.[a-z]+$/g;
    return upCasePattern.test(email);
}

console.log(checkEmail('vsevolod.kozub@gmail.com'));

// ********************************** Task 3 ********************************



// ********************************** Task 4 ********************************



// ********************************** Task 5 ********************************



// ********************************** Task 6 ********************************


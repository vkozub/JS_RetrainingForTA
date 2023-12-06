// ********************************** Task 1 ********************************

function getPromise(message, interval) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(message);
        }, interval);
    });
}

getPromise("test promise", 2000).then(result => console.log(result));

// ********************************** Task 2 ********************************

function calcArrProduct(arr){
    return new Promise((resolve) => {
        let product = 1;
        for (let obj of arr) {
            if (!(typeof obj === 'number')){ product = 'Error! Incorrect array!'; break;
        } else { product *= obj; };
        };
        resolve(product);
    });
}

calcArrProduct([3, 4, 5]).then(console.log);
calcArrProduct([5, "user2", 7, 12]).then(console.log);

// ********************************** Task 3 ********************************

function delay(i, time) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(i), time);
    });
}

function showNumbers(){
    for (let i = 0, pr = Promise.resolve(); i < 10; i++) {
        let timeout = Math.random() * 3000;
        pr = pr.then(() => delay(i, timeout)).then(console.log);
    };
}

showNumbers();

// ********************************** Task 4 ********************************

// async function showNumbersAsync(){
//     for (let i = 0; i < 10; i++) {
//         let timeout = Math.random() * 3000;
//         await delay(i, timeout);
//         console.log(i);
//     };
// }

// showNumbersAsync();

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
        for (let i in arr) {
            if (!(typeof arr[i] === 'number')){ product = 'Error! Incorrect array!'; break;
        } else { product *= arr[i] };
        };
        resolve(product);
    });
}

calcArrProduct([3, 4, 5]).then(result => console.log(result));
calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result));

// ********************************** Task 3 ********************************



// ********************************** Task 4 ********************************



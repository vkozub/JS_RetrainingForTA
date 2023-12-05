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



// ********************************** Task 3 ********************************



// ********************************** Task 4 ********************************



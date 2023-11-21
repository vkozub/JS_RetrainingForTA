// **************************** Task 1 ****************************
function propsCount(obj) {
    return Object.keys(obj).length;
}
let car = {
    speed: 180,
    color: 'blue',
    wheels: 4,
    doors: 4,
    seats: 5,
    price: 1000000
};
console.log(propsCount(car));

// **************************** Task 2 ****************************
// reuse object 'car'
function showProps(obj) {
    return Object.entries(obj);
}
console.log(showProps(car));

// **************************** Task 3 ****************************

// **************************** Task 4 ****************************


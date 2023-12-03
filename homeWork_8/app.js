// ********************************** Task 1 ********************************

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x);
console.log(y);
console.log(z);

// ********************************** Task 2 ********************************

let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26]
};
let { names: [, name2, , name4], ages: [, age2, , age4] } = data;
console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);

// ********************************** Task 3 ********************************

function mul(...args) {
    return args.reduce( (accum, arg, index) => { 
        if ((typeof arg === 'number') && (accum === 0) && (index === 0)) { 
            return arg; 
        } else if (typeof arg === 'number') {
            return accum *= arg;
        } else {
            return accum;
        };
     }, 0);
}
console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));

// ********************************** Task 4 ********************************

let server = {
    data: 0,
    convertToString: function(callback) {
        callback(() => this.data + "");
    }
};

let client = {
    server: server,
    result: '',
    calc: function(data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
    notification: function() {
        return callback => this.result = callback();
    }
};

client.calc(123);
console.log(client.result);
console.log(typeof client.result);

// ********************************** Task 5 ********************************

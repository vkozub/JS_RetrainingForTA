let mixin = { 
    sayHi(mes) { console.log(mes); }
};
mixin.sayHi('hello from object mixin');

class Mixin {
    sayHi(mes) { console.log(mes); }
} 

let mixin2 = new Mixin;
mixin2.sayHi('hello from class Mixin');

class Message {
    constructor() {
        // Object.assign(this, Mixin.prototype);
    }

}

Object.assign(Message.prototype, Object.getPrototypeOf(new Mixin.prototype));

let message = new Message;

message.sayHi('hello from class Message');

function myOwnSetTimeout(callback, delay, ...params) {
    let date = new Date();
    let now = date.getTime();
    let when = now + delay;

    do{
        date = new Date();
        now = date.getTime();
    }while(when - now > 0);

    callback(...params);
}

let myTestFunc = function(param1, param2) {
    console.log(param1, param2);
}

//myOwnSetTimeout(myTestFunc, 5000, 3, 2);

function User(name) {
    this.name = name;
    this.sayMyName = function() {
        console.log('Hi, my name is ' + name);
    }
    this.sayMyNameTimeout = function (delay) {
        myOwnSetTimeout(this.sayMyName, delay);
    }
}

let user1 = new User('John');
let user2 = new User('Walter');

user1.sayMyNameTimeout(100);
user2.sayMyNameTimeout(400);
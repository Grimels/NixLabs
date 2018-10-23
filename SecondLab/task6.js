var stack_callbacks = [], stack_delays = [];
var min = null;
function myOwnSetTimeOut(callback, delay, ...params) {
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

myOwnSetTimeOut(myTestFunc, 7000, 5, 2);

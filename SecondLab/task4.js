function myFunc(){
    console.log('Hello kitty!');
}

function makeSpyOn(func) {
    let i = 1;
    return function f() {
        f.calls = i++;
        return func();
    }
}

const spy = makeSpyOn(myFunc);
spy();
spy();
spy();
spy();
spy();

console.log(spy.calls);
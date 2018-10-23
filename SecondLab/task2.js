function counter(startVal){
    let start = startVal;
    return function f() {
        f.i = startVal;
        return ++start;
    }
}

let a = counter(1);
let b = counter(21);

a();
console.log(b(), a());
console.log(b.i);


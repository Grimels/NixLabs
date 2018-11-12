function task4(array){
    //let {[array.length - 2]: preLast, [array.length - 1]: last } = array;
    let [a, b, ...elems] = array.reverse();
    console.log(a, b);
    
}

task4([1, 2, 3, 4, 5]);
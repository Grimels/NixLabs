function uniqueArray(array){
    let [...smth] = new Set(array);
    return smth;
}

console.log(uniqueArray([11,11,11,11,1,1,1,9]));

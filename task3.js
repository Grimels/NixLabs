function findArray(arr1, arr2){
    let res = [];
    if(arr1.length !== 0 || arr2.length !== 0){
        for (let i = 0; i < arr2.length; i++) {
            if(arr2[i] >= 0 && arr2[i] < arr1.length){
                res.push(arr1[arr2[i]]);
            }
        }
    }
    return res;
}

//Run findArray() function
let findArrayArgs = [
    [1,2,3], [],                                                     // [ ]
    [], [2,1,3],                                                     // [ ]
    [], [],                                                          // [ ]
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'],
    [7, 0, 2, 7],                                                    // [h,a,c,h]
    [0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7],                          // [1, 1, 1]
    [1, 2, 3, 4, 5], [2,2,2]                                         // [3,3,3]
]

for (let i = 0; i < findArrayArgs.length; i+=2) {
    console.log(findArray(findArrayArgs[i], findArrayArgs[i+1]));
}
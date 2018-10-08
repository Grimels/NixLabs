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

function equalizer(arr){
    let avg_length = 0;
    arr.forEach((element) => {
        avg_length += element.length;    
    });
    avg_length /= arr.length;
    let res = [];
    
    arr.forEach((element) => {
        res.push(element[0].repeat(avg_length));
    });
    return res;
}

//Run findArray() function
const findArrayArgs = [
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

//Run equalizer() function
const equalizerArgs = [
    ['qqqq', 'wwwwwww', 't'],      // 4
    ['r', 'hhhhhhh','wwwwwww'],    // 5
    ['t', 'y','rrrrrrrrrrrrrrrrr'] // 6
]
for (let i = 0; i < equalizerArgs.length; i++) {
    console.log(equalizer(equalizerArgs[i]));
}
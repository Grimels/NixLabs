'use strict';
const arr = [10, 12, 15, 21];

for (let i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('index: ' + i + ', element: ' + arr[i]);
    }, 1000);
}

arr.forEach((val, i) => {
    setTimeout(function() {
        console.log('index: ' + i + ', element: ' + val);
    }, 1000);
})
function reverse(str){
    //return str.split('').reverse().join('');
    let res = '';
    for (let i = str.length-1; i >= 0; i--) {
        res = `${res}${str[i]}`;
    }
    return res;
}

function ucFirst(str){
    return str.length > 0 ? `${str[0].toUpperCase()}${str.substring(1, str.length)}` : '';
}

function ucWord(sentence){
    return sentence.split(' ').map((item) => {
        return ucFirst(item);
    }).join(' ');
}

console.log(`reverse('Hello World!') => ${reverse('Hello World!')}`);
console.log(`ucFirst('tomorrow never comes') => ${ucFirst('tomorrow never comes')}`);
console.log(`ucWord('tomorrow never comes') => ${ucWord('tomorrow never comes')}`);

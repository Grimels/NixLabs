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

function isEmail(mayBeEmail){
    return /([a-z0-9.]{3,})@([a-z]{3,})[.]([a-z]{3,})/.test(mayBeEmail.toLowerCase());
}

function isUrl(mayBeUrl){
    return /([http://]|[a-z0-9.]{1,})[.]([a-z]{1,})/.test(mayBeUrl.toLowerCase());
}

function isDate(mayBeDate){
    return /([0-9]{2})([.]|[-]|[/]{1})([0-9]{2})([.]|[-]|[/]{1})([0-9]{4})/.test(mayBeDate.toLowerCase());
}

function runFunction(f, args){
    console.log(`*****Run ${f.name}() function*****`);
    args.forEach((val) => {
        console.log(`${f.name}(${val}) => ${f(val)}`);
    });
    console.log('\n');
}

//Run reverse() function
runFunction(reverse, ['', 'H', 'Hello World!']);

//Run ucFirst() function
runFunction(ucFirst, ['', 's', 'comes', 'tomorrow never comes']);

//Run ucWord() function
runFunction(ucWord, ['', 's', 'comes', 'tomorrow never comes']);

//Run isEmail() function
runFunction(isEmail, ['html@gmail.com', 'h@g.com', 'ttt@gm.com', 'html@gmail']);

//Run isUrl() function
runFunction(isUrl, ['http://html.net', 'html.net', 'html', 'html@gmail']);

//Run isDate() function
runFunction(isDate, ['trewq', '29.10.1998', '12/02/2012', '23-12-1992', '10,22,2222']);
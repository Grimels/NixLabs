function isEmail(mayBeEmail){
    return  /^([a-z]{1,1})([a-z0-9_\.-]{2,})+@([a-z]{3,})?\.([a-z]{2,})/.test(mayBeEmail.toLowerCase());
}

function isUrl(mayBeUrl){
    return /([http://]|[a-z0-9.]{1,})[.]([a-z]{1,})/.test(mayBeUrl.toLowerCase());
}

function isDate(mayBeDate){
    return /([0-9]{2})([.]{1})([0-9]{2})([.]{1})([0-9]{4})|([0-9]{2})([-]{1})([0-9]{2})([-]{1})([0-9]{4})|([0-9]{2})([/]{1})([0-9]{2})([/]{1})([0-9]{4})/.test(mayBeDate.toLowerCase());
}

function isPhoneNumber(mayBePhoneNumber){
    return /^\+([380]{3})([0-9]{9})/.test(mayBePhoneNumber.toLowerCase());
}

function composeValidators(...args){
    return function(str){
        for(let validator of args) {
            if(!validator(str)) {
                return false;
            }
        }
        return true;
    }
}

console.log(composeValidators(isEmail)('hello@gmail.com'))
class Validator{
    constructor(stringValue) {
        this.val = stringValue;
        this.isValid = true;
    }

    isEmail(mayBeEmail = this.val){
        if(!this.isValid) return this;
        this.isValid = /^([a-z]{1,1})([a-z0-9_\.-]{2,})+@([a-z]{3,})?\.([a-z]{2,})/.test(mayBeEmail.toLowerCase());
        return this;
    }
    
    isUrl(mayBeUrl = this.val){
        if(!this.isValid) return this;
        this.isValid = /([http://]|[a-z0-9.]{1,})[.]([a-z]{1,})/.test(mayBeUrl.toLowerCase());
        return this;
    }
    
    isDate(mayBeDate = this.val){
        if(!this.isValid) return this;
        this.isValid = /([0-9]{2})([.]{1})([0-9]{2})([.]{1})([0-9]{4})|([0-9]{2})([-]{1})([0-9]{2})([-]{1})([0-9]{4})|([0-9]{2})([/]{1})([0-9]{2})([/]{1})([0-9]{4})/.test(mayBeDate.toLowerCase());
        return this;
    }
    
    isPhoneNumber(mayBePhoneNumber = this.val){
        if(!this.isValid) return this;
        this.isValid = /^\+([380]{3})([0-9]{9})/.test(mayBePhoneNumber.toLowerCase());
        return this;
    }

    toString(){
        return this.isValid;
    }
}

let validator = new Validator('grimels.ua@gmail.com');

console.log(`${validator.isDate('24-10-1998').isEmail()}`);
console.log(validator.isUrl('qwertty').isPhoneNumber('+380689142285').toString());
console.log(validator.isEmail().toString());

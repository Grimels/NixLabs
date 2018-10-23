let calculator = {
    input: function(inp) {
        this.res = inp;
        return this;
    },
    sum: function(y) {
        this.res = this.res + y;
        return this;
    },
    sub: function(y) {
        this.res = this.res - y;
        return this;
    },
    mul: function(y) {
        this.res = this.res * y;
        return this;
    }
}

let a = calculator.input(2).sum(2).sub(3).mul(555);
console.log(a.res);

class Rectangle {
    constructor(width = 0, height = 0){
        this.width = width;
        this.height = height;
    }

    get getWidth() {
        return this.width;
    }

    set setWidth(val) {
        if(typeof val === 'number'){
            this.width = val;
        }
    }

    get getHeight() {
        return this.height;
    }

    set setHeight(val) {
        if(typeof val === 'number'){
            this.height = val;
        }
    }

    square(){
        return this.width * this.height;
    }
}

let myRect = new Rectangle(1, 1);

myRect.setHeight = 2;
myRect.setWidth = 2;

console.log(myRect.getWidth, myRect.getHeight, myRect.square());

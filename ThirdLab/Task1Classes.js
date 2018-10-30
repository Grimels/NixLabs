class BaseAnimal {
    constructor(){
        this.isAlive = true;
    }
}

class Cat extends BaseAnimal {
    constructor(name, color) {
        super();
        this.name = name;
        this.color = color;
    }
}

class Fish extends BaseAnimal {
    constructor(waterType, isPredator) {
        super();
        this.waterType = waterType;
        this.isPredator = isPredator;
    }
}
Fish.likeSwim = true;


let cat = new Cat('Murzik', 'black');
let fish = new Fish('freshwater', true);

console.log(Fish.likeSwim);
console.log(cat.isAlive);
console.log(fish.isAlive);
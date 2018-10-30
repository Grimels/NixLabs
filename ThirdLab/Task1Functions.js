function BaseAnimal(){
    this.isAlive = true;
}

function Cat(name, color){
    BaseAnimal.call(this);
    this.name = name;
    this.color = color;
}

function Fish(waterType, isPredator) {
    BaseAnimal.call(this);
    this.waterType = waterType;
    this.isPredator = isPredator;
}
Fish.likeSwim = true;

let cat = new Cat('Murzik', 'black');
let fish = new Fish('freshwater', true);

console.log(Fish.likeSwim);
console.log(cat.isAlive);
console.log(fish.isAlive);

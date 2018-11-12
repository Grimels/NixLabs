function Hamster() {
    this.food = []; // пустой "живот"
 }

//Hamster.prototype.food = []; 

/* **********************************

    объекты ссылаются на 1 массив ибо массив это объект
    поэтому при создании нового Hamster происходит присвоение ссылки на массив food

  *********************************** */

Hamster.prototype.found = function(something) {
 this.food.push(something);
};

// Создаём двух хомяков и кормим первого
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

console.log(speedy.food.length);// 2
console.log(lazy.food.length); // 2 (!??)
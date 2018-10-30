function BaseAnimal(){
    this.isAlive = true;
}

function Cat(name, color, weight){
    console.log(`${name} создался и весит он ${weight} кг` );
    let w = weight;

    this.setWeight = function (weight) {
        if(weight <= 0) {
            console.log(this.name + ' не может бьть антиматерией ;-(');
        }else{
            w = weight;
        }
    }

    this.getWeight = function () {
        console.log(this.name + ' весит ' + w + ' кг');
    }

    this.eat = function(foodAmount) {
        w += foodAmount*0.8;
        console.log(this.name + ': Омноном. Я скушал ' + foodAmount + ' кг(+' + foodAmount*0.8 + ' кг)');
    }

    this.run = function(){
        console.log(this.name + ' побежал и похудел на '+ w/50 + ' кг');
        w -= w/50;
    }

    BaseAnimal.call(this);
    this.name = name;
    this.color = color;
}

let cat = new Cat('Murzik', 'white', 5);
cat.setWeight(-1);
cat.run();
cat.eat(1);
cat.getWeight();


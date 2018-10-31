function BaseAnimal(){
    this.isAlive = true;
}
function Cat(name, color, weight){
    let w = 0;
    class CatCreator extends BaseAnimal{
        constructor (name, color, weight){
            super();
            w = weight;
            console.log(`${name} создался и весит он ${w} кг` );
            this.name = name;
            this.color = color;
        }

        set weight(inpWeight) {
            if(inpWeight <= 0) {
                console.log(this.name + ' не может бьть антиматерией ;-(');
            }else{
                w = inpWeight;
            }
            console.log(w);
            
        }

        get weight() {
            console.log(this.name + ' весит ' + w + ' кг');
        }

        eat(foodAmount) {
            w += foodAmount*0.8;
            console.log(this.name + ': Омноном. Я скушал ' + foodAmount + ' кг(+' + foodAmount*0.8 + ' кг)');
        }

        run(){
            console.log(this.name + ' побежал и похудел на '+ w/50 + ' кг');
            w -= w/50;
        }
    }
    return new CatCreator(name, color, weight);
}

let cat = new Cat('Murzik', 'white', 5);
cat.weight = -1;
cat.run();
cat.eat(1);
cat.weight;
console.log(cat.isAlive);


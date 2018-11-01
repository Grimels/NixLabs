class BaseShape {
    constructor(coordinates){
        if(coordinates[0] instanceof Point){
            this.coordinates = coordinates;
        }else if(Array.isArray(coordinates[0])){
            coordinates.forEach(element => {
                this.coordinates.push(new Point(element[0], element[1]));
            });
        }
    }
}

class Point{
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }

    get coordinates() {
        return [x, y];
    }
}

class Rectangle extends BaseShape{
    constructor(coordinates){
        let p1 = coordinates[0];
        let p3 = coordinates[1];

        let p2 = new Point(p1.x, p3.y);
        let p4 = new Point(p3.x, p1.y);

        super([p1, p2, p3, p4]);
    }
}

function shapeSquare(shape) {
    if(shape instanceof BaseShape){
        let res = 0;
        let points = shape.coordinates;
        console.log(points);
        
        for (let i = 1; i < points.length; i++) {
            res += (points[i-1].x * points[i].y) - (points[i].x * points[i-1].y);
        }
        res += 
            (points[points.length-1].x * points[0].y) - (points[0].x * points[points.length-1].y);
        return Math.abs(res / 2)
    }else{
        throw new Error('Wrong argument!');
    }
}


let shape = new Rectangle([new Point(2, 2), new Point(5,5)]);
console.log(shapeSquare(shape));

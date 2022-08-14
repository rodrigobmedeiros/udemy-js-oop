class Shape {
    move() {
        console.log('move');
    }
}

class Circle extends Shape{
    move() {
        console.log('circle move');
    }
}

class Square extends Shape{
    move() {
        super.move();
        console.log('square move');
    }
}
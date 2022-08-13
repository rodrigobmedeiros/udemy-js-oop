class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    draw() {
        console.log('draw');
    }
}

const circle = new Circle(1);
circle.draw();
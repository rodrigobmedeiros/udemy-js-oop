
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    draw() {
        console.log('draw');
    }

    // Utility used to create instances based on JSON
    // files.
    // Abstract the complexity of creating instances in 
    // case.
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const circle = Circle.parse('{"radius": 1}');
console.log(circle);
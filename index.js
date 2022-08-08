
function Circle(radius) {
    this.radius = radius;
    Object.defineProperty(this, 'area', {
        get: () => Math.PI * this.radius * this.radius,
        set: (value) => value 
    });
}

let circle = new Circle(2);
console.log(circle.area);

circle.area = 10;
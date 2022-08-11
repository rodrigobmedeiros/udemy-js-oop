
function Shape(color) {
    this.color = color;
}
Shape.prototype.move = function() {
    console.log('move');
};

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor =  Child;
}

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
    Object.defineProperty(this, 'area', {
        get: () => Math.PI * this.radius * this.radius
    })
}

function Square(size, color) {
    Shape.call(this, color);
    this.size = size;
    Object.defineProperty(this, 'area', {
        get: () => this.size * this.size
    })
}

// Redefining Circle prototype and constructor.
extend(Circle, Shape);
extend(Square, Shape);
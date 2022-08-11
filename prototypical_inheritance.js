// Lets back to the circle object


// Shape Constructor
function Shape() {
};
Shape.prototype.duplicate = function () {
    console.log('Circle duplicate');
};

// Circle constructor
function Circle(radius) {
    this.radius = radius;
    Object.defineProperty(this, 'area', {
        get: () => Math.PI * this.radius * this.radius
    });
    this.walk = function () {
        console.log('Circle walk');
    };
};

// If I want to create a new shape,
// I need to redefine all methods.

// the idea is to inherit from a parent class
// With that I can create instances with the following line 
// new circle = new Circle.prototype.constructor(radius);
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

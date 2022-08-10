
function Circle(radius) {
    // Instance members
    this.radius = radius;
}

// Protoype members
// Circle.prototype is the prototype used to be parent of instances
// It's a way to avoid repeat the same function a lot of times.
// Ex:
// If you define draw() inside the constructor function, each instance
// will have its own method.
// If you define into the prototype instead, you'll have only one method
// allocated in memory
Circle.prototype.draw = function() {
    console.log('draw');
}
// Overwrite toString method
// thinking about __repr__ in python
// It would be interesting to have a string that
// make it possible to be used to create a new instance.
// A string that represent the state of the instance
Circle.prototype.toString = function() {
    return `Circle(${this.radius})`;
}

const c1 = new Circle(1);
const c2 = new Circle(2);

console.log(c1.toString());
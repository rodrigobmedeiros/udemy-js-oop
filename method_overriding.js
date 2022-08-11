
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
}

function Shape() {    
}
Shape.prototype.duplicate = function() {
    console.log('duplicate shape');
}


function Circle() {
}

function Square() {
}
extend(Square, Shape);
extend(Circle, Shape);

// method overriding
// After extend the Base prototype, I can modify its behaviour
// In this case overriding a method
// What can be done directly on Child prototype.
Circle.prototype.duplicate = function() {
    console.log('duplicate circle');
}
// You can override completely or extend
// the behavior of the prototype method.
Square.prototype.duplicate = function() {
    Shape.prototype.duplicate.call(this);
    console.log('duplicate square');
}
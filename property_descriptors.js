
// Properties have a thing called descriptor with
// a lot of information, between this  insformation, 
// I have the info if I can iterate over this property
// or not.

let person = { name: 'Rodrigo'};
let ObjectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(ObjectBase, 'toString');
console.log(descriptor);

console.log(person.toString());

// The right way to define (redefine a property)
// With that I can overwrite the original definition.
Object.defineProperty(person, 'toString', {
    value: person.toString,
    writable: true,
    enumerable: true,
    configurable: true
})

for (let prop in person) {
    console.log(prop);
}

console.log(person.toString());

// Difference between __proto__, prototype and getPrototypeOf()

function Circle(radius) {
    this.radius = radius;
    Object.defineProperty(this, 'area', {
        'get': () => Math.PI * this.radius * this.radius
    });
}

let circle1 = new Circle(2);

console.log(circle1.__proto__); // Circle
// When you have constructor the protoype is the constructor function.
console.log(Object.getPrototypeOf(circle1)); // Circle
console.log(Circle.prototype); // Circle



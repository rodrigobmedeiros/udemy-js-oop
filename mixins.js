
// Rest operator: get all parameters and put inside an array
function mixin(target, ...sources) {
    // Spread operator: spreat an array into multiple arguments.
    Object.assign(target, ...sources);
} 

// Creating objects to be used as mixins
const canEat = {
    eat: () => console.log('eating')
};
const canWalk = {
    walk: () => console.log('walking')
}
const canSwin = {
    swin: () => console.log('swining')
}

// Constructor for people
function Person() {
}
function Fish() {
}

// A first approach is to direct include mixins into
// person objects
// Adding canEat and canWalk
mixin(Person.prototype, canEat, canWalk);

// Fish objects
// Adding canEat and canSwin
mixin(Fish.prototype, canEat, canSwin);
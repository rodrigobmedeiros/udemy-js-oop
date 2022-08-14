
const _radius = Symbol();
const _draw = Symbol();

class Circle {
    constructor(radius) {
        this[_radius] = radius
    }
    [_draw]() {
        console.log('draw');
    }
    showPrivate() {
        console.log(this[_radius]);
        this[_draw]();
    }
}

const circle = new Circle(1);
circle.showPrivate();
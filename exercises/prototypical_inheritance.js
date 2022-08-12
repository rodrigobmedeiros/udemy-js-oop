function HtmlElement() {
    this.click = function() {
        console.log('clicked');
    }
}
HtmlElement.prototype.focus = function() {
    console.log('focused');
}

function HtmlSelectElement(items=[]) {
    this.items = items;
    this.addItem = function(item) {
        this.items.push(item);
    }
    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}

// The trick part here is that if I use the Object.create method
// with the parent prototype, I'll only have prototypical methods
// But in this exercise, I need to get instance methods too
// So I can associate the prototype with an instance.
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
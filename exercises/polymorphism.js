function applyInheritance(child, parent) {
    child.prototype = new parent();
    child.prototype.constructor = child;
}

// Parent Definition
function HtmlElement() {
    this.click = function() {
        console.log('clicked');
    }
}
HtmlElement.prototype.focus = function() {
    console.log('focused');
}
HtmlElement.prototype.render = function() {
    return 'Parent method';
}

// Child HtmlSelectElement.
function HtmlSelectElement(items=[]) {
    this.items = items;
    this.addItem = function(item) {
        this.items.push(item);
    }
    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}

// Inherit from the parent class 
applyInheritance(HtmlSelectElement, HtmlElement);
// Override render method.
HtmlSelectElement.prototype.render = function() {
    let htmlString = '<select>\n'
    for (let item of this.items) {
        htmlString += `   <option>${item}</option>\n`;
    }
    htmlString += '</select>';
    return htmlString;
};

// Child HtmlImgElement
function HtmlImgElement(src='') {
    this.src = src;
}
// Inherit from the parent class 
applyInheritance(HtmlImgElement, HtmlElement);
// Override render method.
HtmlImgElement.prototype.render = function() {
    let htmlString = `<img src="${this.src}" />`;
    return htmlString;
};

const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImgElement()
]

for (element of elements) {
    console.log(element.render());
}
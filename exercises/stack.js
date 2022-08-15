const _items = new WeakMap();

class Stack {
    constructor() {
        _items.set(this, []);
    }
    push(item) {
        const items = _items.get(this);
        items.push(item);
    }
    peek() {
        const items = _items.get(this);
        if (items.length === 0) throw new Error('Stack is empty');
        return items[items.length - 1];
    }
    pop() {
        const items = _items.get(this);
        if (items.length === 0) throw new Error('Stack is empty');
        return items.pop();
    }
    get count() {
        return _items.get(this).length;
    }
}
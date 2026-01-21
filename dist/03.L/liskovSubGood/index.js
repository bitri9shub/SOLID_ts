"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    width;
    length;
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    setWidth(width) {
        this.width = width;
    }
    setLength(length) {
        this.length = length;
    }
    getArea() {
        return this.width * this.length;
    }
}
class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
    setWidth(width) {
        super.setWidth(width);
        super.setLength(width);
    }
    setLength(length) {
        super.setWidth(length);
        super.setLength(length);
    }
}
const rect = new Square(10);
rect.setWidth(20);
if (rect instanceof Square) {
    // ...
}
else {
    // ...
}
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return this.height * this.width;
    }
}
class Square {
    side;
    constructor(side) {
        this.side = side;
    }
    setSide(side) {
        this.side = side;
    }
    getArea() {
        return Math.pow(this.side, 2);
    }
}
// we can't create rectangle and say it's a square anymore
// const rect: Rectangle = new Square(10)
//# sourceMappingURL=index.js.map
class Rectangle {
    constructor(private width: number, private length: number) { }

    public setWidth(width: number): void {
        this.width = width
    }

    public setLength(length: number): void {
        this.length = length
    }

    public getArea(): number {
        return this.width * this.length
    }
}

class Square extends Rectangle {
    constructor(side: number) {
        super(side, side)
    }

    public setWidth(width: number): void {
        super.setWidth(width)
        super.setLength(width)
    }

    public setLength(length: number): void {
        super.setWidth(length)
        super.setLength(length)
    }
}

const rect: Rectangle = new Square(10)
rect.setWidth(20)

if (rect instanceof Square) {
    // ...
} else {
    // ...
}
interface Shape {
    getArea(): number
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) { }

    public setWidth(width: number): void {
        this.width = width
    }

    public setHeight(height: number): void {
        this.height = height
    }

    public getArea(): number {
        return this.height * this.width
    }
}

class Square implements Shape {
    constructor(private side: number) { }

    public setSide(side: number) {
        this.side = side
    }

    public getArea(): number {
        return Math.pow(this.side, 2)
    }
}

// we can't create rectangle and say it's a square anymore
// const rect: Rectangle = new Square(10)
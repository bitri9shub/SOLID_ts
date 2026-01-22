"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FutureCar {
    drive() {
        return "Driving Car.";
    }
    fly() {
        return "Flying Car.";
    }
}
class Car {
    drive() {
        return "Driving Car.";
    }
    fly() {
        throw new Error("Not implemented method  ");
    }
}
class Airplane {
    drive() {
        throw new Error("Not implemented method");
    }
    fly() {
        return "Flyiing Airplane";
    }
}
//# sourceMappingURL=index.js.map
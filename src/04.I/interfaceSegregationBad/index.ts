interface VehicleInterface {
    drive(): string
    fly(): string
}

class FutureCar implements VehicleInterface {
    public drive(): string {
        return "Driving Car."
    }

    public fly(): string {
        return "Flying Car."
    }
}

class Car implements VehicleInterface {
    public drive(): string {
        return "Driving Car."
    }

    public fly(): string {
        throw new Error("Not implemented method  ")
    }
}

class Airplane implements VehicleInterface {
    public drive(): string {
        throw new Error("Not implemented method")
    }

    public fly(): string {
        return "Flyiing Airplane"
    }
}
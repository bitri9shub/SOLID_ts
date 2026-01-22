interface CarInterface {
    drive(): string
}
interface AirplaneInterface {
    fly(): string
}

class FutureCar implements CarInterface, AirplaneInterface {
    public drive(): string {
        return "Driving Car"
    }
    public fly(): string {
        return "Flying Car"
    }
}

class Car implements CarInterface {
    public drive(): string {
        return "Driving Car"
    }
}

class Airplane implements AirplaneInterface {
    public fly(): string {
        return "Flying airplane"
    }
}
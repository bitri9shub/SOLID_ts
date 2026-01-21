interface Costs {
    getCosts(): number
}

class Shipping {
    shippingOptionCost: Costs

    getShippingCost(): number {
        return this.shippingOptionCost.getCosts()
    }
}

class CarCost implements Costs {
    getCosts(): number {
        return 50
    }
}

class PlaneCost implements Costs {
    getCosts(): number {
        return 100
    }
}

// if we want to add a third cost, we don't change any of 
// the classes above, we've just to add a third class
class ShipCost implements Costs {
    getCosts(): number {
        return 300
    }
}
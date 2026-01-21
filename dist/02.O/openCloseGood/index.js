"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shipping {
    shippingOptionCost;
    getShippingCost() {
        return this.shippingOptionCost.getCosts();
    }
}
class CarCost {
    getCosts() {
        return 50;
    }
}
class PlaneCost {
    getCosts() {
        return 100;
    }
}
// if we want to add a third cost, we don't change any of 
// the classes above, we've just to add a third class
class ShipCost {
    getCosts() {
        return 300;
    }
}
//# sourceMappingURL=index.js.map
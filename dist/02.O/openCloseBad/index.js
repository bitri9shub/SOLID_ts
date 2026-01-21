"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shipping {
    shippingOptionCost;
    getShippingCost() {
        if (this.shippingOptionCost === "car")
            return 50;
        if (this.shippingOptionCost === "plane")
            return 100;
        // if we want to add a shippingOption as made in the
        // line below, we're forced to "change" the class
        if (this.shippingOptionCost === "ship")
            return 300;
        return 0;
    }
}
//# sourceMappingURL=index.js.map
import Items from "../models/items.js";
import Customer from "../models/customer.js";
let customer = new Customer();
let items = new Items({
  chips: { price: 1.0, cost: 0.41, inv: 7 },
  soda: { price: 1.25, cost: 0.32, inv: 3 },
  nuts: { price: 0.85, cost: 0.55, inv: 10 },
  sandwitch: { price: 2.5, cost: 1.0, inv: 5 },
  candy: { price: 1.35, cost: 0.75, inv: 8 },
  cheese: { price: 0.8, cost: 0.4, inv: 4 },
});

export default class MachineService {
  buyCandy(name) {
    if (items[name].price < customer.cash) {
      items[name].inv -= 1;
      customer.cash -= items[name].price;
    }
  }
  getCustomerCash() {
    return customer.cash;
  }
  constructor() {}
}

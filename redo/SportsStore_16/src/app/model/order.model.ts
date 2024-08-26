import { Injectable } from "@angular/core";
import { Cart, CartLine } from "./cart.model";

@Injectable()
export class Order {
  id?: number;
  name?: string;
  address?: string;
  address2?: string;
  city?: string;
  state?: string;
  postal?: string;
  country?: string;
  shipped: boolean = false;
  #cart: Cart;
  lines: CartLine[];

  constructor(cart: Cart) {
    this.#cart = cart;
    this.lines = cart.lines();
  }

  clear() {
    this.id = undefined;
    this.name = this.address = this.address2 = this.city = undefined;
    this.state = this.postal = this.country = undefined;
    this.shipped = false;
    this.#cart.clear();
  }
}
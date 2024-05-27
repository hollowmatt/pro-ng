import { Injectable, Signal, WritableSignal, computed, signal } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class Cart {


}

export class CartLine {

  constructor(public product: Product, public quantity: number) {}

  get lineTotal() {
    return this.quantity * (this.product.price ?? 0);
  }
}

export class CartSummary {
  itemCount: number = 0;
  cartPrice: number = 0;
}
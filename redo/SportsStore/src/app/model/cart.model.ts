import { Injectable, Signal, WritableSignal, computed, signal } from "@angular/core";
import { Product } from "./product.model";
import { single } from "rxjs";

@Injectable()
export class Cart {
  private linesSignal: WritableSignal<CartLine[]>;
  public summary: Signal<CartSummary>;

  constructor() {
    this.linesSignal = signal([]);
    this.summary = computed(() => {
      let newSummary = new CartSummary();
      this.linesSignal().forEach(line => {
        newSummary.itemCount += line.quantity;
        newSummary.cartPrice += line.lineTotal;
      });
      return newSummary
    })
  }

  get lines(): Signal<CartLine[]> {
    return this.linesSignal.asReadonly();
  }

  addLine(product: Product, quantity: number = 1) {
    //fill in
  }

  updateQuantity(product: Product, quantity: number) {
    //fill in
  }

  removeLine(id: number) {
    //fill in
  }

  clear() {
    this.linesSignal.set([]);
  }
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
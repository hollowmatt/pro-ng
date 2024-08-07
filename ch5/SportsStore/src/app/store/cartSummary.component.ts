import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";

@Component({
  standalone: true,
  selector: "cart-summary",
  templateUrl: "./cartSummary.component.html",
  providers: [Cart]
})

export class CartSummaryComponent {
  constructor(public cart: Cart) {}
}
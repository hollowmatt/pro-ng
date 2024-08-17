import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: "cart-summary",
  templateUrl: "./cartSummary.component.html",
  providers: [Cart],
  imports: [CommonModule]
})

export class CartSummaryComponent {
  constructor(public cart: Cart) {}
}
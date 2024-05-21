import { Injectable, Signal, signal } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class StaticDataSource {
  private data: Product[] = [
    new Product(1, "Product 1", "Category 1", 
        "Product 1 (Category 1)", 100),
    new Product(2, "Product 2", "Category 1", 
        "Product 2 (Category 1)", 100),
  ];

  products: Signal<Product[]> = signal<Product[]>(this.data)
}
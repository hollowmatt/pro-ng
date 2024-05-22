import { Component, Signal } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { StaticDataSource } from '../model/static.datasource';

@Component({
  standalone: true,
  selector: "store",
  templateUrl: "./store.component.html",
  providers: [ProductRepository, StaticDataSource]
})

export class StoreComponent {
  products: Signal<Product[]>;
  categories: Signal<String[]>;

  constructor(private repository: ProductRepository) {
    this.products = repository.products;
    this.categories = repository.categories;
  }
}
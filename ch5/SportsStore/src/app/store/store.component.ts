import { Component, signal, computed, Signal } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { StaticDataSource } from '../model/static.datasource';
import { CommonModule } from '@angular/common';
import { CartSummaryComponent } from './cartSummary.component';
import { Cart } from '../model/cart.model';
@Component({
  standalone: true,
  selector: "store",
  templateUrl: "./store.component.html",
  imports: [CommonModule, CartSummaryComponent],
  providers: [ProductRepository, StaticDataSource, Cart]
})

export class StoreComponent {
  products: Signal<Product[]>;
  categories: Signal<string[]>;
  selectedCategory = signal<string | undefined>(undefined);
  productsPerPage = signal(4);
  selectedPage = signal(1);
  pagedProducts: Signal<Product[]>;
  pageNumbers: Signal<number[]>;

  constructor(private repository: ProductRepository, private cart: Cart) {
    this.products = computed(() => {
      if(this.selectedCategory() == undefined) {
        return this.repository.products();
      } else {
        return this.repository.products().filter(p => 
          p.category === this.selectedCategory());
      }
    })
    this.categories = repository.categories;
    let pageIndex = computed(() => {
      return(this.selectedPage()-1) * this.productsPerPage()
    });
    this.pagedProducts = computed(() => {
      return this.products().slice(pageIndex(), pageIndex() + this.productsPerPage());
    });
    this.pageNumbers = computed(() => {
      return Array(
        Math.ceil(this.products().length / this.productsPerPage()))
        .fill(0).map((x, i) => i + 1);
    });
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory.set(newCategory);
    this.changePage(1);
  }

  changePage(newPage: number) {
    this.selectedPage.set(newPage);
  }

  changePageSize(newSize: number) {
    this.productsPerPage.set(Number(newSize));
    this.changePage(1);
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
  }
}
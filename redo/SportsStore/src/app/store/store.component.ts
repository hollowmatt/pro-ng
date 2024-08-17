import { Component, Signal, computed, signal } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { Cart } from "../model/cart.model";

@Component({
  selector: "store",
  templateUrl: "store.component.html"
})

export class StoreComponent {
  products: Signal<Product[]>;
  categories: Signal<string[]>;
  selectedCategory = signal<string | undefined>(undefined);
  productsPerPage = signal(4);
  selectedPage = signal(1);
  pagedProducts: Signal<Product[]>;
  pageCount: Signal<number>;

  constructor(private repository: ProductRepository, private cart: Cart) {
    this.categories = repository.categories;
    this.products = computed(() => {
      if (this.selectedCategory() == undefined) {
        return this.repository.products();
      } else {
        return this.repository.products().filter(p =>
          p.category === this.selectedCategory());
      }
    })

    let pageIndex = computed(() => {
      return (this.selectedPage() - 1) * this.productsPerPage();
    })

    this.pagedProducts = computed(() => {
      return this.products().slice(pageIndex(), pageIndex() + this.productsPerPage());
    })

    this.pageCount = computed(() => {
      return Math.ceil(this.products().length / this.productsPerPage());
    })
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory.set(newCategory);
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
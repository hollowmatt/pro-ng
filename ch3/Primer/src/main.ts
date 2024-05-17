import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

class Product {
  constructor(name: string, price: number, category?: string) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  name: string
  price: number
  category?: string

}

let hat = new Product("Hat", 10);
let boots = new Product("boots", 100, "snow boots");

function pDeets(product: {name: string, price: number, category?: string}) {
  if (product.category != undefined) {
    console.log(`Name: ${product.name}, Price: ${product.price}, Category: ${product.category}`)
  } else {
    console.log(`Name: ${product.name}, Price: ${product.price}`);
  }
}

pDeets(hat);
pDeets(boots);
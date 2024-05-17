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

  printDetails() {
    if (this.category != undefined) {
        console.log(`Name: ${this.name}, Price: ${this.price}, ` 
            + `Category: ${this.category}`);    
    } else {
        console.log(`Name: ${this.name}, Price: ${this.price}`);    
    }        
  }
}

let hat = new Product("Hat", 10);
let boots = new Product("boots", 100, "snow boots");

hat.printDetails();
boots.printDetails();
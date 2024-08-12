import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./tempStatic.datasource";
import { Cart } from "./cart.model";

@NgModule({
  providers: [ProductRepository, StaticDataSource, Cart]
})

export class ModelModule {}
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import { ProductCardComponent } from './components/product-card/product-card.component';
import {SafePipe} from "../../shared/safe.pipe";



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent
      }
    ]),
  ]
})
export class ProductsModule { }

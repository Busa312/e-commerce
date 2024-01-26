import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../../shared/services/products.service";
import {CategoriesService} from "../../../../shared/services/categories.service";
import {IProduct} from "../../../../shared/interface/IProduct";
import {tap} from "rxjs";
import {ICategory} from "../../../../shared/interface/ICategory";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  public newProducts: IProduct[] = [];
  public categories: ICategory[] = [];
  constructor(private productService: ProductsService,
              private categoryService: CategoriesService) {
  }

  ngOnInit() {
    let allProducts: IProduct[] = [];
    this.productService.getProducts().pipe(
      tap(
        value => {
          allProducts = value;
          allProducts = allProducts
              .sort(
                (a,b) =>
                  new Date(a.updatedAt).getMilliseconds() - new Date(b.updatedAt).getMilliseconds()
              );
          this.newProducts = allProducts.slice(0, 4);
        }
      )
    ).subscribe();

    this.categoryService.getAllCategories().pipe(
      tap(
        val => {
          this.categories = val;
        }
      )
    ).subscribe();
  }
}

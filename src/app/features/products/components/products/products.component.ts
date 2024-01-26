import {Component, NO_ERRORS_SCHEMA, OnInit} from '@angular/core';
import {ProductsService} from "../../../../shared/services/products.service";
import {IProduct} from "../../../../shared/interface/IProduct";
import {tap} from "rxjs";
import {CategoriesService} from "../../../../shared/services/categories.service";
import {ICategory} from "../../../../shared/interface/ICategory";
import {FormControl, FormGroup} from "@angular/forms";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  public products: IProduct[] = [];
  private allProducts: IProduct[] = [];
  public categories: ICategory[] = [];
  public form: FormGroup<{category: FormControl<number | null>}> = new FormGroup<{category: FormControl<number | null>}>(
    {
      category: new FormControl<number>(0)
    }
  )

  constructor(private productsService: ProductsService,
              private categoriesService: CategoriesService) {
  }

  ngOnInit() {

    this.getProducts();

    this.categoriesService.getAllCategories().pipe(
      tap(
        val=> {
          this.categories = val;
        }
      )
    ).subscribe();

    this.listenToCategoryChange();

  }

  getProducts(catId?: number) {
    this.productsService.getProducts().pipe(
      tap(
        val => {
          this.allProducts = val;
          if (catId) {
            this.products = val.filter(v => v.category.id === catId);
          }
          else {
            this.products = val;
          }
        }
      )
    ).subscribe();
  }

  listenToCategoryChange() {
    this.form.controls['category'].valueChanges.pipe(
      tap(
        val => {
          this.products = this.allProducts.filter(v => v.category.id === Number(val));
          if (Number(val) === 0) {
            this.products = this.allProducts;
          }
        }
      )
    ).subscribe();
  }

}

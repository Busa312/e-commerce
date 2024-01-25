import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {Product} from "../interface/product";
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../shared.module";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private URL = API_URL+'/products';

  public productsList = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) { }

  private getProducts(offset? : number): Observable<Product[]> {
    let url = offset? this.URL + `/?offset=${offset}&limit=16` : this.URL;
    return (this.http.get(url) as Observable<Product[]>).pipe(
      tap(
        val => {
          this.productsList.next(val);
        }
      )
    )
  }

  public getProduct(id: number): Observable<Product> {
    return this.http.get(this.URL+'/'+id) as Observable<Product>;
  }

  public createProduct(product: Product): Observable<Product> {
    return this.http.post(this.URL, product) as Observable<Product>;
  }
}

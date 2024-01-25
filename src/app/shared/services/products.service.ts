import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {IProduct} from "../interface/IProduct";
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../shared.module";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private URL = API_URL+'products';

  public productsList = new BehaviorSubject<IProduct[]>([]);

  constructor(private http: HttpClient) { }

  public getProducts(offset? : number, limit= 16): Observable<IProduct[]> {
    let url = offset? this.URL + `/?offset=${offset}&limit=${limit}` : this.URL;
    return (this.http.get(url) as Observable<IProduct[]>).pipe(
      tap(
        val => {
          if (offset === undefined) {
            this.productsList.next(val);
          }
        }
      )
    )
  }

  public getProduct(id: number): Observable<IProduct> {
    return this.http.get(this.URL+'/'+id) as Observable<IProduct>;
  }

  public createProduct(product: IProduct): Observable<IProduct> {
    return this.http.post(this.URL, product) as Observable<IProduct>;
  }
}

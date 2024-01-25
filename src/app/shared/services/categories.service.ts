import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../shared.module";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {Category} from "../interface/category";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private URL = API_URL+'/categories';

  public categoriesList = new BehaviorSubject<Category[]>([]);

  constructor(private http: HttpClient) { }

  public getAllCategories(): Observable<Category[]> {
    return (this.http.get(this.URL) as Observable<Category[]>).pipe(
      tap(
        (val: Category[]) => {
          this.categoriesList.next(val);
        }
      )
    );
  }

  public getCategory(id: number): Observable<Category> {
    return this.http.get(this.URL+'/'+id) as Observable<Category>;
  }

  public createCategory(category: Category): Observable<Category> {
    return this.http.post(this.URL, category) as Observable<Category>;
  }
}

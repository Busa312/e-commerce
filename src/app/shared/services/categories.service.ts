import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../shared.module";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {ICategory} from "../interface/ICategory";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private URL = API_URL+'categories';

  public categoriesList = new BehaviorSubject<ICategory[]>([]);

  constructor(private http: HttpClient) { }

  public getAllCategories(): Observable<ICategory[]> {
    return (this.http.get(this.URL) as Observable<ICategory[]>).pipe(
      tap(
        (val: ICategory[]) => {
          this.categoriesList.next(val);
        }
      )
    );
  }

  public getCategory(id: number): Observable<ICategory> {
    return this.http.get(this.URL+'/'+id) as Observable<ICategory>;
  }

  public createCategory(category: ICategory): Observable<ICategory> {
    return this.http.post(this.URL, category) as Observable<ICategory>;
  }
}

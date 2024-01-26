import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import {HttpClient, HttpHandler} from "@angular/common/http";
import {of} from "rxjs";
import {API_URL} from "../shared.module";

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpHandler,
        {
          provide: HttpClient, useValue: {
            get: (url: string) => {
              return of([{val:'some string'}]);
        }
          }
        }
      ]
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getProducts', () => {
    let spy: any;
    let spyGet: any;
    beforeEach(()=> {
      spy = jest.spyOn(service.productsList, 'next');
      let injectedService = TestBed.inject(HttpClient);
      spyGet = jest.spyOn(injectedService, 'get');
    });

    it('should set new value to productsList', () => {
      service.getProducts().subscribe((val) => {
        expect(spy).toBeCalledWith(val);
        expect(spyGet).toBeCalledWith(API_URL+'products');
      })
    });

    it('should not set new value to productsList', () => {
      let offset = 0;
      let limit = 5;
      service.getProducts(offset, limit).subscribe((val) => {
        expect(spy).toBeCalledTimes(0);
        expect(spyGet).toBeCalledWith(API_URL+`products/?offset=${offset}&limit=${limit}`);
      })
    })
  });
});

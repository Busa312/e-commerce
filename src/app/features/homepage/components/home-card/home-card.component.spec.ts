import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardComponent } from './home-card.component';
import {IProduct} from "../../../../shared/interface/IProduct";
import {ICategory} from "../../../../shared/interface/ICategory";

describe('HomeCardComponent', () => {
  let component: HomeCardComponent;
  let fixture: ComponentFixture<HomeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getProductImage', () => {
    it ('should return image string from array', () => {
      component.product = {images: ['imageUrl']} as IProduct;
      expect(component.getProductImage()).toEqual('imageUrl');
    });

    it('should return empty string when having empty array', () => {
      component.product = {images: [] as string[]} as IProduct;
      expect(component.getProductImage()).toEqual('');
    });

    it('should return empty string when product is undefined', () => {
      component.product = undefined;
      expect(component.getProductImage()).toEqual('');
    });
  });

  describe('getCategoryImage', () => {
    it ('should return image string from array', () => {
      component.category = {image: 'imageUrl'} as ICategory;
      expect(component.getCategoryImage()).toEqual('imageUrl');
    });

    it('should return empty string when category is undefined', () => {
      component.category = undefined;
      expect(component.getCategoryImage()).toEqual('');
    });
  });

  describe('rendering blocks', () => {
    it('should render category div', () => {
      component.isCategory = true;
      fixture.detectChanges();
      const elements = fixture.nativeElement as HTMLElement;
      expect(elements.querySelector('.category')).toBeTruthy();
      expect(elements.querySelector('.product')).toBeFalsy();
    });

    it('should render product div', () => {
      component.isCategory = false;
      fixture.detectChanges();
      const elements = fixture.nativeElement as HTMLElement;
      expect(elements.querySelector('.category')).toBeFalsy();
      expect(elements.querySelector('.product')).toBeTruthy();
    })
  })




});

import { Component, Input } from '@angular/core';
import {ICategory} from "../../../../shared/interface/ICategory";
import {IProduct} from "../../../../shared/interface/IProduct";

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.scss'
})
export class HomeCardComponent {

  @Input() isCategory: boolean = false;
  @Input() category?: ICategory;
  @Input() product?: IProduct

  getProductImage() {
    return this.product?.images[0] || '';
  }

  getCategoryImage() {
    return this.category?.image || '';
  }

}

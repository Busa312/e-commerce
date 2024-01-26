import {Component, Input} from '@angular/core';
import {IProduct} from "../../../../shared/interface/IProduct";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product?: IProduct;


  getProductImage() {
    return this.product?.images[0] || '';
  }
}

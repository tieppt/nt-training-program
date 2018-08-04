import { Component, EventEmitter, OnInit, Input, ViewEncapsulation, Output } from '@angular/core';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'np-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SingleProductComponent implements OnInit {
  @Input()
  product: IProduct;

  @Output() addToCart = new EventEmitter<IProduct>();
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'np-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  activeFilter$ = this.productService.filter$.asObservable();
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  filter({value}) {
    // TODO: Filter
    this.productService.filter$.next(value);
  }

}

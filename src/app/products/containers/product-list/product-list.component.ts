import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, combineLatest } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { IProduct } from '../../models/iproduct';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'np-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: IProduct[] = [];
  private clearSub = new Subject<any>();
  constructor(private prodSvc: ProductService, private cartService: CartService) { }

  ngOnInit() {
    // load Products
    const product$ = this.prodSvc.getAllProducts();
    const filter$ = this.prodSvc.filter$.asObservable();

    combineLatest(product$, filter$).pipe(
      takeUntil(this.clearSub)
    ).subscribe(([products, filter]) => {
      if (filter === 'all') {
        this.products = products;
      } else {
        this.products = products.filter(p => p.categories.includes(filter));
      }
    });
  }

  addToCart(product: IProduct) {
    this.cartService.addProductToCart(product);
  }

  trackByProductId(index: number, p: IProduct) {
    return p.id;
  }

  ngOnDestroy() {
    this.clearSub.next(true);
    this.clearSub.complete();
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { CartService } from './services/cart.service';
import { ICart } from './models/icart';

@Component({
  selector: 'np-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cartList: ICart[] = [];
  destroy$ = new Subject();
  grandTotal$: Observable<number>;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    const cartList$ = this.cartService.cartList$;
    this.grandTotal$ = cartList$.pipe(
      map(
        R => R.reduce((acc, curr) => acc + (curr.product.price * curr.quantity), 0)
      )
    );
    cartList$.pipe(takeUntil(this.destroy$)).subscribe(res => this.cartList = res);
  }

  descQuantity(productId) {
    this.cartService.descQuantity(productId);
  }

  incQuantity(productId) {
    this.cartService.incQuantity(productId);
  }

  removeProduct(productId) {
    this.cartService.removeProduct(productId);
  }

  ngOnDestroy() {
    // clean up all subscription
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}

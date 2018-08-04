import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICart } from '../models/icart';
import { IProduct } from '../../products/models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cartList$ = new BehaviorSubject<ICart[]>([]);
  totalItem$ = this.cartList$.pipe(
    map(c => c.reduce((acc, curr) => acc + curr.quantity, 0))
  );

  public get cartList$(): Observable<ICart[]> {
    return this._cartList$.asObservable();
  }
  constructor() { }
  addProductToCart(product: IProduct) {
    const cartList = this._cartList$.value;
    let result = cartList.find(item => item.product.id === product.id);
    if (result) {
      result.quantity++;
    } else {
      result = {
        product: product,
        quantity: 1
      };
      cartList.push(result);
    }
    this.updateCart(cartList);
  }

  updateCart(cartList: ICart[]) {
    this._cartList$.next(cartList);
  }

  removeProduct(productId) {
    const cartList = this._cartList$.value;
    const products = cartList.filter(p => p.product.id !== productId);

    this.updateCart(products);
  }

  incQuantity(productId) {
    const cartList = this._cartList$.value;
    const product = cartList.find(p => p.product.id === productId);
    if (product) {
      product.quantity++;
    }
    this.updateCart(cartList);
  }

  descQuantity(productId) {
    const cartList = this._cartList$.value;
    const product = cartList.find(p => p.product.id === productId);
    if (product && product.quantity > 1) {
      product.quantity--;
    }
    this.updateCart(cartList);
  }
}

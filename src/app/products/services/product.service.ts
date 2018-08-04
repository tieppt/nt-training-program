import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { IProduct } from '../models/iproduct';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  filter$ = new BehaviorSubject<string>('all');

  constructor(private http: HttpClient) { }
  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${BASE_URL}products`);
  }
  getProductById(productId): Observable<IProduct> {
    return this.http.get<IProduct>(`${BASE_URL}products/${productId}`);
  }

  addNewProduct(product: Partial<IProduct>): Observable<any> {
    if (!product.id) {
      product.id = uuid();
    }
    return this.http.post(`${BASE_URL}products`, product);
  }
}

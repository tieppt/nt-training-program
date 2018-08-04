import { IProduct } from '../../products/models/iproduct';

export interface ICart {
  product: IProduct;
  quantity: number;
}

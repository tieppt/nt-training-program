import { Component } from '@angular/core';
import { CartService } from '../../cart/services/cart.service';

@Component({
  selector: 'np-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  totalItems = this.cartService.totalItem$;
  constructor(private cartService: CartService) {}
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreUiModule } from '@nttp/core-ui';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [
    CommonModule,
    CoreUiModule,
    RouterModule.forChild([{
      path: 'cart',
      component: CartComponent
    }])
  ],
  declarations: [CartComponent],
  exports: [CartComponent]
})
export class CartModule {}

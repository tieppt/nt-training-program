import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreUiModule } from '@nttp/core-ui';
import { NavComponent } from './components/nav/nav.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { AddProductComponent } from './containers/add-product/add-product.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductsComponent } from './containers/products.component';
import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
  imports: [
    CommonModule,
    CoreUiModule,
    ReactiveFormsModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductsComponent,
    ProductListComponent,
    NavComponent,
    SingleProductComponent,
    AddProductComponent,
  ]
})
export class ProductsModule { }

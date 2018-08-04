import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductsComponent } from './containers/products.component';
import { AddProductComponent } from './containers/add-product/add-product.component';

const routes: Routes = [{
  path: 'add-new',
  component: AddProductComponent
}, {
  path: '',
  component: ProductsComponent,
  children: [
    {
      path: '',
      component: ProductListComponent,
      pathMatch: 'full'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

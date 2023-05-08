import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProductsComponent } from './new-products/new-products.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'productsDetails',
    component: ProductsDetailsComponent,
  },
  {
    path: 'newproducts',
    component: NewProductsComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {path:'',redirectTo:'products',pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewProductsComponent } from './new-products/new-products.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    ProductsDetailsComponent,
    ProductsComponent,
    NewProductsComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    SharedModule
  ]
})
export class EcommerceModule { }

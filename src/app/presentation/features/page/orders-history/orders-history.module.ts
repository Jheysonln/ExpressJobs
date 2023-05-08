import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersHistoryRoutingModule } from './orders-history-routing.module';
import { OrdersHistoryComponent } from './orders-history.component';


@NgModule({
  declarations: [
    OrdersHistoryComponent
  ],
  imports: [
    CommonModule,
    OrdersHistoryRoutingModule
  ]
})
export class OrdersHistoryModule { }

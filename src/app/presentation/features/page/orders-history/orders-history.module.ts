import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersHistoryRoutingModule } from './orders-history-routing.module';
import { OrdersHistoryComponent } from './orders-history.component';
import { MaterialModule } from 'src/app/core/theme/material/material.module';


@NgModule({
  declarations: [
    OrdersHistoryComponent
  ],
  imports: [
    CommonModule,
    OrdersHistoryRoutingModule,
    MaterialModule
  ]
})
export class OrdersHistoryModule { }

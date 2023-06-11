import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersHistoryRoutingModule } from './orders-history-routing.module';
import { OrdersHistoryComponent } from './orders-history.component';
import { MaterialModule } from 'src/app/core/theme/material/material.module';
import { SearchComponent } from './components/search/search.component';
import { HistoryListComponent } from './components/history-list/history-list.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OrdersHistoryComponent,
    SearchComponent,
    HistoryListComponent
  ],
  imports: [
    CommonModule,
    OrdersHistoryRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class OrdersHistoryModule { }

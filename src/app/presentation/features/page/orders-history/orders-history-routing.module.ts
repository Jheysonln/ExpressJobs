import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersHistoryComponent } from './orders-history.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersHistoryComponent,
  },
  {path:'',redirectTo:'home',pathMatch:"prefix"}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersHistoryRoutingModule { }

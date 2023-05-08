import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
  {
    path: 'basicTable',
    component: BasicTableComponent,
  },
  {
    path: 'dataTable',
    component: DataTableComponent,
  },
  {path:'',redirectTo:'basicTable',pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }

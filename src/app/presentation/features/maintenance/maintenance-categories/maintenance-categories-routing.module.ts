import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceCategoriesComponent } from './maintenance-categories.component';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceCategoriesComponent,
  },
  {path:'',redirectTo:'',pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceCategoriesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'users',
    data: { breadcrumb: 'Maintenance Users' } ,
    loadChildren: () => import('./maintenance-users/maintenance-users.module').then(
      (m) => m.MaintenanceUsersModule
    )
  },
  {
    path: 'categories',
    data: { breadcrumb: 'Maintenance Categories' } ,
    loadChildren: () => import('./maintenance-categories/maintenance-categories.module').then(
      (m) => m.MaintenanceCategoriesModule

    )
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }

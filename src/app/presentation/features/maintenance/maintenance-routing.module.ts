import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(
      (m) => m.UsersModule
    )
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then(
      (m) => m.CategoriesModule

    )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }

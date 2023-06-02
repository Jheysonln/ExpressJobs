import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    data: { breadcrumb: 'Reporte Users' } ,
    loadChildren: () => import('../reports/users/users.module').then(
      (m) => m.UsersModule
    )
  },
  {
    path: 'categories',
    data: { breadcrumb: 'Reporte Categories' } ,
    loadChildren: () => import('../reports/categories/categories.module').then(
      (m) => m.CategoriesModule

    )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }

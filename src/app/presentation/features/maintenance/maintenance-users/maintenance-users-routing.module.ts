import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceUsersComponent } from './maintenance-users.component';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceUsersComponent,
  },
  {path:'',redirectTo:'',pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceUsersRoutingModule { }

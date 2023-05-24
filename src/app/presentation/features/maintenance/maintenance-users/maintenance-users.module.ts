import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceUsersRoutingModule } from './maintenance-users-routing.module';
import { MaintenanceUsersComponent } from './maintenance-users.component';


@NgModule({
  declarations: [
    MaintenanceUsersComponent
  ],
  imports: [
    CommonModule,
    MaintenanceUsersRoutingModule
  ]
})
export class MaintenanceUsersModule { }

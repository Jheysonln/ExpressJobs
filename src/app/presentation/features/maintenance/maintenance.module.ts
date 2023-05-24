import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { MaintenanceCategoriesComponent } from './maintenance-categories/maintenance-categories.component';
import { MaintenanceUsersComponent } from './maintenance-users/maintenance-users.component';


@NgModule({
  declarations: [
    // MaintenanceCategoriesComponent,
    // MaintenanceUsersComponent
  ],
  imports: [
    CommonModule,
    MaintenanceRoutingModule
  ]
})
export class MaintenanceModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceUsersRoutingModule } from './maintenance-users-routing.module';
import { MaintenanceUsersComponent } from './maintenance-users.component';
import { FormsModule } from "@angular/forms";
import { MaterialModule } from 'src/app/core/theme/material/material.module';

@NgModule({
  declarations: [
    MaintenanceUsersComponent
  ],
  imports: [
    CommonModule,
    MaintenanceUsersRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class MaintenanceUsersModule { }

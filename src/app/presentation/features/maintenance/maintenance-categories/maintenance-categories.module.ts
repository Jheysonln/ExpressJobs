import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceCategoriesRoutingModule } from './maintenance-categories-routing.module';
import { MaintenanceCategoriesComponent } from './maintenance-categories.component';


@NgModule({
  declarations: [
    MaintenanceCategoriesComponent
  ],
  imports: [
    CommonModule,
    MaintenanceCategoriesRoutingModule
  ]
})
export class MaintenanceCategoriesModule { }

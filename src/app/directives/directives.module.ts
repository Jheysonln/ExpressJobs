import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JCustomMatMenuDirective } from './j-custom-mat-menu.directive';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    JCustomMatMenuDirective
  ],
  imports: [
    CommonModule,
    MatMenuModule
  ],
  exports:[
    JCustomMatMenuDirective
  ]
})
export class DirectivesModule { }

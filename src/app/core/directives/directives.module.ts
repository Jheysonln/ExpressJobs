import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JCustomMatMenuDirective } from './j-custom-mat-menu.directive';


@NgModule({
  declarations: [
    JCustomMatMenuDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    JCustomMatMenuDirective
  ]
})
export class DirectivesModule { }

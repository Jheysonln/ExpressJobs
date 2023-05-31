import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JCustomMatMenuDirective } from './j-custom-mat-menu.directive';
import { ImagePreviewDirective } from './image-preview.directive';


@NgModule({
  declarations: [
    JCustomMatMenuDirective,
    ImagePreviewDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    JCustomMatMenuDirective,
    ImagePreviewDirective
  ]
})
export class DirectivesModule { }

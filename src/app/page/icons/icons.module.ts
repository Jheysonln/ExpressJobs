import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsRoutingModule } from './icons-routing.module';
import { LineIconsComponent } from './line-icons/line-icons.component';
import { BoxiconsComponent } from './boxicons/boxicons.component';
import { FeatherIconsComponent } from './feather-icons/feather-icons.component';


@NgModule({
  declarations: [
    LineIconsComponent,
    BoxiconsComponent,
    FeatherIconsComponent
  ],
  imports: [
    CommonModule,
    IconsRoutingModule
  ]
})
export class IconsModule { }

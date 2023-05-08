import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { VectorMapsComponent } from './vector-maps/vector-maps.component';


@NgModule({
  declarations: [
    GoogleMapsComponent,
    VectorMapsComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }

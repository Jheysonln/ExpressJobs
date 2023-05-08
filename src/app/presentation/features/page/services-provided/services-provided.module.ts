import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesProvidedRoutingModule } from './services-provided-routing.module';
import { ServicesProvidedComponent } from './services-provided.component';


@NgModule({
  declarations: [
    ServicesProvidedComponent
  ],
  imports: [
    CommonModule,
    ServicesProvidedRoutingModule
  ]
})
export class ServicesProvidedModule { }

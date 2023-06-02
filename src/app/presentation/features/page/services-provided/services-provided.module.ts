import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesProvidedRoutingModule } from './services-provided-routing.module';
import { ServicesProvidedComponent } from './services-provided.component';
import { MaterialModule } from 'src/app/core/theme/material/material.module';


@NgModule({
  declarations: [
    ServicesProvidedComponent
  ],
  imports: [
    CommonModule,
    ServicesProvidedRoutingModule,
    MaterialModule
  ]
})
export class ServicesProvidedModule { }

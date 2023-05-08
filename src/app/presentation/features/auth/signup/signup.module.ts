import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { MaterialModule } from 'src/app/core/theme/material/material.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    MaterialModule
  ]
})
export class SignupModule { }

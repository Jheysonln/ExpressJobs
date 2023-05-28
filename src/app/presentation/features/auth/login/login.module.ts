import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from 'src/app/core/theme/material/material.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ]
})
export class LoginModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsRoutingModule } from './errors-routing.module';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { BlankPageComponent } from './blank-page/blank-page.component';


@NgModule({
  declarations: [
    Error404Component,
    Error500Component,
    ComingSoonComponent,
    BlankPageComponent
  ],
  imports: [
    CommonModule,
    ErrorsRoutingModule
  ]
})
export class ErrorsModule { }

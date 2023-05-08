import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardModule } from './page/dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { UserProfileComponent } from './page/user-profile/user-profile.component';
import { AngularMaterialModule } from './material/angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    DashboardModule,
    BrowserAnimationsModule,
    LayoutModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    // SweetAlert2Module.forRoot({
    //   //Para el Funcionamiento en Angular
    //   provideSwal: () => import('sweetalert2/dist/sweetalert2.js')
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

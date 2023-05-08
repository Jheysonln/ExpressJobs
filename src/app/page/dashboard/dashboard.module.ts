import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlternateComponent } from './alternate/alternate.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { HospitalityComponent } from './hospitality/hospitality.component';
import { SalesComponent } from './sales/sales.component';
import { AngularMaterialModule } from 'src/app/material/angular-material/angular-material.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SectiornChartsComponent } from './sales/sectiorn-charts/sectiorn-charts.component';

@NgModule({
  declarations: [
    AnalyticsComponent,
    SalesComponent,
    EcommerceComponent,
    AlternateComponent,
    HospitalityComponent,
    SectiornChartsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    AngularMaterialModule,
    NgApexchartsModule,
    GoogleMapsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }

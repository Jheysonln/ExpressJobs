import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ApexComponent } from './apex/apex.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { HighchartsComponent } from './highcharts/highcharts.component';


@NgModule({
  declarations: [
    ApexComponent,
    ChartjsComponent,
    HighchartsComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule
  ]
})
export class ChartsModule { }

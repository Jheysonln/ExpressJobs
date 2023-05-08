import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApexComponent } from './apex/apex.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { HighchartsComponent } from './highcharts/highcharts.component';

const routes: Routes = [
  {
    path: 'apex',
    component: ApexComponent,
  },
  {
    path: 'chatsjs',
    component: ChartjsComponent,
  },
  {
    path: 'highcharts',
    component: HighchartsComponent,
  },
  {path:'',redirectTo:'apex',pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }

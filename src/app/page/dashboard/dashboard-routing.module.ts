import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlternateComponent } from './alternate/alternate.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { HospitalityComponent } from './hospitality/hospitality.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {
    path: 'home',
    component: AnalyticsComponent,
  },
  {
    path: 'alternate',
    component: AlternateComponent,
  },
  {
    path: 'shop',
    component: EcommerceComponent,
  },
  {
    path: 'hospitality',
    component: HospitalityComponent,
  },
  {
    path: 'sales',
    component: SalesComponent,
  },
  {path:'',redirectTo:'home',pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

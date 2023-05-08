import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetsComponent } from './widgets.component';

const routes: Routes = [
  {
    path: 'widgets',
    component: WidgetsComponent,
  },
  {path:'',redirectTo:'widgets',pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetsRoutingModule { }

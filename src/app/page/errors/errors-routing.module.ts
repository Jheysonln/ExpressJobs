import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';

const routes: Routes = [
  {
    path: 'error404',
    component: Error404Component,
  },
  {
    path: 'error500',
    component: Error500Component,
  },
  {
    path: 'blankpage',
    component: BlankPageComponent,
  },
  {
    path: 'comingson',
    component: ComingSoonComponent,
  },
  {path:'',redirectTo:'error404',pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsRoutingModule { }

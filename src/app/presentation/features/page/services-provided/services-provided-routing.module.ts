import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesProvidedComponent } from './services-provided.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesProvidedComponent,
  },
  {path:'',redirectTo:'home',pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesProvidedRoutingModule { }

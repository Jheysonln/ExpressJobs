import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { VectorMapsComponent } from './vector-maps/vector-maps.component';

const routes: Routes = [
  {
    path: 'googlemaps',
    component: GoogleMapsComponent,
  },
  {
    path: 'vectormaps',
    component: VectorMapsComponent,
  },
  {path:'',redirectTo:'googlemaps',pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }

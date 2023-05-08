import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from './timeline.component';

const routes: Routes = [
  {
    path: 'timelines',
    component: TimelineComponent,
  },
  {path:'',redirectTo:'timelines',pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimelineRoutingModule { }

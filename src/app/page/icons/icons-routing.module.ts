import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxiconsComponent } from './boxicons/boxicons.component';
import { FeatherIconsComponent } from './feather-icons/feather-icons.component';
import { LineIconsComponent } from './line-icons/line-icons.component';

const routes: Routes = [
  {
    path: 'lineicons',
    component: LineIconsComponent,
  },
  {
    path: 'boxicons',
    component: BoxiconsComponent,
  },
  {
    path: 'feathericons',
    component: FeatherIconsComponent,
  },
  {path:'',redirectTo:'lineicons',pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }

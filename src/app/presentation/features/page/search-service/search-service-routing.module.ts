import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddServiceComponent } from './add-service/add-service.component';
import { ViewProjectComponent } from './add-service/view-project/view-project.component';
import { SearchServiceComponent } from './search-service.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  {
    path: '',
    component: SearchServiceComponent,
  },
  {
    path: 'userInfo',
    data: { breadcrumb: 'userInfo' },
    component:UserInfoComponent,
  },
  {
    path: 'addService',
    data: { breadcrumb: 'addService' },
    component:AddServiceComponent,
  },
  {
    path: 'view-project',
    data: { breadcrumb: 'View-Project' },
    component:ViewProjectComponent,
  },
  {path:'',redirectTo:'',pathMatch:"prefix"}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchServiceRoutingModule { }

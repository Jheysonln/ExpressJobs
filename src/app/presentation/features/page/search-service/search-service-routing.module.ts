import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddServiceComponent } from './add-service/add-service.component';
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
  {path:'',redirectTo:'',pathMatch:"prefix"}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchServiceRoutingModule { }

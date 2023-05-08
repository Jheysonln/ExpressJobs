import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridSystemComponent } from './grid-system/grid-system.component';
import { TextUtilitiesComponent } from './text-utilities/text-utilities.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  {
    path: 'grid',
    component: GridSystemComponent,
  },
  {
    path: 'typhografy',
    component: TypographyComponent,
  },
  {
    path: 'textutility',
    component: TextUtilitiesComponent,
  },
  {path:'',redirectTo:'grid',pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }

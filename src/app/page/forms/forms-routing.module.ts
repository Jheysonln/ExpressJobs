import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePickersComponent } from './date-pickers/date-pickers.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { Select2Component } from './select2/select2.component';
import { TextEditorComponent } from './text-editor/text-editor.component';

const routes: Routes = [
  {
    path: 'formelements',
    component: FormElementsComponent,
  },
  {
    path: 'inpoutsgroups',
    component: InputGroupsComponent,
  },
  {
    path: 'formlayouts',
    component: FormLayoutsComponent,
  },
  {
    path: 'formvalidation',
    component: FormValidationComponent,
  },
  {
    path: 'formwizard',
    component: FormWizardComponent,
  },
  {
    path: 'texteditor',
    component: TextEditorComponent,
  },
  {
    path: 'fileupload',
    component: FileUploadComponent,
  },
  {
    path: 'datepickers',
    component: DatePickersComponent,
  },
  {
    path: 'select2',
    component: Select2Component,
  },
  {path:'',redirectTo:'formelements',pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }

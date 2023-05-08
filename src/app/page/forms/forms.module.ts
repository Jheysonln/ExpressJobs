import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DatePickersComponent } from './date-pickers/date-pickers.component';
import { Select2Component } from './select2/select2.component';


@NgModule({
  declarations: [
    FormElementsComponent,
    InputGroupsComponent,
    FormLayoutsComponent,
    FormValidationComponent,
    FormWizardComponent,
    TextEditorComponent,
    FileUploadComponent,
    DatePickersComponent,
    Select2Component
  ],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }

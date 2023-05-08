import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicationRoutingModule } from './aplication-routing.module';
import { EmailComponent } from './email/email.component';
import { FileManangerComponent } from './file-mananger/file-mananger.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { AngularMaterialModule } from 'src/app/material/angular-material/angular-material.module';


@NgModule({
  declarations: [
    EmailComponent,
    FileManangerComponent,
    ContactsComponent,
    TodoListComponent,
    InvoiceComponent,
    CalendarComponent,
    ChatBoxComponent
  ],
  imports: [
    CommonModule,
    AplicationRoutingModule,
    AngularMaterialModule
  ]
})
export class AplicationModule { }

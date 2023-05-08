import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EmailComponent } from './email/email.component';
import { FileManangerComponent } from './file-mananger/file-mananger.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {
    path: 'email',
    component: EmailComponent,
  },
  {
    path: 'chatbox',
    component: ChatBoxComponent,
  },
  {
    path: 'filemananger',
    component: FileManangerComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'todolist',
    component: TodoListComponent,
  },
  {
    path: 'invoice',
    component: InvoiceComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  },
  {path:'',redirectTo:'email',pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicationRoutingModule { }

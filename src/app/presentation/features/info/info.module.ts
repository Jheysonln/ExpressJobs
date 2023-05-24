import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    ContactUsComponent,
    UserProfileComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class InfoModule { }

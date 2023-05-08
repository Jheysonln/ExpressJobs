import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SwitcherComponent } from './switcher/switcher.component';
import { RouterModule } from '@angular/router';
import { SharedComponent } from './shared.component';
import { AngularMaterialModule } from '../material/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { DirectivesModule } from '../directives/directives.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SwitcherComponent,
    SharedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    OverlayModule,
    DirectivesModule
  ]
})
export class SharedModule { }

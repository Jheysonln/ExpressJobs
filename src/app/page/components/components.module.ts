import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { ListGroupsComponent } from './list-groups/list-groups.component';
import { MediaObjectsComponent } from './media-objects/media-objects.component';
import { ModalsComponent } from './modals/modals.component';
import { NavsTabsComponent } from './navs-tabs/navs-tabs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoversTooltipsComponent } from './popovers-tooltips/popovers-tooltips.component';
import { ProgressComponent } from './progress/progress.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AvatarsChipsComponent } from './avatars-chips/avatars-chips.component';
import { AngularMaterialModule } from 'src/app/material/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AlertsComponent,
    AccordionsComponent,
    BadgesComponent,
    ButtonsComponent,
    CardsComponent,
    CarouselsComponent,
    ListGroupsComponent,
    MediaObjectsComponent,
    ModalsComponent,
    NavsTabsComponent,
    NavbarComponent,
    PaginationComponent,
    PopoversTooltipsComponent,
    ProgressComponent,
    SpinnersComponent,
    NotificationsComponent,
    AvatarsChipsComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }

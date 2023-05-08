import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionsComponent } from './accordions/accordions.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AvatarsChipsComponent } from './avatars-chips/avatars-chips.component';
import { BadgesComponent } from './badges/badges.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { ListGroupsComponent } from './list-groups/list-groups.component';
import { MediaObjectsComponent } from './media-objects/media-objects.component';
import { ModalsComponent } from './modals/modals.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavsTabsComponent } from './navs-tabs/navs-tabs.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoversTooltipsComponent } from './popovers-tooltips/popovers-tooltips.component';
import { ProgressComponent } from './progress/progress.component';
import { SpinnersComponent } from './spinners/spinners.component';

const routes: Routes = [
  {
    path: 'alerts',
    component: AlertsComponent,
  },
  {
    path: 'accordions',
    component: AccordionsComponent,
  },
  {
    path: 'badges',
    component: BadgesComponent,
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
  },
  {
    path: 'cards',
    component: CardsComponent,
  },
  {
    path: 'carousels',
    component: CarouselsComponent,
  },
  {
    path: 'listgroups',
    component: ListGroupsComponent,
  },
  {
    path: 'mediaobjects',
    component: MediaObjectsComponent,
  },
  {
    path: 'modals',
    component: ModalsComponent,
  },
  {
    path: 'navTabs',
    component: NavsTabsComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  {
    path: 'pagination',
    component: PaginationComponent,
  },
  {
    path: 'popoverstooltips',
    component: PopoversTooltipsComponent,
  },
  {
    path: 'progress',
    component: ProgressComponent,
  },
  {
    path: 'spinners',
    component: SpinnersComponent,
  },
  {
    path: 'notification',
    component: NotificationsComponent,
  },
  {
    path: 'avatars',
    component: AvatarsChipsComponent,
  },
  {path:'',redirectTo:'alerts',pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }

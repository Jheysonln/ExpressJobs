import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLoggedComponent } from './base-logged/base-logged.component';
import { BaseAuthComponent } from './base-auth/base-auth.component';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from 'src/app/core/theme/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/app/core/directives/directives.module';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { SwiperCarouselComponent } from './components/swiper-carousel/swiper-carousel.component';
import { SwiperModule } from 'swiper/angular';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { GalleryImg1Component } from './components/gallery-img/gallery-img1/gallery-img1.component';
import { FullScreenComponent } from './components/gallery-img/full-screen/full-screen.component';
import { InfoModule } from '../features/info/info.module';
import { LandbootComponent } from './components/landboot/landboot/landboot.component';
import { ReplaceCharacterDashboard } from 'src/app/core/pipe/replaceCharacterDashboard';
import { GalleryImg2Component } from './components/gallery-img/gallery-img2/gallery-img2.component';

@NgModule({
  declarations: [
    BaseLoggedComponent,
    BaseAuthComponent,
    SwitcherComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    SwiperCarouselComponent,
    BreadcrumbComponent,
    GalleryImg1Component,
    FullScreenComponent,
    LandbootComponent,
    ReplaceCharacterDashboard,
    GalleryImg2Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    DirectivesModule,
    OverlayModule,
    SwiperModule,
    InfoModule
  ],
  providers: [ReplaceCharacterDashboard],
  exports:[
    SwiperCarouselComponent,
    GalleryImg1Component,
    GalleryImg2Component
  ]
})
export class LayoutModule { }

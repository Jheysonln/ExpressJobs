import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/core/theme/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { LayoutModule } from 'src/app/presentation/layout/layout.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    SwiperModule,
    LayoutModule
  ],
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchServiceRoutingModule } from './search-service-routing.module';
import { OrdersComponent } from './components/orders/orders.component';
import { SearchComponent } from './components/search/search.component';
import { SearchServiceComponent } from './search-service.component';
import { MaterialModule } from 'src/app/core/theme/material/material.module';
import { SwiperModule } from 'swiper/angular';
import { LayoutModule } from 'src/app/presentation/layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserInfoComponent } from './user-info/user-info.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ImagePreviewDirective } from 'src/app/core/directives/image-preview.directive';
import { DirectivesModule } from 'src/app/core/directives/directives.module';
import { ViewProjectComponent } from './add-service/view-project/view-project.component';

@NgModule({
  declarations: [
    UserInfoComponent,
    OrdersComponent,
    SearchComponent,
    SearchServiceComponent,
    AddServiceComponent,
    ViewProjectComponent
  ],
  imports: [
    CommonModule,
    SearchServiceRoutingModule,
    MaterialModule,
    SwiperModule,
    LayoutModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    NgxDropzoneModule,
    DirectivesModule
  ]
})
export class SearchServiceModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { RankingComponent } from './ranking.component';
import { LayoutModule } from 'src/app/presentation/layout/layout.module';
import { SearchRankingComponent } from './components/search-ranking/search-ranking.component';
import { ListRankingComponent } from './components/list-ranking/list-ranking.component';
import { CommentsRankingComponent } from './components/comments-ranking/comments-ranking.component';
import { MaterialModule } from 'src/app/core/theme/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TopRankingComponent } from './components/top-ranking/top-ranking.component';
import { ChartRankingComponent } from './components/chart-ranking/chart-ranking.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    RankingComponent,
    SearchRankingComponent,
    ListRankingComponent,
    CommentsRankingComponent,
    TopRankingComponent,
    ChartRankingComponent,
  ],
  imports: [
    CommonModule,
    RankingRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    LayoutModule,
    NgApexchartsModule
  ]
})
export class RankingModule { }

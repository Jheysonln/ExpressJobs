import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartRankingComponent } from './chart-ranking.component';

describe('ChartRankingComponent', () => {
  let component: ChartRankingComponent;
  let fixture: ComponentFixture<ChartRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartRankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

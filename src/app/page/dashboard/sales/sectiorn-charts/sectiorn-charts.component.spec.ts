import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectiornChartsComponent } from './sectiorn-charts.component';

describe('SectiornChartsComponent', () => {
  let component: SectiornChartsComponent;
  let fixture: ComponentFixture<SectiornChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectiornChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectiornChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

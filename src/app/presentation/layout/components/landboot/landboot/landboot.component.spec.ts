import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandbootComponent } from './landboot.component';

describe('LandbootComponent', () => {
  let component: LandbootComponent;
  let fixture: ComponentFixture<LandbootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandbootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandbootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

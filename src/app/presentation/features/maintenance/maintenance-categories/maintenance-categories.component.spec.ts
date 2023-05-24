import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceCategoriesComponent } from './maintenance-categories.component';

describe('MaintenanceCategoriesComponent', () => {
  let component: MaintenanceCategoriesComponent;
  let fixture: ComponentFixture<MaintenanceCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

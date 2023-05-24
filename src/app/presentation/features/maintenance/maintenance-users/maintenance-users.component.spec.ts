import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceUsersComponent } from './maintenance-users.component';

describe('MaintenanceUsersComponent', () => {
  let component: MaintenanceUsersComponent;
  let fixture: ComponentFixture<MaintenanceUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

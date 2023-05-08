import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesProvidedComponent } from './services-provided.component';

describe('ServicesProvidedComponent', () => {
  let component: ServicesProvidedComponent;
  let fixture: ComponentFixture<ServicesProvidedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesProvidedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesProvidedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

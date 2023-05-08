import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineIconsComponent } from './line-icons.component';

describe('LineIconsComponent', () => {
  let component: LineIconsComponent;
  let fixture: ComponentFixture<LineIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

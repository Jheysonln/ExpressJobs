import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaObjectsComponent } from './media-objects.component';

describe('MediaObjectsComponent', () => {
  let component: MediaObjectsComponent;
  let fixture: ComponentFixture<MediaObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaObjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

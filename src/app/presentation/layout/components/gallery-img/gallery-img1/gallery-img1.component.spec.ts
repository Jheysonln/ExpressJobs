import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryImg1Component } from './gallery-img1.component';

describe('GalleryImg1Component', () => {
  let component: GalleryImg1Component;
  let fixture: ComponentFixture<GalleryImg1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryImg1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryImg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

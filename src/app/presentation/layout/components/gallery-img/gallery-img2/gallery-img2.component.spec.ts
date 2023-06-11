import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryImg2Component } from './gallery-img2.component';

describe('GalleryImg2Component', () => {
  let component: GalleryImg2Component;
  let fixture: ComponentFixture<GalleryImg2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryImg2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryImg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

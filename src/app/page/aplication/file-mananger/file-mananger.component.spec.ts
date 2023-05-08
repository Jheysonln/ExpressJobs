import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileManangerComponent } from './file-mananger.component';

describe('FileManangerComponent', () => {
  let component: FileManangerComponent;
  let fixture: ComponentFixture<FileManangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileManangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileManangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

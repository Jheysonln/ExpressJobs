import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarsChipsComponent } from './avatars-chips.component';

describe('AvatarsChipsComponent', () => {
  let component: AvatarsChipsComponent;
  let fixture: ComponentFixture<AvatarsChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarsChipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarsChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

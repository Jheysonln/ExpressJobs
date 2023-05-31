import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsRankingComponent } from './comments-ranking.component';

describe('CommentsRankingComponent', () => {
  let component: CommentsRankingComponent;
  let fixture: ComponentFixture<CommentsRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsRankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

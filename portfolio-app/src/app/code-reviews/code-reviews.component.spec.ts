import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeReviewsComponent } from './code-reviews.component';

describe('CodeReviewsComponent', () => {
  let component: CodeReviewsComponent;
  let fixture: ComponentFixture<CodeReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssQuizComponent } from './css-quiz.component';

describe('CssQuizComponent', () => {
  let component: CssQuizComponent;
  let fixture: ComponentFixture<CssQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CssQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CssQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

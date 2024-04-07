import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigmaQuizComponent } from './figma-quiz.component';

describe('FigmaQuizComponent', () => {
  let component: FigmaQuizComponent;
  let fixture: ComponentFixture<FigmaQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FigmaQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FigmaQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

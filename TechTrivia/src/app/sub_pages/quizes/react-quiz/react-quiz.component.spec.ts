import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactQuizComponent } from './react-quiz.component';

describe('ReactQuizComponent', () => {
  let component: ReactQuizComponent;
  let fixture: ComponentFixture<ReactQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

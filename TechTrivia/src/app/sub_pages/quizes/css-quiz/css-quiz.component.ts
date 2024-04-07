import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { QuizServiceService } from '../../quiz-service.service';

@Component({
  selector: 'app-css-quiz',
  templateUrl: './css-quiz.component.html',
  styleUrl: './css-quiz.component.scss'
})
export class CssQuizComponent implements OnInit {
  questions: any[] = [];
  submitted: boolean = false;
  score: number = 0;
  selectedAnswers: any = {};


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('assets/quiz-data/css-quiz.json').subscribe(data => {
      this.questions = data.questions;
    });
  }
  onOptionSelect(question: any, option: string) {
    this.selectedAnswers[question.question] = option;
  }

  submitQuiz() {
    // Check if all questions are answered
    const unansweredQuestions = this.questions.filter(question =>
      !this.selectedAnswers[question.question]
    );

    if (unansweredQuestions.length > 0) {
      alert("You left questions unanswered. Please answer all questions before submitting.");
      return;
    }

    // Calculate score and submit quiz
    this.submitted = true;
    this.score = 0;
    this.questions.forEach(question => {
      if (this.selectedAnswers[question.question] === question.correctAnswer) {
        this.score++;
      }
    });

  }
}

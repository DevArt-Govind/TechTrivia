import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-javascript-quiz',
  templateUrl: './javascript-quiz.component.html',
  styleUrl: './javascript-quiz.component.scss'
})
export class JavascriptQuizComponent {
  questions: any[] = [];
  submitted: boolean = false;
  score: number = 0;
  selectedAnswers: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('assets/quiz-data/javascript-quiz.json').subscribe(data => {
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

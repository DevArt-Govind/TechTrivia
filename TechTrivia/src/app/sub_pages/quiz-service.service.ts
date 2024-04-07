import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
  questions: any[] = [];
  submitted: boolean = false;
  score: number = 0;
  selectedAnswers: any = {};

  constructor(private http: HttpClient) { }

  // getQuizData(language: string): Observable<any> {
  //   return this.http.get<any>(`assets/quiz-data/${language}-quiz.json`);

  // }


}

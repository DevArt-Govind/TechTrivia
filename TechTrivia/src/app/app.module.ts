import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartScreenComponent } from './sub_pages/start-screen/start-screen.component';
import { QuizScreenComponent } from './sub_pages/quiz-screen/quiz-screen.component';
import { SuccessScreenComponent } from './sub_pages/success-screen/success-screen.component';
import { AngularQuizComponent } from './sub_pages/quizes/angular-quiz/angular-quiz.component';
import { HtmlQuizComponent } from './sub_pages/quizes/html-quiz/html-quiz.component';
import { LoaderComponent } from './sub_pages/loader/loader.component';
import { CssQuizComponent } from './sub_pages/quizes/css-quiz/css-quiz.component';
import { JavascriptQuizComponent } from './sub_pages/quizes/javascript-quiz/javascript-quiz.component';
import { FigmaQuizComponent } from './sub_pages/quizes/figma-quiz/figma-quiz.component';
import { ReactQuizComponent } from './sub_pages/quizes/react-quiz/react-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    QuizScreenComponent,
    SuccessScreenComponent,
    AngularQuizComponent,
    HtmlQuizComponent,
    LoaderComponent,
    CssQuizComponent,
    JavascriptQuizComponent,
    FigmaQuizComponent,
    ReactQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

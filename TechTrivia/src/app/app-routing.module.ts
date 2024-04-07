import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartScreenComponent } from './sub_pages/start-screen/start-screen.component';
import { QuizScreenComponent } from './sub_pages/quiz-screen/quiz-screen.component';
import { SuccessScreenComponent } from './sub_pages/success-screen/success-screen.component';
import { AngularQuizComponent } from './sub_pages/quizes/angular-quiz/angular-quiz.component';
import { LoaderComponent } from './sub_pages/loader/loader.component';
import { HtmlQuizComponent } from './sub_pages/quizes/html-quiz/html-quiz.component';
import { CssQuizComponent } from './sub_pages/quizes/css-quiz/css-quiz.component';
import { JavascriptQuizComponent } from './sub_pages/quizes/javascript-quiz/javascript-quiz.component';
import { FigmaQuizComponent } from './sub_pages/quizes/figma-quiz/figma-quiz.component';
import { ReactQuizComponent } from './sub_pages/quizes/react-quiz/react-quiz.component';

const routes: Routes = [
  {
    path: '',
    component: StartScreenComponent
  },
  {
    path: 'sub-page/quiz-screen',
    component: QuizScreenComponent
  },
  {
    path: 'sub-page/success-screen',
    component: SuccessScreenComponent
  },
  {
    path: 'sub-page/quizes/angular-quiz',
    component: AngularQuizComponent
  },
  {
    path: 'sub-page/quizes/html-quiz',
    component: HtmlQuizComponent
  },
  {
    path: 'sub-page/quizes/css-quiz',
    component: CssQuizComponent
  },
  {
    path: 'sub-page/quizes/javascript-quiz',
    component: JavascriptQuizComponent
  },
  {
    path: 'sub-page/quizes/react-quiz',
    component: ReactQuizComponent
  },
  {
    path: 'sub-page/quizes/figma-quiz',
    component: FigmaQuizComponent
  },
  {
    path: 'sub-page/loader',
    component: LoaderComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

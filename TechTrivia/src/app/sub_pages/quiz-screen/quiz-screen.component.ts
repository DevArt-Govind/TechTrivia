import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd, NavigationStart, NavigationCancel, NavigationError } from '@angular/router';
import { LoaderService } from '../loader.service';


@Component({
  selector: 'app-quiz-screen',
  templateUrl: './quiz-screen.component.html',
  styleUrl: './quiz-screen.component.scss'
})
export class QuizScreenComponent implements OnInit {

  constructor(private router: Router, public loaderService: LoaderService) { }

  ngOnInit(): void {

    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationStart) {
    //     this.loaderService.showLoader();
    //   } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
    //     this.loaderService.hideLoader();
    //   }
    // });

    const checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function (this: HTMLInputElement) {
        checkboxes.forEach(cb => {
          if (cb !== this) {
            cb.checked = false;
          }
        });
      });
    });
  }
}

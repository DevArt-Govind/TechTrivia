import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd, NavigationStart, NavigationCancel, NavigationError } from '@angular/router';
import { LoaderService } from './sub_pages/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TechTrivia';

}
